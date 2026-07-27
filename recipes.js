// HLC Club recipe atoms. Existing dessert set from the Dessert Reset eBook (owned);
// savory/day-part recipes added via the multi-agent authoring engine (human-reviewed).
// Per-recipe i18n{} = translated display fields (title/desc/why/tags/ingredients/steps/swaps).
window.HLC_RECIPES = [
  {
    "id": "brigadeiro",
    "title": "Dairy-Free Brigadeiro Truffles",
    "desc": "Brazil's favorite fudge bite, made clean — roll them, chill them, share them.",
    "image": "/assets/recipes/brigadeiro.png",
    "level": "free",
    "makes": "16",
    "goals": [
      "Sweet cravings",
      "Anti-inflammatory"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "Refined-sugar-free",
      "Portion-friendly"
    ],
    "macros": {
      "kcal": 33,
      "protein": "0g",
      "carbs": "4g",
      "fat": "2g",
      "fiber": "1g"
    },
    "why": "real cacao delivers polyphenols and a gentle mood lift, and the bite-size portion keeps the pleasure without the sugar crash.",
    "swaps": [
      "almond → coconut milk",
      "roll in shredded coconut instead of nibs."
    ],
    "ingredients": [
      "1 cup unsweetened almond milk",
      "3 tbsp maple syrup",
      "4 tbsp cacao powder",
      "1 tbsp coconut oil",
      "30 g dark chocolate (70%+)",
      "Cacao nibs, to roll"
    ],
    "daypart": "dessert",
    "i18n": {
      "pt": {
        "title": "Trufas de Brigadeiro Sem Leite",
        "desc": "O docinho mais amado do Brasil, feito de um jeito limpo — enrole, gele e compartilhe.",
        "why": "o cacau de verdade traz polifenóis e uma leve sensação de bem-estar, e a porção em bocado mantém o prazer sem o pico de açúcar.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Sem açúcar refinado",
          "Porção controlada"
        ],
        "ingredients": [
          "1 xícara de leite de amêndoas sem açúcar",
          "3 colheres de sopa de xarope de bordo",
          "4 colheres de sopa de cacau em pó",
          "1 colher de sopa de óleo de coco",
          "30 g de chocolate amargo (70%+)",
          "Nibs de cacau, para enrolar"
        ],
        "steps": [],
        "swaps": [
          "leite de amêndoas → leite de coco",
          "enrole em coco ralado em vez dos nibs."
        ]
      },
      "es": {
        "title": "Trufas de Brigadeiro sin Lácteos",
        "desc": "El dulce favorito de Brasil, hecho con ingredientes limpios: enróllalos, enfríalos y compártelos.",
        "why": "el cacao real aporta polifenoles y un suave impulso al ánimo, y la porción pequeña te da el placer sin el bajón de azúcar.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Sin azúcar refinada",
          "Porción controlada"
        ],
        "ingredients": [
          "1 taza de leche de almendras sin endulzar",
          "3 cucharadas de jarabe de arce",
          "4 cucharadas de cacao en polvo",
          "1 cucharada de aceite de coco",
          "30 g de chocolate negro (70%+)",
          "Nibs de cacao, para rebozar"
        ],
        "steps": [],
        "swaps": [
          "leche de almendras → leche de coco",
          "rebózalas en coco rallado en lugar de nibs."
        ]
      },
      "it": {
        "title": "Tartufini di Brigadeiro Senza Latte",
        "desc": "Il dolcetto fondente preferito del Brasile, in versione pulita — arrotolali, falli raffreddare, condividili.",
        "why": "il cacao vero apporta polifenoli e una leggera carica di buonumore, mentre la porzione a morso mantiene il piacere senza il crollo glicemico.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Senza zuccheri raffinati",
          "Porzione controllata"
        ],
        "ingredients": [
          "1 tazza di latte di mandorla non zuccherato",
          "3 cucchiai di sciroppo d'acero",
          "4 cucchiai di cacao amaro in polvere",
          "1 cucchiaio di olio di cocco",
          "30 g di cioccolato fondente (70%+)",
          "Granella di cacao, per rotolare"
        ],
        "steps": [],
        "swaps": [
          "mandorla → latte di cocco",
          "rotola nel cocco rapé invece che nella granella."
        ]
      },
      "zh": {
        "title": "无乳巴西布里加德罗松露球",
        "desc": "巴西人最爱的巧克力软糖小点，做法更干净——搓成球、冷藏、与人分享。",
        "why": "真正的可可能带来多酚和温和的愉悦感，一口大小的份量让你尽享美味，又不会有血糖骤降的负担。",
        "tags": [
          "无麸质",
          "无乳制品",
          "无精制糖",
          "份量友好"
        ],
        "ingredients": [
          "1杯无糖杏仁奶",
          "3汤匙枫糖浆",
          "4汤匙可可粉",
          "1汤匙椰子油",
          "30克黑巧克力（可可含量70%以上）",
          "可可碎，用于裹球"
        ],
        "steps": [],
        "swaps": [
          "杏仁奶 → 椰奶",
          "用椰蓉代替可可碎裹球。"
        ]
      },
      "hi": {
        "title": "डेयरी-फ्री ब्रिगेडेरो ट्रफल्स",
        "desc": "ब्राज़ील की पसंदीदा फज बाइट, अब सेहतमंद अंदाज़ में — बेलिए, ठंडा कीजिए, बांटिए।",
        "why": "असली काकाओ पॉलीफेनॉल्स देता है और मूड को हल्के से बेहतर करता है, और छोटा साइज़ स्वाद का मज़ा देता है बिना शुगर क्रैश के।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "रिफाइंड-शुगर-फ्री",
          "पोर्शन-फ्रेंडली"
        ],
        "ingredients": [
          "1 कप बिना मीठा बादाम दूध",
          "3 बड़े चम्मच मेपल सिरप",
          "4 बड़े चम्मच काकाओ पाउडर",
          "1 बड़ा चम्मच नारियल तेल",
          "30 ग्राम डार्क चॉकलेट (70%+)",
          "बेलने के लिए काकाओ निब्स"
        ],
        "steps": [],
        "swaps": [
          "बादाम दूध → नारियल दूध",
          "निब्स की जगह कसा हुआ नारियल में बेलें।"
        ]
      },
      "he": {
        "title": "טראפלס בריגדיירו ללא חלב",
        "desc": "החטיף השוקולדי האהוב על ברזיל, בגרסה נקייה — מגלגלים, מקררים, חולקים.",
        "why": "קקאו אמיתי מספק פוליפנולים והרמה עדינה במצב הרוח, והמנה בגודל ביס שומרת על ההנאה בלי קריסת הסוכר.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "ללא סוכר מזוקק",
          "ידידותי למנות"
        ],
        "ingredients": [
          "1 כוס חלב שקדים ללא סוכר",
          "3 כפות סירופ מייפל",
          "4 כפות אבקת קקאו",
          "1 כף שמן קוקוס",
          "30 גרם שוקולד מריר (70%+)",
          "פתיתי קקאו, לגלגול"
        ],
        "steps": [],
        "swaps": [
          "חלב שקדים → חלב קוקוס",
          "לגלגל בקוקוס מגורד במקום פתיתי קקאו."
        ]
      }
    }
  },
  {
    "id": "fudge-brownie",
    "title": "Dark Chocolate Raspberry Fudge Brownies",
    "desc": "Dense, gooey and grain-free, shot through with bursts of fresh raspberry.",
    "image": "/assets/recipes/fudge-brownie.png",
    "level": "free",
    "makes": "12",
    "goals": [
      "Sweet cravings",
      "Gut health",
      "Anti-inflammatory",
      "Protein"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "Refined-sugar-free",
      "Grain-free"
    ],
    "macros": {
      "kcal": 166,
      "protein": "3g",
      "carbs": "14g",
      "fat": "11g",
      "fiber": "3g"
    },
    "why": "eggs and dark chocolate add protein and antioxidants, raspberries fold in polyphenols and fiber, and going flourless keeps it grain-free and lower in fast carbs than a classic brownie.",
    "swaps": [
      "eggs → flax eggs (vegan)",
      "maple → date syrup."
    ],
    "ingredients": [
      "150 g dark chocolate (70%+)",
      "¼ cup coconut oil",
      "¼ cup cacao powder",
      "3 eggs",
      "⅓ cup maple syrup",
      "1 tsp vanilla · ¼ tsp salt",
      "1 cup fresh raspberries"
    ],
    "daypart": "dessert",
    "i18n": {
      "pt": {
        "title": "Brownies Fudge de Chocolate Amargo com Framboesa",
        "desc": "Denso, molhadinho e sem grãos, com explosões de framboesa fresca em cada mordida.",
        "why": "ovos e chocolate amargo somam proteína e antioxidantes, as framboesas trazem polifenóis e fibras, e a receita sem farinha mantém o brownie sem grãos e com menos carboidratos de absorção rápida do que a versão clássica.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Sem açúcar refinado",
          "Sem grãos"
        ],
        "ingredients": [
          "150 g de chocolate amargo (70%+)",
          "¼ xícara de óleo de coco",
          "¼ xícara de cacau em pó",
          "3 ovos",
          "⅓ xícara de xarope de bordo",
          "1 colher de chá de baunilha · ¼ colher de chá de sal",
          "1 xícara de framboesas frescas"
        ],
        "steps": [],
        "swaps": [
          "ovos → ovos de linhaça (vegano)",
          "xarope de bordo → xarope de tâmara."
        ]
      },
      "es": {
        "title": "Brownies Fudge de Chocolate Negro y Frambuesa",
        "desc": "Densos, húmedos y sin granos, con estallidos de frambuesa fresca en cada bocado.",
        "why": "los huevos y el chocolate negro aportan proteína y antioxidantes, las frambuesas suman polifenoles y fibra, y al prescindir de harina se mantienen sin granos y con menos carbohidratos rápidos que un brownie clásico.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Sin azúcar refinada",
          "Sin granos"
        ],
        "ingredients": [
          "150 g de chocolate negro (70%+)",
          "¼ taza de aceite de coco",
          "¼ taza de cacao en polvo",
          "3 huevos",
          "⅓ taza de jarabe de arce",
          "1 cucharadita de vainilla · ¼ cucharadita de sal",
          "1 taza de frambuesas frescas"
        ],
        "steps": [],
        "swaps": [
          "huevos → huevos de lino (vegano)",
          "jarabe de arce → jarabe de dátil."
        ]
      },
      "it": {
        "title": "Brownies Fondenti al Cioccolato Fondente e Lamponi",
        "desc": "Densi, filanti e senza cereali, attraversati da esplosioni di lampone fresco.",
        "why": "le uova e il cioccolato fondente aggiungono proteine e antiossidanti, i lamponi apportano polifenoli e fibre, e l'assenza di farina li rende senza cereali e più poveri di zuccheri veloci rispetto a un brownie classico.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Senza zuccheri raffinati",
          "Senza cereali"
        ],
        "ingredients": [
          "150 g di cioccolato fondente (70%+)",
          "¼ di tazza di olio di cocco",
          "¼ di tazza di cacao amaro in polvere",
          "3 uova",
          "⅓ di tazza di sciroppo d'acero",
          "1 cucchiaino di vaniglia · ¼ di cucchiaino di sale",
          "1 tazza di lamponi freschi"
        ],
        "steps": [],
        "swaps": [
          "uova → uova di lino (vegano)",
          "acero → sciroppo di datteri."
        ]
      },
      "zh": {
        "title": "黑巧克力覆盆子软心布朗尼",
        "desc": "浓郁绵密、无谷物，点缀着新鲜覆盆子的爆汁惊喜。",
        "why": "鸡蛋和黑巧克力提供蛋白质与抗氧化物，覆盆子带来多酚和膳食纤维，不加面粉让它无谷物，比传统布朗尼含更少的快速碳水。",
        "tags": [
          "无麸质",
          "无乳制品",
          "无精制糖",
          "无谷物"
        ],
        "ingredients": [
          "150克黑巧克力（可可含量70%以上）",
          "¼杯椰子油",
          "¼杯可可粉",
          "3个鸡蛋",
          "⅓杯枫糖浆",
          "1茶匙香草精 · ¼茶匙盐",
          "1杯新鲜覆盆子"
        ],
        "steps": [],
        "swaps": [
          "鸡蛋 → 亚麻籽蛋（纯素）",
          "枫糖浆 → 椰枣糖浆。"
        ]
      },
      "hi": {
        "title": "डार्क चॉकलेट रास्पबेरी फज ब्राउनीज़",
        "desc": "गाढ़ी, चिपचिपी और अनाज-रहित, हर टुकड़े में ताज़ा रास्पबेरी का फटता हुआ स्वाद।",
        "why": "अंडे और डार्क चॉकलेट प्रोटीन व एंटीऑक्सीडेंट्स जोड़ते हैं, रास्पबेरी पॉलीफेनॉल्स और फाइबर लाती है, और बिना मैदे के बनने से यह अनाज-रहित रहती है और सामान्य ब्राउनी से तेज़ कार्ब्स में कम।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "रिफाइंड-शुगर-फ्री",
          "अनाज-रहित"
        ],
        "ingredients": [
          "150 ग्राम डार्क चॉकलेट (70%+)",
          "¼ कप नारियल तेल",
          "¼ कप काकाओ पाउडर",
          "3 अंडे",
          "⅓ कप मेपल सिरप",
          "1 छोटा चम्मच वैनिला · ¼ छोटा चम्मच नमक",
          "1 कप ताज़ा रास्पबेरी"
        ],
        "steps": [],
        "swaps": [
          "अंडे → फ्लैक्स एग्स (वीगन)",
          "मेपल सिरप → खजूर सिरप।"
        ]
      },
      "he": {
        "title": "בראוניז שוקולד מריר ופטל, עשירים ולחים",
        "desc": "סמיכים, דביקים וללא גלוטן דגנים, עם התפרצויות של פטל טרי.",
        "why": "ביצים ושוקולד מריר מוסיפים חלבון ונוגדי חמצון, הפטל תורם פוליפנולים וסיבים, וההכנה ללא קמח שומרת על התפריט נקי מדגנים ודל יותר בפחמימות מהירות מבראוני קלאסי.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "ללא סוכר מזוקק",
          "ללא דגנים"
        ],
        "ingredients": [
          "150 גרם שוקולד מריר (70%+)",
          "¼ כוס שמן קוקוס",
          "¼ כוס אבקת קקאו",
          "3 ביצים",
          "⅓ כוס סירופ מייפל",
          "1 כפית וניל · ¼ כפית מלח",
          "1 כוס פטל טרי"
        ],
        "steps": [],
        "swaps": [
          "ביצים → ביצי פשתן (טבעוני)",
          "מייפל → סירופ תמרים."
        ]
      }
    }
  },
  {
    "id": "berry-cheesecake",
    "title": "Red Berry Cashew Cheesecake",
    "desc": "Creamy, tangy and completely dairy-free — set in the fridge, no oven required.",
    "image": "/assets/recipes/berry-cheesecake.png",
    "level": "club",
    "makes": "12",
    "goals": [
      "Sweet cravings",
      "Gut health",
      "Anti-inflammatory",
      "Protein"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "Refined-sugar-free",
      "No-bake"
    ],
    "macros": {
      "kcal": 238,
      "protein": "5g",
      "carbs": "25g",
      "fat": "15g",
      "fiber": "2g"
    },
    "why": "cashews bring plant protein and healthy fats, dates soften the sweetness with fiber, and berries add polyphenols — a rich slice that loves you back.",
    "swaps": [
      "cashews → sunflower seeds (nut-free)",
      "coconut cream → silken tofu."
    ],
    "ingredients": [
      "1½ cups cashews, soaked",
      "½ cup coconut cream",
      "⅓ cup maple syrup",
      "8 Medjool dates (crust)",
      "½ cup almond flour (crust)",
      "2 tbsp coconut oil · berries to top"
    ],
    "daypart": "dessert",
    "i18n": {
      "pt": {
        "title": "Cheesecake de Castanha de Caju com Frutas Vermelhas",
        "desc": "Cremoso, levemente ácido e totalmente sem lactose — firma na geladeira, sem precisar de forno.",
        "why": "a castanha de caju traz proteína vegetal e gorduras boas, as tâmaras suavizam o doce com fibras, e as frutas vermelhas somam polifenóis — uma fatia generosa que cuida de você.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Sem açúcar refinado",
          "Sem forno"
        ],
        "ingredients": [
          "1½ xícara de castanha de caju, hidratada",
          "½ xícara de creme de coco",
          "⅓ xícara de xarope de bordo",
          "8 tâmaras Medjool (para a base)",
          "½ xícara de farinha de amêndoas (para a base)",
          "2 colheres de sopa de óleo de coco · frutas vermelhas para finalizar"
        ],
        "steps": [],
        "swaps": [
          "castanha de caju → sementes de girassol (sem oleaginosas)",
          "creme de coco → tofu macio."
        ]
      },
      "es": {
        "title": "Cheesecake de Anacardos con Frutos Rojos",
        "desc": "Cremoso, ligeramente ácido y completamente sin lácteos: se cuaja en el refrigerador, sin horno.",
        "why": "los anacardos aportan proteína vegetal y grasas saludables, los dátiles suavizan el dulzor con fibra, y los frutos rojos suman polifenoles: una porción rica que te cuida de vuelta.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Sin azúcar refinada",
          "Sin horno"
        ],
        "ingredients": [
          "1½ tazas de anacardos, remojados",
          "½ taza de crema de coco",
          "⅓ taza de jarabe de arce",
          "8 dátiles Medjool (para la base)",
          "½ taza de harina de almendras (para la base)",
          "2 cucharadas de aceite de coco · frutos rojos para decorar"
        ],
        "steps": [],
        "swaps": [
          "anacardos → semillas de girasol (sin frutos secos)",
          "crema de coco → tofu sedoso."
        ]
      },
      "it": {
        "title": "Cheesecake di Anacardi ai Frutti di Bosco",
        "desc": "Cremosa, leggermente acidula e completamente senza latticini — si rassoda in frigo, niente forno.",
        "why": "gli anacardi apportano proteine vegetali e grassi buoni, i datteri addolciscono con la loro fibra, e i frutti di bosco aggiungono polifenoli — una fetta ricca che ti ripaga.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Senza zuccheri raffinati",
          "Senza cottura"
        ],
        "ingredients": [
          "1½ tazze di anacardi, ammollati",
          "½ tazza di crema di cocco",
          "⅓ di tazza di sciroppo d'acero",
          "8 datteri Medjool (per la base)",
          "½ tazza di farina di mandorle (per la base)",
          "2 cucchiai di olio di cocco · frutti di bosco per guarnire"
        ],
        "steps": [],
        "swaps": [
          "anacardi → semi di girasole (senza frutta a guscio)",
          "crema di cocco → tofu setoso."
        ]
      },
      "zh": {
        "title": "红莓腰果芝士蛋糕",
        "desc": "绵密微酸、完全不含乳制品——放进冰箱定型即可，无需烤箱。",
        "why": "腰果带来植物蛋白与健康脂肪，椰枣以膳食纤维柔化甜度，莓果则加入多酚——浓郁的一片，也在滋养你。",
        "tags": [
          "无麸质",
          "无乳制品",
          "无精制糖",
          "免烤"
        ],
        "ingredients": [
          "1½杯腰果，提前浸泡",
          "½杯椰浆",
          "⅓杯枫糖浆",
          "8颗麦地那椰枣（做塔底）",
          "½杯杏仁粉（做塔底）",
          "2汤匙椰子油 · 莓果适量装饰"
        ],
        "steps": [],
        "swaps": [
          "腰果 → 葵花籽（无坚果）",
          "椰浆 → 嫩豆腐。"
        ]
      },
      "hi": {
        "title": "रेड बेरी काजू चीज़केक",
        "desc": "मलाईदार, तीखी और पूरी तरह डेयरी-फ्री — फ्रिज में जमती है, ओवन की ज़रूरत नहीं।",
        "why": "काजू पौधे-आधारित प्रोटीन और अच्छे फैट्स लाते हैं, खजूर फाइबर के साथ मिठास को नरम करते हैं, और बेरीज़ पॉलीफेनॉल्स जोड़ती हैं — एक ऐसा भरपूर टुकड़ा जो आपके शरीर का भी ख्याल रखता है।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "रिफाइंड-शुगर-फ्री",
          "नो-बेक"
        ],
        "ingredients": [
          "1½ कप काजू, भिगोए हुए",
          "½ कप नारियल क्रीम",
          "⅓ कप मेपल सिरप",
          "8 मेडजूल खजूर (क्रस्ट के लिए)",
          "½ कप बादाम का आटा (क्रस्ट के लिए)",
          "2 बड़े चम्मच नारियल तेल · ऊपर सजाने के लिए बेरीज़"
        ],
        "steps": [],
        "swaps": [
          "काजू → सूरजमुखी के बीज (नट-फ्री)",
          "नारियल क्रीम → सिल्कन टोफू।"
        ]
      },
      "he": {
        "title": "עוגת גבינה קשיו עם פירות יער אדומים",
        "desc": "קרמית, חמצמצה וללא חלב לגמרי — מתייצבת במקרר, בלי תנור.",
        "why": "קשיו מביא חלבון צמחי ושומנים בריאים, תמרים מרככים את המתיקות עם סיבים, ופירות היער מוסיפים פוליפנולים — פרוסה עשירה שאוהבת אותך בחזרה.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "ללא סוכר מזוקק",
          "ללא אפייה"
        ],
        "ingredients": [
          "1½ כוסות קשיו, שרויים במים",
          "½ כוס שמנת קוקוס",
          "⅓ כוס סירופ מייפל",
          "8 תמרי מג'הול (לבסיס)",
          "½ כוס קמח שקדים (לבסיס)",
          "2 כפות שמן קוקוס · פירות יער לקישוט"
        ],
        "steps": [],
        "swaps": [
          "קשיו → גרעיני חמנייה (ללא אגוזים)",
          "שמנת קוקוס → טופו משי."
        ]
      }
    }
  },
  {
    "id": "date-caramel",
    "title": "Salted Date Caramel",
    "desc": "A naturally sweet caramel made only from dates — for drizzling, dipping, or spooning.",
    "image": "/assets/recipes/date-caramel.png",
    "level": "free",
    "makes": "~1 jar",
    "goals": [
      "Sweet cravings",
      "Gut health"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "Refined-sugar-free",
      "No-cook"
    ],
    "macros": {
      "kcal": 75,
      "protein": "0g",
      "carbs": "14g",
      "fat": "2g",
      "fiber": "1g"
    },
    "why": "dates bring caramel sweetness with fiber and minerals — a refined-sugar-free stand-in for caramel that won't spike you.",
    "swaps": [
      "coconut cream → cashew butter",
      "skip the salt for a sweet caramel."
    ],
    "ingredients": [
      "1½ cups Medjool dates, pitted",
      "3 tbsp coconut cream",
      "1 tbsp coconut oil",
      "1 tsp vanilla extract",
      "½ tsp sea salt",
      "Warm water, as needed"
    ],
    "daypart": "dessert",
    "i18n": {
      "pt": {
        "title": "Caramelo Salgado de Tâmara",
        "desc": "Um caramelo naturalmente doce feito só com tâmaras — para regar, mergulhar ou comer de colher.",
        "why": "as tâmaras trazem o doce de caramelo junto com fibras e minerais — um substituto sem açúcar refinado que não causa picos de glicose.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Sem açúcar refinado",
          "Sem cozimento"
        ],
        "ingredients": [
          "1½ xícara de tâmaras Medjool, sem caroço",
          "3 colheres de sopa de creme de coco",
          "1 colher de sopa de óleo de coco",
          "1 colher de chá de extrato de baunilha",
          "½ colher de chá de sal marinho",
          "Água morna, conforme necessário"
        ],
        "steps": [],
        "swaps": [
          "creme de coco → pasta de castanha de caju",
          "omita o sal para um caramelo mais doce."
        ]
      },
      "es": {
        "title": "Caramelo Salado de Dátiles",
        "desc": "Un caramelo naturalmente dulce hecho solo con dátiles: para rociar, mojar o comer a cucharadas.",
        "why": "los dátiles aportan el dulzor de caramelo junto con fibra y minerales: un sustituto sin azúcar refinada que no te dispara la glucosa.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Sin azúcar refinada",
          "Sin cocción"
        ],
        "ingredients": [
          "1½ tazas de dátiles Medjool, sin hueso",
          "3 cucharadas de crema de coco",
          "1 cucharada de aceite de coco",
          "1 cucharadita de extracto de vainilla",
          "½ cucharadita de sal marina",
          "Agua tibia, la necesaria"
        ],
        "steps": [],
        "swaps": [
          "crema de coco → mantequilla de anacardo",
          "omite la sal para un caramelo dulce."
        ]
      },
      "it": {
        "title": "Caramello di Datteri Salato",
        "desc": "Un caramello naturalmente dolce fatto solo di datteri — da versare, intingere o gustare a cucchiaiate.",
        "why": "i datteri regalano una dolcezza da caramello ricca di fibre e minerali — un sostituto senza zuccheri raffinati che non fa impennare la glicemia.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Senza zuccheri raffinati",
          "Senza cottura"
        ],
        "ingredients": [
          "1½ tazze di datteri Medjool, denocciolati",
          "3 cucchiai di crema di cocco",
          "1 cucchiaio di olio di cocco",
          "1 cucchiaino di estratto di vaniglia",
          "½ cucchiaino di sale marino",
          "Acqua tiepida, quanto basta"
        ],
        "steps": [],
        "swaps": [
          "crema di cocco → burro di anacardi",
          "ometti il sale per un caramello dolce."
        ]
      },
      "zh": {
        "title": "咸味椰枣焦糖酱",
        "desc": "完全用椰枣制成的天然香甜焦糖酱——淋、蘸、挖一勺都好吃。",
        "why": "椰枣带来焦糖般的甜味，还有膳食纤维与矿物质——是不含精制糖的焦糖替代品，不会让血糖飙升。",
        "tags": [
          "无麸质",
          "无乳制品",
          "无精制糖",
          "免烹煮"
        ],
        "ingredients": [
          "1½杯麦地那椰枣，去核",
          "3汤匙椰浆",
          "1汤匙椰子油",
          "1茶匙香草精",
          "½茶匙海盐",
          "温水，按需添加"
        ],
        "steps": [],
        "swaps": [
          "椰浆 → 腰果酱",
          "不加盐即成纯甜焦糖酱。"
        ]
      },
      "hi": {
        "title": "नमकीन खजूर कैरेमल",
        "desc": "सिर्फ खजूर से बना प्राकृतिक रूप से मीठा कैरेमल — बूंद-बूंद डालने, डुबोने या चम्मच से खाने के लिए।",
        "why": "खजूर फाइबर और मिनरल्स के साथ कैरेमल जैसी मिठास लाते हैं — एक ऐसा रिफाइंड-शुगर-फ्री विकल्प जो शुगर स्पाइक नहीं करता।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "रिफाइंड-शुगर-फ्री",
          "बिना पकाए"
        ],
        "ingredients": [
          "1½ कप मेडजूल खजूर, बीज निकाले हुए",
          "3 बड़े चम्मच नारियल क्रीम",
          "1 बड़ा चम्मच नारियल तेल",
          "1 छोटा चम्मच वैनिला एक्सट्रैक्ट",
          "½ छोटा चम्मच सी सॉल्ट",
          "ज़रूरत अनुसार गुनगुना पानी"
        ],
        "steps": [],
        "swaps": [
          "नारियल क्रीम → काजू बटर",
          "मीठे कैरेमल के लिए नमक छोड़ दें।"
        ]
      },
      "he": {
        "title": "קרמל תמרים מומלח",
        "desc": "קרמל מתוק באופן טבעי, עשוי אך ורק מתמרים — לטפטוף, לטבילה או לכף.",
        "why": "תמרים מביאים מתיקות של קרמל עם סיבים ומינרלים — תחליף לקרמל ללא סוכר מזוקק שלא יגרום לקפיצת סוכר.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "ללא סוכר מזוקק",
          "ללא בישול"
        ],
        "ingredients": [
          "1½ כוסות תמרי מג'הול מגולענים",
          "3 כפות שמנת קוקוס",
          "1 כף שמן קוקוס",
          "1 כפית תמצית וניל",
          "½ כפית מלח ים",
          "מים חמים, לפי הצורך"
        ],
        "steps": [],
        "swaps": [
          "שמנת קוקוס → חמאת קשיו",
          "לוותר על המלח לקרמל מתוק יותר."
        ]
      }
    }
  },
  {
    "id": "coffee-brigadeiro",
    "title": "Coffee Brigadeiro Truffles",
    "desc": "The brigadeiro grows up — a mocha bite with a real coffee kick.",
    "image": "/assets/recipes/coffee-brigadeiro.png",
    "level": "club",
    "makes": "16",
    "goals": [
      "Sweet cravings",
      "Anti-inflammatory"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "Refined-sugar-free",
      "Portion-friendly"
    ],
    "macros": {
      "kcal": 33,
      "protein": "0g",
      "carbs": "4g",
      "fat": "2g",
      "fiber": "1g"
    },
    "why": "cacao and coffee both bring polyphenols and a gentle lift, and the bite-size portion keeps the pleasure without the crash.",
    "swaps": [
      "espresso → decaf or chicory",
      "roll in cacao nibs."
    ],
    "ingredients": [
      "1 cup unsweetened almond milk",
      "3 tbsp maple syrup",
      "4 tbsp cacao powder",
      "1 shot espresso (or 1 tbsp strong coffee)",
      "1 tbsp coconut oil · 30 g dark chocolate",
      "Cocoa powder, to roll"
    ],
    "daypart": "dessert",
    "i18n": {
      "pt": {
        "title": "Trufas de Brigadeiro de Café",
        "desc": "O brigadeiro fica adulto — um bocado mocha com um verdadeiro toque de café.",
        "why": "cacau e café trazem polifenóis e uma leve energia, e a porção em bocado mantém o prazer sem o esgotamento depois.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Sem açúcar refinado",
          "Porção controlada"
        ],
        "ingredients": [
          "1 xícara de leite de amêndoas sem açúcar",
          "3 colheres de sopa de xarope de bordo",
          "4 colheres de sopa de cacau em pó",
          "1 dose de espresso (ou 1 colher de sopa de café forte)",
          "1 colher de sopa de óleo de coco · 30 g de chocolate amargo",
          "Cacau em pó, para enrolar"
        ],
        "steps": [],
        "swaps": [
          "espresso → descafeinado ou chicória",
          "enrole em nibs de cacau."
        ]
      },
      "es": {
        "title": "Trufas de Brigadeiro de Café",
        "desc": "El brigadeiro se pone elegante: un bocado moca con un verdadero toque de café.",
        "why": "el cacao y el café aportan polifenoles y un suave impulso de energía, y la porción pequeña te da el placer sin el bajón.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Sin azúcar refinada",
          "Porción controlada"
        ],
        "ingredients": [
          "1 taza de leche de almendras sin endulzar",
          "3 cucharadas de jarabe de arce",
          "4 cucharadas de cacao en polvo",
          "1 shot de espresso (o 1 cucharada de café fuerte)",
          "1 cucharada de aceite de coco · 30 g de chocolate negro",
          "Cacao en polvo, para rebozar"
        ],
        "steps": [],
        "swaps": [
          "espresso → descafeinado o achicoria",
          "rebózalas en nibs de cacao."
        ]
      },
      "it": {
        "title": "Tartufini di Brigadeiro al Caffè",
        "desc": "Il brigadeiro cresce — un boccone mocha con una vera carica di caffè.",
        "why": "cacao e caffè apportano entrambi polifenoli e una leggera carica energetica, mentre la porzione a morso mantiene il piacere senza il crollo.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Senza zuccheri raffinati",
          "Porzione controllata"
        ],
        "ingredients": [
          "1 tazza di latte di mandorla non zuccherato",
          "3 cucchiai di sciroppo d'acero",
          "4 cucchiai di cacao amaro in polvere",
          "1 shot di espresso (o 1 cucchiaio di caffè forte)",
          "1 cucchiaio di olio di cocco · 30 g di cioccolato fondente",
          "Cacao in polvere, per rotolare"
        ],
        "steps": [],
        "swaps": [
          "espresso → decaffeinato o cicoria",
          "rotola nella granella di cacao."
        ]
      },
      "zh": {
        "title": "咖啡巴西布里加德罗松露球",
        "desc": "布里加德罗的成熟版——摩卡风味，带着真正的咖啡劲道。",
        "why": "可可与咖啡都带来多酚和温和的提神感，一口大小的份量让愉悦感不伴随崩溃感。",
        "tags": [
          "无麸质",
          "无乳制品",
          "无精制糖",
          "份量友好"
        ],
        "ingredients": [
          "1杯无糖杏仁奶",
          "3汤匙枫糖浆",
          "4汤匙可可粉",
          "1份浓缩咖啡（或1汤匙浓咖啡）",
          "1汤匙椰子油 · 30克黑巧克力",
          "可可粉，用于裹球"
        ],
        "steps": [],
        "swaps": [
          "浓缩咖啡 → 低咖啡因咖啡或菊苣根",
          "用可可碎裹球。"
        ]
      },
      "hi": {
        "title": "कॉफी ब्रिगेडेरो ट्रफल्स",
        "desc": "ब्रिगेडेरो अब बड़ा हो गया है — असली कॉफी के झटके वाला मोका बाइट।",
        "why": "काकाओ और कॉफी दोनों पॉलीफेनॉल्स और हल्की ऊर्जा देते हैं, और छोटा साइज़ बिना क्रैश के मज़ा बनाए रखता है।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "रिफाइंड-शुगर-फ्री",
          "पोर्शन-फ्रेंडली"
        ],
        "ingredients": [
          "1 कप बिना मीठा बादाम दूध",
          "3 बड़े चम्मच मेपल सिरप",
          "4 बड़े चम्मच काकाओ पाउडर",
          "1 शॉट एस्प्रेसो (या 1 बड़ा चम्मच कड़क कॉफी)",
          "1 बड़ा चम्मच नारियल तेल · 30 ग्राम डार्क चॉकलेट",
          "बेलने के लिए कोको पाउडर"
        ],
        "steps": [],
        "swaps": [
          "एस्प्रेसो → डिकैफ़ या चिकोरी",
          "काकाओ निब्स में बेलें।"
        ]
      },
      "he": {
        "title": "טראפלס בריגדיירו קפה",
        "desc": "הבריגדיירו מתבגר — ביס מוקה עם טעם קפה אמיתי.",
        "why": "קקאו וקפה שניהם מביאים פוליפנולים והרמה עדינה, והמנה בגודל ביס שומרת על ההנאה בלי הקריסה.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "ללא סוכר מזוקק",
          "ידידותי למנות"
        ],
        "ingredients": [
          "1 כוס חלב שקדים ללא סוכר",
          "3 כפות סירופ מייפל",
          "4 כפות אבקת קקאו",
          "1 שוט אספרסו (או 1 כף קפה חזק)",
          "1 כף שמן קוקוס · 30 גרם שוקולד מריר",
          "אבקת קקאו, לגלגול"
        ],
        "steps": [],
        "swaps": [
          "אספרסו → קפה נטול קפאין או עולש",
          "לגלגל בפתיתי קקאו."
        ]
      }
    }
  },
  {
    "id": "passionfruit-mousse",
    "title": "Passion Fruit Mousse",
    "desc": "Bright, tangy and tropical — a silky mousse that tastes like sunshine.",
    "image": "/assets/recipes/passionfruit-mousse.png",
    "level": "free",
    "makes": "6",
    "goals": [
      "Sweet cravings",
      "Gut health",
      "Protein"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "Refined-sugar-free",
      "No-bake"
    ],
    "macros": {
      "kcal": 188,
      "protein": "2g",
      "carbs": "16g",
      "fat": "14g",
      "fiber": "3g"
    },
    "why": "passion fruit adds vitamin C and fiber, while coconut cream gives richness without any dairy — bright and satisfying.",
    "swaps": [
      "passion fruit → mango purée",
      "maple → monk fruit."
    ],
    "ingredients": [
      "1 cup chilled coconut cream",
      "½ cup passion fruit pulp",
      "¼ cup maple syrup",
      "1 tsp vanilla extract",
      "Extra pulp, to top"
    ],
    "daypart": "dessert",
    "i18n": {
      "pt": {
        "title": "Mousse de Maracujá",
        "desc": "Vibrante, azedinho e tropical — uma mousse aveludada com gosto de sol.",
        "why": "o maracujá traz vitamina C e fibras, enquanto o creme de coco dá cremosidade sem nenhum laticínio — leve e satisfatório.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Sem açúcar refinado",
          "Sem forno"
        ],
        "ingredients": [
          "1 xícara de creme de coco gelado",
          "½ xícara de polpa de maracujá",
          "¼ xícara de xarope de bordo",
          "1 colher de chá de extrato de baunilha",
          "Polpa extra, para finalizar"
        ],
        "steps": [],
        "swaps": [
          "maracujá → purê de manga",
          "xarope de bordo → monk fruit."
        ]
      },
      "es": {
        "title": "Mousse de Maracuyá",
        "desc": "Brillante, ácido y tropical: una mousse sedosa que sabe a sol.",
        "why": "el maracuyá aporta vitamina C y fibra, mientras que la crema de coco da cremosidad sin lácteos: fresco y satisfactorio.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Sin azúcar refinada",
          "Sin horno"
        ],
        "ingredients": [
          "1 taza de crema de coco fría",
          "½ taza de pulpa de maracuyá",
          "¼ taza de jarabe de arce",
          "1 cucharadita de extracto de vainilla",
          "Pulpa extra, para decorar"
        ],
        "steps": [],
        "swaps": [
          "maracuyá → puré de mango",
          "jarabe de arce → fruto del monje."
        ]
      },
      "it": {
        "title": "Mousse al Frutto della Passione",
        "desc": "Vivace, agrodolce e tropicale — una mousse setosa che sa di sole.",
        "why": "il frutto della passione aggiunge vitamina C e fibre, mentre la crema di cocco dona cremosità senza latticini — vivace e appagante.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Senza zuccheri raffinati",
          "Senza cottura"
        ],
        "ingredients": [
          "1 tazza di crema di cocco fredda",
          "½ tazza di polpa di frutto della passione",
          "¼ di tazza di sciroppo d'acero",
          "1 cucchiaino di estratto di vaniglia",
          "Altra polpa, per guarnire"
        ],
        "steps": [],
        "swaps": [
          "frutto della passione → purea di mango",
          "acero → frutto del monaco."
        ]
      },
      "zh": {
        "title": "百香果慕斯",
        "desc": "明亮酸甜、热带风情——丝滑慕斯，尝起来像阳光的味道。",
        "why": "百香果带来维生素C和膳食纤维，椰浆则在不含乳制品的情况下带来浓郁口感——明亮又满足。",
        "tags": [
          "无麸质",
          "无乳制品",
          "无精制糖",
          "免烤"
        ],
        "ingredients": [
          "1杯冰镇椰浆",
          "½杯百香果果肉",
          "¼杯枫糖浆",
          "1茶匙香草精",
          "额外的百香果果肉，用于装饰"
        ],
        "steps": [],
        "swaps": [
          "百香果 → 芒果泥",
          "枫糖浆 → 罗汉果糖。"
        ]
      },
      "hi": {
        "title": "पैशन फ्रूट मूस",
        "desc": "चटख, खट्टी-मीठी और उष्णकटिबंधीय — एक रेशमी मूस जिसका स्वाद धूप जैसा है।",
        "why": "पैशन फ्रूट विटामिन C और फाइबर जोड़ता है, जबकि नारियल क्रीम बिना डेयरी के भरपूर मलाईदार स्वाद देती है — चटख और संतोषजनक।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "रिफाइंड-शुगर-फ्री",
          "नो-बेक"
        ],
        "ingredients": [
          "1 कप ठंडी नारियल क्रीम",
          "½ कप पैशन फ्रूट पल्प",
          "¼ कप मेपल सिरप",
          "1 छोटा चम्मच वैनिला एक्सट्रैक्ट",
          "ऊपर सजाने के लिए अतिरिक्त पल्प"
        ],
        "steps": [],
        "swaps": [
          "पैशन फ्रूट → आम की प्यूरी",
          "मेपल सिरप → मॉन्क फ्रूट।"
        ]
      },
      "he": {
        "title": "מוס פסיפלורה",
        "desc": "בהיר, חמצמץ וטרופי — מוס משיי שטעמו כמו שמש.",
        "why": "פסיפלורה מוסיפה ויטמין C וסיבים, ושמנת קוקוס מעניקה עושר בלי חלב — בהיר ומשביע.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "ללא סוכר מזוקק",
          "ללא אפייה"
        ],
        "ingredients": [
          "1 כוס שמנת קוקוס קרה",
          "½ כוס מיץ פסיפלורה",
          "¼ כוס סירופ מייפל",
          "1 כפית תמצית וניל",
          "תוספת מיץ פסיפלורה, לקישוט"
        ],
        "steps": [],
        "swaps": [
          "פסיפלורה → מחית מנגו",
          "מייפל → פרי הנזיר (מונק פרוט)."
        ]
      }
    }
  },
  {
    "id": "banoffee",
    "title": "Banoffee Cups",
    "desc": "Banana, date caramel and cream in a glass — the banoffee, lightened up.",
    "image": "/assets/recipes/banoffee.png",
    "level": "free",
    "makes": "8",
    "goals": [
      "Sweet cravings",
      "Gut health"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "Refined-sugar-free",
      "No-bake"
    ],
    "macros": {
      "kcal": 205,
      "protein": "3g",
      "carbs": "24g",
      "fat": "13g",
      "fiber": "3g"
    },
    "why": "bananas and dates give natural sweetness with fiber and potassium — all the banoffee comfort, no condensed milk or refined sugar.",
    "swaps": [
      "almond flour → oat flour (nut-free)",
      "coconut cream → whipped silken tofu."
    ],
    "ingredients": [
      "2 ripe bananas, sliced",
      "6 Medjool dates (caramel)",
      "½ cup coconut cream, whipped",
      "½ cup almond flour (base)",
      "2 tbsp coconut oil",
      "20 g dark chocolate, shaved"
    ],
    "daypart": "dessert",
    "i18n": {
      "pt": {
        "title": "Copinhos de Banoffee",
        "desc": "Banana, caramelo de tâmara e creme em um copo — o banoffee, na versão leve.",
        "why": "banana e tâmara trazem doçura natural com fibras e potássio — todo o conforto do banoffee, sem leite condensado ou açúcar refinado.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Sem açúcar refinado",
          "Sem forno"
        ],
        "ingredients": [
          "2 bananas maduras, fatiadas",
          "6 tâmaras Medjool (para o caramelo)",
          "½ xícara de creme de coco, batido em chantilly",
          "½ xícara de farinha de amêndoas (para a base)",
          "2 colheres de sopa de óleo de coco",
          "20 g de chocolate amargo, raspado"
        ],
        "steps": [],
        "swaps": [
          "farinha de amêndoas → farinha de aveia (sem oleaginosas)",
          "creme de coco → tofu macio batido."
        ]
      },
      "es": {
        "title": "Vasitos de Banoffee",
        "desc": "Plátano, caramelo de dátiles y crema en un vaso: el banoffee, aligerado.",
        "why": "el plátano y los dátiles dan dulzor natural con fibra y potasio: toda la ternura del banoffee, sin leche condensada ni azúcar refinada.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Sin azúcar refinada",
          "Sin horno"
        ],
        "ingredients": [
          "2 plátanos maduros, en rodajas",
          "6 dátiles Medjool (para el caramelo)",
          "½ taza de crema de coco, batida",
          "½ taza de harina de almendras (para la base)",
          "2 cucharadas de aceite de coco",
          "20 g de chocolate negro, en virutas"
        ],
        "steps": [],
        "swaps": [
          "harina de almendras → harina de avena (sin frutos secos)",
          "crema de coco → tofu sedoso batido."
        ]
      },
      "it": {
        "title": "Coppette Banoffee",
        "desc": "Banana, caramello di datteri e crema in un bicchiere — il banoffee, alleggerito.",
        "why": "banane e datteri regalano dolcezza naturale con fibre e potassio — tutto il comfort del banoffee, senza latte condensato né zuccheri raffinati.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Senza zuccheri raffinati",
          "Senza cottura"
        ],
        "ingredients": [
          "2 banane mature, a fette",
          "6 datteri Medjool (per il caramello)",
          "½ tazza di crema di cocco, montata",
          "½ tazza di farina di mandorle (per la base)",
          "2 cucchiai di olio di cocco",
          "20 g di cioccolato fondente, a scaglie"
        ],
        "steps": [],
        "swaps": [
          "farina di mandorle → farina d'avena (senza frutta a guscio)",
          "crema di cocco → tofu setoso montato."
        ]
      },
      "zh": {
        "title": "香蕉太妃杯",
        "desc": "香蕉、椰枣焦糖和奶油层层叠入杯中——经典班戈飞派的轻盈版。",
        "why": "香蕉与椰枣带来天然甜味、膳食纤维和钾——保留班戈飞派的满足感，却没有炼乳和精制糖。",
        "tags": [
          "无麸质",
          "无乳制品",
          "无精制糖",
          "免烤"
        ],
        "ingredients": [
          "2根熟香蕉，切片",
          "6颗麦地那椰枣（做焦糖）",
          "½杯椰浆，打发",
          "½杯杏仁粉（做底层）",
          "2汤匙椰子油",
          "20克黑巧克力，刨成薄片"
        ],
        "steps": [],
        "swaps": [
          "杏仁粉 → 燕麦粉（无坚果）",
          "椰浆 → 打发嫩豆腐。"
        ]
      },
      "hi": {
        "title": "बनॉफी कप्स",
        "desc": "केला, खजूर कैरेमल और क्रीम एक गिलास में — बनॉफी, अब हल्के अंदाज़ में।",
        "why": "केला और खजूर फाइबर व पोटैशियम के साथ प्राकृतिक मिठास देते हैं — बनॉफी का पूरा आराम, बिना कंडेंस्ड मिल्क या रिफाइंड शुगर के।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "रिफाइंड-शुगर-फ्री",
          "नो-बेक"
        ],
        "ingredients": [
          "2 पके केले, कटे हुए",
          "6 मेडजूल खजूर (कैरेमल के लिए)",
          "½ कप नारियल क्रीम, फेंटी हुई",
          "½ कप बादाम का आटा (बेस के लिए)",
          "2 बड़े चम्मच नारियल तेल",
          "20 ग्राम डार्क चॉकलेट, कद्दूकस की हुई"
        ],
        "steps": [],
        "swaps": [
          "बादाम का आटा → ओट का आटा (नट-फ्री)",
          "नारियल क्रीम → फेंटा हुआ सिल्कन टोफू।"
        ]
      },
      "he": {
        "title": "כוסות בננופי",
        "desc": "בננה, קרמל תמרים ושמנת בכוס — בננופי בגרסה קלה.",
        "why": "בננות ותמרים מעניקים מתיקות טבעית עם סיבים ואשלגן — כל הנחמה של בננופי, בלי חלב מרוכז ובלי סוכר מזוקק.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "ללא סוכר מזוקק",
          "ללא אפייה"
        ],
        "ingredients": [
          "2 בננות בשלות, פרוסות",
          "6 תמרי מג'הול (לקרמל)",
          "½ כוס שמנת קוקוס מוקצפת",
          "½ כוס קמח שקדים (לבסיס)",
          "2 כפות שמן קוקוס",
          "20 גרם שוקולד מריר מגורד"
        ],
        "steps": [],
        "swaps": [
          "קמח שקדים → קמח שיבולת שועל (ללא אגוזים)",
          "שמנת קוקוס → טופו משי מוקצף."
        ]
      }
    }
  },
  {
    "id": "coconut-kisses",
    "title": "Coconut Kisses",
    "desc": "Soft, chewy coconut sweets — the dairy-free cocada you'll make on repeat.",
    "image": "/assets/recipes/coconut-kisses.png",
    "level": "free",
    "makes": "16",
    "goals": [
      "Sweet cravings",
      "Gut health",
      "Protein"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "Refined-sugar-free",
      "No-bake"
    ],
    "macros": {
      "kcal": 61,
      "protein": "1g",
      "carbs": "4g",
      "fat": "5g",
      "fiber": "1g"
    },
    "why": "coconut brings fiber and healthy fats, and these are sweetened only with maple — no condensed milk, no refined sugar.",
    "swaps": [
      "almond milk → coconut milk for a richer flavour."
    ],
    "ingredients": [
      "1½ cups unsweetened shredded coconut",
      "1 cup unsweetened almond milk",
      "3 tbsp maple syrup",
      "Pinch of sea salt",
      "Extra coconut, to roll"
    ],
    "daypart": "dessert",
    "i18n": {
      "pt": {
        "title": "Beijinhos de Coco",
        "desc": "Docinhos de coco macios e amanteigados — a cocada sem lactose que você vai repetir sempre.",
        "why": "o coco traz fibras e gorduras boas, e esses docinhos são adoçados só com xarope de bordo — sem leite condensado, sem açúcar refinado.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Sem açúcar refinado",
          "Sem forno"
        ],
        "ingredients": [
          "1½ xícara de coco ralado sem açúcar",
          "1 xícara de leite de amêndoas sem açúcar",
          "3 colheres de sopa de xarope de bordo",
          "Uma pitada de sal marinho",
          "Coco extra, para enrolar"
        ],
        "steps": [],
        "swaps": [
          "leite de amêndoas → leite de coco para um sabor mais intenso."
        ]
      },
      "es": {
        "title": "Besitos de Coco",
        "desc": "Dulces de coco suaves y masticables: la cocada sin lácteos que harás una y otra vez.",
        "why": "el coco aporta fibra y grasas saludables, y estos se endulzan solo con jarabe de arce: sin leche condensada, sin azúcar refinada.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Sin azúcar refinada",
          "Sin horno"
        ],
        "ingredients": [
          "1½ tazas de coco rallado sin endulzar",
          "1 taza de leche de almendras sin endulzar",
          "3 cucharadas de jarabe de arce",
          "Una pizca de sal marina",
          "Coco extra, para rebozar"
        ],
        "steps": [],
        "swaps": [
          "leche de almendras → leche de coco para un sabor más intenso."
        ]
      },
      "it": {
        "title": "Baci di Cocco",
        "desc": "Dolcetti di cocco morbidi e masticabili — la cocada senza latticini che rifarai all'infinito.",
        "why": "il cocco apporta fibre e grassi buoni, ed è dolcificato solo con sciroppo d'acero — niente latte condensato, niente zuccheri raffinati.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Senza zuccheri raffinati",
          "Senza cottura"
        ],
        "ingredients": [
          "1½ tazze di cocco rapé non zuccherato",
          "1 tazza di latte di mandorla non zuccherato",
          "3 cucchiai di sciroppo d'acero",
          "Un pizzico di sale marino",
          "Altro cocco, per rotolare"
        ],
        "steps": [],
        "swaps": [
          "latte di mandorla → latte di cocco per un sapore più ricco."
        ]
      },
      "zh": {
        "title": "椰香小吻糖",
        "desc": "柔软有嚼劲的椰子甜点——无乳制品版椰丝糖，让你忍不住一做再做。",
        "why": "椰子带来膳食纤维和健康脂肪，甜味完全来自枫糖浆——不含炼乳，不含精制糖。",
        "tags": [
          "无麸质",
          "无乳制品",
          "无精制糖",
          "免烤"
        ],
        "ingredients": [
          "1½杯无糖椰蓉",
          "1杯无糖杏仁奶",
          "3汤匙枫糖浆",
          "一小撮海盐",
          "额外椰蓉，用于裹球"
        ],
        "steps": [],
        "swaps": [
          "杏仁奶 → 椰奶，风味更浓郁。"
        ]
      },
      "hi": {
        "title": "कोकोनट किसेज़",
        "desc": "नरम, चबाने वाली नारियल मिठाई — वह डेयरी-फ्री कोकाडा जिसे आप बार-बार बनाएंगे।",
        "why": "नारियल फाइबर और अच्छे फैट्स लाता है, और यह सिर्फ मेपल सिरप से मीठी की जाती है — न कंडेंस्ड मिल्क, न रिफाइंड शुगर।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "रिफाइंड-शुगर-फ्री",
          "नो-बेक"
        ],
        "ingredients": [
          "1½ कप बिना मीठा कसा हुआ नारियल",
          "1 कप बिना मीठा बादाम दूध",
          "3 बड़े चम्मच मेपल सिरप",
          "एक चुटकी सी सॉल्ट",
          "बेलने के लिए अतिरिक्त नारियल"
        ],
        "steps": [],
        "swaps": [
          "बादाम दूध → नारियल दूध, ज़्यादा गाढ़े स्वाद के लिए।"
        ]
      },
      "he": {
        "title": "נשיקות קוקוס",
        "desc": "ממתקי קוקוס רכים ולעיסים — הקוקדה ללא חלב שתכינו שוב ושוב.",
        "why": "קוקוס מביא סיבים ושומנים בריאים, והממתקים הללו ממותקים רק במייפל — בלי חלב מרוכז ובלי סוכר מזוקק.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "ללא סוכר מזוקק",
          "ללא אפייה"
        ],
        "ingredients": [
          "1½ כוסות קוקוס מגורד ללא סוכר",
          "1 כוס חלב שקדים ללא סוכר",
          "3 כפות סירופ מייפל",
          "קורט מלח ים",
          "קוקוס נוסף, לגלגול"
        ],
        "steps": [],
        "swaps": [
          "חלב שקדים → חלב קוקוס לטעם עשיר יותר."
        ]
      }
    }
  },
  {
    "id": "chocolate-cheesecake",
    "title": "No-Bake Chocolate Cheesecake",
    "desc": "Deeply chocolatey, impossibly creamy, and entirely dairy-free.",
    "image": "/assets/recipes/chocolate-cheesecake.png",
    "level": "club",
    "makes": "12",
    "goals": [
      "Sweet cravings",
      "Anti-inflammatory",
      "Protein"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "Refined-sugar-free",
      "No-bake"
    ],
    "macros": {
      "kcal": 272,
      "protein": "5g",
      "carbs": "28g",
      "fat": "18g",
      "fiber": "4g"
    },
    "why": "cashews give creamy healthy fats and plant protein, cacao adds polyphenols — all the decadence, no dairy or refined sugar.",
    "swaps": [
      "cashews → sunflower seeds (nut-free)",
      "maple → monk fruit."
    ],
    "ingredients": [
      "1½ cups cashews, soaked",
      "½ cup coconut cream",
      "⅓ cup maple syrup",
      "4 tbsp cacao powder",
      "60 g dark chocolate, melted",
      "8 dates + ½ cup almond flour (crust)",
      "2 tbsp coconut oil"
    ],
    "daypart": "dessert",
    "i18n": {
      "pt": {
        "title": "Cheesecake de Chocolate Sem Forno",
        "desc": "Intensamente achocolatado, impossivelmente cremoso e totalmente sem lactose.",
        "why": "a castanha de caju dá cremosidade com gorduras boas e proteína vegetal, o cacau soma polifenóis — toda a decadência, sem lactose e sem açúcar refinado.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Sem açúcar refinado",
          "Sem forno"
        ],
        "ingredients": [
          "1½ xícara de castanha de caju, hidratada",
          "½ xícara de creme de coco",
          "⅓ xícara de xarope de bordo",
          "4 colheres de sopa de cacau em pó",
          "60 g de chocolate amargo, derretido",
          "8 tâmaras + ½ xícara de farinha de amêndoas (para a base)",
          "2 colheres de sopa de óleo de coco"
        ],
        "steps": [],
        "swaps": [
          "castanha de caju → sementes de girassol (sem oleaginosas)",
          "xarope de bordo → monk fruit."
        ]
      },
      "es": {
        "title": "Cheesecake de Chocolate sin Horno",
        "desc": "Intensamente achocolatado, increíblemente cremoso y completamente sin lácteos.",
        "why": "los anacardos dan grasas saludables y cremosidad con proteína vegetal, el cacao suma polifenoles: toda la indulgencia, sin lácteos ni azúcar refinada.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Sin azúcar refinada",
          "Sin horno"
        ],
        "ingredients": [
          "1½ tazas de anacardos, remojados",
          "½ taza de crema de coco",
          "⅓ taza de jarabe de arce",
          "4 cucharadas de cacao en polvo",
          "60 g de chocolate negro, derretido",
          "8 dátiles + ½ taza de harina de almendras (para la base)",
          "2 cucharadas de aceite de coco"
        ],
        "steps": [],
        "swaps": [
          "anacardos → semillas de girasol (sin frutos secos)",
          "jarabe de arce → fruto del monje."
        ]
      },
      "it": {
        "title": "Cheesecake al Cioccolato Senza Cottura",
        "desc": "Intensamente cioccolatosa, incredibilmente cremosa e completamente senza latticini.",
        "why": "gli anacardi donano cremosità con grassi buoni e proteine vegetali, il cacao aggiunge polifenoli — tutta la golosità, senza latticini né zuccheri raffinati.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Senza zuccheri raffinati",
          "Senza cottura"
        ],
        "ingredients": [
          "1½ tazze di anacardi, ammollati",
          "½ tazza di crema di cocco",
          "⅓ di tazza di sciroppo d'acero",
          "4 cucchiai di cacao amaro in polvere",
          "60 g di cioccolato fondente, sciolto",
          "8 datteri + ½ tazza di farina di mandorle (per la base)",
          "2 cucchiai di olio di cocco"
        ],
        "steps": [],
        "swaps": [
          "anacardi → semi di girasole (senza frutta a guscio)",
          "acero → frutto del monaco."
        ]
      },
      "zh": {
        "title": "免烤巧克力芝士蛋糕",
        "desc": "浓郁巧克力味，绵密到不可思议，而且完全不含乳制品。",
        "why": "腰果带来绵密的健康脂肪和植物蛋白，可可加入多酚——尽享奢华口感，却没有乳制品或精制糖。",
        "tags": [
          "无麸质",
          "无乳制品",
          "无精制糖",
          "免烤"
        ],
        "ingredients": [
          "1½杯腰果，提前浸泡",
          "½杯椰浆",
          "⅓杯枫糖浆",
          "4汤匙可可粉",
          "60克黑巧克力，融化",
          "8颗椰枣 + ½杯杏仁粉（做塔底）",
          "2汤匙椰子油"
        ],
        "steps": [],
        "swaps": [
          "腰果 → 葵花籽（无坚果）",
          "枫糖浆 → 罗汉果糖。"
        ]
      },
      "hi": {
        "title": "नो-बेक चॉकलेट चीज़केक",
        "desc": "गहरा चॉकलेटी स्वाद, बेहद मलाईदार, और पूरी तरह डेयरी-फ्री।",
        "why": "काजू मलाईदार अच्छे फैट्स और पौधे-आधारित प्रोटीन देते हैं, काकाओ पॉलीफेनॉल्स जोड़ता है — पूरी शाही मिठास, बिना डेयरी या रिफाइंड शुगर के।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "रिफाइंड-शुगर-फ्री",
          "नो-बेक"
        ],
        "ingredients": [
          "1½ कप काजू, भिगोए हुए",
          "½ कप नारियल क्रीम",
          "⅓ कप मेपल सिरप",
          "4 बड़े चम्मच काकाओ पाउडर",
          "60 ग्राम डार्क चॉकलेट, पिघली हुई",
          "8 खजूर + ½ कप बादाम का आटा (क्रस्ट के लिए)",
          "2 बड़े चम्मच नारियल तेल"
        ],
        "steps": [],
        "swaps": [
          "काजू → सूरजमुखी के बीज (नट-फ्री)",
          "मेपल सिरप → मॉन्क फ्रूट।"
        ]
      },
      "he": {
        "title": "עוגת גבינה שוקולד ללא אפייה",
        "desc": "שוקולדית להפליא, קרמית באופן בלתי אפשרי, וללא חלב לחלוטין.",
        "why": "קשיו מעניק שומנים בריאים קרמיים וחלבון צמחי, קקאו מוסיף פוליפנולים — כל העושר, בלי חלב ובלי סוכר מזוקק.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "ללא סוכר מזוקק",
          "ללא אפייה"
        ],
        "ingredients": [
          "1½ כוסות קשיו, שרויים במים",
          "½ כוס שמנת קוקוס",
          "⅓ כוס סירופ מייפל",
          "4 כפות אבקת קקאו",
          "60 גרם שוקולד מריר, מומס",
          "8 תמרים + ½ כוס קמח שקדים (לבסיס)",
          "2 כפות שמן קוקוס"
        ],
        "steps": [],
        "swaps": [
          "קשיו → גרעיני חמנייה (ללא אגוזים)",
          "מייפל → פרי הנזיר."
        ]
      }
    }
  },
  {
    "id": "lemon-tart",
    "title": "Creamy Lemon Tart Cups",
    "desc": "Zingy, bright and silky — sunshine in a glass.",
    "image": "/assets/recipes/lemon-tart.png",
    "level": "club",
    "makes": "8",
    "goals": [
      "Sweet cravings",
      "Protein"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "Refined-sugar-free",
      "No-bake"
    ],
    "macros": {
      "kcal": 239,
      "protein": "5g",
      "carbs": "28g",
      "fat": "14g",
      "fiber": "3g"
    },
    "why": "lemon brings vitamin C and brightness, cashews give creaminess without dairy — tangy, light and refined-sugar-free.",
    "swaps": [
      "cashews → soaked sunflower seeds",
      "lemon → lime."
    ],
    "ingredients": [
      "1 cup cashews, soaked",
      "⅓ cup coconut cream",
      "¼ cup fresh lemon juice + zest",
      "¼ cup maple syrup",
      "6 dates + ½ cup almond flour (base)"
    ],
    "daypart": "dessert",
    "i18n": {
      "pt": {
        "title": "Copinhos Cremosos de Torta de Limão Siciliano",
        "desc": "Cítrico, vibrante e aveludado — um raio de sol em um copo.",
        "why": "o limão siciliano traz vitamina C e frescor, a castanha de caju dá cremosidade sem lactose — azedinho, leve e sem açúcar refinado.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Sem açúcar refinado",
          "Sem forno"
        ],
        "ingredients": [
          "1 xícara de castanha de caju, hidratada",
          "⅓ xícara de creme de coco",
          "¼ xícara de suco de limão siciliano fresco + raspas",
          "¼ xícara de xarope de bordo",
          "6 tâmaras + ½ xícara de farinha de amêndoas (para a base)"
        ],
        "steps": [],
        "swaps": [
          "castanha de caju → sementes de girassol hidratadas",
          "limão siciliano → limão-taiti."
        ]
      },
      "es": {
        "title": "Vasitos Cremosos de Tarta de Limón",
        "desc": "Ácida, luminosa y sedosa: sol en un vaso.",
        "why": "el limón aporta vitamina C y frescura, los anacardos dan cremosidad sin lácteos: ácido, ligero y sin azúcar refinada.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Sin azúcar refinada",
          "Sin horno"
        ],
        "ingredients": [
          "1 taza de anacardos, remojados",
          "⅓ taza de crema de coco",
          "¼ taza de jugo de limón fresco + ralladura",
          "¼ taza de jarabe de arce",
          "6 dátiles + ½ taza de harina de almendras (para la base)"
        ],
        "steps": [],
        "swaps": [
          "anacardos → semillas de girasol remojadas",
          "limón → lima."
        ]
      },
      "it": {
        "title": "Coppette Cremose alla Crostata di Limone",
        "desc": "Frizzante, vivace e setosa — un raggio di sole in un bicchiere.",
        "why": "il limone porta vitamina C e freschezza, gli anacardi danno cremosità senza latticini — agrodolce, leggera e senza zuccheri raffinati.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Senza zuccheri raffinati",
          "Senza cottura"
        ],
        "ingredients": [
          "1 tazza di anacardi, ammollati",
          "⅓ di tazza di crema di cocco",
          "¼ di tazza di succo di limone fresco + scorza",
          "¼ di tazza di sciroppo d'acero",
          "6 datteri + ½ tazza di farina di mandorle (per la base)"
        ],
        "steps": [],
        "swaps": [
          "anacardi → semi di girasole ammollati",
          "limone → lime."
        ]
      },
      "zh": {
        "title": "绵密柠檬塔杯",
        "desc": "酸爽明亮、丝滑顺口——杯中的一缕阳光。",
        "why": "柠檬带来维生素C与清新口感，腰果在不含乳制品的情况下带来绵密质地——酸香、轻盈，且不含精制糖。",
        "tags": [
          "无麸质",
          "无乳制品",
          "无精制糖",
          "免烤"
        ],
        "ingredients": [
          "1杯腰果，提前浸泡",
          "⅓杯椰浆",
          "¼杯新鲜柠檬汁 + 柠檬皮屑",
          "¼杯枫糖浆",
          "6颗椰枣 + ½杯杏仁粉（做底层）"
        ],
        "steps": [],
        "swaps": [
          "腰果 → 浸泡过的葵花籽",
          "柠檬 → 青柠。"
        ]
      },
      "hi": {
        "title": "क्रीमी लेमन टार्ट कप्स",
        "desc": "तीखी, चटख और रेशमी — एक गिलास में धूप।",
        "why": "नींबू विटामिन C और ताज़गी लाता है, काजू बिना डेयरी के मलाईदारपन देते हैं — खट्टा, हल्का और रिफाइंड-शुगर-फ्री।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "रिफाइंड-शुगर-फ्री",
          "नो-बेक"
        ],
        "ingredients": [
          "1 कप काजू, भिगोए हुए",
          "⅓ कप नारियल क्रीम",
          "¼ कप ताज़ा नींबू का रस + छिलका (ज़ेस्ट)",
          "¼ कप मेपल सिरप",
          "6 खजूर + ½ कप बादाम का आटा (बेस के लिए)"
        ],
        "steps": [],
        "swaps": [
          "काजू → भिगोए हुए सूरजमुखी के बीज",
          "नींबू → कागज़ी नींबू (लाइम)।"
        ]
      },
      "he": {
        "title": "כוסות טארט לימון קרמי",
        "desc": "עז, בהיר ומשיי — קרן שמש בכוס.",
        "why": "לימון מביא ויטמין C ובהירות, קשיו מעניק קרמיות בלי חלב — חמצמץ, קל וללא סוכר מזוקק.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "ללא סוכר מזוקק",
          "ללא אפייה"
        ],
        "ingredients": [
          "1 כוס קשיו, שרויים במים",
          "⅓ כוס שמנת קוקוס",
          "¼ כוס מיץ לימון טרי + קליפה",
          "¼ כוס סירופ מייפל",
          "6 תמרים + ½ כוס קמח שקדים (לבסיס)"
        ],
        "steps": [],
        "swaps": [
          "קשיו → גרעיני חמנייה שרויים",
          "לימון → ליים."
        ]
      }
    }
  },
  {
    "id": "hazelnut-cups",
    "title": "Hazelnut Chocolate Cups",
    "desc": "A homemade nod to the chocolate-hazelnut classic — clean and rich.",
    "image": "/assets/recipes/hazelnut-cups.png",
    "level": "club",
    "makes": "12",
    "goals": [
      "Sweet cravings",
      "Anti-inflammatory",
      "Protein"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "Refined-sugar-free",
      "Healthy fats"
    ],
    "macros": {
      "kcal": 132,
      "protein": "2g",
      "carbs": "8g",
      "fat": "11g",
      "fiber": "2g"
    },
    "why": "hazelnuts bring vitamin E and healthy fats, dark chocolate adds antioxidants — the spread, reborn without the sugar.",
    "swaps": [
      "hazelnuts → almonds",
      "add a pinch of sea salt."
    ],
    "ingredients": [
      "¾ cup hazelnuts, toasted",
      "120 g dark chocolate",
      "2 tbsp maple syrup",
      "1 tbsp coconut oil"
    ],
    "daypart": "dessert",
    "i18n": {
      "pt": {
        "title": "Copinhos de Chocolate com Avelã",
        "desc": "Uma homenagem caseira ao clássico chocolate com avelã — limpo e encorpado.",
        "why": "a avelã traz vitamina E e gorduras boas, o chocolate amargo soma antioxidantes — o famoso creme, reinventado sem o açúcar.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Sem açúcar refinado",
          "Gorduras boas"
        ],
        "ingredients": [
          "¾ xícara de avelãs, tostadas",
          "120 g de chocolate amargo",
          "2 colheres de sopa de xarope de bordo",
          "1 colher de sopa de óleo de coco"
        ],
        "steps": [],
        "swaps": [
          "avelãs → amêndoas",
          "adicione uma pitada de sal marinho."
        ]
      },
      "es": {
        "title": "Vasitos de Chocolate y Avellana",
        "desc": "Un homenaje casero al clásico de chocolate y avellana: limpio y rico.",
        "why": "las avellanas aportan vitamina E y grasas saludables, el chocolate negro suma antioxidantes: la crema untable, renacida sin el azúcar.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Sin azúcar refinada",
          "Grasas saludables"
        ],
        "ingredients": [
          "¾ taza de avellanas, tostadas",
          "120 g de chocolate negro",
          "2 cucharadas de jarabe de arce",
          "1 cucharada de aceite de coco"
        ],
        "steps": [],
        "swaps": [
          "avellanas → almendras",
          "agrega una pizca de sal marina."
        ]
      },
      "it": {
        "title": "Coppette al Cioccolato e Nocciole",
        "desc": "Un omaggio fatto in casa al classico cioccolato-nocciola — genuino e ricco.",
        "why": "le nocciole apportano vitamina E e grassi buoni, il cioccolato fondente aggiunge antiossidanti — la crema spalmabile, rinata senza zucchero.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Senza zuccheri raffinati",
          "Grassi buoni"
        ],
        "ingredients": [
          "¾ di tazza di nocciole, tostate",
          "120 g di cioccolato fondente",
          "2 cucchiai di sciroppo d'acero",
          "1 cucchiaio di olio di cocco"
        ],
        "steps": [],
        "swaps": [
          "nocciole → mandorle",
          "aggiungi un pizzico di sale marino."
        ]
      },
      "zh": {
        "title": "榛子巧克力杯",
        "desc": "向经典巧克力榛子酱致敬的自制版——干净又浓郁。",
        "why": "榛子带来维生素E和健康脂肪，黑巧克力加入抗氧化物——经典酱料的重生版，不含额外添加糖。",
        "tags": [
          "无麸质",
          "无乳制品",
          "无精制糖",
          "健康脂肪"
        ],
        "ingredients": [
          "¾杯榛子，烤香",
          "120克黑巧克力",
          "2汤匙枫糖浆",
          "1汤匙椰子油"
        ],
        "steps": [],
        "swaps": [
          "榛子 → 杏仁",
          "加一小撮海盐。"
        ]
      },
      "hi": {
        "title": "हेज़लनट चॉकलेट कप्स",
        "desc": "चॉकलेट-हेज़लनट क्लासिक को घर पर बनाया गया सलाम — सेहतमंद और भरपूर।",
        "why": "हेज़लनट विटामिन E और अच्छे फैट्स लाते हैं, डार्क चॉकलेट एंटीऑक्सीडेंट्स जोड़ती है — वह स्प्रेड, अब बिना शुगर के नए रूप में।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "रिफाइंड-शुगर-फ्री",
          "हेल्दी फैट्स"
        ],
        "ingredients": [
          "¾ कप हेज़लनट, भुने हुए",
          "120 ग्राम डार्क चॉकलेट",
          "2 बड़े चम्मच मेपल सिरप",
          "1 बड़ा चम्मच नारियल तेल"
        ],
        "steps": [],
        "swaps": [
          "हेज़लनट → बादाम",
          "एक चुटकी सी सॉल्ट डालें।"
        ]
      },
      "he": {
        "title": "כוסות שוקולד ואגוזי לוז",
        "desc": "מחווה ביתית לקלאסיקת שוקולד-לוז — נקייה ועשירה.",
        "why": "אגוזי לוז מביאים ויטמין E ושומנים בריאים, שוקולד מריר מוסיף נוגדי חמצון — הממרח, נולד מחדש בלי הסוכר.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "ללא סוכר מזוקק",
          "שומנים בריאים"
        ],
        "ingredients": [
          "¾ כוס אגוזי לוז, קלויים",
          "120 גרם שוקולד מריר",
          "2 כפות סירופ מייפל",
          "1 כף שמן קוקוס"
        ],
        "steps": [],
        "swaps": [
          "אגוזי לוז → שקדים",
          "להוסיף קורט מלח ים."
        ]
      }
    }
  },
  {
    "id": "coconut-bonbons",
    "title": "Coconut Bonbons",
    "desc": "Chewy coconut centres dipped in dark chocolate — two bites of bliss.",
    "image": "/assets/recipes/coconut-bonbons.png",
    "level": "club",
    "makes": "14",
    "goals": [
      "Sweet cravings",
      "Gut health",
      "Protein"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "Refined-sugar-free",
      "No-bake"
    ],
    "macros": {
      "kcal": 95,
      "protein": "1g",
      "carbs": "7g",
      "fat": "8g",
      "fiber": "2g"
    },
    "why": "coconut brings fiber and healthy fats inside a thin dark-chocolate shell — sweet, satisfying and refined-sugar-free.",
    "swaps": [
      "almond milk → coconut milk for richer flavour."
    ],
    "ingredients": [
      "1½ cups shredded coconut",
      "¾ cup almond milk",
      "3 tbsp maple syrup",
      "60 g dark chocolate, melted"
    ],
    "daypart": "dessert",
    "i18n": {
      "pt": {
        "title": "Bombons de Coco",
        "desc": "Recheio macio de coco mergulhado em chocolate amargo — duas mordidas de pura felicidade.",
        "why": "o coco traz fibras e gorduras boas dentro de uma fina casquinha de chocolate amargo — doce, satisfatório e sem açúcar refinado.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Sem açúcar refinado",
          "Sem forno"
        ],
        "ingredients": [
          "1½ xícara de coco ralado",
          "¾ xícara de leite de amêndoas",
          "3 colheres de sopa de xarope de bordo",
          "60 g de chocolate amargo, derretido"
        ],
        "steps": [],
        "swaps": [
          "leite de amêndoas → leite de coco para um sabor mais intenso."
        ]
      },
      "es": {
        "title": "Bombones de Coco",
        "desc": "Centros masticables de coco bañados en chocolate negro: dos bocados de pura felicidad.",
        "why": "el coco aporta fibra y grasas saludables dentro de una fina capa de chocolate negro: dulce, satisfactorio y sin azúcar refinada.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Sin azúcar refinada",
          "Sin horno"
        ],
        "ingredients": [
          "1½ tazas de coco rallado",
          "¾ taza de leche de almendras",
          "3 cucharadas de jarabe de arce",
          "60 g de chocolate negro, derretido"
        ],
        "steps": [],
        "swaps": [
          "leche de almendras → leche de coco para un sabor más intenso."
        ]
      },
      "it": {
        "title": "Bonbon al Cocco",
        "desc": "Cuori morbidi di cocco immersi nel cioccolato fondente — due morsi di pura gioia.",
        "why": "il cocco apporta fibre e grassi buoni racchiusi in un sottile guscio di cioccolato fondente — dolce, appagante e senza zuccheri raffinati.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Senza zuccheri raffinati",
          "Senza cottura"
        ],
        "ingredients": [
          "1½ tazze di cocco rapé",
          "¾ di tazza di latte di mandorla",
          "3 cucchiai di sciroppo d'acero",
          "60 g di cioccolato fondente, sciolto"
        ],
        "steps": [],
        "swaps": [
          "latte di mandorla → latte di cocco per un sapore più ricco."
        ]
      },
      "zh": {
        "title": "椰子夹心糖",
        "desc": "有嚼劲的椰子夹心裹上黑巧克力——两口就是满满幸福感。",
        "why": "椰子在薄薄的黑巧克力外壳内带来膳食纤维和健康脂肪——香甜满足，且不含精制糖。",
        "tags": [
          "无麸质",
          "无乳制品",
          "无精制糖",
          "免烤"
        ],
        "ingredients": [
          "1½杯椰蓉",
          "¾杯杏仁奶",
          "3汤匙枫糖浆",
          "60克黑巧克力，融化"
        ],
        "steps": [],
        "swaps": [
          "杏仁奶 → 椰奶，风味更浓郁。"
        ]
      },
      "hi": {
        "title": "कोकोनट बॉनबॉन",
        "desc": "चबाने वाला नारियल भरा हुआ, डार्क चॉकलेट में डुबोया हुआ — आनंद के दो टुकड़े।",
        "why": "नारियल एक पतली डार्क-चॉकलेट परत के भीतर फाइबर और अच्छे फैट्स लाता है — मीठा, संतोषजनक और रिफाइंड-शुगर-फ्री।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "रिफाइंड-शुगर-फ्री",
          "नो-बेक"
        ],
        "ingredients": [
          "1½ कप कसा हुआ नारियल",
          "¾ कप बादाम दूध",
          "3 बड़े चम्मच मेपल सिरप",
          "60 ग्राम डार्क चॉकलेट, पिघली हुई"
        ],
        "steps": [],
        "swaps": [
          "बादाम दूध → नारियल दूध, ज़्यादा गाढ़े स्वाद के लिए।"
        ]
      },
      "he": {
        "title": "בונבוני קוקוס",
        "desc": "מילוי קוקוס לעיס טבול בשוקולד מריר — שני ביסים של שמחה.",
        "why": "קוקוס מביא סיבים ושומנים בריאים בתוך קליפה דקה של שוקולד מריר — מתוק, משביע וללא סוכר מזוקק.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "ללא סוכר מזוקק",
          "ללא אפייה"
        ],
        "ingredients": [
          "1½ כוסות קוקוס מגורד",
          "¾ כוס חלב שקדים",
          "3 כפות סירופ מייפל",
          "60 גרם שוקולד מריר, מומס"
        ],
        "steps": [],
        "swaps": [
          "חלב שקדים → חלב קוקוס לטעם עשיר יותר."
        ]
      }
    }
  },
  {
    "id": "pb-fudge",
    "title": "Peanut Butter Fudge Squares",
    "desc": "Four ingredients, melt-in-your-mouth, and secretly wholesome.",
    "image": "/assets/recipes/pb-fudge.png",
    "level": "club",
    "makes": "16",
    "goals": [
      "Sweet cravings",
      "Protein"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "Refined-sugar-free",
      "High protein"
    ],
    "macros": {
      "kcal": 138,
      "protein": "4g",
      "carbs": "8g",
      "fat": "11g",
      "fiber": "2g"
    },
    "why": "peanut butter brings protein and healthy fats that slow the sugar curve — rich, satisfying, refined-sugar-free.",
    "swaps": [
      "peanut → almond butter (peanut-free)."
    ],
    "ingredients": [
      "1 cup natural peanut butter",
      "¼ cup maple syrup",
      "2 tbsp coconut oil",
      "2 tbsp cacao powder",
      "40 g dark chocolate · flaky salt"
    ],
    "daypart": "dessert",
    "i18n": {
      "pt": {
        "title": "Quadradinhos de Fudge de Pasta de Amendoim",
        "desc": "Quatro ingredientes, derrete na boca, e nutritivo sem ninguém perceber.",
        "why": "a pasta de amendoim traz proteína e gorduras boas que desaceleram a curva glicêmica — encorpado, satisfatório e sem açúcar refinado.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Sem açúcar refinado",
          "Rico em proteína"
        ],
        "ingredients": [
          "1 xícara de pasta de amendoim natural",
          "¼ xícara de xarope de bordo",
          "2 colheres de sopa de óleo de coco",
          "2 colheres de sopa de cacau em pó",
          "40 g de chocolate amargo · sal em flocos"
        ],
        "steps": [],
        "swaps": [
          "pasta de amendoim → pasta de amêndoas (sem amendoim)."
        ]
      },
      "es": {
        "title": "Cuadritos de Fudge de Mantequilla de Maní",
        "desc": "Cuatro ingredientes, se derriten en la boca y son secretamente nutritivos.",
        "why": "la mantequilla de maní aporta proteína y grasas saludables que ralentizan la curva de azúcar: rico, satisfactorio, sin azúcar refinada.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Sin azúcar refinada",
          "Alto en proteína"
        ],
        "ingredients": [
          "1 taza de mantequilla de maní natural",
          "¼ taza de jarabe de arce",
          "2 cucharadas de aceite de coco",
          "2 cucharadas de cacao en polvo",
          "40 g de chocolate negro · sal en escamas"
        ],
        "steps": [],
        "swaps": [
          "mantequilla de maní → mantequilla de almendra (sin maní)."
        ]
      },
      "it": {
        "title": "Quadrotti Fondenti al Burro di Arachidi",
        "desc": "Quattro ingredienti, si sciolgono in bocca, e sono genuini senza dirlo.",
        "why": "il burro di arachidi apporta proteine e grassi buoni che rallentano la curva glicemica — ricco, appagante, senza zuccheri raffinati.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Senza zuccheri raffinati",
          "Ricco di proteine"
        ],
        "ingredients": [
          "1 tazza di burro di arachidi naturale",
          "¼ di tazza di sciroppo d'acero",
          "2 cucchiai di olio di cocco",
          "2 cucchiai di cacao amaro in polvere",
          "40 g di cioccolato fondente · sale in fiocchi"
        ],
        "steps": [],
        "swaps": [
          "arachidi → burro di mandorle (senza arachidi)."
        ]
      },
      "zh": {
        "title": "花生酱软糖方块",
        "desc": "只需四种食材，入口即化，还悄悄藏着满满营养。",
        "why": "花生酱带来蛋白质和健康脂肪，能延缓血糖上升曲线——浓郁满足，且不含精制糖。",
        "tags": [
          "无麸质",
          "无乳制品",
          "无精制糖",
          "高蛋白"
        ],
        "ingredients": [
          "1杯天然花生酱",
          "¼杯枫糖浆",
          "2汤匙椰子油",
          "2汤匙可可粉",
          "40克黑巧克力 · 片状海盐"
        ],
        "steps": [],
        "swaps": [
          "花生酱 → 杏仁酱（无花生）。"
        ]
      },
      "hi": {
        "title": "पीनट बटर फज स्क्वेयर्स",
        "desc": "चार सामग्री, मुंह में घुल जाने वाली, और छुपी हुई सेहतमंद।",
        "why": "पीनट बटर प्रोटीन और अच्छे फैट्स लाता है जो शुगर की रफ्तार को धीमा करते हैं — भरपूर, संतोषजनक, रिफाइंड-शुगर-फ्री।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "रिफाइंड-शुगर-फ्री",
          "हाई-प्रोटीन"
        ],
        "ingredients": [
          "1 कप नेचुरल पीनट बटर",
          "¼ कप मेपल सिरप",
          "2 बड़े चम्मच नारियल तेल",
          "2 बड़े चम्मच काकाओ पाउडर",
          "40 ग्राम डार्क चॉकलेट · फ्लेकी नमक"
        ],
        "steps": [],
        "swaps": [
          "पीनट बटर → बादाम बटर (पीनट-फ्री)।"
        ]
      },
      "he": {
        "title": "ריבועי פאדג' חמאת בוטנים",
        "desc": "ארבעה מרכיבים, נמסים בפה, ובריאים בסוד.",
        "why": "חמאת בוטנים מביאה חלבון ושומנים בריאים שמאטים את עקומת הסוכר — עשיר, משביע וללא סוכר מזוקק.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "ללא סוכר מזוקק",
          "עתיר חלבון"
        ],
        "ingredients": [
          "1 כוס חמאת בוטנים טבעית",
          "¼ כוס סירופ מייפל",
          "2 כפות שמן קוקוס",
          "2 כפות אבקת קקאו",
          "40 גרם שוקולד מריר · מלח גס"
        ],
        "steps": [],
        "swaps": [
          "בוטנים → חמאת שקדים (ללא בוטנים)."
        ]
      }
    }
  },
  {
    "id": "churros-chia",
    "title": "Churros Chia Cups",
    "desc": "All the cinnamon-sugar churro comfort, in a creamy spoonable cup.",
    "image": "/assets/recipes/churros-chia.png",
    "level": "club",
    "makes": "4",
    "goals": [
      "Sweet cravings",
      "Gut health"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "Refined-sugar-free",
      "High fibre"
    ],
    "macros": {
      "kcal": 99,
      "protein": "3g",
      "carbs": "11g",
      "fat": "5g",
      "fiber": "4g"
    },
    "why": "chia delivers fiber and plant omega-3, and cinnamon is traditionally used to support a steady post-meal blood-sugar response.",
    "swaps": [
      "almond milk → coconut milk",
      "top with banana."
    ],
    "ingredients": [
      "3 tbsp chia seeds",
      "1½ cups almond milk",
      "2 tbsp maple syrup",
      "2 tbsp almond flour",
      "1 tsp cinnamon"
    ],
    "daypart": "dessert",
    "i18n": {
      "pt": {
        "title": "Copinhos de Chia Sabor Churros",
        "desc": "Todo o conforto do churro com canela e açúcar, em um copinho cremoso de colher.",
        "why": "a chia entrega fibras e ômega-3 vegetal, e a canela é tradicionalmente usada para apoiar uma resposta glicêmica mais estável após as refeições.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Sem açúcar refinado",
          "Rico em fibras"
        ],
        "ingredients": [
          "3 colheres de sopa de sementes de chia",
          "1½ xícara de leite de amêndoas",
          "2 colheres de sopa de xarope de bordo",
          "2 colheres de sopa de farinha de amêndoas",
          "1 colher de chá de canela"
        ],
        "steps": [],
        "swaps": [
          "leite de amêndoas → leite de coco",
          "finalize com banana."
        ]
      },
      "es": {
        "title": "Vasitos de Chía Estilo Churros",
        "desc": "Todo el placer del churro con canela y azúcar, en un vasito cremoso para comer a cucharadas.",
        "why": "la chía aporta fibra y omega-3 vegetal, y la canela se usa tradicionalmente para ayudar a mantener estable la glucosa después de las comidas.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Sin azúcar refinada",
          "Alto en fibra"
        ],
        "ingredients": [
          "3 cucharadas de semillas de chía",
          "1½ tazas de leche de almendras",
          "2 cucharadas de jarabe de arce",
          "2 cucharadas de harina de almendras",
          "1 cucharadita de canela"
        ],
        "steps": [],
        "swaps": [
          "leche de almendras → leche de coco",
          "decora con plátano."
        ]
      },
      "it": {
        "title": "Coppette di Chia ai Churros",
        "desc": "Tutto il comfort del churro alla cannella e zucchero, in una coppetta cremosa da gustare a cucchiaiate.",
        "why": "la chia apporta fibre e omega-3 vegetali, e la cannella è tradizionalmente usata per sostenere una risposta glicemica post-pasto più stabile.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Senza zuccheri raffinati",
          "Ricco di fibre"
        ],
        "ingredients": [
          "3 cucchiai di semi di chia",
          "1½ tazze di latte di mandorla",
          "2 cucchiai di sciroppo d'acero",
          "2 cucchiai di farina di mandorle",
          "1 cucchiaino di cannella"
        ],
        "steps": [],
        "swaps": [
          "latte di mandorla → latte di cocco",
          "guarnisci con banana."
        ]
      },
      "zh": {
        "title": "churros风味奇亚籽杯",
        "desc": "肉桂糖churros的满足感，全都装进这一杯绵密可挖的甜点里。",
        "why": "奇亚籽提供膳食纤维和植物来源的omega-3，肉桂则在传统上用于帮助餐后血糖保持平稳。",
        "tags": [
          "无麸质",
          "无乳制品",
          "无精制糖",
          "高纤维"
        ],
        "ingredients": [
          "3汤匙奇亚籽",
          "1½杯杏仁奶",
          "2汤匙枫糖浆",
          "2汤匙杏仁粉",
          "1茶匙肉桂粉"
        ],
        "steps": [],
        "swaps": [
          "杏仁奶 → 椰奶",
          "撒上香蕉片。"
        ]
      },
      "hi": {
        "title": "चुर्रोस चिया कप्स",
        "desc": "दालचीनी-शुगर वाले चुर्रोस का पूरा आराम, एक मलाईदार चम्मच से खाने वाले कप में।",
        "why": "चिया फाइबर और पौधे-आधारित ओमेगा-3 देती है, और दालचीनी का पारंपरिक रूप से उपयोग भोजन के बाद ब्लड-शुगर को स्थिर रखने में मदद के लिए किया जाता है।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "रिफाइंड-शुगर-फ्री",
          "हाई-फाइबर"
        ],
        "ingredients": [
          "3 बड़े चम्मच चिया बीज",
          "1½ कप बादाम दूध",
          "2 बड़े चम्मच मेपल सिरप",
          "2 बड़े चम्मच बादाम का आटा",
          "1 छोटा चम्मच दालचीनी"
        ],
        "steps": [],
        "swaps": [
          "बादाम दूध → नारियल दूध",
          "ऊपर से केला डालें।"
        ]
      },
      "he": {
        "title": "כוסות צ'יה בטעם צ'ורוס",
        "desc": "כל הנחמה של צ'ורוס בקינמון-סוכר, בכוס קרמית לאכילה בכפית.",
        "why": "צ'יה מספקת סיבים ואומגה 3 מהצומח, וקינמון משמש באופן מסורתי לתמיכה בתגובת סוכר יציבה אחרי הארוחה.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "ללא סוכר מזוקק",
          "עתיר סיבים"
        ],
        "ingredients": [
          "3 כפות זרעי צ'יה",
          "1½ כוסות חלב שקדים",
          "2 כפות סירופ מייפל",
          "2 כפות קמח שקדים",
          "1 כפית קינמון"
        ],
        "steps": [],
        "swaps": [
          "חלב שקדים → חלב קוקוס",
          "לקשט בבננה."
        ]
      }
    }
  },
  {
    "id": "twix",
    "title": "Healthy Twix Bars",
    "desc": "Shortbread, date caramel and dark chocolate — the candy bar, upgraded.",
    "image": "/assets/recipes/twix.png",
    "level": "club",
    "makes": "12",
    "goals": [
      "Sweet cravings",
      "Gut health",
      "Protein"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "Refined-sugar-free",
      "No-bake"
    ],
    "macros": {
      "kcal": 170,
      "protein": "3g",
      "carbs": "16g",
      "fat": "11g",
      "fiber": "3g"
    },
    "why": "dates and cashews replace the caramel and sugar with fiber and healthy fats — the same crunch and chew, none of the junk.",
    "swaps": [
      "cashews → coconut-cream caramel (lighter)."
    ],
    "ingredients": [
      "1 cup dates",
      "¾ cup almond flour",
      "½ cup cashews",
      "2 tbsp coconut oil",
      "100 g dark chocolate"
    ],
    "daypart": "dessert",
    "i18n": {
      "pt": {
        "title": "Barrinhas Twix Saudáveis",
        "desc": "Base amanteigada, caramelo de tâmara e chocolate amargo — o docinho clássico, turbinado.",
        "why": "tâmara e castanha de caju substituem o caramelo e o açúcar por fibras e gorduras boas — o mesmo crocante e a mesma mastigação, sem nenhuma besteira.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Sem açúcar refinado",
          "Sem forno"
        ],
        "ingredients": [
          "1 xícara de tâmaras",
          "¾ xícara de farinha de amêndoas",
          "½ xícara de castanha de caju",
          "2 colheres de sopa de óleo de coco",
          "100 g de chocolate amargo"
        ],
        "steps": [],
        "swaps": [
          "castanha de caju → caramelo de creme de coco (mais leve)."
        ]
      },
      "es": {
        "title": "Barritas Twix Saludables",
        "desc": "Base de galleta, caramelo de dátiles y chocolate negro: la barrita de golosina, mejorada.",
        "why": "los dátiles y los anacardos reemplazan el caramelo y el azúcar con fibra y grasas saludables: la misma textura crujiente y masticable, sin nada de chatarra.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Sin azúcar refinada",
          "Sin horno"
        ],
        "ingredients": [
          "1 taza de dátiles",
          "¾ taza de harina de almendras",
          "½ taza de anacardos",
          "2 cucharadas de aceite de coco",
          "100 g de chocolate negro"
        ],
        "steps": [],
        "swaps": [
          "anacardos → caramelo de crema de coco (más ligero)."
        ]
      },
      "it": {
        "title": "Barrette Twix Salutari",
        "desc": "Frolla, caramello di datteri e cioccolato fondente — la barretta di cioccolato, rivisitata.",
        "why": "datteri e anacardi sostituiscono caramello e zucchero con fibre e grassi buoni — stessa croccantezza e masticosità, senza gli ingredienti superflui.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Senza zuccheri raffinati",
          "Senza cottura"
        ],
        "ingredients": [
          "1 tazza di datteri",
          "¾ di tazza di farina di mandorle",
          "½ tazza di anacardi",
          "2 cucchiai di olio di cocco",
          "100 g di cioccolato fondente"
        ],
        "steps": [],
        "swaps": [
          "anacardi → caramello di crema di cocco (più leggero)."
        ]
      },
      "zh": {
        "title": "健康版Twix巧克力棒",
        "desc": "酥饼底、椰枣焦糖与黑巧克力——经典巧克力棒的升级版。",
        "why": "椰枣与腰果以膳食纤维和健康脂肪取代了焦糖与糖分——同样酥脆有嚼劲，却没有那些多余的成分。",
        "tags": [
          "无麸质",
          "无乳制品",
          "无精制糖",
          "免烤"
        ],
        "ingredients": [
          "1杯椰枣",
          "¾杯杏仁粉",
          "½杯腰果",
          "2汤匙椰子油",
          "100克黑巧克力"
        ],
        "steps": [],
        "swaps": [
          "腰果 → 椰浆焦糖（口感更轻盈）。"
        ]
      },
      "hi": {
        "title": "हेल्दी ट्विक्स बार्स",
        "desc": "शॉर्टब्रेड, खजूर कैरेमल और डार्क चॉकलेट — कैंडी बार, अब बेहतर रूप में।",
        "why": "खजूर और काजू कैरेमल व शुगर की जगह फाइबर और अच्छे फैट्स लाते हैं — वही कुरकुरापन और चबाहट, बिना किसी जंक के।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "रिफाइंड-शुगर-फ्री",
          "नो-बेक"
        ],
        "ingredients": [
          "1 कप खजूर",
          "¾ कप बादाम का आटा",
          "½ कप काजू",
          "2 बड़े चम्मच नारियल तेल",
          "100 ग्राम डार्क चॉकलेट"
        ],
        "steps": [],
        "swaps": [
          "काजू → नारियल-क्रीम कैरेमल (हल्का विकल्प)।"
        ]
      },
      "he": {
        "title": "חטיפי טוויקס בריאים",
        "desc": "שורטברד, קרמל תמרים ושוקולד מריר — חטיף הממתקים, בגרסה משודרגת.",
        "why": "תמרים וקשיו מחליפים את הקרמל והסוכר בסיבים ושומנים בריאים — אותה פריכות ואותה לעיסה, בלי הזבל.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "ללא סוכר מזוקק",
          "ללא אפייה"
        ],
        "ingredients": [
          "1 כוס תמרים",
          "¾ כוס קמח שקדים",
          "½ כוס קשיו",
          "2 כפות שמן קוקוס",
          "100 גרם שוקולד מריר"
        ],
        "steps": [],
        "swaps": [
          "קשיו → קרמל שמנת קוקוס (קליל יותר)."
        ]
      }
    }
  },
  {
    "id": "strawberry-bonbons",
    "title": "Dark Chocolate Strawberry Bonbons",
    "desc": "Fresh strawberries in a snap of dark chocolate — the simplest joy.",
    "image": "/assets/recipes/strawberry-bonbons.png",
    "level": "club",
    "makes": "12",
    "goals": [
      "Sweet cravings",
      "Anti-inflammatory",
      "Protein"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "Refined-sugar-free",
      "5-minute"
    ],
    "macros": {
      "kcal": 74,
      "protein": "1g",
      "carbs": "6g",
      "fat": "6g",
      "fiber": "1g"
    },
    "why": "strawberries add vitamin C and polyphenols under just a thin dark-chocolate shell — the lightest treat in the book.",
    "swaps": [
      "strawberries → grapes or cherries."
    ],
    "ingredients": [
      "1 cup fresh strawberries",
      "120 g dark chocolate",
      "1 tbsp coconut oil"
    ],
    "daypart": "dessert",
    "i18n": {
      "pt": {
        "title": "Bombons de Morango com Chocolate Amargo",
        "desc": "Morangos frescos em uma casquinha crocante de chocolate amargo — a alegria mais simples que existe.",
        "why": "os morangos somam vitamina C e polifenóis sob uma fina casquinha de chocolate amargo — a sobremesa mais leve do livro.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Sem açúcar refinado",
          "5 minutos"
        ],
        "ingredients": [
          "1 xícara de morangos frescos",
          "120 g de chocolate amargo",
          "1 colher de sopa de óleo de coco"
        ],
        "steps": [],
        "swaps": [
          "morangos → uvas ou cerejas."
        ]
      },
      "es": {
        "title": "Bombones de Fresa y Chocolate Negro",
        "desc": "Fresas frescas envueltas en una capa crujiente de chocolate negro: la alegría más simple.",
        "why": "las fresas aportan vitamina C y polifenoles bajo una fina capa de chocolate negro: el antojo más ligero de todos.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Sin azúcar refinada",
          "5 minutos"
        ],
        "ingredients": [
          "1 taza de fresas frescas",
          "120 g de chocolate negro",
          "1 cucharada de aceite de coco"
        ],
        "steps": [],
        "swaps": [
          "fresas → uvas o cerezas."
        ]
      },
      "it": {
        "title": "Bonbon di Fragole al Cioccolato Fondente",
        "desc": "Fragole fresche avvolte in un guscio croccante di cioccolato fondente — la gioia più semplice.",
        "why": "le fragole aggiungono vitamina C e polifenoli sotto un sottile guscio di cioccolato fondente — il dolcetto più leggero del ricettario.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Senza zuccheri raffinati",
          "5 minuti"
        ],
        "ingredients": [
          "1 tazza di fragole fresche",
          "120 g di cioccolato fondente",
          "1 cucchiaio di olio di cocco"
        ],
        "steps": [],
        "swaps": [
          "fragole → uva o ciliegie."
        ]
      },
      "zh": {
        "title": "黑巧克力草莓夹心糖",
        "desc": "新鲜草莓裹上一层脆黑巧克力——最简单的幸福。",
        "why": "草莓在薄薄的黑巧克力外壳下带来维生素C和多酚——本书中最轻盈的小甜点。",
        "tags": [
          "无麸质",
          "无乳制品",
          "无精制糖",
          "5分钟"
        ],
        "ingredients": [
          "1杯新鲜草莓",
          "120克黑巧克力",
          "1汤匙椰子油"
        ],
        "steps": [],
        "swaps": [
          "草莓 → 葡萄或樱桃。"
        ]
      },
      "hi": {
        "title": "डार्क चॉकलेट स्ट्रॉबेरी बॉनबॉन",
        "desc": "डार्क चॉकलेट की कुरकुरी परत में ताज़ी स्ट्रॉबेरी — सबसे सरल खुशी।",
        "why": "स्ट्रॉबेरी एक पतली डार्क-चॉकलेट परत के नीचे विटामिन C और पॉलीफेनॉल्स जोड़ती है — इस किताब की सबसे हल्की मिठाई।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "रिफाइंड-शुगर-फ्री",
          "5-मिनट"
        ],
        "ingredients": [
          "1 कप ताज़ी स्ट्रॉबेरी",
          "120 ग्राम डार्क चॉकलेट",
          "1 बड़ा चम्मच नारियल तेल"
        ],
        "steps": [],
        "swaps": [
          "स्ट्रॉबेरी → अंगूर या चेरी।"
        ]
      },
      "he": {
        "title": "בונבוני תות שוקולד מריר",
        "desc": "תותים טריים בציפוי שוקולד מריר דק — השמחה הפשוטה ביותר.",
        "why": "תותים מוסיפים ויטמין C ופוליפנולים מתחת לקליפה דקה של שוקולד מריר — הממתק הקליל ביותר בספר.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "ללא סוכר מזוקק",
          "5 דקות"
        ],
        "ingredients": [
          "1 כוס תותים טריים",
          "120 גרם שוקולד מריר",
          "1 כף שמן קוקוס"
        ],
        "steps": [],
        "swaps": [
          "תותים → ענבים או דובדבנים."
        ]
      }
    }
  },
  {
    "id": "chocolate-bark",
    "title": "Berry & Nut Chocolate Bark",
    "desc": "Snap, share, repeat — a five-minute showstopper.",
    "image": "/assets/recipes/chocolate-bark.png",
    "level": "club",
    "makes": "16",
    "goals": [
      "Sweet cravings",
      "Anti-inflammatory",
      "Protein"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "Refined-sugar-free",
      "5-minute"
    ],
    "macros": {
      "kcal": 101,
      "protein": "1g",
      "carbs": "7g",
      "fat": "8g",
      "fiber": "2g"
    },
    "why": "dark chocolate, nuts and berries pack antioxidants and healthy fats into every shard — a little goes a long way.",
    "swaps": [
      "hazelnuts → any nut or seed",
      "add flaky salt."
    ],
    "ingredients": [
      "200 g dark chocolate",
      "⅓ cup shredded coconut",
      "½ cup dried mixed berries",
      "¼ cup hazelnuts, chopped"
    ],
    "daypart": "dessert",
    "i18n": {
      "pt": {
        "title": "Casquinha de Chocolate com Frutas Vermelhas e Castanhas",
        "desc": "Quebra, compartilha, repete — o show em cinco minutos.",
        "why": "chocolate amargo, castanhas e frutas vermelhas concentram antioxidantes e gorduras boas em cada pedacinho — um pouco já rende muito.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Sem açúcar refinado",
          "5 minutos"
        ],
        "ingredients": [
          "200 g de chocolate amargo",
          "⅓ xícara de coco ralado",
          "½ xícara de frutas vermelhas desidratadas variadas",
          "¼ xícara de avelãs, picadas"
        ],
        "steps": [],
        "swaps": [
          "avelãs → qualquer castanha ou semente",
          "adicione sal em flocos."
        ]
      },
      "es": {
        "title": "Corteza de Chocolate con Frutos Rojos y Nueces",
        "desc": "Rompe, comparte, repite: una estrella de cinco minutos.",
        "why": "el chocolate negro, los frutos secos y los frutos rojos concentran antioxidantes y grasas saludables en cada trozo: un poco rinde mucho.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Sin azúcar refinada",
          "5 minutos"
        ],
        "ingredients": [
          "200 g de chocolate negro",
          "⅓ taza de coco rallado",
          "½ taza de frutos rojos deshidratados variados",
          "¼ taza de avellanas, picadas"
        ],
        "steps": [],
        "swaps": [
          "avellanas → cualquier fruto seco o semilla",
          "agrega sal en escamas."
        ]
      },
      "it": {
        "title": "Cioccolato a Scaglie con Frutti di Bosco e Frutta Secca",
        "desc": "Spezza, condividi, ripeti — un capolavoro da cinque minuti.",
        "why": "cioccolato fondente, frutta secca e frutti di bosco racchiudono antiossidanti e grassi buoni in ogni scaglia — ne basta poco per saziare.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Senza zuccheri raffinati",
          "5 minuti"
        ],
        "ingredients": [
          "200 g di cioccolato fondente",
          "⅓ di tazza di cocco rapé",
          "½ tazza di frutti di bosco misti essiccati",
          "¼ di tazza di nocciole, tritate"
        ],
        "steps": [],
        "swaps": [
          "nocciole → qualsiasi frutta secca o seme",
          "aggiungi sale in fiocchi."
        ]
      },
      "zh": {
        "title": "莓果坚果巧克力脆片",
        "desc": "掰一块、分享、再来一块——五分钟就能做出的惊艳甜点。",
        "why": "黑巧克力、坚果和莓果把抗氧化物与健康脂肪浓缩进每一片脆片里——一点点就很满足。",
        "tags": [
          "无麸质",
          "无乳制品",
          "无精制糖",
          "5分钟"
        ],
        "ingredients": [
          "200克黑巧克力",
          "⅓杯椰蓉",
          "½杯什锦莓果干",
          "¼杯榛子，切碎"
        ],
        "steps": [],
        "swaps": [
          "榛子 → 任意坚果或种子",
          "加一些片状海盐。"
        ]
      },
      "hi": {
        "title": "बेरी एंड नट चॉकलेट बार्क",
        "desc": "तोड़िए, बांटिए, दोहराइए — पांच मिनट का शोस्टॉपर।",
        "why": "डार्क चॉकलेट, मेवे और बेरीज़ हर टुकड़े में एंटीऑक्सीडेंट्स और अच्छे फैट्स भरते हैं — थोड़ा भी बहुत असर करता है।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "रिफाइंड-शुगर-फ्री",
          "5-मिनट"
        ],
        "ingredients": [
          "200 ग्राम डार्क चॉकलेट",
          "⅓ कप कसा हुआ नारियल",
          "½ कप सूखी मिक्स बेरीज़",
          "¼ कप हेज़लनट, कटे हुए"
        ],
        "steps": [],
        "swaps": [
          "हेज़लनट → कोई भी मेवा या बीज",
          "फ्लेकी नमक डालें।"
        ]
      },
      "he": {
        "title": "טבלת שוקולד עם פירות יער ואגוזים",
        "desc": "שוברים, חולקים, חוזרים — להיט של חמש דקות.",
        "why": "שוקולד מריר, אגוזים ופירות יער אורזים נוגדי חמצון ושומנים בריאים בכל רסיס — קצת הולך רחוק.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "ללא סוכר מזוקק",
          "5 דקות"
        ],
        "ingredients": [
          "200 גרם שוקולד מריר",
          "⅓ כוס קוקוס מגורד",
          "½ כוס תערובת פירות יער מיובשים",
          "¼ כוס אגוזי לוז קצוצים"
        ],
        "steps": [],
        "swaps": [
          "אגוזי לוז → כל אגוז או זרע",
          "להוסיף מלח גס."
        ]
      }
    }
  },
  {
    "id": "carrot-cake",
    "title": "Carrot Cake Bites",
    "desc": "Spiced, chewy and rolled in coconut — carrot cake you can pop.",
    "image": "/assets/recipes/carrot-cake.png",
    "level": "club",
    "makes": "14",
    "goals": [
      "Sweet cravings",
      "Gut health",
      "Protein"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "Refined-sugar-free",
      "No-bake"
    ],
    "macros": {
      "kcal": 90,
      "protein": "2g",
      "carbs": "11g",
      "fat": "5g",
      "fiber": "2g"
    },
    "why": "carrots add fiber and beta-carotene, walnuts bring plant omega-3 — carrot-cake comfort with no flour and no refined sugar.",
    "swaps": [
      "walnuts → pecans",
      "add raisins."
    ],
    "ingredients": [
      "1 cup grated carrot",
      "1 cup dates",
      "¾ cup almond flour",
      "½ cup walnuts",
      "1 tsp cinnamon",
      "Shredded coconut, to roll"
    ],
    "daypart": "dessert",
    "i18n": {
      "pt": {
        "title": "Bocadinhos de Bolo de Cenoura",
        "desc": "Temperado, macio e enrolado em coco — o bolo de cenoura que você come em um bocado.",
        "why": "a cenoura soma fibras e betacaroteno, a noz traz ômega-3 vegetal — todo o conforto do bolo de cenoura, sem farinha e sem açúcar refinado.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Sem açúcar refinado",
          "Sem forno"
        ],
        "ingredients": [
          "1 xícara de cenoura ralada",
          "1 xícara de tâmaras",
          "¾ xícara de farinha de amêndoas",
          "½ xícara de nozes",
          "1 colher de chá de canela",
          "Coco ralado, para enrolar"
        ],
        "steps": [],
        "swaps": [
          "nozes → pecã",
          "adicione uvas-passas."
        ]
      },
      "es": {
        "title": "Bocaditos de Pastel de Zanahoria",
        "desc": "Especiados, masticables y rebozados en coco: pastel de zanahoria en un bocado.",
        "why": "la zanahoria aporta fibra y betacaroteno, las nueces suman omega-3 vegetal: la ternura del pastel de zanahoria sin harina ni azúcar refinada.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Sin azúcar refinada",
          "Sin horno"
        ],
        "ingredients": [
          "1 taza de zanahoria rallada",
          "1 taza de dátiles",
          "¾ taza de harina de almendras",
          "½ taza de nueces",
          "1 cucharadita de canela",
          "Coco rallado, para rebozar"
        ],
        "steps": [],
        "swaps": [
          "nueces → nueces pecanas",
          "agrega pasas."
        ]
      },
      "it": {
        "title": "Bocconcini di Carrot Cake",
        "desc": "Speziati, masticabili e rotolati nel cocco — la carrot cake da gustare in un boccone.",
        "why": "le carote aggiungono fibre e beta-carotene, le noci apportano omega-3 vegetali — il comfort della carrot cake senza farina e senza zuccheri raffinati.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Senza zuccheri raffinati",
          "Senza cottura"
        ],
        "ingredients": [
          "1 tazza di carota grattugiata",
          "1 tazza di datteri",
          "¾ di tazza di farina di mandorle",
          "½ tazza di noci",
          "1 cucchiaino di cannella",
          "Cocco rapé, per rotolare"
        ],
        "steps": [],
        "swaps": [
          "noci → noci pecan",
          "aggiungi uvetta."
        ]
      },
      "zh": {
        "title": "胡萝卜蛋糕能量球",
        "desc": "香料味十足、有嚼劲，外裹椰蓉——一口一个的胡萝卜蛋糕。",
        "why": "胡萝卜带来膳食纤维和β-胡萝卜素，核桃提供植物来源的omega-3——胡萝卜蛋糕的满足感，却不含面粉和精制糖。",
        "tags": [
          "无麸质",
          "无乳制品",
          "无精制糖",
          "免烤"
        ],
        "ingredients": [
          "1杯胡萝卜丝",
          "1杯椰枣",
          "¾杯杏仁粉",
          "½杯核桃",
          "1茶匙肉桂粉",
          "椰蓉，用于裹球"
        ],
        "steps": [],
        "swaps": [
          "核桃 → 山核桃",
          "加入葡萄干。"
        ]
      },
      "hi": {
        "title": "कैरट केक बाइट्स",
        "desc": "मसालेदार, चबाने वाली और नारियल में लिपटी — कैरट केक जिसे आप एक बाइट में खा सकें।",
        "why": "गाजर फाइबर और बीटा-कैरोटीन जोड़ती है, अखरोट पौधे-आधारित ओमेगा-3 लाते हैं — कैरट-केक का पूरा आराम, बिना मैदे और बिना रिफाइंड शुगर के।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "रिफाइंड-शुगर-फ्री",
          "नो-बेक"
        ],
        "ingredients": [
          "1 कप कद्दूकस की हुई गाजर",
          "1 कप खजूर",
          "¾ कप बादाम का आटा",
          "½ कप अखरोट",
          "1 छोटा चम्मच दालचीनी",
          "बेलने के लिए कसा हुआ नारियल"
        ],
        "steps": [],
        "swaps": [
          "अखरोट → पीकन",
          "किशमिश डालें।"
        ]
      },
      "he": {
        "title": "ביסי עוגת גזר",
        "desc": "מתובל, לעיס ומגולגל בקוקוס — עוגת גזר שאפשר לקפוץ עליה.",
        "why": "גזר מוסיף סיבים ובטא-קרוטן, אגוזי מלך מביאים אומגה 3 מהצומח — נחמת עוגת גזר בלי קמח ובלי סוכר מזוקק.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "ללא סוכר מזוקק",
          "ללא אפייה"
        ],
        "ingredients": [
          "1 כוס גזר מגורר",
          "1 כוס תמרים",
          "¾ כוס קמח שקדים",
          "½ כוס אגוזי מלך",
          "1 כפית קינמון",
          "קוקוס מגורד, לגלגול"
        ],
        "steps": [],
        "swaps": [
          "אגוזי מלך → פקאן",
          "להוסיף צימוקים."
        ]
      }
    }
  },
  {
    "id": "bfast-protein-oats",
    "title": "Vanilla Protein Overnight Oats",
    "desc": "Creamy jar of oats you build the night before and grab on the way out — steady fuel that eats like dessert.",
    "image": "/assets/recipes/bfast-protein-oats.png",
    "level": "free",
    "daypart": "breakfast",
    "makes": "1",
    "goals": [
      "Energy",
      "Protein"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "High-protein",
      "Meal-prep"
    ],
    "macros": {
      "kcal": 500,
      "protein": "34g",
      "carbs": "52g",
      "fat": "19g",
      "fiber": "11g"
    },
    "why": "Slow-digesting oats and chia give a gradual glucose release for sustained morning energy, while the protein and almond butter add staying power that helps blunt the mid-morning crash.",
    "swaps": [
      "whey protein → plant protein (vegan)",
      "almond butter → sunflower seed butter (nut-free)",
      "rolled oats → certified gluten-free oats (celiac-safe)"
    ],
    "ingredients": [
      "1/2 cup rolled oats",
      "1 scoop vanilla protein powder",
      "1 cup unsweetened almond milk",
      "1 tbsp chia seeds",
      "1 tbsp almond butter",
      "1/2 banana, sliced",
      "1/2 tsp cinnamon"
    ],
    "steps": [
      "Stir oats, protein powder, chia, and cinnamon together in a jar.",
      "Pour in almond milk and mix until no dry pockets remain.",
      "Swirl in the almond butter and press the banana slices on top.",
      "Seal and refrigerate at least 6 hours or overnight.",
      "Stir and eat cold, or warm briefly if you prefer."
    ],
    "i18n": {
      "pt": {
        "title": "Aveia Overnight de Baunilha com Proteína",
        "desc": "Um potinho cremoso de aveia que você monta na noite anterior e leva na correria — combustível estável que parece sobremesa.",
        "why": "A aveia e a chia, de digestão lenta, liberam glicose de forma gradual para uma energia sustentada pela manhã, enquanto a proteína e a pasta de amêndoas dão fôlego extra que ajuda a evitar aquele baque no meio da manhã.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Rico em proteína",
          "Meal-prep"
        ],
        "ingredients": [
          "1/2 xícara de aveia em flocos",
          "1 dose de proteína em pó sabor baunilha",
          "1 xícara de leite de amêndoas sem açúcar",
          "1 colher de sopa de sementes de chia",
          "1 colher de sopa de pasta de amêndoas",
          "1/2 banana, fatiada",
          "1/2 colher de chá de canela"
        ],
        "steps": [
          "Misture a aveia, a proteína em pó, a chia e a canela em um potinho.",
          "Acrescente o leite de amêndoas e misture até não sobrar nenhum pedacinho seco.",
          "Misture a pasta de amêndoas e pressione as fatias de banana por cima.",
          "Tampe e leve à geladeira por pelo menos 6 horas ou durante a noite.",
          "Misture e coma gelado, ou aqueça rapidamente se preferir."
        ],
        "swaps": [
          "whey protein → proteína vegetal (vegano)",
          "pasta de amêndoas → pasta de sementes de girassol (sem oleaginosas)",
          "aveia em flocos → aveia certificada sem glúten (segura para celíacos)"
        ]
      },
      "es": {
        "title": "Avena Overnight de Vainilla con Proteína",
        "desc": "Un frasco cremoso de avena que preparas la noche anterior y te llevas al salir: combustible constante que sabe a postre.",
        "why": "La avena y la chía, de digestión lenta, liberan glucosa de forma gradual para una energía matutina sostenida, mientras que la proteína y la mantequilla de almendra suman poder de saciedad que ayuda a amortiguar el bajón de media mañana.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Alto en proteína",
          "Ideal para meal-prep"
        ],
        "ingredients": [
          "1/2 taza de avena en hojuelas",
          "1 scoop de proteína en polvo sabor vainilla",
          "1 taza de leche de almendras sin endulzar",
          "1 cucharada de semillas de chía",
          "1 cucharada de mantequilla de almendra",
          "1/2 plátano, en rodajas",
          "1/2 cucharadita de canela"
        ],
        "steps": [
          "Mezcla la avena, la proteína en polvo, la chía y la canela en un frasco.",
          "Vierte la leche de almendras y mezcla hasta que no queden grumos secos.",
          "Incorpora la mantequilla de almendra formando espirales y presiona las rodajas de plátano encima.",
          "Tapa y refrigera al menos 6 horas o toda la noche.",
          "Revuelve y come frío, o calienta brevemente si lo prefieres."
        ],
        "swaps": [
          "proteína de suero → proteína vegetal (vegano)",
          "mantequilla de almendra → mantequilla de semillas de girasol (sin frutos secos)",
          "avena en hojuelas → avena certificada sin gluten (apta para celíacos)"
        ]
      },
      "it": {
        "title": "Overnight Oats Proteici alla Vaniglia",
        "desc": "Un vasetto cremoso di avena da preparare la sera prima e portare via al volo — energia costante che sa di dessert.",
        "why": "L'avena e la chia, a digestione lenta, rilasciano gradualmente glucosio per un'energia mattutina costante, mentre le proteine e il burro di mandorle aggiungono sazietà che aiuta a smorzare il calo di metà mattina.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Ricco di proteine",
          "Meal-prep"
        ],
        "ingredients": [
          "1/2 tazza di fiocchi d'avena",
          "1 misurino di proteine in polvere alla vaniglia",
          "1 tazza di latte di mandorla non zuccherato",
          "1 cucchiaio di semi di chia",
          "1 cucchiaio di burro di mandorle",
          "1/2 banana, a fette",
          "1/2 cucchiaino di cannella"
        ],
        "steps": [
          "Mescola avena, proteine in polvere, chia e cannella in un vasetto.",
          "Versa il latte di mandorla e mescola finché non restano parti asciutte.",
          "Incorpora il burro di mandorle e premi le fette di banana sopra.",
          "Chiudi e metti in frigo per almeno 6 ore o per tutta la notte.",
          "Mescola e gusta freddo, oppure scalda brevemente se preferisci."
        ],
        "swaps": [
          "proteine whey → proteine vegetali (vegano)",
          "burro di mandorle → burro di semi di girasole (senza frutta a guscio)",
          "fiocchi d'avena → avena certificata senza glutine (sicura per celiaci)"
        ]
      },
      "zh": {
        "title": "香草蛋白隔夜燕麦",
        "desc": "前一晚准备好、出门前顺手带走的绵密燕麦罐——吃起来像甜点，却能提供稳定的能量。",
        "why": "燕麦和奇亚籽消化缓慢，能让血糖平稳释放、提供持续一上午的能量，蛋白粉和杏仁酱则增加饱腹感，帮助减少上午中段的疲惫感。",
        "tags": [
          "无麸质",
          "无乳制品",
          "高蛋白",
          "备餐友好"
        ],
        "ingredients": [
          "½杯燕麦片",
          "1勺香草蛋白粉",
          "1杯无糖杏仁奶",
          "1汤匙奇亚籽",
          "1汤匙杏仁酱",
          "½根香蕉，切片",
          "½茶匙肉桂粉"
        ],
        "steps": [
          "把燕麦片、蛋白粉、奇亚籽和肉桂粉一起放入罐子中拌匀。",
          "倒入杏仁奶，搅拌至没有干粉结块。",
          "拌入杏仁酱，再把香蕉片铺在最上层。",
          "盖好放入冰箱冷藏至少6小时，或过夜。",
          "搅拌后可直接冷食，或稍微加热后享用。"
        ],
        "swaps": [
          "乳清蛋白 → 植物蛋白（纯素）",
          "杏仁酱 → 葵花籽酱（无坚果）",
          "燕麦片 → 认证无麸质燕麦片（乳糜泻友好）"
        ]
      },
      "hi": {
        "title": "वैनिला प्रोटीन ओवरनाइट ओट्स",
        "desc": "रात पहले तैयार किया मलाईदार ओट्स का जार, निकलते वक्त बस उठाकर ले जाइए — मिठाई जैसा स्वाद देने वाला स्थिर ईंधन।",
        "why": "धीरे पचने वाले ओट्स और चिया सुबह भर स्थिर ऊर्जा के लिए ग्लूकोज़ को धीरे-धीरे रिलीज़ करते हैं, जबकि प्रोटीन और बादाम बटर टिकने की ताकत जोड़ते हैं जो मिड-मॉर्निंग क्रैश को रोकने में मदद करती है।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "हाई-प्रोटीन",
          "मील-प्रेप"
        ],
        "ingredients": [
          "1/2 कप रोल्ड ओट्स",
          "1 स्कूप वैनिला प्रोटीन पाउडर",
          "1 कप बिना मीठा बादाम दूध",
          "1 बड़ा चम्मच चिया बीज",
          "1 बड़ा चम्मच बादाम बटर",
          "1/2 केला, कटा हुआ",
          "1/2 छोटा चम्मच दालचीनी"
        ],
        "steps": [
          "एक जार में ओट्स, प्रोटीन पाउडर, चिया और दालचीनी मिलाएं।",
          "बादाम दूध डालें और तब तक मिलाएं जब तक कोई सूखा हिस्सा न बचे।",
          "बादाम बटर घुमाकर मिलाएं और ऊपर केले के टुकड़े दबाकर रखें।",
          "ढककर कम से कम 6 घंटे या रातभर फ्रिज में रखें।",
          "मिलाकर ठंडा खाएं, या चाहें तो हल्का गर्म करके खाएं।"
        ],
        "swaps": [
          "व्हे प्रोटीन → प्लांट प्रोटीन (वीगन)",
          "बादाम बटर → सूरजमुखी बीज बटर (नट-फ्री)",
          "रोल्ड ओट्स → सर्टिफाइड ग्लूटेन-फ्री ओट्स (सीलिएक-सेफ)"
        ]
      },
      "he": {
        "title": "שיבולת שועל לילית עם חלבון ווניל",
        "desc": "צנצנת שיבולת שועל קרמית שמכינים בערב ולוקחים בדרך החוצה — דלק יציב שטועם כמו קינוח.",
        "why": "שיבולת שועל וזרעי צ'יה משתחררים לאט ומעניקים שחרור גלוקוז הדרגתי לאנרגיה יציבה בבוקר, בעוד החלבון וחמאת השקדים מוסיפים כוח החזקה שעוזר לרכך את הקריסה של אמצע הבוקר.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "עתיר חלבון",
          "הכנה מראש"
        ],
        "ingredients": [
          "½ כוס שיבולת שועל",
          "1 מנת אבקת חלבון בטעם וניל",
          "1 כוס חלב שקדים ללא סוכר",
          "1 כף זרעי צ'יה",
          "1 כף חמאת שקדים",
          "½ בננה, פרוסה",
          "½ כפית קינמון"
        ],
        "steps": [
          "לערבב את שיבולת השועל, אבקת החלבון, הצ'יה והקינמון יחד בצנצנת.",
          "למזוג את חלב השקדים ולערבב עד שלא נשארים כיסי אבקה.",
          "לערבל פנימה את חמאת השקדים וללחוץ את פרוסות הבננה מלמעלה.",
          "לסגור ולקרר במקרר לפחות 6 שעות או לילה שלם.",
          "לערבב ולאכול קר, או לחמם קלות אם מעדיפים."
        ],
        "swaps": [
          "חלבון מי גבינה → חלבון צמחי (טבעוני)",
          "חמאת שקדים → חמאת גרעיני חמנייה (ללא אגוזים)",
          "שיבולת שועל → שיבולת שועל ללא גלוטן מוסמכת (בטוח לצליאקים)"
        ]
      }
    }
  },
  {
    "id": "bfast-berry-chia-pudding",
    "title": "Berry Vanilla Chia Pudding",
    "desc": "A spoonable jar of vanilla-scented chia layered with bright berries — set it and forget it.",
    "image": "/assets/recipes/bfast-berry-chia-pudding.png",
    "level": "club",
    "daypart": "breakfast",
    "makes": "1",
    "goals": [
      "Gut health",
      "Anti-inflammatory"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "Vegan",
      "High-fiber",
      "Meal-prep"
    ],
    "macros": {
      "kcal": 340,
      "protein": "7g",
      "carbs": "49g",
      "fat": "13g",
      "fiber": "20g"
    },
    "why": "Chia's soluble fiber forms a gel that feeds beneficial gut bacteria and supports regularity, while the polyphenol-rich berries are traditionally linked to lower everyday inflammation.",
    "swaps": [
      "almond milk → oat milk (nut-free)",
      "maple syrup → mashed date (refined-sugar-free)",
      "mixed berries → chopped mango (whatever's in season)"
    ],
    "ingredients": [
      "3 tbsp chia seeds",
      "1 cup unsweetened almond milk",
      "1/2 tsp vanilla extract",
      "1 tbsp maple syrup",
      "1/2 cup mixed berries",
      "1 kiwi, diced"
    ],
    "steps": [
      "Whisk chia, almond milk, vanilla, and maple in a jar.",
      "Wait 5 minutes, then whisk again to break up any clumps.",
      "Cover and chill at least 3 hours until thick and set.",
      "Top with the berries and kiwi just before serving."
    ],
    "i18n": {
      "pt": {
        "title": "Pudim de Chia com Baunilha e Frutas Vermelhas",
        "desc": "Um potinho de colher com chia perfumada de baunilha e camadas de frutas vermelhas vibrantes — prepare e esqueça.",
        "why": "A fibra solúvel da chia forma um gel que alimenta as bactérias benéficas do intestino e favorece a regularidade, enquanto as frutas vermelhas, ricas em polifenóis, são tradicionalmente associadas a uma inflamação cotidiana mais baixa.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Vegano",
          "Rico em fibras",
          "Meal-prep"
        ],
        "ingredients": [
          "3 colheres de sopa de sementes de chia",
          "1 xícara de leite de amêndoas sem açúcar",
          "1/2 colher de chá de extrato de baunilha",
          "1 colher de sopa de xarope de bordo",
          "1/2 xícara de frutas vermelhas variadas",
          "1 kiwi, picado"
        ],
        "steps": [
          "Misture a chia, o leite de amêndoas, a baunilha e o xarope de bordo em um potinho.",
          "Espere 5 minutos e misture novamente para desfazer grumos.",
          "Tampe e leve à geladeira por pelo menos 3 horas, até engrossar e firmar.",
          "Finalize com as frutas vermelhas e o kiwi na hora de servir."
        ],
        "swaps": [
          "leite de amêndoas → leite de aveia (sem oleaginosas)",
          "xarope de bordo → tâmara amassada (sem açúcar refinado)",
          "frutas vermelhas → manga picada (o que estiver na estação)"
        ]
      },
      "es": {
        "title": "Pudín de Chía con Vainilla y Frutos Rojos",
        "desc": "Un frasco de chía perfumada con vainilla, en capas con frutos rojos vibrantes: prepáralo y olvídate.",
        "why": "La fibra soluble de la chía forma un gel que alimenta a las bacterias intestinales beneficiosas y favorece la regularidad, mientras que los frutos rojos, ricos en polifenoles, se asocian tradicionalmente con una menor inflamación cotidiana.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Vegano",
          "Alto en fibra",
          "Ideal para meal-prep"
        ],
        "ingredients": [
          "3 cucharadas de semillas de chía",
          "1 taza de leche de almendras sin endulzar",
          "1/2 cucharadita de extracto de vainilla",
          "1 cucharada de jarabe de arce",
          "1/2 taza de frutos rojos variados",
          "1 kiwi, en cubos"
        ],
        "steps": [
          "Bate la chía, la leche de almendras, la vainilla y el jarabe de arce en un frasco.",
          "Espera 5 minutos y vuelve a batir para deshacer los grumos.",
          "Tapa y refrigera al menos 3 horas hasta que espese y cuaje.",
          "Cubre con los frutos rojos y el kiwi justo antes de servir."
        ],
        "swaps": [
          "leche de almendras → leche de avena (sin frutos secos)",
          "jarabe de arce → dátil triturado (sin azúcar refinada)",
          "frutos rojos variados → mango picado (lo que esté de temporada)"
        ]
      },
      "it": {
        "title": "Chia Pudding alla Vaniglia e Frutti di Bosco",
        "desc": "Un vasetto da gustare a cucchiaiate di chia profumata alla vaniglia con strati di frutti di bosco vivaci — si prepara e si dimentica.",
        "why": "La fibra solubile della chia forma un gel che nutre i batteri intestinali benefici e favorisce la regolarità, mentre i frutti di bosco ricchi di polifenoli sono tradizionalmente associati a una minore infiammazione quotidiana.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Vegano",
          "Ricco di fibre",
          "Meal-prep"
        ],
        "ingredients": [
          "3 cucchiai di semi di chia",
          "1 tazza di latte di mandorla non zuccherato",
          "1/2 cucchiaino di estratto di vaniglia",
          "1 cucchiaio di sciroppo d'acero",
          "1/2 tazza di frutti di bosco misti",
          "1 kiwi, a cubetti"
        ],
        "steps": [
          "Sbatti chia, latte di mandorla, vaniglia e sciroppo d'acero in un vasetto.",
          "Aspetta 5 minuti, poi sbatti di nuovo per rompere eventuali grumi.",
          "Copri e metti in frigo per almeno 3 ore, finché non si addensa.",
          "Guarnisci con i frutti di bosco e il kiwi appena prima di servire."
        ],
        "swaps": [
          "latte di mandorla → latte d'avena (senza frutta a guscio)",
          "sciroppo d'acero → dattero schiacciato (senza zuccheri raffinati)",
          "frutti di bosco misti → mango a cubetti (secondo la stagione)"
        ]
      },
      "zh": {
        "title": "莓果香草奇亚籽布丁",
        "desc": "带着香草香气的奇亚籽布丁，层层叠上鲜艳莓果——做好放着就行，无需盯着。",
        "why": "奇亚籽中的可溶性膳食纤维会形成凝胶，滋养有益肠道菌群、帮助维持规律排便，富含多酚的莓果在传统上则与降低日常炎症水平有关。",
        "tags": [
          "无麸质",
          "无乳制品",
          "纯素",
          "高纤维",
          "备餐友好"
        ],
        "ingredients": [
          "3汤匙奇亚籽",
          "1杯无糖杏仁奶",
          "½茶匙香草精",
          "1汤匙枫糖浆",
          "½杯什锦莓果",
          "1个猕猴桃，切丁"
        ],
        "steps": [
          "把奇亚籽、杏仁奶、香草精和枫糖浆在罐子中搅拌均匀。",
          "静置5分钟，再次搅拌以打散结块。",
          "盖好冷藏至少3小时，直到变稠定型。",
          "食用前再铺上莓果和猕猴桃。"
        ],
        "swaps": [
          "杏仁奶 → 燕麦奶（无坚果）",
          "枫糖浆 → 椰枣泥（无精制糖）",
          "什锦莓果 → 芒果丁（应季水果皆可）"
        ]
      },
      "hi": {
        "title": "बेरी वैनिला चिया पुडिंग",
        "desc": "वैनिला की खुशबू वाला चम्मच से खाने लायक चिया जार, चटख बेरीज़ की परतों के साथ — तैयार करें और भूल जाएं।",
        "why": "चिया का घुलनशील फाइबर एक जेल बनाता है जो लाभकारी आंत बैक्टीरिया को पोषण देता है और नियमितता को सहारा देता है, जबकि पॉलीफेनॉल-समृद्ध बेरीज़ पारंपरिक रूप से रोज़मर्रा की सूजन कम करने से जुड़ी मानी जाती हैं।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "वीगन",
          "हाई-फाइबर",
          "मील-प्रेप"
        ],
        "ingredients": [
          "3 बड़े चम्मच चिया बीज",
          "1 कप बिना मीठा बादाम दूध",
          "1/2 छोटा चम्मच वैनिला एक्सट्रैक्ट",
          "1 बड़ा चम्मच मेपल सिरप",
          "1/2 कप मिक्स बेरीज़",
          "1 कीवी, कटा हुआ"
        ],
        "steps": [
          "एक जार में चिया, बादाम दूध, वैनिला और मेपल सिरप को फेंटें।",
          "5 मिनट रुकें, फिर गुठलियां तोड़ने के लिए दोबारा फेंटें।",
          "ढककर कम से कम 3 घंटे तक फ्रिज में रखें जब तक गाढ़ा न जम जाए।",
          "परोसने से ठीक पहले बेरीज़ और कीवी ऊपर से डालें।"
        ],
        "swaps": [
          "बादाम दूध → ओट दूध (नट-फ्री)",
          "मेपल सिरप → मैश किया हुआ खजूर (रिफाइंड-शुगर-फ्री)",
          "मिक्स बेरीज़ → कटा हुआ आम (जो भी मौसम में हो)"
        ]
      },
      "he": {
        "title": "פודינג צ'יה וניל עם פירות יער",
        "desc": "צנצנת אכילה בכפית של צ'יה בניחוח וניל בשכבות עם פירות יער בהירים — מכינים ושוכחים.",
        "why": "הסיבים המסיסים בצ'יה יוצרים ג'ל שמזין חיידקים מועילים במעי ותומך בסדירות, בעוד פירות היער העשירים בפוליפנולים קשורים באופן מסורתי לרמת דלקת יומיומית נמוכה יותר.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "טבעוני",
          "עתיר סיבים",
          "הכנה מראש"
        ],
        "ingredients": [
          "3 כפות זרעי צ'יה",
          "1 כוס חלב שקדים ללא סוכר",
          "½ כפית תמצית וניל",
          "1 כף סירופ מייפל",
          "½ כוס תערובת פירות יער",
          "1 קיווי, קצוץ לקוביות"
        ],
        "steps": [
          "לטרוף את הצ'יה, חלב השקדים, הוניל והמייפל בצנצנת.",
          "לחכות 5 דקות, ואז לטרוף שוב כדי לפרק גושים.",
          "לכסות ולקרר במקרר לפחות 3 שעות עד שמתעבה ומתייצב.",
          "לקשט בפירות היער והקיווי ממש לפני ההגשה."
        ],
        "swaps": [
          "חלב שקדים → חלב שיבולת שועל (ללא אגוזים)",
          "סירופ מייפל → תמר מרוסק (ללא סוכר מזוקק)",
          "תערובת פירות יער → מנגו קצוץ (מה שבעונה)"
        ]
      }
    }
  },
  {
    "id": "bfast-banana-protein-pancakes",
    "title": "Fluffy Banana Protein Pancakes",
    "desc": "Naturally sweet, oat-flour pancakes with a real protein boost — no refined flour, all the fluff.",
    "image": "/assets/recipes/bfast-banana-protein-pancakes.png",
    "level": "club",
    "daypart": "breakfast",
    "makes": "2",
    "goals": [
      "Protein",
      "Energy"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "High-protein",
      "Refined-sugar-free"
    ],
    "macros": {
      "kcal": 278,
      "protein": "22g",
      "carbs": "32g",
      "fat": "7g",
      "fiber": "4g"
    },
    "why": "Whole eggs and protein powder deliver a complete amino-acid profile to support muscle repair and morning satiety, while oat flour and banana keep the carbs whole and slow-releasing.",
    "swaps": [
      "eggs → 2 flax eggs (vegan)",
      "whey protein → plant protein (dairy-free)",
      "oat flour → almond flour (grain-free, denser)"
    ],
    "ingredients": [
      "2 large eggs",
      "1 ripe banana",
      "1/2 cup oat flour",
      "1 scoop vanilla protein powder",
      "1 tsp baking powder",
      "1/2 tsp cinnamon",
      "Coconut oil, for the pan"
    ],
    "steps": [
      "Mash the banana, then whisk in the eggs until smooth.",
      "Stir in oat flour, protein powder, baking powder, and cinnamon.",
      "Let the batter rest 5 minutes to thicken.",
      "Cook 1/4-cup pools on a lightly oiled skillet over medium heat.",
      "Flip when bubbles form on top; cook until golden and serve warm."
    ],
    "i18n": {
      "pt": {
        "title": "Panquecas Fofinhas de Banana com Proteína",
        "desc": "Panquecas de farinha de aveia, naturalmente doces e com um verdadeiro reforço de proteína — sem farinha refinada, toda a fofura.",
        "why": "Os ovos inteiros e a proteína em pó entregam um perfil completo de aminoácidos que apoia a recuperação muscular e a saciedade pela manhã, enquanto a farinha de aveia e a banana mantêm os carboidratos integrais e de liberação lenta.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Rico em proteína",
          "Sem açúcar refinado"
        ],
        "ingredients": [
          "2 ovos grandes",
          "1 banana madura",
          "1/2 xícara de farinha de aveia",
          "1 dose de proteína em pó sabor baunilha",
          "1 colher de chá de fermento em pó",
          "1/2 colher de chá de canela",
          "Óleo de coco, para a frigideira"
        ],
        "steps": [
          "Amasse a banana e bata com os ovos até ficar homogêneo.",
          "Misture a farinha de aveia, a proteína em pó, o fermento e a canela.",
          "Deixe a massa descansar 5 minutos para engrossar.",
          "Despeje porções de 1/4 de xícara em uma frigideira levemente untada, em fogo médio.",
          "Vire quando surgirem bolhas na superfície; cozinhe até dourar e sirva quente."
        ],
        "swaps": [
          "ovos → 2 ovos de linhaça (vegano)",
          "whey protein → proteína vegetal (sem lactose)",
          "farinha de aveia → farinha de amêndoas (sem grãos, mais densa)"
        ]
      },
      "es": {
        "title": "Panqueques Esponjosos de Plátano con Proteína",
        "desc": "Panqueques de harina de avena, naturalmente dulces y con un verdadero impulso de proteína: sin harina refinada y con toda la esponjosidad.",
        "why": "Los huevos enteros y la proteína en polvo aportan un perfil completo de aminoácidos que favorece la reparación muscular y la saciedad matutina, mientras que la harina de avena y el plátano mantienen los carbohidratos integrales y de liberación lenta.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Alto en proteína",
          "Sin azúcar refinada"
        ],
        "ingredients": [
          "2 huevos grandes",
          "1 plátano maduro",
          "1/2 taza de harina de avena",
          "1 scoop de proteína en polvo sabor vainilla",
          "1 cucharadita de polvo de hornear",
          "1/2 cucharadita de canela",
          "Aceite de coco, para la sartén"
        ],
        "steps": [
          "Machaca el plátano y bate con los huevos hasta que quede homogéneo.",
          "Incorpora la harina de avena, la proteína en polvo, el polvo de hornear y la canela.",
          "Deja reposar la mezcla 5 minutos para que espese.",
          "Cocina porciones de 1/4 de taza en una sartén ligeramente aceitada a fuego medio.",
          "Voltea cuando se formen burbujas en la superficie; cocina hasta dorar y sirve caliente."
        ],
        "swaps": [
          "huevos → 2 huevos de lino (vegano)",
          "proteína de suero → proteína vegetal (sin lácteos)",
          "harina de avena → harina de almendras (sin granos, más densos)"
        ]
      },
      "it": {
        "title": "Pancake Proteici Soffici alla Banana",
        "desc": "Pancake naturalmente dolci a base di farina d'avena con una vera carica proteica — niente farina raffinata, tutta la sofficità.",
        "why": "Le uova intere e le proteine in polvere forniscono un profilo aminoacidico completo per sostenere il recupero muscolare e la sazietà mattutina, mentre la farina d'avena e la banana mantengono i carboidrati integri e a rilascio lento.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Ricco di proteine",
          "Senza zuccheri raffinati"
        ],
        "ingredients": [
          "2 uova grandi",
          "1 banana matura",
          "1/2 tazza di farina d'avena",
          "1 misurino di proteine in polvere alla vaniglia",
          "1 cucchiaino di lievito in polvere",
          "1/2 cucchiaino di cannella",
          "Olio di cocco, per la padella"
        ],
        "steps": [
          "Schiaccia la banana, poi sbatti con le uova fino a ottenere un composto liscio.",
          "Incorpora la farina d'avena, le proteine in polvere, il lievito e la cannella.",
          "Lascia riposare la pastella 5 minuti perché si addensi.",
          "Cuoci porzioni da 1/4 di tazza in una padella leggermente unta a fuoco medio.",
          "Gira quando si formano bollicine in superficie; cuoci finché non sono dorati e servi caldi."
        ],
        "swaps": [
          "uova → 2 uova di lino (vegano)",
          "proteine whey → proteine vegetali (senza latticini)",
          "farina d'avena → farina di mandorle (senza cereali, più densa)"
        ]
      },
      "zh": {
        "title": "蓬松香蕉蛋白松饼",
        "desc": "天然香甜的燕麦粉松饼，蛋白质满满——不含精制面粉，蓬松感一点不少。",
        "why": "全蛋和蛋白粉提供完整的氨基酸谱，帮助肌肉修复并增加早晨的饱腹感，燕麦粉和香蕉则让碳水化合物保持完整、缓慢释放。",
        "tags": [
          "无麸质",
          "无乳制品",
          "高蛋白",
          "无精制糖"
        ],
        "ingredients": [
          "2个大鸡蛋",
          "1根熟香蕉",
          "½杯燕麦粉",
          "1勺香草蛋白粉",
          "1茶匙泡打粉",
          "½茶匙肉桂粉",
          "椰子油，用于煎锅"
        ],
        "steps": [
          "把香蕉压成泥，加入鸡蛋搅拌至顺滑。",
          "拌入燕麦粉、蛋白粉、泡打粉和肉桂粉。",
          "让面糊静置5分钟变浓稠。",
          "用中火在薄涂油的煎锅上，每份约¼杯面糊煎制。",
          "表面出现气泡时翻面，煎至金黄后趁热享用。"
        ],
        "swaps": [
          "鸡蛋 → 2份亚麻籽蛋（纯素）",
          "乳清蛋白 → 植物蛋白（无乳制品）",
          "燕麦粉 → 杏仁粉（无谷物，口感更扎实）"
        ]
      },
      "hi": {
        "title": "फ्लफी बनाना प्रोटीन पैनकेक्स",
        "desc": "प्राकृतिक रूप से मीठे, ओट-आटे से बने पैनकेक्स असली प्रोटीन बूस्ट के साथ — बिना रिफाइंड आटे के, पूरी फूलनदार बनावट के साथ।",
        "why": "साबुत अंडे और प्रोटीन पाउडर मांसपेशियों की मरम्मत और सुबह की तृप्ति को सहारा देने के लिए पूरा एमिनो-एसिड प्रोफाइल देते हैं, जबकि ओट का आटा और केला कार्ब्स को साबुत और धीरे रिलीज़ होने वाला रखते हैं।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "हाई-प्रोटीन",
          "रिफाइंड-शुगर-फ्री"
        ],
        "ingredients": [
          "2 बड़े अंडे",
          "1 पका केला",
          "1/2 कप ओट का आटा",
          "1 स्कूप वैनिला प्रोटीन पाउडर",
          "1 छोटा चम्मच बेकिंग पाउडर",
          "1/2 छोटा चम्मच दालचीनी",
          "पैन के लिए नारियल तेल"
        ],
        "steps": [
          "केले को मैश करें, फिर अंडे डालकर तब तक फेंटें जब तक मिश्रण चिकना न हो जाए।",
          "ओट का आटा, प्रोटीन पाउडर, बेकिंग पाउडर और दालचीनी मिलाएं।",
          "घोल को गाढ़ा होने के लिए 5 मिनट आराम दें।",
          "मध्यम आंच पर हल्के तेल लगे तवे पर 1/4-कप के गोले बनाकर पकाएं।",
          "जब ऊपर बुलबुले बनें तो पलटें; सुनहरा होने तक पकाएं और गर्म-गर्म परोसें।"
        ],
        "swaps": [
          "अंडे → 2 फ्लैक्स एग्स (वीगन)",
          "व्हे प्रोटीन → प्लांट प्रोटीन (डेयरी-फ्री)",
          "ओट का आटा → बादाम का आटा (अनाज-रहित, गाढ़ा)"
        ]
      },
      "he": {
        "title": "פנקייק חלבון בננה תפוח",
        "desc": "פנקייק קמח שיבולת שועל, מתוק באופן טבעי עם דחיפת חלבון אמיתית — בלי קמח מזוקק, עם כל התפיחות.",
        "why": "ביצים שלמות ואבקת חלבון מספקות פרופיל חומצות אמינו מלא לתמיכה בשיקום שריר ובתחושת שובע בבוקר, בעוד קמח שיבולת השועל והבננה שומרים על הפחמימות שלמות ומשתחררות לאט.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "עתיר חלבון",
          "ללא סוכר מזוקק"
        ],
        "ingredients": [
          "2 ביצים גדולות",
          "1 בננה בשלה",
          "½ כוס קמח שיבולת שועל",
          "1 מנת אבקת חלבון בטעם וניל",
          "1 כפית אבקת אפייה",
          "½ כפית קינמון",
          "שמן קוקוס, למחבת"
        ],
        "steps": [
          "למעוך את הבננה, ואז לטרוף פנימה את הביצים עד חלק.",
          "לערבב פנימה את קמח שיבולת השועל, אבקת החלבון, אבקת האפייה והקינמון.",
          "לתת לבלילה לנוח 5 דקות כדי להסמיך.",
          "לבשל עיגולים של רבע כוס על מחבת משומנת קלות על אש בינונית.",
          "להפוך כשנוצרים בועות למעלה; לבשל עד להזהבה ולהגיש חם."
        ],
        "swaps": [
          "ביצים → 2 ביצי פשתן (טבעוני)",
          "חלבון מי גבינה → חלבון צמחי (ללא חלב)",
          "קמח שיבולת שועל → קמח שקדים (ללא דגנים, סמיך יותר)"
        ]
      }
    }
  },
  {
    "id": "bfast-veggie-egg-scramble",
    "title": "Spinach & Avocado Egg Scramble",
    "desc": "A five-minute savory skillet of soft eggs, wilted greens, and creamy avocado to start the day clear-headed.",
    "image": "/assets/recipes/bfast-veggie-egg-scramble.png",
    "level": "free",
    "daypart": "breakfast",
    "makes": "1",
    "goals": [
      "Focus",
      "Protein"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "High-protein",
      "15-minute",
      "One-pan"
    ],
    "macros": {
      "kcal": 340,
      "protein": "20g",
      "carbs": "8g",
      "fat": "27g",
      "fiber": "4g"
    },
    "why": "Egg yolks supply choline, a building block for the neurotransmitter acetylcholine that supports memory and focus, and the avocado adds monounsaturated fat for steady, non-jittery morning energy.",
    "swaps": [
      "eggs → firm tofu, crumbled (vegan)",
      "spinach → kale or chard (whatever's fresh)",
      "olive oil → avocado oil (higher smoke point)"
    ],
    "ingredients": [
      "3 large eggs",
      "1 cup baby spinach",
      "1/2 cup cherry tomatoes, halved",
      "1/4 avocado, sliced",
      "1 tsp olive oil",
      "Salt and pepper, to taste"
    ],
    "steps": [
      "Warm the olive oil in a nonstick skillet over medium heat.",
      "Add tomatoes and cook 1 minute, then stir in spinach until just wilted.",
      "Pour in the whisked eggs and gently fold until softly set.",
      "Season with salt and pepper and slide onto a plate.",
      "Top with sliced avocado and serve immediately."
    ],
    "i18n": {
      "pt": {
        "title": "Ovos Mexidos com Espinafre e Abacate",
        "desc": "Uma frigideira salgada de cinco minutos com ovos macios, folhas murchadas e abacate cremoso para começar o dia com a cabeça no lugar.",
        "why": "A gema do ovo fornece colina, um precursor do neurotransmissor acetilcolina que apoia memória e foco, e o abacate soma gordura monoinsaturada para uma energia matinal estável, sem oscilações.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Rico em proteína",
          "15 minutos",
          "Panela única"
        ],
        "ingredients": [
          "3 ovos grandes",
          "1 xícara de espinafre baby",
          "1/2 xícara de tomate-cereja, cortado ao meio",
          "1/4 de abacate, fatiado",
          "1 colher de chá de azeite de oliva",
          "Sal e pimenta, a gosto"
        ],
        "steps": [
          "Aqueça o azeite em uma frigideira antiaderente, em fogo médio.",
          "Adicione os tomates e cozinhe 1 minuto, depois junte o espinafre até murchar levemente.",
          "Despeje os ovos batidos e mexa delicadamente até firmarem por igual.",
          "Tempere com sal e pimenta e transfira para um prato.",
          "Finalize com o abacate fatiado e sirva imediatamente."
        ],
        "swaps": [
          "ovos → tofu firme esfarelado (vegano)",
          "espinafre → couve ou acelga (o que estiver mais fresco)",
          "azeite de oliva → óleo de abacate (ponto de fumaça mais alto)"
        ]
      },
      "es": {
        "title": "Revuelto de Huevo con Espinaca y Aguacate",
        "desc": "Una sartén salada de cinco minutos con huevos suaves, verduras salteadas y aguacate cremoso para empezar el día con la mente clara.",
        "why": "La yema de huevo aporta colina, un componente esencial del neurotransmisor acetilcolina que favorece la memoria y la concentración, y el aguacate suma grasa monoinsaturada para una energía matutina estable y sin nervios.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Alto en proteína",
          "15 minutos",
          "Una sola sartén"
        ],
        "ingredients": [
          "3 huevos grandes",
          "1 taza de espinaca baby",
          "1/2 taza de tomates cherry, cortados a la mitad",
          "1/4 de aguacate, en rodajas",
          "1 cucharadita de aceite de oliva",
          "Sal y pimienta, al gusto"
        ],
        "steps": [
          "Calienta el aceite de oliva en una sartén antiadherente a fuego medio.",
          "Agrega los tomates y cocina 1 minuto, luego incorpora la espinaca hasta que apenas se marchite.",
          "Vierte los huevos batidos y mezcla suavemente hasta que cuajen ligeramente.",
          "Sazona con sal y pimienta y pasa a un plato.",
          "Corona con el aguacate en rodajas y sirve de inmediato."
        ],
        "swaps": [
          "huevos → tofu firme, desmenuzado (vegano)",
          "espinaca → kale o acelga (lo que tengas fresco)",
          "aceite de oliva → aceite de aguacate (mayor punto de humeo)"
        ]
      },
      "it": {
        "title": "Uova Strapazzate con Spinaci e Avocado",
        "desc": "Una padellata salata da cinque minuti di uova morbide, verdure appassite e avocado cremoso per iniziare la giornata con la mente lucida.",
        "why": "I tuorli d'uovo forniscono colina, un elemento costitutivo del neurotrasmettitore acetilcolina che sostiene memoria e concentrazione, e l'avocado aggiunge grassi monoinsaturi per un'energia mattutina stabile, senza nervosismo.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Ricco di proteine",
          "15 minuti",
          "In un'unica padella"
        ],
        "ingredients": [
          "3 uova grandi",
          "1 tazza di spinacini",
          "1/2 tazza di pomodorini, tagliati a metà",
          "1/4 di avocado, a fette",
          "1 cucchiaino di olio d'oliva",
          "Sale e pepe, quanto basta"
        ],
        "steps": [
          "Scalda l'olio d'oliva in una padella antiaderente a fuoco medio.",
          "Aggiungi i pomodorini e cuoci 1 minuto, poi unisci gli spinaci finché non appassiscono appena.",
          "Versa le uova sbattute e mescola delicatamente finché non si rapprendono morbide.",
          "Condisci con sale e pepe e trasferisci nel piatto.",
          "Guarnisci con l'avocado a fette e servi subito."
        ],
        "swaps": [
          "uova → tofu sodo, sbriciolato (vegano)",
          "spinaci → cavolo riccio o bietola (secondo quello che trovi fresco)",
          "olio d'oliva → olio di avocado (punto di fumo più alto)"
        ]
      },
      "zh": {
        "title": "菠菜牛油果炒蛋",
        "desc": "五分钟就能做好的咸香煎锅料理——软嫩炒蛋、微蔫绿叶菜和绵密牛油果，让你神清气爽地开启一天。",
        "why": "蛋黄提供胆碱，它是构成神经递质乙酰胆碱的重要原料，有助于支持记忆力和专注力，牛油果则带来单不饱和脂肪，让早晨的能量平稳而不焦躁。",
        "tags": [
          "无麸质",
          "无乳制品",
          "高蛋白",
          "15分钟",
          "一锅料理"
        ],
        "ingredients": [
          "3个大鸡蛋",
          "1杯嫩菠菜",
          "½杯圣女果，切半",
          "¼个牛油果，切片",
          "1茶匙橄榄油",
          "盐和胡椒，适量"
        ],
        "steps": [
          "用中火在不粘锅中加热橄榄油。",
          "加入圣女果煎1分钟，再放入菠菜炒至微软。",
          "倒入打散的鸡蛋液，轻轻翻炒至凝固软嫩。",
          "用盐和胡椒调味，盛入盘中。",
          "铺上牛油果片，即刻享用。"
        ],
        "swaps": [
          "鸡蛋 → 老豆腐，捏碎（纯素）",
          "菠菜 → 羽衣甘蓝或牛皮菜（当季新鲜的都可以）",
          "橄榄油 → 牛油果油（烟点更高）"
        ]
      },
      "hi": {
        "title": "पालक और एवोकाडो एग स्क्रैम्बल",
        "desc": "पांच मिनट में तैयार होने वाला नमकीन तवा व्यंजन — नरम अंडे, मुरझाई हरी सब्ज़ियां और मलाईदार एवोकाडो, दिन की शुरुआत स्पष्ट दिमाग के साथ करने के लिए।",
        "why": "अंडे की जर्दी कोलीन देती है, जो न्यूरोट्रांसमीटर एसिटिलकोलीन का निर्माण खंड है और याददाश्त व फोकस को सहारा देती है, और एवोकाडो मोनोअनसैचुरेटेड फैट जोड़ता है जो स्थिर, बिना घबराहट वाली सुबह की ऊर्जा देता है।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "हाई-प्रोटीन",
          "15-मिनट",
          "वन-पैन"
        ],
        "ingredients": [
          "3 बड़े अंडे",
          "1 कप बेबी पालक",
          "1/2 कप चेरी टमाटर, आधे कटे हुए",
          "1/4 एवोकाडो, कटा हुआ",
          "1 छोटा चम्मच ऑलिव ऑयल",
          "स्वादानुसार नमक और काली मिर्च"
        ],
        "steps": [
          "मध्यम आंच पर नॉन-स्टिक तवे में ऑलिव ऑयल गर्म करें।",
          "टमाटर डालकर 1 मिनट पकाएं, फिर पालक डालकर तब तक चलाएं जब तक वह हल्का मुरझा न जाए।",
          "फेंटे हुए अंडे डालें और धीरे-धीरे मिलाते हुए तब तक पकाएं जब तक नरम जम न जाएं।",
          "नमक और काली मिर्च डालें और प्लेट में निकालें।",
          "ऊपर कटा हुआ एवोकाडो डालें और तुरंत परोसें।"
        ],
        "swaps": [
          "अंडे → टूटा हुआ फर्म टोफू (वीगन)",
          "पालक → केल या चार्ड (जो भी ताज़ा हो)",
          "ऑलिव ऑयल → एवोकाडो ऑयल (ज़्यादा स्मोक पॉइंट)"
        ]
      },
      "he": {
        "title": "ביצים מקושקשות עם תרד ואבוקדו",
        "desc": "מחבת מלוחה של חמש דקות עם ביצים רכות, ירוקים קמלים ואבוקדו קרמי, כדי להתחיל את היום צלולים בראש.",
        "why": "חלמון הביצה מספק כולין, אבן בניין למוליך העצבי אצטילכולין שתומך בזיכרון ובריכוז, והאבוקדו מוסיף שומן חד-בלתי-רווי לאנרגיית בוקר יציבה ולא עצבנית.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "עתיר חלבון",
          "15 דקות",
          "מחבת אחת"
        ],
        "ingredients": [
          "3 ביצים גדולות",
          "1 כוס עלי תרד רך",
          "½ כוס עגבניות שרי, חצויות",
          "¼ אבוקדו, פרוס",
          "1 כפית שמן זית",
          "מלח ופלפל, לפי הטעם"
        ],
        "steps": [
          "לחמם את שמן הזית במחבת נון-סטיק על אש בינונית.",
          "להוסיף את העגבניות ולבשל דקה, ואז לערבב פנימה את התרד עד שקמל בדיוק.",
          "למזוג פנימה את הביצים הטרופות ולקפל בעדינות עד שמתייצבות ברכות.",
          "לתבל במלח ופלפל ולהעביר לצלחת.",
          "לקשט בפרוסות אבוקדו ולהגיש מיד."
        ],
        "swaps": [
          "ביצים → טופו מוצק, מפורר (טבעוני)",
          "תרד → קייל או מנגולד (מה שטרי)",
          "שמן זית → שמן אבוקדו (נקודת עשן גבוהה יותר)"
        ]
      }
    }
  },
  {
    "id": "bfast-blueberry-smoothie-bowl",
    "title": "Blueberry Almond Smoothie Bowl",
    "desc": "A thick, spoon-standing purple bowl loaded with berries and crunch — breakfast that feels like a treat.",
    "image": "/assets/recipes/bfast-blueberry-smoothie-bowl.png",
    "level": "club",
    "daypart": "breakfast",
    "makes": "1",
    "goals": [
      "Focus",
      "Energy"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "High-protein",
      "Anti-inflammatory"
    ],
    "macros": {
      "kcal": 410,
      "protein": "27g",
      "carbs": "40g",
      "fat": "17g",
      "fiber": "6g"
    },
    "why": "Blueberry anthocyanins are traditionally linked to better focus and healthy blood flow to the brain, while the protein and almond butter slow the sugars for even, sustained energy.",
    "swaps": [
      "whey protein → plant protein (vegan)",
      "almond butter → tahini (nut-free)",
      "granola topping → toasted buckwheat groats (grain-free crunch)"
    ],
    "ingredients": [
      "1/2 cup frozen blueberries",
      "1/2 frozen banana",
      "1 scoop vanilla protein powder",
      "1 cup unsweetened almond milk",
      "1 tbsp almond butter",
      "1 tbsp granola",
      "1 tbsp fresh berries and coconut flakes, to top"
    ],
    "steps": [
      "Blend blueberries, banana, protein powder, almond butter, and almond milk until very thick.",
      "Add almond milk a splash at a time only if the blender stalls.",
      "Pour into a chilled bowl and smooth the surface.",
      "Top with granola, fresh berries, and coconut flakes.",
      "Eat right away with a spoon while frosty."
    ],
    "i18n": {
      "pt": {
        "title": "Smoothie Bowl de Mirtilo com Amêndoas",
        "desc": "Uma tigela roxa e bem espessa, firme o bastante para a colher ficar em pé, carregada de frutas vermelhas e crocância — um café da manhã que parece indulgência.",
        "why": "As antocianinas do mirtilo são tradicionalmente associadas a melhor foco e a um fluxo sanguíneo saudável para o cérebro, enquanto a proteína e a pasta de amêndoas desaceleram os açúcares para uma energia mais uniforme e sustentada.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Rico em proteína",
          "Anti-inflamatório"
        ],
        "ingredients": [
          "1/2 xícara de mirtilo congelado",
          "1/2 banana congelada",
          "1 dose de proteína em pó sabor baunilha",
          "1 xícara de leite de amêndoas sem açúcar",
          "1 colher de sopa de pasta de amêndoas",
          "1 colher de sopa de granola",
          "1 colher de sopa de frutas vermelhas frescas e flocos de coco, para finalizar"
        ],
        "steps": [
          "Bata o mirtilo, a banana, a proteína em pó, a pasta de amêndoas e o leite de amêndoas até ficar bem espesso.",
          "Acrescente leite de amêndoas aos poucos apenas se o liquidificador travar.",
          "Despeje em uma tigela gelada e alise a superfície.",
          "Finalize com granola, frutas vermelhas frescas e flocos de coco.",
          "Coma na hora, de colher, enquanto ainda está geladinho."
        ],
        "swaps": [
          "whey protein → proteína vegetal (vegano)",
          "pasta de amêndoas → tahine (sem oleaginosas)",
          "granola → grãos de trigo-sarraceno tostados (crocância sem grãos)"
        ]
      },
      "es": {
        "title": "Bowl de Smoothie de Arándanos y Almendra",
        "desc": "Un bowl morado tan espeso que la cuchara se sostiene sola, cargado de frutos rojos y crocancia: un desayuno que se siente como un antojo.",
        "why": "Las antocianinas del arándano se asocian tradicionalmente con una mejor concentración y un flujo sanguíneo saludable hacia el cerebro, mientras que la proteína y la mantequilla de almendra ralentizan los azúcares para una energía pareja y sostenida.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Alto en proteína",
          "Antiinflamatorio"
        ],
        "ingredients": [
          "1/2 taza de arándanos congelados",
          "1/2 plátano congelado",
          "1 scoop de proteína en polvo sabor vainilla",
          "1 taza de leche de almendras sin endulzar",
          "1 cucharada de mantequilla de almendra",
          "1 cucharada de granola",
          "1 cucharada de frutos rojos frescos y hojuelas de coco, para decorar"
        ],
        "steps": [
          "Licúa los arándanos, el plátano, la proteína en polvo, la mantequilla de almendra y la leche de almendras hasta obtener una mezcla muy espesa.",
          "Agrega leche de almendras poco a poco solo si la licuadora se traba.",
          "Vierte en un bowl frío y alisa la superficie.",
          "Corona con granola, frutos rojos frescos y hojuelas de coco.",
          "Come de inmediato con cuchara mientras esté bien frío."
        ],
        "swaps": [
          "proteína de suero → proteína vegetal (vegano)",
          "mantequilla de almendra → tahini (sin frutos secos)",
          "granola → trigo sarraceno tostado (crocancia sin granos)"
        ]
      },
      "it": {
        "title": "Smoothie Bowl ai Mirtilli e Mandorle",
        "desc": "Una ciotola viola densa, dove il cucchiaio sta in piedi, colma di frutti di bosco e croccantezza — una colazione che sembra un premio.",
        "why": "Gli antociani dei mirtilli sono tradizionalmente associati a una migliore concentrazione e a un sano flusso sanguigno al cervello, mentre le proteine e il burro di mandorle rallentano gli zuccheri per un'energia costante e prolungata.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Ricco di proteine",
          "Antinfiammatorio"
        ],
        "ingredients": [
          "1/2 tazza di mirtilli surgelati",
          "1/2 banana surgelata",
          "1 misurino di proteine in polvere alla vaniglia",
          "1 tazza di latte di mandorla non zuccherato",
          "1 cucchiaio di burro di mandorle",
          "1 cucchiaio di granola",
          "1 cucchiaio di frutti di bosco freschi e scaglie di cocco, per guarnire"
        ],
        "steps": [
          "Frulla mirtilli, banana, proteine in polvere, burro di mandorle e latte di mandorla fino a ottenere un composto molto denso.",
          "Aggiungi altro latte di mandorla poco alla volta solo se il frullatore fatica.",
          "Versa in una ciotola fredda e livella la superficie.",
          "Guarnisci con granola, frutti di bosco freschi e scaglie di cocco.",
          "Gustala subito con il cucchiaio, mentre è ben fredda."
        ],
        "swaps": [
          "proteine whey → proteine vegetali (vegano)",
          "burro di mandorle → tahina (senza frutta a guscio)",
          "granola → grano saraceno tostato (croccantezza senza cereali)"
        ]
      },
      "zh": {
        "title": "蓝莓杏仁思慕雪碗",
        "desc": "浓稠到能立住勺子的紫色碗，满满莓果与酥脆口感——像享受甜点一样的早餐。",
        "why": "蓝莓中的花青素在传统上被认为有助于专注力和大脑健康血流，蛋白粉和杏仁酱则能延缓糖分吸收，带来平稳持久的能量。",
        "tags": [
          "无麸质",
          "无乳制品",
          "高蛋白",
          "抗炎"
        ],
        "ingredients": [
          "½杯冷冻蓝莓",
          "½根冷冻香蕉",
          "1勺香草蛋白粉",
          "1杯无糖杏仁奶",
          "1汤匙杏仁酱",
          "1汤匙格兰诺拉麦片",
          "1汤匙新鲜莓果和椰片，用于装饰"
        ],
        "steps": [
          "将蓝莓、香蕉、蛋白粉、杏仁酱和杏仁奶一起搅打至非常浓稠。",
          "如果搅拌机转不动，可少量多次加入杏仁奶。",
          "倒入冰镇过的碗中，抹平表面。",
          "撒上格兰诺拉麦片、新鲜莓果和椰片。",
          "趁冰凉立刻用勺子享用。"
        ],
        "swaps": [
          "乳清蛋白 → 植物蛋白（纯素）",
          "杏仁酱 → 芝麻酱（无坚果）",
          "格兰诺拉麦片 → 烤荞麦粒（无谷物的酥脆口感）"
        ]
      },
      "hi": {
        "title": "ब्लूबेरी आमंड स्मूदी बाउल",
        "desc": "गाढ़ा, चम्मच खड़ी रहने वाला बैंगनी बाउल, बेरीज़ और कुरकुरेपन से भरपूर — नाश्ता जो मिठाई जैसा लगे।",
        "why": "ब्लूबेरी के एंथोसायनिन पारंपरिक रूप से बेहतर फोकस और दिमाग में स्वस्थ रक्त प्रवाह से जुड़े माने जाते हैं, जबकि प्रोटीन और बादाम बटर शुगर की रफ्तार को धीमा करके स्थिर, लंबे समय तक चलने वाली ऊर्जा देते हैं।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "हाई-प्रोटीन",
          "एंटी-इन्फ्लेमेटरी"
        ],
        "ingredients": [
          "1/2 कप जमी हुई ब्लूबेरी",
          "1/2 जमा हुआ केला",
          "1 स्कूप वैनिला प्रोटीन पाउडर",
          "1 कप बिना मीठा बादाम दूध",
          "1 बड़ा चम्मच बादाम बटर",
          "1 बड़ा चम्मच ग्रेनोला",
          "ऊपर सजाने के लिए 1 बड़ा चम्मच ताज़ी बेरीज़ और नारियल के टुकड़े"
        ],
        "steps": [
          "ब्लूबेरी, केला, प्रोटीन पाउडर, बादाम बटर और बादाम दूध को तब तक ब्लेंड करें जब तक बहुत गाढ़ा न हो जाए।",
          "अगर ब्लेंडर रुक जाए तो थोड़ा-थोड़ा करके बादाम दूध डालें।",
          "ठंडे बाउल में डालें और ऊपरी सतह को समतल करें।",
          "ऊपर ग्रेनोला, ताज़ी बेरीज़ और नारियल के टुकड़े डालें।",
          "ठंडा रहते हुए चम्मच से तुरंत खाएं।"
        ],
        "swaps": [
          "व्हे प्रोटीन → प्लांट प्रोटीन (वीगन)",
          "बादाम बटर → ताहिनी (नट-फ्री)",
          "ग्रेनोला टॉपिंग → भुना हुआ कुट्टू (अनाज-रहित कुरकुरापन)"
        ]
      },
      "he": {
        "title": "קערת סמוזי אוכמניות ושקדים",
        "desc": "קערה סגולה סמיכה שהכפית עומדת בה זקופה, עמוסה פירות יער ופריכות — ארוחת בוקר שמרגישה כמו פינוק.",
        "why": "האנתוציאנינים באוכמניות קשורים באופן מסורתי לריכוז טוב יותר ולזרימת דם בריאה למוח, בעוד החלבון וחמאת השקדים מאטים את הסוכרים לאנרגיה אחידה ומתמשכת.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "עתיר חלבון",
          "אנטי-דלקתי"
        ],
        "ingredients": [
          "½ כוס אוכמניות קפואות",
          "½ בננה קפואה",
          "1 מנת אבקת חלבון בטעם וניל",
          "1 כוס חלב שקדים ללא סוכר",
          "1 כף חמאת שקדים",
          "1 כף גרנולה",
          "1 כף פירות יער טריים ושבבי קוקוס, לקישוט"
        ],
        "steps": [
          "לטחון את האוכמניות, הבננה, אבקת החלבון, חמאת השקדים וחלב השקדים עד שסמיך מאוד.",
          "להוסיף חלב שקדים בכפית בכל פעם רק אם הבלנדר נתקע.",
          "למזוג לקערה קרה ולהחליק את המשטח.",
          "לקשט בגרנולה, פירות יער טריים ושבבי קוקוס.",
          "לאכול מיד בכפית בזמן שקר וקפוא."
        ],
        "swaps": [
          "חלבון מי גבינה → חלבון צמחי (טבעוני)",
          "חמאת שקדים → טחינה (ללא אגוזים)",
          "תוספת גרנולה → כוסמת קלויה (פריכות ללא דגנים)"
        ]
      }
    }
  },
  {
    "id": "bfast-sweet-potato-hash",
    "title": "Sweet Potato & Turkey Breakfast Hash",
    "desc": "A hearty one-pan skillet of crisp sweet potato, savory turkey, and peppers crowned with a soft egg.",
    "image": "/assets/recipes/bfast-sweet-potato-hash.png",
    "level": "club",
    "daypart": "breakfast",
    "makes": "2",
    "goals": [
      "Satiety",
      "Energy"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "High-protein",
      "One-pan",
      "Grain-free"
    ],
    "macros": {
      "kcal": 455,
      "protein": "34g",
      "carbs": "40g",
      "fat": "19g",
      "fiber": "5g"
    },
    "why": "Complex carbs from sweet potato pair with lean turkey protein for a slow-burning, filling start that supports lasting satiety and steady energy well past mid-morning.",
    "swaps": [
      "ground turkey → chicken sausage or crumbled tempeh (vegetarian)",
      "sweet potato → diced butternut squash (lower-carb)",
      "olive oil → ghee (if dairy is tolerated)"
    ],
    "ingredients": [
      "2 cups sweet potato, diced small",
      "1/2 lb lean ground turkey",
      "1 bell pepper, diced",
      "1/2 onion, diced",
      "1 tbsp olive oil",
      "2 large eggs",
      "1/2 tsp smoked paprika",
      "Salt and pepper, to taste"
    ],
    "steps": [
      "Heat olive oil in a large skillet and cook the sweet potato, covered, 8 minutes until tender.",
      "Push to one side, add turkey, and brown while breaking it up.",
      "Stir in the pepper, onion, paprika, salt, and pepper; cook until softened.",
      "Make two wells and crack an egg into each.",
      "Cover and cook 3–4 minutes until the whites set, then divide between two plates."
    ],
    "i18n": {
      "pt": {
        "title": "Hash de Batata-Doce com Peru no Café da Manhã",
        "desc": "Uma frigideira única e generosa de batata-doce crocante, peru saboroso e pimentões, coroada com um ovo macio.",
        "why": "Os carboidratos complexos da batata-doce se combinam com a proteína magra do peru para um começo de queima lenta e saciante, que sustenta a fome sob controle e a energia estável até bem depois da metade da manhã.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Rico em proteína",
          "Panela única",
          "Sem grãos"
        ],
        "ingredients": [
          "2 xícaras de batata-doce, cortada em cubos pequenos",
          "1/2 libra de peru moído magro",
          "1 pimentão, picado",
          "1/2 cebola, picada",
          "1 colher de sopa de azeite de oliva",
          "2 ovos grandes",
          "1/2 colher de chá de páprica defumada",
          "Sal e pimenta, a gosto"
        ],
        "steps": [
          "Aqueça o azeite em uma frigideira grande e cozinhe a batata-doce, tampada, por 8 minutos, até ficar macia.",
          "Empurre para um lado, adicione o peru e doure enquanto desmancha com a colher.",
          "Junte o pimentão, a cebola, a páprica, o sal e a pimenta; cozinhe até amaciar.",
          "Faça duas cavidades e quebre um ovo em cada uma.",
          "Tampe e cozinhe por 3 a 4 minutos até as claras firmarem, depois divida entre dois pratos."
        ],
        "swaps": [
          "peru moído → linguiça de frango ou tempeh esfarelado (vegetariano)",
          "batata-doce → abóbora butternut em cubos (menos carboidratos)",
          "azeite de oliva → ghee (se a lactose for tolerada)"
        ]
      },
      "es": {
        "title": "Hash de Batata y Pavo para el Desayuno",
        "desc": "Una sartén contundente de batata crujiente, pavo sabroso y pimientos, coronada con un huevo suave.",
        "why": "Los carbohidratos complejos de la batata se combinan con la proteína magra del pavo para un comienzo de combustión lenta y saciante, que sostiene la energía mucho más allá de media mañana.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Alto en proteína",
          "Una sola sartén",
          "Sin granos"
        ],
        "ingredients": [
          "2 tazas de batata, en cubos pequeños",
          "1/2 lb de pavo molido magro",
          "1 pimiento morrón, en cubos",
          "1/2 cebolla, en cubos",
          "1 cucharada de aceite de oliva",
          "2 huevos grandes",
          "1/2 cucharadita de pimentón ahumado",
          "Sal y pimienta, al gusto"
        ],
        "steps": [
          "Calienta el aceite de oliva en una sartén grande y cocina la batata, tapada, 8 minutos hasta que esté tierna.",
          "Empújala hacia un lado, agrega el pavo y dóralo mientras lo desmenuzas.",
          "Incorpora el pimiento, la cebolla, el pimentón, la sal y la pimienta; cocina hasta que se ablanden.",
          "Haz dos huecos y casca un huevo en cada uno.",
          "Tapa y cocina 3-4 minutos hasta que las claras cuajen, luego reparte en dos platos."
        ],
        "swaps": [
          "pavo molido → salchicha de pollo o tempeh desmenuzado (vegetariano)",
          "batata → calabaza butternut en cubos (menos carbohidratos)",
          "aceite de oliva → ghee (si toleras lácteos)"
        ]
      },
      "it": {
        "title": "Hash di Patate Dolci e Tacchino per Colazione",
        "desc": "Una padellata sostanziosa di patate dolci croccanti, tacchino saporito e peperoni, coronata da un uovo morbido.",
        "why": "I carboidrati complessi della patata dolce si abbinano alle proteine magre del tacchino per un inizio a combustione lenta e saziante, che sostiene una sazietà duratura e un'energia costante ben oltre metà mattina.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Ricco di proteine",
          "In un'unica padella",
          "Senza cereali"
        ],
        "ingredients": [
          "2 tazze di patata dolce, a cubetti piccoli",
          "1/2 libbra di tacchino macinato magro",
          "1 peperone, a cubetti",
          "1/2 cipolla, a cubetti",
          "1 cucchiaio di olio d'oliva",
          "2 uova grandi",
          "1/2 cucchiaino di paprika affumicata",
          "Sale e pepe, quanto basta"
        ],
        "steps": [
          "Scalda l'olio d'oliva in una padella capiente e cuoci la patata dolce, coperta, per 8 minuti finché non è tenera.",
          "Spostala da un lato, aggiungi il tacchino e rosolalo sgranandolo.",
          "Unisci peperone, cipolla, paprika, sale e pepe; cuoci finché non si ammorbidiscono.",
          "Crea due incavi e rompi un uovo in ciascuno.",
          "Copri e cuoci per 3-4 minuti finché gli albumi non si rapprendono, poi dividi tra due piatti."
        ],
        "swaps": [
          "tacchino macinato → salsiccia di pollo o tempeh sbriciolato (vegetariano)",
          "patata dolce → zucca butternut a cubetti (meno carboidrati)",
          "olio d'oliva → ghee (se i latticini sono tollerati)"
        ]
      },
      "zh": {
        "title": "红薯火鸡肉早餐煎锅",
        "desc": "丰盛的一锅料理——酥脆红薯、咸香火鸡肉和甜椒，最后点缀一颗软嫩溏心蛋。",
        "why": "红薯提供的复合碳水化合物与瘦火鸡肉的蛋白质相搭配，带来缓慢燃烧、令人饱足的开端，支持持久的饱腹感和平稳能量，直到上午过半仍在。",
        "tags": [
          "无麸质",
          "无乳制品",
          "高蛋白",
          "一锅料理",
          "无谷物"
        ],
        "ingredients": [
          "2杯红薯，切小丁",
          "半磅瘦火鸡肉末",
          "1个甜椒，切丁",
          "半个洋葱，切丁",
          "1汤匙橄榄油",
          "2个大鸡蛋",
          "½茶匙烟熏红椒粉",
          "盐和胡椒，适量"
        ],
        "steps": [
          "在大煎锅中加热橄榄油，放入红薯，加盖煮8分钟至变软。",
          "把红薯拨到一边，加入火鸡肉末，边煎边捣散至微焦。",
          "拌入甜椒、洋葱、红椒粉、盐和胡椒，煮至变软。",
          "在锅中做出两个小凹槽，各打入一个鸡蛋。",
          "加盖煮3-4分钟至蛋白凝固，然后分装到两个盘子中。"
        ],
        "swaps": [
          "火鸡肉末 → 鸡肉香肠或捏碎的天贝（素食）",
          "红薯 → 白胡桃南瓜丁（低碳水）",
          "橄榄油 → 印度酥油（如果能耐受乳制品）"
        ]
      },
      "hi": {
        "title": "शकरकंद और टर्की ब्रेकफास्ट हैश",
        "desc": "एक भरपूर वन-पैन तवा व्यंजन — कुरकुरा शकरकंद, नमकीन टर्की और शिमला मिर्च, ऊपर से नरम अंडे के साथ सजा हुआ।",
        "why": "शकरकंद के जटिल कार्ब्स लीन टर्की प्रोटीन के साथ मिलकर एक धीरे जलने वाली, भरपेट शुरुआत देते हैं जो देर तक तृप्ति और स्थिर ऊर्जा को सहारा देती है।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "हाई-प्रोटीन",
          "वन-पैन",
          "अनाज-रहित"
        ],
        "ingredients": [
          "2 कप शकरकंद, छोटे टुकड़ों में कटा हुआ",
          "1/2 पाउंड लीन कीमा टर्की",
          "1 शिमला मिर्च, कटी हुई",
          "1/2 प्याज़, कटा हुआ",
          "1 बड़ा चम्मच ऑलिव ऑयल",
          "2 बड़े अंडे",
          "1/2 छोटा चम्मच स्मोक्ड पैप्रिका",
          "स्वादानुसार नमक और काली मिर्च"
        ],
        "steps": [
          "बड़े तवे में ऑलिव ऑयल गर्म करें और शकरकंद को ढककर 8 मिनट तक नरम होने तक पकाएं।",
          "एक तरफ हटाएं, टर्की डालें और तोड़ते हुए ब्राउन होने तक पकाएं।",
          "शिमला मिर्च, प्याज़, पैप्रिका, नमक और काली मिर्च मिलाएं; नरम होने तक पकाएं।",
          "दो जगह गड्ढे बनाएं और हर एक में एक अंडा फोड़ें।",
          "ढककर 3–4 मिनट पकाएं जब तक सफेदी जम न जाए, फिर दो प्लेटों में बांटें।"
        ],
        "swaps": [
          "कीमा टर्की → चिकन सॉसेज या टूटा हुआ टेम्पेह (शाकाहारी)",
          "शकरकंद → कटा हुआ बटरनट स्क्वैश (कम कार्ब)",
          "ऑलिव ऑयल → घी (अगर डेयरी सहन हो)"
        ]
      },
      "he": {
        "title": "האש בטטה והודו לארוחת בוקר",
        "desc": "מחבת אחת עשירה עם בטטה פריכה, הודו מלוח ופלפלים, מוכתרת בביצה רכה.",
        "why": "פחמימות מורכבות מהבטטה מצטרפות לחלבון הודו רזה להתחלה שבוערת לאט וממלאה, שתומכת בתחושת שובע מתמשכת ובאנרגיה יציבה הרבה אחרי אמצע הבוקר.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "עתיר חלבון",
          "מחבת אחת",
          "ללא דגנים"
        ],
        "ingredients": [
          "2 כוסות בטטה, קצוצה דק",
          "225 גרם הודו טחון רזה",
          "1 פלפל מתוק, קצוץ",
          "½ בצל, קצוץ",
          "1 כף שמן זית",
          "2 ביצים גדולות",
          "½ כפית פפריקה מעושנת",
          "מלח ופלפל, לפי הטעם"
        ],
        "steps": [
          "לחמם שמן זית במחבת גדולה ולבשל את הבטטה, מכוסה, 8 דקות עד רכה.",
          "להזיז לצד אחד, להוסיף את ההודו ולשחם תוך פירוק.",
          "לערבב פנימה את הפלפל, הבצל, הפפריקה, המלח והפלפל; לבשל עד שמתרככים.",
          "ליצור שתי גומות ולשבור ביצה לתוך כל אחת.",
          "לכסות ולבשל 3-4 דקות עד שהחלבון מתייצב, ואז לחלק בין שתי צלחות."
        ],
        "swaps": [
          "הודו טחון → נקניקיית עוף או טמפה מפוררת (צמחוני)",
          "בטטה → דלעת חמאה קצוצה (דל פחמימות יותר)",
          "שמן זית → חמאה מזוקקת (אם חלב נסבל)"
        ]
      }
    }
  },
  {
    "id": "bfast-grain-free-porridge",
    "title": "Coconut Almond Grain-Free Porridge",
    "desc": "A warm, nutty bowl of seeds and coconut simmered creamy — all the comfort of oatmeal, zero grains.",
    "image": "/assets/recipes/bfast-grain-free-porridge.png",
    "level": "club",
    "daypart": "breakfast",
    "makes": "1",
    "goals": [
      "Gut health",
      "Anti-inflammatory"
    ],
    "tags": [
      "Grain-free",
      "Gluten-free",
      "Dairy-free",
      "Vegan",
      "High-fiber"
    ],
    "macros": {
      "kcal": 360,
      "protein": "10g",
      "carbs": "26g",
      "fat": "26g",
      "fiber": "8g"
    },
    "why": "Ground flax and hemp deliver omega-3 fats traditionally used to support a calmer inflammatory response, while their soluble fiber nourishes the gut without any grains.",
    "swaps": [
      "almond flour → sunflower seed meal (nut-free)",
      "coconut milk → oat milk (nut-free, adds grain)",
      "banana → 1 tbsp maple syrup (lower-sugar option, adjust to taste)"
    ],
    "ingredients": [
      "2 tbsp almond flour",
      "2 tbsp unsweetened shredded coconut",
      "1 tbsp ground flaxseed",
      "1 tbsp hemp seeds",
      "1 cup coconut milk (carton)",
      "1/2 banana, mashed",
      "1/2 tsp cinnamon",
      "Pinch of salt"
    ],
    "steps": [
      "Combine almond flour, coconut, flax, hemp, cinnamon, and salt in a small pot.",
      "Stir in the coconut milk and mashed banana.",
      "Warm over medium-low heat, stirring, until thick and creamy, about 4 minutes.",
      "Add a splash more milk if it gets too thick.",
      "Spoon into a bowl and finish with extra hemp seeds or berries."
    ],
    "i18n": {
      "pt": {
        "title": "Mingau Sem Grãos de Coco e Amêndoas",
        "desc": "Uma tigela quentinha e amanteigada de sementes e coco cozidos até ficar cremoso — todo o conforto da aveia, zero grãos.",
        "why": "A linhaça moída e o cânhamo entregam gorduras ômega-3 tradicionalmente usadas para apoiar uma resposta inflamatória mais equilibrada, enquanto sua fibra solúvel nutre o intestino sem nenhum grão.",
        "tags": [
          "Sem grãos",
          "Sem glúten",
          "Sem lactose",
          "Vegano",
          "Rico em fibras"
        ],
        "ingredients": [
          "2 colheres de sopa de farinha de amêndoas",
          "2 colheres de sopa de coco ralado sem açúcar",
          "1 colher de sopa de linhaça moída",
          "1 colher de sopa de sementes de cânhamo",
          "1 xícara de leite de coco (de caixinha)",
          "1/2 banana, amassada",
          "1/2 colher de chá de canela",
          "Uma pitada de sal"
        ],
        "steps": [
          "Misture a farinha de amêndoas, o coco, a linhaça, o cânhamo, a canela e o sal em uma panela pequena.",
          "Junte o leite de coco e a banana amassada.",
          "Aqueça em fogo médio-baixo, mexendo, até engrossar e ficar cremoso, cerca de 4 minutos.",
          "Acrescente um pouco mais de leite se ficar espesso demais.",
          "Sirva em uma tigela e finalize com mais sementes de cânhamo ou frutas vermelhas."
        ],
        "swaps": [
          "farinha de amêndoas → farinha de sementes de girassol (sem oleaginosas)",
          "leite de coco → leite de aveia (sem oleaginosas, adiciona grão)",
          "banana → 1 colher de sopa de xarope de bordo (opção com menos açúcar, ajuste a gosto)"
        ]
      },
      "es": {
        "title": "Papilla de Coco y Almendra sin Granos",
        "desc": "Un bowl cálido y de sabor a fruto seco, con semillas y coco cocidos a fuego lento hasta quedar cremosos: toda la comodidad de la avena, cero granos.",
        "why": "El lino molido y el cáñamo aportan grasas omega-3 que tradicionalmente se usan para favorecer una respuesta inflamatoria más calmada, mientras que su fibra soluble nutre el intestino sin necesidad de granos.",
        "tags": [
          "Sin granos",
          "Sin gluten",
          "Sin lácteos",
          "Vegano",
          "Alto en fibra"
        ],
        "ingredients": [
          "2 cucharadas de harina de almendras",
          "2 cucharadas de coco rallado sin endulzar",
          "1 cucharada de linaza molida",
          "1 cucharada de semillas de cáñamo",
          "1 taza de leche de coco (de cartón)",
          "1/2 plátano, machacado",
          "1/2 cucharadita de canela",
          "Una pizca de sal"
        ],
        "steps": [
          "Combina la harina de almendras, el coco, el lino, el cáñamo, la canela y la sal en una olla pequeña.",
          "Incorpora la leche de coco y el plátano machacado.",
          "Calienta a fuego medio-bajo, revolviendo, hasta que espese y quede cremoso, unos 4 minutos.",
          "Agrega un chorrito más de leche si queda demasiado espeso.",
          "Sirve en un bowl y termina con más semillas de cáñamo o frutos rojos."
        ],
        "swaps": [
          "harina de almendras → harina de semillas de girasol (sin frutos secos)",
          "leche de coco → leche de avena (sin frutos secos, agrega grano)",
          "plátano → 1 cucharada de jarabe de arce (opción con menos azúcar, ajusta a tu gusto)"
        ]
      },
      "it": {
        "title": "Porridge senza Cereali al Cocco e Mandorle",
        "desc": "Una ciotola calda e dal gusto di frutta secca, con semi e cocco cotti a fuoco lento fino a diventare cremosi — tutto il comfort del porridge d'avena, zero cereali.",
        "why": "Il lino macinato e la canapa apportano grassi omega-3 tradizionalmente usati per sostenere una risposta infiammatoria più calma, mentre la loro fibra solubile nutre l'intestino senza alcun cereale.",
        "tags": [
          "Senza cereali",
          "Senza glutine",
          "Senza latticini",
          "Vegano",
          "Ricco di fibre"
        ],
        "ingredients": [
          "2 cucchiai di farina di mandorle",
          "2 cucchiai di cocco rapé non zuccherato",
          "1 cucchiaio di semi di lino macinati",
          "1 cucchiaio di semi di canapa",
          "1 tazza di latte di cocco (in cartone)",
          "1/2 banana, schiacciata",
          "1/2 cucchiaino di cannella",
          "Un pizzico di sale"
        ],
        "steps": [
          "Unisci farina di mandorle, cocco, lino, canapa, cannella e sale in una pentola piccola.",
          "Incorpora il latte di cocco e la banana schiacciata.",
          "Scalda a fuoco medio-basso, mescolando, finché non diventa denso e cremoso, circa 4 minuti.",
          "Aggiungi un po' più di latte se diventa troppo denso.",
          "Versa in una ciotola e completa con altri semi di canapa o frutti di bosco."
        ],
        "swaps": [
          "farina di mandorle → farina di semi di girasole (senza frutta a guscio)",
          "latte di cocco → latte d'avena (senza frutta a guscio, aggiunge cereali)",
          "banana → 1 cucchiaio di sciroppo d'acero (opzione con meno zucchero, regola a piacere)"
        ]
      },
      "zh": {
        "title": "椰香杏仁无谷物粥",
        "desc": "温热坚果风味的一碗种子椰香粥，慢煮至绵密——燕麦粥的满足感，却完全不含谷物。",
        "why": "亚麻籽粉和大麻籽提供omega-3脂肪酸，在传统上用于帮助维持平稳的炎症反应，其中的可溶性膳食纤维则能滋养肠道，且不含任何谷物。",
        "tags": [
          "无谷物",
          "无麸质",
          "无乳制品",
          "纯素",
          "高纤维"
        ],
        "ingredients": [
          "2汤匙杏仁粉",
          "2汤匙无糖椰蓉",
          "1汤匙亚麻籽粉",
          "1汤匙大麻籽",
          "1杯盒装椰奶",
          "½根香蕉，压成泥",
          "½茶匙肉桂粉",
          "一小撮盐"
        ],
        "steps": [
          "把杏仁粉、椰蓉、亚麻籽粉、大麻籽、肉桂粉和盐放入小锅中混合。",
          "拌入椰奶和香蕉泥。",
          "用中小火边搅拌边加热约4分钟，直到浓稠绵密。",
          "如果太浓稠，可加少许椰奶稀释。",
          "盛入碗中，最后撒上额外的大麻籽或莓果。"
        ],
        "swaps": [
          "杏仁粉 → 葵花籽粉（无坚果）",
          "椰奶 → 燕麦奶（无坚果，但会引入谷物）",
          "香蕉 → 1汤匙枫糖浆（低糖选项，可依口味调整）"
        ]
      },
      "hi": {
        "title": "कोकोनट आमंड ग्रेन-फ्री पोरिज",
        "desc": "बीजों और नारियल से बना गर्म, मेवेदार बाउल, मलाईदार होने तक पकाया हुआ — ओटमील का पूरा आराम, बिना किसी अनाज के।",
        "why": "पिसा हुआ फ्लैक्स और हेम्प ओमेगा-3 फैट्स देते हैं जिनका पारंपरिक रूप से उपयोग शांत सूजन-प्रतिक्रिया को सहारा देने के लिए होता है, जबकि उनका घुलनशील फाइबर बिना किसी अनाज के आंत को पोषण देता है।",
        "tags": [
          "अनाज-रहित",
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "वीगन",
          "हाई-फाइबर"
        ],
        "ingredients": [
          "2 बड़े चम्मच बादाम का आटा",
          "2 बड़े चम्मच बिना मीठा कसा हुआ नारियल",
          "1 बड़ा चम्मच पिसा हुआ अलसी",
          "1 बड़ा चम्मच हेम्प बीज",
          "1 कप नारियल दूध (पैकेट वाला)",
          "1/2 केला, मैश किया हुआ",
          "1/2 छोटा चम्मच दालचीनी",
          "एक चुटकी नमक"
        ],
        "steps": [
          "एक छोटे बर्तन में बादाम का आटा, नारियल, अलसी, हेम्प, दालचीनी और नमक मिलाएं।",
          "नारियल दूध और मैश किया हुआ केला मिलाएं।",
          "मध्यम-धीमी आंच पर चलाते हुए लगभग 4 मिनट तक गाढ़ा और मलाईदार होने तक पकाएं।",
          "अगर बहुत गाढ़ा हो जाए तो थोड़ा और दूध डालें।",
          "बाउल में निकालें और ऊपर से अतिरिक्त हेम्प बीज या बेरीज़ डालकर परोसें।"
        ],
        "swaps": [
          "बादाम का आटा → सूरजमुखी बीज का आटा (नट-फ्री)",
          "नारियल दूध → ओट दूध (नट-फ्री, अनाज जुड़ता है)",
          "केला → 1 बड़ा चम्मच मेपल सिरप (कम-शुगर विकल्प, स्वादानुसार समायोजित करें)"
        ]
      },
      "he": {
        "title": "דייסת קוקוס ושקדים ללא דגנים",
        "desc": "קערה חמה ואגוזית של זרעים וקוקוס מבושלים לקרמיות — כל הנחמה של שיבולת שועל, בלי דגנים.",
        "why": "פשתן טחון וזרעי קנביס מספקים שומני אומגה 3 שמשמשים באופן מסורתי לתמיכה בתגובה דלקתית רגועה יותר, בעוד הסיבים המסיסים שלהם מזינים את המעי בלי שום דגן.",
        "tags": [
          "ללא דגנים",
          "ללא גלוטן",
          "ללא חלב",
          "טבעוני",
          "עתיר סיבים"
        ],
        "ingredients": [
          "2 כפות קמח שקדים",
          "2 כפות קוקוס מגורד ללא סוכר",
          "1 כף פשתן טחון",
          "1 כף זרעי קנביס",
          "1 כוס חלב קוקוס (מקרטון)",
          "½ בננה, מרוסקת",
          "½ כפית קינמון",
          "קורט מלח"
        ],
        "steps": [
          "לערבב את קמח השקדים, הקוקוס, הפשתן, הקנביס, הקינמון והמלח בסיר קטן.",
          "לערבב פנימה את חלב הקוקוס והבננה המרוסקת.",
          "לחמם על אש בינונית-נמוכה, תוך ערבוב, עד סמיך וקרמי, כארבע דקות.",
          "להוסיף עוד קצת חלב אם זה מתעבה יותר מדי.",
          "להגיש בקערה ולסיים עם עוד זרעי קנביס או פירות יער."
        ],
        "swaps": [
          "קמח שקדים → קמח גרעיני חמנייה (ללא אגוזים)",
          "חלב קוקוס → חלב שיבולת שועל (ללא אגוזים, מוסיף דגן)",
          "בננה → 1 כף סירופ מייפל (אפשרות דלת סוכר יותר, לפי הטעם)"
        ]
      }
    }
  },
  {
    "id": "lunch-quinoa-buddha-bowl",
    "title": "Rainbow Quinoa Buddha Bowl",
    "desc": "A fiber-packed bowl of fluffy quinoa, roasted sweet potato and crisp kale under a creamy lemon-tahini drizzle.",
    "image": "/assets/recipes/lunch-quinoa-buddha-bowl.png",
    "level": "free",
    "daypart": "lunch",
    "makes": "2",
    "goals": [
      "Satiety",
      "Gut health"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "Vegan",
      "High-fiber",
      "Meal-prep"
    ],
    "macros": {
      "kcal": 480,
      "protein": "15g",
      "carbs": "55g",
      "fat": "22g",
      "fiber": "12g"
    },
    "why": "Quinoa and chickpeas bring plant protein and resistant-style fiber that feeds gut bacteria, while tahini and avocado add slow-burning fats that keep you full for hours.",
    "swaps": [
      "quinoa → brown rice (nut-free pantry swap)",
      "chickpeas → white beans (variety)",
      "tahini → sunflower seed butter (sesame-free)"
    ],
    "ingredients": [
      "1 cup cooked quinoa",
      "1 cup roasted sweet potato cubes",
      "1 cup chopped kale, massaged",
      "3/4 cup cooked chickpeas",
      "1/2 avocado, sliced",
      "2 tbsp tahini",
      "1 tbsp lemon juice",
      "2 tbsp pumpkin seeds",
      "Sea salt and pepper to taste"
    ],
    "steps": [
      "Roast sweet potato cubes at 425F for 20 minutes until tender.",
      "Massage kale with a pinch of salt and a squeeze of lemon until softened.",
      "Whisk tahini, lemon juice and 2 tbsp water into a pourable drizzle.",
      "Divide quinoa between two bowls and top with sweet potato, kale, chickpeas and avocado.",
      "Drizzle with tahini sauce, scatter pumpkin seeds, and season."
    ],
    "i18n": {
      "pt": {
        "title": "Buddha Bowl Arco-Íris de Quinoa",
        "desc": "Uma tigela rica em fibras com quinoa fofinha, batata-doce assada e couve crocante, regada com um molho cremoso de limão siciliano e tahine.",
        "why": "A quinoa e o grão-de-bico trazem proteína vegetal e fibras do tipo resistente que alimentam as bactérias intestinais, enquanto o tahine e o abacate somam gorduras de queima lenta que mantêm a saciedade por horas.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Vegano",
          "Rico em fibras",
          "Meal-prep"
        ],
        "ingredients": [
          "1 xícara de quinoa cozida",
          "1 xícara de cubos de batata-doce assada",
          "1 xícara de couve picada, massageada",
          "3/4 xícara de grão-de-bico cozido",
          "1/2 abacate, fatiado",
          "2 colheres de sopa de tahine",
          "1 colher de sopa de suco de limão siciliano",
          "2 colheres de sopa de sementes de abóbora",
          "Sal marinho e pimenta a gosto"
        ],
        "steps": [
          "Asse os cubos de batata-doce a 425F por 20 minutos, até ficarem macios.",
          "Massageie a couve com uma pitada de sal e um esguicho de limão siciliano até amaciar.",
          "Bata o tahine, o suco de limão siciliano e 2 colheres de sopa de água até formar um molho fluido.",
          "Divida a quinoa entre duas tigelas e cubra com a batata-doce, a couve, o grão-de-bico e o abacate.",
          "Regue com o molho de tahine, espalhe as sementes de abóbora e tempere."
        ],
        "swaps": [
          "quinoa → arroz integral (opção de despensa sem oleaginosas)",
          "grão-de-bico → feijão-branco (variedade)",
          "tahine → pasta de sementes de girassol (sem gergelim)"
        ]
      },
      "es": {
        "title": "Buddha Bowl Arcoíris de Quinoa",
        "desc": "Un bowl cargado de fibra con quinoa esponjosa, batata asada y kale crujiente, bañado en un cremoso aderezo de limón y tahini.",
        "why": "La quinoa y los garbanzos aportan proteína vegetal y fibra tipo resistente que alimenta a las bacterias intestinales, mientras que el tahini y el aguacate suman grasas de combustión lenta que te mantienen saciado por horas.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Vegano",
          "Alto en fibra",
          "Ideal para meal-prep"
        ],
        "ingredients": [
          "1 taza de quinoa cocida",
          "1 taza de cubos de batata asada",
          "1 taza de kale picado, masajeado",
          "3/4 taza de garbanzos cocidos",
          "1/2 aguacate, en rodajas",
          "2 cucharadas de tahini",
          "1 cucharada de jugo de limón",
          "2 cucharadas de semillas de calabaza",
          "Sal marina y pimienta al gusto"
        ],
        "steps": [
          "Asa los cubos de batata a 425°F durante 20 minutos hasta que estén tiernos.",
          "Masajea el kale con una pizca de sal y un chorrito de limón hasta que se ablande.",
          "Bate el tahini, el jugo de limón y 2 cucharadas de agua hasta obtener un aderezo fluido.",
          "Reparte la quinoa en dos bowls y corona con la batata, el kale, los garbanzos y el aguacate.",
          "Rocía con la salsa de tahini, esparce las semillas de calabaza y sazona."
        ],
        "swaps": [
          "quinoa → arroz integral (sustituto de despensa sin frutos secos)",
          "garbanzos → frijoles blancos (variedad)",
          "tahini → mantequilla de semillas de girasol (sin sésamo)"
        ]
      },
      "it": {
        "title": "Buddha Bowl Arcobaleno alla Quinoa",
        "desc": "Una ciotola ricca di fibre con quinoa soffice, patata dolce arrostita e cavolo riccio croccante, sotto una cremosa salsa di limone e tahina.",
        "why": "Quinoa e ceci apportano proteine vegetali e fibre di tipo resistente che nutrono i batteri intestinali, mentre tahina e avocado aggiungono grassi a combustione lenta che ti mantengono sazio per ore.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Vegano",
          "Ricco di fibre",
          "Meal-prep"
        ],
        "ingredients": [
          "1 tazza di quinoa cotta",
          "1 tazza di cubetti di patata dolce arrostita",
          "1 tazza di cavolo riccio tritato, massaggiato",
          "3/4 di tazza di ceci cotti",
          "1/2 avocado, a fette",
          "2 cucchiai di tahina",
          "1 cucchiaio di succo di limone",
          "2 cucchiai di semi di zucca",
          "Sale marino e pepe, quanto basta"
        ],
        "steps": [
          "Arrostisci i cubetti di patata dolce a 425°F (220°C) per 20 minuti finché non sono teneri.",
          "Massaggia il cavolo riccio con un pizzico di sale e una spruzzata di limone finché non si ammorbidisce.",
          "Sbatti tahina, succo di limone e 2 cucchiai d'acqua fino a ottenere una salsa versabile.",
          "Dividi la quinoa in due ciotole e guarnisci con patata dolce, cavolo riccio, ceci e avocado.",
          "Irrora con la salsa di tahina, cospargi di semi di zucca e condisci."
        ],
        "swaps": [
          "quinoa → riso integrale (alternativa da dispensa senza frutta a guscio)",
          "ceci → fagioli bianchi (per variare)",
          "tahina → burro di semi di girasole (senza sesamo)"
        ]
      },
      "zh": {
        "title": "彩虹藜麦能量碗",
        "desc": "富含膳食纤维的一碗——蓬松藜麦、烤红薯和爽脆羽衣甘蓝，淋上绵密柠檬芝麻酱。",
        "why": "藜麦和鹰嘴豆带来植物蛋白和抗性膳食纤维，滋养肠道菌群，芝麻酱和牛油果则提供缓慢供能的脂肪，让饱腹感维持数小时。",
        "tags": [
          "无麸质",
          "无乳制品",
          "纯素",
          "高纤维",
          "备餐友好"
        ],
        "ingredients": [
          "1杯煮熟的藜麦",
          "1杯烤红薯丁",
          "1杯切碎并揉软的羽衣甘蓝",
          "¾杯煮熟的鹰嘴豆",
          "½个牛油果，切片",
          "2汤匙芝麻酱",
          "1汤匙柠檬汁",
          "2汤匙南瓜籽",
          "海盐和胡椒，适量"
        ],
        "steps": [
          "将红薯丁以425°F烤20分钟至变软。",
          "用一撮盐和几滴柠檬汁揉搓羽衣甘蓝至变软。",
          "把芝麻酱、柠檬汁和2汤匙水搅拌成可淋的酱汁。",
          "把藜麦分装进两个碗中，铺上红薯、羽衣甘蓝、鹰嘴豆和牛油果。",
          "淋上芝麻酱汁，撒上南瓜籽并调味。"
        ],
        "swaps": [
          "藜麦 → 糙米（无坚果的常备替代品）",
          "鹰嘴豆 → 白豆（换换口味）",
          "芝麻酱 → 葵花籽酱（无芝麻）"
        ]
      },
      "hi": {
        "title": "रेनबो क्विनोआ बुद्धा बाउल",
        "desc": "फाइबर से भरपूर बाउल — फूला हुआ क्विनोआ, भुना हुआ शकरकंद और कुरकुरा केल, ऊपर से मलाईदार लेमन-ताहिनी की बूंदे।",
        "why": "क्विनोआ और चने पौधे-आधारित प्रोटीन और रेज़िस्टेंट-स्टाइल फाइबर लाते हैं जो आंत के बैक्टीरिया को पोषण देता है, जबकि ताहिनी और एवोकाडो धीरे जलने वाले फैट्स जोड़ते हैं जो घंटों तक भरा हुआ महसूस कराते हैं।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "वीगन",
          "हाई-फाइबर",
          "मील-प्रेप"
        ],
        "ingredients": [
          "1 कप पका हुआ क्विनोआ",
          "1 कप भुने हुए शकरकंद के टुकड़े",
          "1 कप कटा हुआ केल, हाथों से मला हुआ",
          "3/4 कप पके हुए चने",
          "1/2 एवोकाडो, कटा हुआ",
          "2 बड़े चम्मच ताहिनी",
          "1 बड़ा चम्मच नींबू का रस",
          "2 बड़े चम्मच कद्दू के बीज",
          "स्वादानुसार सी सॉल्ट और काली मिर्च"
        ],
        "steps": [
          "शकरकंद के टुकड़ों को 425F पर 20 मिनट तक नरम होने तक भूनें।",
          "केल को एक चुटकी नमक और थोड़े नींबू के रस के साथ तब तक मलें जब तक वह नरम न हो जाए।",
          "ताहिनी, नींबू का रस और 2 बड़े चम्मच पानी को फेंटकर बहने लायक ड्रिज़ल बनाएं।",
          "क्विनोआ को दो बाउल में बांटें और ऊपर शकरकंद, केल, चने और एवोकाडो डालें।",
          "ताहिनी सॉस डालें, कद्दू के बीज बिखेरें और स्वादानुसार सीज़न करें।"
        ],
        "swaps": [
          "क्विनोआ → ब्राउन राइस (नट-फ्री पैंट्री विकल्प)",
          "चने → व्हाइट बीन्स (विविधता के लिए)",
          "ताहिनी → सूरजमुखी बीज बटर (तिल-रहित)"
        ]
      },
      "he": {
        "title": "קערת בודהה קשת בענן עם קינואה",
        "desc": "קערה עמוסת סיבים של קינואה תפוחה, בטטה קלויה וקייל פריך מתחת לרוטב טחינה-לימון קרמי.",
        "why": "קינואה וחומוס מביאים חלבון צמחי וסיבים דמויי-עמידים שמזינים חיידקי מעי, בעוד טחינה ואבוקדו מוסיפים שומנים שבוערים לאט ושומרים על שובע לשעות.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "טבעוני",
          "עתיר סיבים",
          "הכנה מראש"
        ],
        "ingredients": [
          "1 כוס קינואה מבושלת",
          "1 כוס קוביות בטטה קלויה",
          "1 כוס קייל קצוץ, מעוסה",
          "¾ כוס חומוס מבושל",
          "½ אבוקדו, פרוס",
          "2 כפות טחינה",
          "1 כף מיץ לימון",
          "2 כפות גרעיני דלעת",
          "מלח ים ופלפל, לפי הטעם"
        ],
        "steps": [
          "לקלות קוביות בטטה ב-220 מעלות למשך 20 דקות עד רכות.",
          "לעסות את הקייל עם קורט מלח וסחיטת לימון עד שמתרכך.",
          "לטרוף טחינה, מיץ לימון ו-2 כפות מים לרוטב שנשפך.",
          "לחלק את הקינואה בין שתי קערות ולקשט בבטטה, קייל, חומוס ואבוקדו.",
          "לטפטף רוטב טחינה, לפזר גרעיני דלעת ולתבל."
        ],
        "swaps": [
          "קינואה → אורז מלא (החלפת מזווה ללא אגוזים)",
          "חומוס → שעועית לבנה (גיוון)",
          "טחינה → חמאת גרעיני חמנייה (ללא שומשום)"
        ]
      }
    }
  },
  {
    "id": "lunch-salmon-power-salad",
    "title": "Omega Salmon Power Salad",
    "desc": "Flaked wild salmon over greens with avocado, cucumber and toasted walnuts in a bright olive-oil lemon dressing.",
    "image": "/assets/recipes/lunch-salmon-power-salad.png",
    "level": "club",
    "daypart": "lunch",
    "makes": "2",
    "goals": [
      "Protein",
      "Anti-inflammatory"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "High-protein",
      "Anti-inflammatory",
      "15-minute"
    ],
    "macros": {
      "kcal": 450,
      "protein": "30g",
      "carbs": "12g",
      "fat": "32g",
      "fiber": "6g"
    },
    "why": "Wild salmon and walnuts are rich in omega-3 fats traditionally linked to a calmer inflammatory response, and the generous protein makes this a satisfying, blood-sugar-steady midday plate.",
    "swaps": [
      "salmon → canned sardines (budget, still omega-rich)",
      "walnuts → pumpkin seeds (nut-free)",
      "olive oil → avocado oil (variety)"
    ],
    "ingredients": [
      "2 cooked wild salmon fillets (about 5 oz each)",
      "5 cups mixed greens",
      "1/2 avocado, diced",
      "1 cup sliced cucumber",
      "1/4 cup toasted walnuts",
      "2 tbsp olive oil",
      "1 tbsp lemon juice",
      "1 tsp Dijon mustard",
      "Sea salt and pepper to taste"
    ],
    "steps": [
      "Whisk olive oil, lemon juice and Dijon into a dressing.",
      "Toss the mixed greens with the dressing to lightly coat.",
      "Divide greens between two plates and add cucumber and avocado.",
      "Flake the salmon over the top in large pieces.",
      "Finish with toasted walnuts, salt and pepper."
    ],
    "i18n": {
      "pt": {
        "title": "Salada Power de Salmão com Ômega",
        "desc": "Salmão selvagem desfiado sobre folhas verdes com abacate, pepino e nozes tostadas em um molho vibrante de azeite e limão siciliano.",
        "why": "O salmão selvagem e as nozes são ricos em gorduras ômega-3 tradicionalmente associadas a uma resposta inflamatória mais equilibrada, e a proteína generosa faz deste um prato do meio-dia satisfatório e estável para a glicemia.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Rico em proteína",
          "Anti-inflamatório",
          "15 minutos"
        ],
        "ingredients": [
          "2 filés de salmão selvagem cozidos (cerca de 5 oz cada)",
          "5 xícaras de folhas verdes variadas",
          "1/2 abacate, picado",
          "1 xícara de pepino fatiado",
          "1/4 xícara de nozes tostadas",
          "2 colheres de sopa de azeite de oliva",
          "1 colher de sopa de suco de limão siciliano",
          "1 colher de chá de mostarda Dijon",
          "Sal marinho e pimenta a gosto"
        ],
        "steps": [
          "Bata o azeite, o suco de limão siciliano e a mostarda Dijon até formar um molho.",
          "Misture as folhas verdes com o molho até ficarem levemente cobertas.",
          "Divida as folhas entre dois pratos e adicione o pepino e o abacate.",
          "Desfie o salmão por cima em pedaços grandes.",
          "Finalize com as nozes tostadas, sal e pimenta."
        ],
        "swaps": [
          "salmão → sardinha enlatada (mais em conta, ainda rica em ômega)",
          "nozes → sementes de abóbora (sem oleaginosas)",
          "azeite de oliva → óleo de abacate (variedade)"
        ]
      },
      "es": {
        "title": "Ensalada Power de Salmón con Omega",
        "desc": "Salmón salvaje desmenuzado sobre verduras con aguacate, pepino y nueces tostadas, en un aderezo brillante de aceite de oliva y limón.",
        "why": "El salmón salvaje y las nueces son ricos en grasas omega-3, tradicionalmente asociadas con una respuesta inflamatoria más calmada, y la generosa proteína convierte este plato en una opción de mediodía saciante y estable para la glucosa.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Alto en proteína",
          "Antiinflamatorio",
          "15 minutos"
        ],
        "ingredients": [
          "2 filetes de salmón salvaje cocidos (de unas 5 oz cada uno)",
          "5 tazas de verduras mixtas",
          "1/2 aguacate, en cubos",
          "1 taza de pepino en rodajas",
          "1/4 taza de nueces tostadas",
          "2 cucharadas de aceite de oliva",
          "1 cucharada de jugo de limón",
          "1 cucharadita de mostaza Dijon",
          "Sal marina y pimienta al gusto"
        ],
        "steps": [
          "Bate el aceite de oliva, el jugo de limón y la mostaza Dijon hasta formar un aderezo.",
          "Mezcla las verduras con el aderezo hasta cubrirlas ligeramente.",
          "Reparte las verduras en dos platos y agrega el pepino y el aguacate.",
          "Desmenuza el salmón por encima en trozos grandes.",
          "Termina con las nueces tostadas, sal y pimienta."
        ],
        "swaps": [
          "salmón → sardinas en lata (económico, igual de rico en omega)",
          "nueces → semillas de calabaza (sin frutos secos)",
          "aceite de oliva → aceite de aguacate (variedad)"
        ]
      },
      "it": {
        "title": "Insalata Energetica al Salmone e Omega-3",
        "desc": "Salmone selvaggio sfaldato su un letto di verdure con avocado, cetriolo e noci tostate, con un condimento vivace all'olio d'oliva e limone.",
        "why": "Il salmone selvaggio e le noci sono ricchi di grassi omega-3, tradizionalmente associati a una risposta infiammatoria più calma, e le abbondanti proteine rendono questo piatto di mezzogiorno appagante e stabile per la glicemia.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Ricco di proteine",
          "Antinfiammatorio",
          "15 minuti"
        ],
        "ingredients": [
          "2 filetti di salmone selvaggio cotti (circa 5 once ciascuno)",
          "5 tazze di insalata mista",
          "1/2 avocado, a cubetti",
          "1 tazza di cetriolo a fette",
          "1/4 di tazza di noci tostate",
          "2 cucchiai di olio d'oliva",
          "1 cucchiaio di succo di limone",
          "1 cucchiaino di senape di Digione",
          "Sale marino e pepe, quanto basta"
        ],
        "steps": [
          "Sbatti olio d'oliva, succo di limone e senape di Digione per creare un condimento.",
          "Condisci l'insalata mista con il condimento fino a ricoprirla leggermente.",
          "Dividi l'insalata in due piatti e aggiungi cetriolo e avocado.",
          "Sfalda il salmone sopra in pezzi grandi.",
          "Completa con noci tostate, sale e pepe."
        ],
        "swaps": [
          "salmone → sardine in scatola (economico, comunque ricco di omega-3)",
          "noci → semi di zucca (senza frutta a guscio)",
          "olio d'oliva → olio di avocado (per variare)"
        ]
      },
      "zh": {
        "title": "Omega三文鱼能量沙拉",
        "desc": "撕成片的野生三文鱼铺在绿叶菜上，搭配牛油果、黄瓜和烤香核桃，淋上清爽的橄榄油柠檬汁。",
        "why": "野生三文鱼和核桃富含omega-3脂肪酸，在传统上与更平稳的炎症反应有关，丰富的蛋白质让这道午餐令人满足，也有助于血糖平稳。",
        "tags": [
          "无麸质",
          "无乳制品",
          "高蛋白",
          "抗炎",
          "15分钟"
        ],
        "ingredients": [
          "2块煮熟的野生三文鱼排（各约5盎司）",
          "5杯什锦绿叶菜",
          "½个牛油果，切丁",
          "1杯黄瓜片",
          "¼杯烤香核桃",
          "2汤匙橄榄油",
          "1汤匙柠檬汁",
          "1茶匙第戎芥末酱",
          "海盐和胡椒，适量"
        ],
        "steps": [
          "把橄榄油、柠檬汁和第戎芥末酱搅拌成沙拉酱。",
          "用沙拉酱轻轻拌匀什锦绿叶菜。",
          "把绿叶菜分装到两个盘子中，加入黄瓜和牛油果。",
          "把三文鱼撕成大块铺在上面。",
          "最后撒上烤香核桃、盐和胡椒。"
        ],
        "swaps": [
          "三文鱼 → 罐装沙丁鱼（更经济，依然富含omega-3）",
          "核桃 → 南瓜籽（无坚果）",
          "橄榄油 → 牛油果油（换换口味）"
        ]
      },
      "hi": {
        "title": "ओमेगा सैल्मन पावर सलाद",
        "desc": "हरी सब्ज़ियों पर बिखरा हुआ वाइल्ड सैल्मन, एवोकाडो, खीरे और भुने हुए अखरोट के साथ, चटख ऑलिव-ऑयल लेमन ड्रेसिंग में।",
        "why": "वाइल्ड सैल्मन और अखरोट ओमेगा-3 फैट्स से भरपूर हैं जो पारंपरिक रूप से शांत सूजन-प्रतिक्रिया से जुड़े माने जाते हैं, और भरपूर प्रोटीन इसे एक संतोषजनक, ब्लड-शुगर-स्थिर दोपहर की थाली बनाता है।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "हाई-प्रोटीन",
          "एंटी-इन्फ्लेमेटरी",
          "15-मिनट"
        ],
        "ingredients": [
          "2 पके हुए वाइल्ड सैल्मन फिलेट (लगभग 5 औंस प्रत्येक)",
          "5 कप मिक्स हरी सब्ज़ियां",
          "1/2 एवोकाडो, कटा हुआ",
          "1 कप कटा हुआ खीरा",
          "1/4 कप भुने हुए अखरोट",
          "2 बड़े चम्मच ऑलिव ऑयल",
          "1 बड़ा चम्मच नींबू का रस",
          "1 छोटा चम्मच डाइजन मस्टर्ड",
          "स्वादानुसार सी सॉल्ट और काली मिर्च"
        ],
        "steps": [
          "ऑलिव ऑयल, नींबू का रस और डाइजन मस्टर्ड को फेंटकर ड्रेसिंग बनाएं।",
          "मिक्स हरी सब्ज़ियों को ड्रेसिंग के साथ हल्के से मिलाएं।",
          "हरी सब्ज़ियों को दो प्लेटों में बांटें और खीरा व एवोकाडो डालें।",
          "ऊपर सैल्मन को बड़े टुकड़ों में तोड़कर डालें।",
          "अंत में भुने हुए अखरोट, नमक और काली मिर्च डालें।"
        ],
        "swaps": [
          "सैल्मन → डिब्बाबंद सार्डिन (किफायती, फिर भी ओमेगा-युक्त)",
          "अखरोट → कद्दू के बीज (नट-फ्री)",
          "ऑलिव ऑयल → एवोकाडो ऑयल (विविधता के लिए)"
        ]
      },
      "he": {
        "title": "סלט כוח סלמון עתיר אומגה",
        "desc": "סלמון בר פתות מעל ירוקים עם אבוקדו, מלפפון ואגוזי מלך קלויים ברוטב שמן זית-לימון בהיר.",
        "why": "סלמון בר ואגוזי מלך עשירים בשומני אומגה 3 שקשורים באופן מסורתי לתגובה דלקתית רגועה יותר, והחלבון הנדיב הופך את זה לצלחת צהריים משביעה ויציבה מבחינת סוכר בדם.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "עתיר חלבון",
          "אנטי-דלקתי",
          "15 דקות"
        ],
        "ingredients": [
          "2 פילטי סלמון בר מבושלים (כ-140 גרם כל אחד)",
          "5 כוסות ירקות עלים מעורבים",
          "½ אבוקדו, קצוץ לקוביות",
          "1 כוס מלפפון פרוס",
          "¼ כוס אגוזי מלך קלויים",
          "2 כפות שמן זית",
          "1 כף מיץ לימון",
          "1 כפית חרדל דיז'ון",
          "מלח ים ופלפל, לפי הטעם"
        ],
        "steps": [
          "לטרוף שמן זית, מיץ לימון וחרדל לרוטב.",
          "לערבב את הירקות העלים עם הרוטב לציפוי קל.",
          "לחלק את הירקות בין שתי צלחות ולהוסיף מלפפון ואבוקדו.",
          "לפרק את הסלמון לפתיתים גדולים מעל.",
          "לסיים באגוזי מלך קלויים, מלח ופלפל."
        ],
        "swaps": [
          "סלמון → סרדינים משומרים (חסכוני, עדיין עשיר באומגה)",
          "אגוזי מלך → גרעיני דלעת (ללא אגוזים)",
          "שמן זית → שמן אבוקדו (גיוון)"
        ]
      }
    }
  },
  {
    "id": "lunch-turkey-collard-wraps",
    "title": "Turkey Avocado Collard Wraps",
    "desc": "Seasoned ground turkey, creamy avocado and crunchy veg rolled in a sturdy collard leaf instead of a tortilla.",
    "image": "/assets/recipes/lunch-turkey-collard-wraps.png",
    "level": "club",
    "daypart": "lunch",
    "makes": "2",
    "goals": [
      "Protein",
      "Satiety"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "Grain-free",
      "High-protein",
      "Meal-prep"
    ],
    "macros": {
      "kcal": 380,
      "protein": "28g",
      "carbs": "24g",
      "fat": "18g",
      "fiber": "8g"
    },
    "why": "Lean turkey delivers a big protein hit to steady appetite, while the collard wrap and hummus add fiber and volume that keep you full without a heavy grain crash.",
    "swaps": [
      "ground turkey → ground chicken (variety)",
      "collard leaf → large romaine leaves (softer bite)",
      "hummus → mashed avocado (bean-free)"
    ],
    "ingredients": [
      "8 oz lean ground turkey",
      "4 large collard leaves, stems trimmed",
      "1/4 cup hummus",
      "1/2 avocado, sliced",
      "1 carrot, julienned",
      "1/2 red bell pepper, sliced",
      "1 tsp olive oil",
      "1/2 tsp cumin",
      "1/2 tsp smoked paprika",
      "Sea salt to taste"
    ],
    "steps": [
      "Brown the turkey in olive oil with cumin, paprika and salt until cooked through.",
      "Blanch collard leaves in hot water for 20 seconds, then pat dry.",
      "Spread each leaf with hummus.",
      "Layer on turkey, avocado, carrot and bell pepper.",
      "Fold in the sides and roll tightly, then slice in half."
    ],
    "i18n": {
      "pt": {
        "title": "Wraps de Couve com Peru e Abacate",
        "desc": "Peru moído temperado, abacate cremoso e vegetais crocantes enrolados em uma folha resistente de couve, em vez de tortilha.",
        "why": "O peru magro entrega uma boa dose de proteína para estabilizar o apetite, enquanto o wrap de couve e o homus somam fibras e volume que mantêm a saciedade sem o peso de um grão pesado.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Sem grãos",
          "Rico em proteína",
          "Meal-prep"
        ],
        "ingredients": [
          "8 oz de peru moído magro",
          "4 folhas grandes de couve, com os talos aparados",
          "1/4 xícara de homus",
          "1/2 abacate, fatiado",
          "1 cenoura, cortada em juliana",
          "1/2 pimentão vermelho, fatiado",
          "1 colher de chá de azeite de oliva",
          "1/2 colher de chá de cominho",
          "1/2 colher de chá de páprica defumada",
          "Sal marinho a gosto"
        ],
        "steps": [
          "Doure o peru no azeite com o cominho, a páprica e o sal até cozinhar por completo.",
          "Escalde as folhas de couve em água quente por 20 segundos e seque com um pano.",
          "Espalhe o homus em cada folha.",
          "Adicione camadas de peru, abacate, cenoura e pimentão.",
          "Dobre as laterais e enrole bem apertado, depois corte ao meio."
        ],
        "swaps": [
          "peru moído → frango moído (variedade)",
          "folha de couve → folhas grandes de alface romana (mordida mais macia)",
          "homus → abacate amassado (sem leguminosas)"
        ]
      },
      "es": {
        "title": "Wraps de Pavo y Aguacate en Hoja de Berza",
        "desc": "Pavo molido sazonado, aguacate cremoso y verduras crujientes, enrollados en una resistente hoja de berza en lugar de una tortilla.",
        "why": "El pavo magro aporta una gran dosis de proteína que estabiliza el apetito, mientras que la hoja de berza y el hummus suman fibra y volumen que sacian sin el peso de un bajón por granos.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Sin granos",
          "Alto en proteína",
          "Ideal para meal-prep"
        ],
        "ingredients": [
          "8 oz de pavo molido magro",
          "4 hojas grandes de berza, sin el tallo",
          "1/4 taza de hummus",
          "1/2 aguacate, en rodajas",
          "1 zanahoria, en juliana",
          "1/2 pimiento rojo, en tiras",
          "1 cucharadita de aceite de oliva",
          "1/2 cucharadita de comino",
          "1/2 cucharadita de pimentón ahumado",
          "Sal marina al gusto"
        ],
        "steps": [
          "Dora el pavo en aceite de oliva con comino, pimentón y sal hasta que esté bien cocido.",
          "Escalda las hojas de berza en agua caliente durante 20 segundos y sécalas con un paño.",
          "Unta cada hoja con hummus.",
          "Coloca encima el pavo, el aguacate, la zanahoria y el pimiento.",
          "Dobla los lados, enrolla firmemente y corta por la mitad."
        ],
        "swaps": [
          "pavo molido → pollo molido (variedad)",
          "hoja de berza → hojas grandes de lechuga romana (mordida más suave)",
          "hummus → aguacate machacado (sin legumbres)"
        ]
      },
      "it": {
        "title": "Involtini di Cavolo Nero con Tacchino e Avocado",
        "desc": "Tacchino macinato speziato, avocado cremoso e verdure croccanti avvolti in una robusta foglia di cavolo nero invece della tortilla.",
        "why": "Il tacchino magro apporta una grande dose di proteine per stabilizzare l'appetito, mentre l'involtino di cavolo nero e l'hummus aggiungono fibre e volume che saziano senza il peso dei cereali.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Senza cereali",
          "Ricco di proteine",
          "Meal-prep"
        ],
        "ingredients": [
          "8 once di tacchino macinato magro",
          "4 grandi foglie di cavolo nero, private del gambo",
          "1/4 di tazza di hummus",
          "1/2 avocado, a fette",
          "1 carota, a julienne",
          "1/2 peperone rosso, a fette",
          "1 cucchiaino di olio d'oliva",
          "1/2 cucchiaino di cumino",
          "1/2 cucchiaino di paprika affumicata",
          "Sale marino, quanto basta"
        ],
        "steps": [
          "Rosola il tacchino nell'olio d'oliva con cumino, paprika e sale finché non è ben cotto.",
          "Sbianca le foglie di cavolo nero in acqua calda per 20 secondi, poi tamponale per asciugarle.",
          "Spalma ogni foglia con l'hummus.",
          "Disponi sopra tacchino, avocado, carota e peperone.",
          "Piega i lati e arrotola stretto, poi taglia a metà."
        ],
        "swaps": [
          "tacchino macinato → pollo macinato (per variare)",
          "foglia di cavolo nero → grandi foglie di lattuga romana (morso più morbido)",
          "hummus → avocado schiacciato (senza legumi)"
        ]
      },
      "zh": {
        "title": "火鸡牛油果羽衣甘蓝卷",
        "desc": "调味火鸡肉末、绵密牛油果和爽脆蔬菜，用厚实的羽衣甘蓝叶代替玉米饼卷起来。",
        "why": "瘦火鸡肉带来大量蛋白质、稳定食欲，羽衣甘蓝卷叶和鹰嘴豆泥则增加膳食纤维和饱腹的分量，让你满足却不会有沉重谷物带来的疲惫感。",
        "tags": [
          "无麸质",
          "无乳制品",
          "无谷物",
          "高蛋白",
          "备餐友好"
        ],
        "ingredients": [
          "8盎司瘦火鸡肉末",
          "4片大羽衣甘蓝叶，去除硬梗",
          "¼杯鹰嘴豆泥",
          "½个牛油果，切片",
          "1根胡萝卜，切细丝",
          "半个红甜椒，切片",
          "1茶匙橄榄油",
          "½茶匙孜然粉",
          "½茶匙烟熏红椒粉",
          "海盐，适量"
        ],
        "steps": [
          "用橄榄油煎炒火鸡肉末，加入孜然粉、红椒粉和盐，煮至完全熟透。",
          "把羽衣甘蓝叶在热水中焯20秒，然后拍干水分。",
          "在每片叶子上抹上鹰嘴豆泥。",
          "依次铺上火鸡肉、牛油果、胡萝卜丝和甜椒。",
          "把两侧折起，卷紧后切成两半。"
        ],
        "swaps": [
          "火鸡肉末 → 鸡肉末（换换口味）",
          "羽衣甘蓝叶 → 大片罗马生菜叶（口感更柔软）",
          "鹰嘴豆泥 → 牛油果泥（无豆类）"
        ]
      },
      "hi": {
        "title": "टर्की एवोकाडो कोलार्ड रैप्स",
        "desc": "मसालेदार कीमा टर्की, मलाईदार एवोकाडो और कुरकुरी सब्ज़ियां, टॉर्टिला की जगह मज़बूत कोलार्ड पत्ते में लिपटी हुई।",
        "why": "लीन टर्की भूख को स्थिर रखने के लिए भरपूर प्रोटीन देती है, जबकि कोलार्ड रैप और हम्मस फाइबर और भारीपन जोड़ते हैं जो बिना भारी अनाज-क्रैश के आपको भरा रखते हैं।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "अनाज-रहित",
          "हाई-प्रोटीन",
          "मील-प्रेप"
        ],
        "ingredients": [
          "8 औंस लीन कीमा टर्की",
          "4 बड़े कोलार्ड पत्ते, डंठल काटे हुए",
          "1/4 कप हम्मस",
          "1/2 एवोकाडो, कटा हुआ",
          "1 गाजर, पतली कटी हुई",
          "1/2 लाल शिमला मिर्च, कटी हुई",
          "1 छोटा चम्मच ऑलिव ऑयल",
          "1/2 छोटा चम्मच जीरा",
          "1/2 छोटा चम्मच स्मोक्ड पैप्रिका",
          "स्वादानुसार सी सॉल्ट"
        ],
        "steps": [
          "ऑलिव ऑयल में टर्की को जीरा, पैप्रिका और नमक के साथ तब तक पकाएं जब तक पूरी तरह पक न जाए।",
          "कोलार्ड पत्तों को गर्म पानी में 20 सेकंड डुबोएं, फिर सुखाएं।",
          "हर पत्ते पर हम्मस लगाएं।",
          "ऊपर टर्की, एवोकाडो, गाजर और शिमला मिर्च की परत लगाएं।",
          "किनारों को मोड़ें और कसकर रोल करें, फिर आधा काटें।"
        ],
        "swaps": [
          "कीमा टर्की → कीमा चिकन (विविधता के लिए)",
          "कोलार्ड पत्ता → बड़े रोमेन पत्ते (नरम बाइट)",
          "हम्मस → मैश किया हुआ एवोकाडो (बीन-रहित)"
        ]
      },
      "he": {
        "title": "עטיפות עלי קייל עם הודו ואבוקדו",
        "desc": "הודו טחון ומתובל, אבוקדו קרמי וירקות פריכים עטופים בעלה קייל יציב במקום טורטייה.",
        "why": "הודו רזה מספק מנת חלבון גדולה לייצוב התיאבון, בעוד עלה הקייל וההומוס מוסיפים סיבים ונפח ששומרים על שובע בלי קריסת דגנים כבדה.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "ללא דגנים",
          "עתיר חלבון",
          "הכנה מראש"
        ],
        "ingredients": [
          "225 גרם הודו טחון רזה",
          "4 עלי קייל גדולים, גבעולים מוסרים",
          "¼ כוס חומוס",
          "½ אבוקדו, פרוס",
          "1 גזר, פרוס לרצועות",
          "½ פלפל אדום, פרוס",
          "1 כפית שמן זית",
          "½ כפית כמון",
          "½ כפית פפריקה מעושנת",
          "מלח ים, לפי הטעם"
        ],
        "steps": [
          "לשחם את ההודו בשמן זית עם כמון, פפריקה ומלח עד שמתבשל לגמרי.",
          "להכשיר את עלי הקייל במים חמים 20 שניות, ואז לייבש.",
          "למרוח כל עלה בחומוס.",
          "לשכב מעל הודו, אבוקדו, גזר ופלפל.",
          "לקפל את הצדדים ולגלגל היטב, ואז לחתוך לחצי."
        ],
        "swaps": [
          "הודו טחון → עוף טחון (גיוון)",
          "עלה קייל → עלי חסה רומאית גדולים (ביס רך יותר)",
          "חומוס → אבוקדו מרוסק (ללא קטניות)"
        ]
      }
    }
  },
  {
    "id": "lunch-lentil-turmeric-soup",
    "title": "Golden Lentil Turmeric Soup",
    "desc": "A cozy red-lentil soup simmered with ginger, turmeric and coconut milk, finished with a handful of spinach.",
    "image": "/assets/recipes/lunch-lentil-turmeric-soup.png",
    "level": "club",
    "daypart": "lunch",
    "makes": "4",
    "goals": [
      "Anti-inflammatory",
      "Gut health"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "Vegan",
      "Anti-inflammatory",
      "Meal-prep"
    ],
    "macros": {
      "kcal": 320,
      "protein": "14g",
      "carbs": "40g",
      "fat": "12g",
      "fiber": "10g"
    },
    "why": "Turmeric and ginger are traditionally used to support a balanced inflammatory response, and the red lentils bring gentle, gut-friendly fiber plus plant protein in one warming bowl.",
    "swaps": [
      "red lentils → yellow split peas (variety)",
      "coconut milk → cashew cream (nut swap)",
      "spinach → chopped kale (heartier greens)"
    ],
    "ingredients": [
      "1 1/2 cups red lentils, rinsed",
      "1 onion, diced",
      "2 carrots, diced",
      "3 garlic cloves, minced",
      "1 tbsp grated ginger",
      "1 tbsp ground turmeric",
      "1 cup full-fat coconut milk",
      "4 cups vegetable broth",
      "2 cups fresh spinach",
      "1 tbsp olive oil",
      "Sea salt and pepper to taste"
    ],
    "steps": [
      "Saute onion, carrot and garlic in olive oil until soft.",
      "Stir in ginger and turmeric and cook 1 minute until fragrant.",
      "Add lentils and broth, then simmer 20 minutes until lentils break down.",
      "Pour in coconut milk and season with salt and pepper.",
      "Stir in spinach until wilted and serve warm."
    ],
    "i18n": {
      "pt": {
        "title": "Sopa Dourada de Lentilha com Cúrcuma",
        "desc": "Uma sopa aconchegante de lentilha vermelha, cozida em fogo brando com gengibre, cúrcuma e leite de coco, finalizada com um punhado de espinafre.",
        "why": "A cúrcuma e o gengibre são tradicionalmente usados para apoiar uma resposta inflamatória equilibrada, e a lentilha vermelha traz fibras suaves e amigas do intestino, além de proteína vegetal, em uma única tigela reconfortante.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Vegano",
          "Anti-inflamatório",
          "Meal-prep"
        ],
        "ingredients": [
          "1 1/2 xícara de lentilha vermelha, enxaguada",
          "1 cebola, picada",
          "2 cenouras, picadas",
          "3 dentes de alho, picados",
          "1 colher de sopa de gengibre ralado",
          "1 colher de sopa de cúrcuma em pó",
          "1 xícara de leite de coco integral",
          "4 xícaras de caldo de legumes",
          "2 xícaras de espinafre fresco",
          "1 colher de sopa de azeite de oliva",
          "Sal marinho e pimenta a gosto"
        ],
        "steps": [
          "Refogue a cebola, a cenoura e o alho no azeite até amaciarem.",
          "Junte o gengibre e a cúrcuma e cozinhe por 1 minuto até soltar o aroma.",
          "Adicione a lentilha e o caldo, depois cozinhe em fogo brando por 20 minutos até a lentilha desmanchar.",
          "Acrescente o leite de coco e tempere com sal e pimenta.",
          "Junte o espinafre até murchar e sirva quente."
        ],
        "swaps": [
          "lentilha vermelha → ervilha amarela partida (variedade)",
          "leite de coco → creme de castanha de caju (troca de oleaginosa)",
          "espinafre → couve picada (folhas mais encorpadas)"
        ]
      },
      "es": {
        "title": "Sopa Dorada de Lentejas y Cúrcuma",
        "desc": "Una acogedora sopa de lentejas rojas cocida a fuego lento con jengibre, cúrcuma y leche de coco, terminada con un puñado de espinaca.",
        "why": "La cúrcuma y el jengibre se usan tradicionalmente para favorecer una respuesta inflamatoria equilibrada, y las lentejas rojas aportan fibra suave y amigable con el intestino, además de proteína vegetal, en un bowl reconfortante.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Vegano",
          "Antiinflamatorio",
          "Ideal para meal-prep"
        ],
        "ingredients": [
          "1 1/2 tazas de lentejas rojas, enjuagadas",
          "1 cebolla, en cubos",
          "2 zanahorias, en cubos",
          "3 dientes de ajo, picados finos",
          "1 cucharada de jengibre rallado",
          "1 cucharada de cúrcuma molida",
          "1 taza de leche de coco entera",
          "4 tazas de caldo de verduras",
          "2 tazas de espinaca fresca",
          "1 cucharada de aceite de oliva",
          "Sal marina y pimienta al gusto"
        ],
        "steps": [
          "Saltea la cebolla, la zanahoria y el ajo en aceite de oliva hasta que se ablanden.",
          "Incorpora el jengibre y la cúrcuma y cocina 1 minuto hasta que suelten aroma.",
          "Agrega las lentejas y el caldo, luego cocina a fuego lento 20 minutos hasta que las lentejas se deshagan.",
          "Vierte la leche de coco y sazona con sal y pimienta.",
          "Incorpora la espinaca hasta que se marchite y sirve caliente."
        ],
        "swaps": [
          "lentejas rojas → arvejas amarillas partidas (variedad)",
          "leche de coco → crema de anacardo (sustituto de frutos secos)",
          "espinaca → kale picado (verdura más consistente)"
        ]
      },
      "it": {
        "title": "Zuppa Dorata di Lenticchie e Curcuma",
        "desc": "Una zuppa avvolgente di lenticchie rosse cotta a fuoco lento con zenzero, curcuma e latte di cocco, completata con una manciata di spinaci.",
        "why": "Curcuma e zenzero sono tradizionalmente usati per sostenere una risposta infiammatoria equilibrata, e le lenticchie rosse apportano fibre delicate e amiche dell'intestino, oltre a proteine vegetali, in un'unica ciotola avvolgente.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Vegano",
          "Antinfiammatorio",
          "Meal-prep"
        ],
        "ingredients": [
          "1 tazza e 1/2 di lenticchie rosse, sciacquate",
          "1 cipolla, a cubetti",
          "2 carote, a cubetti",
          "3 spicchi d'aglio, tritati",
          "1 cucchiaio di zenzero grattugiato",
          "1 cucchiaio di curcuma in polvere",
          "1 tazza di latte di cocco intero",
          "4 tazze di brodo vegetale",
          "2 tazze di spinaci freschi",
          "1 cucchiaio di olio d'oliva",
          "Sale marino e pepe, quanto basta"
        ],
        "steps": [
          "Soffriggi cipolla, carota e aglio nell'olio d'oliva finché non si ammorbidiscono.",
          "Unisci zenzero e curcuma e cuoci 1 minuto finché non sprigionano il profumo.",
          "Aggiungi le lenticchie e il brodo, poi cuoci a fuoco lento per 20 minuti finché le lenticchie non si sfaldano.",
          "Versa il latte di cocco e condisci con sale e pepe.",
          "Incorpora gli spinaci finché non appassiscono e servi calda."
        ],
        "swaps": [
          "lenticchie rosse → piselli spezzati gialli (per variare)",
          "latte di cocco → crema di anacardi (alternativa con frutta a guscio)",
          "spinaci → cavolo riccio tritato (verdure più corpose)"
        ]
      },
      "zh": {
        "title": "姜黄金色扁豆汤",
        "desc": "暖心的红扁豆汤，用姜、姜黄和椰奶慢煮而成，最后加入一把菠菜。",
        "why": "姜黄和姜在传统上用于帮助维持平衡的炎症反应，红扁豆则在这一碗暖汤中带来温和、肠道友好的膳食纤维和植物蛋白。",
        "tags": [
          "无麸质",
          "无乳制品",
          "纯素",
          "抗炎",
          "备餐友好"
        ],
        "ingredients": [
          "1½杯红扁豆，冲洗干净",
          "1个洋葱，切丁",
          "2根胡萝卜，切丁",
          "3瓣大蒜，切末",
          "1汤匙姜末",
          "1汤匙姜黄粉",
          "1杯全脂椰奶",
          "4杯蔬菜高汤",
          "2杯新鲜菠菜",
          "1汤匙橄榄油",
          "海盐和胡椒，适量"
        ],
        "steps": [
          "用橄榄油炒软洋葱、胡萝卜和大蒜。",
          "拌入姜末和姜黄粉，炒1分钟至香气释放。",
          "加入扁豆和高汤，煮20分钟至扁豆软烂。",
          "倒入椰奶，用盐和胡椒调味。",
          "拌入菠菜至变软，趁热享用。"
        ],
        "swaps": [
          "红扁豆 → 黄豌豆瓣（换换口味）",
          "椰奶 → 腰果奶油（坚果替代）",
          "菠菜 → 切碎的羽衣甘蓝（口感更扎实的绿叶菜）"
        ]
      },
      "hi": {
        "title": "गोल्डन दाल हल्दी सूप",
        "desc": "एक आरामदायक मसूर दाल का सूप, अदरक, हल्दी और नारियल दूध के साथ पकाया हुआ, अंत में मुट्ठी भर पालक के साथ।",
        "why": "हल्दी और अदरक का पारंपरिक रूप से उपयोग संतुलित सूजन-प्रतिक्रिया को सहारा देने के लिए होता है, और मसूर दाल एक गर्म बाउल में हल्का, आंत-हितैषी फाइबर और पौधे-आधारित प्रोटीन साथ लाती है।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "वीगन",
          "एंटी-इन्फ्लेमेटरी",
          "मील-प्रेप"
        ],
        "ingredients": [
          "1 1/2 कप मसूर दाल, धुली हुई",
          "1 प्याज़, कटा हुआ",
          "2 गाजर, कटी हुई",
          "3 लहसुन की कलियां, बारीक कटी हुई",
          "1 बड़ा चम्मच कद्दूकस किया हुआ अदरक",
          "1 बड़ा चम्मच हल्दी पाउडर",
          "1 कप फुल-फैट नारियल दूध",
          "4 कप सब्ज़ी का शोरबा",
          "2 कप ताज़ा पालक",
          "1 बड़ा चम्मच ऑलिव ऑयल",
          "स्वादानुसार सी सॉल्ट और काली मिर्च"
        ],
        "steps": [
          "ऑलिव ऑयल में प्याज़, गाजर और लहसुन को नरम होने तक भूनें।",
          "अदरक और हल्दी मिलाएं और खुशबू आने तक 1 मिनट पकाएं।",
          "दाल और शोरबा डालें, फिर 20 मिनट तक धीमी आंच पर पकाएं जब तक दाल गल न जाए।",
          "नारियल दूध डालें और नमक व काली मिर्च से सीज़न करें।",
          "पालक डालकर मुरझाने तक चलाएं और गर्म-गर्म परोसें।"
        ],
        "swaps": [
          "मसूर दाल → पीली मटर की दाल (विविधता के लिए)",
          "नारियल दूध → काजू क्रीम (नट विकल्प)",
          "पालक → कटा हुआ केल (भारी हरी सब्ज़ी)"
        ]
      },
      "he": {
        "title": "מרק עדשים זהוב עם כורכום",
        "desc": "מרק עדשים אדומות מנחם המבושל עם ג'ינג'ר, כורכום וחלב קוקוס, ומסתיים בחופן תרד.",
        "why": "כורכום וג'ינג'ר משמשים באופן מסורתי לתמיכה בתגובה דלקתית מאוזנת, והעדשים האדומות מביאות סיבים עדינים וידידותיים למעי לצד חלבון צמחי בקערה מחממת אחת.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "טבעוני",
          "אנטי-דלקתי",
          "הכנה מראש"
        ],
        "ingredients": [
          "1½ כוסות עדשים אדומות, שטופות",
          "1 בצל, קצוץ",
          "2 גזרים, קצוצים",
          "3 שיני שום, קצוצות דק",
          "1 כף ג'ינג'ר מגורר",
          "1 כף כורכום טחון",
          "1 כוס חלב קוקוס שמן מלא",
          "4 כוסות ציר ירקות",
          "2 כוסות תרד טרי",
          "1 כף שמן זית",
          "מלח ים ופלפל, לפי הטעם"
        ],
        "steps": [
          "לטגן קלות בצל, גזר ושום בשמן זית עד רכים.",
          "לערבב פנימה ג'ינג'ר וכורכום ולבשל דקה עד ריחני.",
          "להוסיף עדשים וציר, ואז לבשל על אש נמוכה 20 דקות עד שהעדשים מתפרקות.",
          "למזוג פנימה את חלב הקוקוס ולתבל במלח ופלפל.",
          "לערבב פנימה את התרד עד שקמל ולהגיש חם."
        ],
        "swaps": [
          "עדשים אדומות → אפונה צהובה בקילוף (גיוון)",
          "חלב קוקוס → שמנת קשיו (החלפת אגוזים)",
          "תרד → קייל קצוץ (ירקות עלים משמעותיים יותר)"
        ]
      }
    }
  },
  {
    "id": "lunch-black-bean-stuffed-sweet-potato",
    "title": "Black Bean Stuffed Sweet Potato",
    "desc": "A roasted sweet potato split open and piled with smoky black beans, avocado, salsa and lime.",
    "image": "/assets/recipes/lunch-black-bean-stuffed-sweet-potato.png",
    "level": "club",
    "daypart": "lunch",
    "makes": "2",
    "goals": [
      "Satiety",
      "Gut health"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "Vegan",
      "High-fiber",
      "Meal-prep"
    ],
    "macros": {
      "kcal": 400,
      "protein": "12g",
      "carbs": "62g",
      "fat": "13g",
      "fiber": "15g"
    },
    "why": "Sweet potato and black beans stack up soluble and resistant-style fiber that feeds beneficial gut bacteria, and their slow-release carbs keep you satisfied through the afternoon.",
    "swaps": [
      "black beans → pinto beans (variety)",
      "avocado → guacamole (convenience)",
      "salsa → pico de gallo (fresher bite)"
    ],
    "ingredients": [
      "2 medium sweet potatoes",
      "1 cup cooked black beans",
      "1/2 avocado, diced",
      "1/4 cup salsa",
      "1 lime, juiced",
      "2 tbsp chopped cilantro",
      "1 tbsp pumpkin seeds",
      "1/2 tsp cumin",
      "Sea salt to taste"
    ],
    "steps": [
      "Roast sweet potatoes at 425F for 40 minutes until soft.",
      "Warm the black beans with cumin and a pinch of salt.",
      "Split each potato lengthwise and fluff the flesh with a fork.",
      "Fill with black beans, avocado and salsa.",
      "Finish with lime juice, cilantro and pumpkin seeds."
    ],
    "i18n": {
      "pt": {
        "title": "Batata-Doce Recheada com Feijão-Preto",
        "desc": "Uma batata-doce assada, aberta ao meio e recheada com feijão-preto defumado, abacate, salsa e limão.",
        "why": "A batata-doce e o feijão-preto reúnem fibras solúveis e do tipo resistente que alimentam as bactérias intestinais benéficas, e seus carboidratos de liberação lenta mantêm a saciedade ao longo da tarde.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Vegano",
          "Rico em fibras",
          "Meal-prep"
        ],
        "ingredients": [
          "2 batatas-doces médias",
          "1 xícara de feijão-preto cozido",
          "1/2 abacate, picado",
          "1/4 xícara de molho salsa",
          "1 limão, espremido",
          "2 colheres de sopa de coentro picado",
          "1 colher de sopa de sementes de abóbora",
          "1/2 colher de chá de cominho",
          "Sal marinho a gosto"
        ],
        "steps": [
          "Asse as batatas-doces a 425F por 40 minutos, até ficarem macias.",
          "Aqueça o feijão-preto com o cominho e uma pitada de sal.",
          "Corte cada batata ao meio no sentido do comprimento e solte a polpa com um garfo.",
          "Recheie com o feijão-preto, o abacate e o molho salsa.",
          "Finalize com suco de limão, coentro e sementes de abóbora."
        ],
        "swaps": [
          "feijão-preto → feijão-carioca (variedade)",
          "abacate → guacamole (praticidade)",
          "molho salsa → pico de gallo (sabor mais fresco)"
        ]
      },
      "es": {
        "title": "Batata Rellena de Frijoles Negros",
        "desc": "Una batata asada, abierta y colmada de frijoles negros ahumados, aguacate, salsa y lima.",
        "why": "La batata y los frijoles negros combinan fibra soluble y de tipo resistente que alimenta a las bacterias intestinales beneficiosas, y sus carbohidratos de liberación lenta te mantienen satisfecho durante toda la tarde.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Vegano",
          "Alto en fibra",
          "Ideal para meal-prep"
        ],
        "ingredients": [
          "2 batatas medianas",
          "1 taza de frijoles negros cocidos",
          "1/2 aguacate, en cubos",
          "1/4 taza de salsa",
          "1 lima, exprimida",
          "2 cucharadas de cilantro picado",
          "1 cucharada de semillas de calabaza",
          "1/2 cucharadita de comino",
          "Sal marina al gusto"
        ],
        "steps": [
          "Asa las batatas a 425°F durante 40 minutos hasta que estén blandas.",
          "Calienta los frijoles negros con comino y una pizca de sal.",
          "Corta cada batata a lo largo y esponja la pulpa con un tenedor.",
          "Rellena con los frijoles negros, el aguacate y la salsa.",
          "Termina con el jugo de lima, el cilantro y las semillas de calabaza."
        ],
        "swaps": [
          "frijoles negros → frijoles pintos (variedad)",
          "aguacate → guacamole (más práctico)",
          "salsa → pico de gallo (sabor más fresco)"
        ]
      },
      "it": {
        "title": "Patata Dolce Ripiena di Fagioli Neri",
        "desc": "Una patata dolce arrostita, aperta e colma di fagioli neri affumicati, avocado, salsa e lime.",
        "why": "Patata dolce e fagioli neri accumulano fibre solubili e di tipo resistente che nutrono i batteri intestinali benefici, e i loro carboidrati a rilascio lento ti mantengono sazio per tutto il pomeriggio.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Vegano",
          "Ricco di fibre",
          "Meal-prep"
        ],
        "ingredients": [
          "2 patate dolci medie",
          "1 tazza di fagioli neri cotti",
          "1/2 avocado, a cubetti",
          "1/4 di tazza di salsa",
          "1 lime, spremuto",
          "2 cucchiai di coriandolo tritato",
          "1 cucchiaio di semi di zucca",
          "1/2 cucchiaino di cumino",
          "Sale marino, quanto basta"
        ],
        "steps": [
          "Arrostisci le patate dolci a 425°F (220°C) per 40 minuti finché non sono morbide.",
          "Scalda i fagioli neri con il cumino e un pizzico di sale.",
          "Taglia ogni patata per il lungo e smuovi la polpa con una forchetta.",
          "Riempi con fagioli neri, avocado e salsa.",
          "Completa con succo di lime, coriandolo e semi di zucca."
        ],
        "swaps": [
          "fagioli neri → fagioli borlotti (per variare)",
          "avocado → guacamole (più pratico)",
          "salsa → pico de gallo (gusto più fresco)"
        ]
      },
      "zh": {
        "title": "黑豆酿红薯",
        "desc": "烤红薯纵向切开，堆满烟熏黑豆、牛油果、莎莎酱和青柠。",
        "why": "红薯和黑豆叠加了可溶性和抗性膳食纤维，滋养有益肠道菌群，它们缓慢释放的碳水化合物让你整个下午都感到满足。",
        "tags": [
          "无麸质",
          "无乳制品",
          "纯素",
          "高纤维",
          "备餐友好"
        ],
        "ingredients": [
          "2个中等大小红薯",
          "1杯煮熟的黑豆",
          "½个牛油果，切丁",
          "¼杯莎莎酱",
          "1个青柠，榨汁",
          "2汤匙香菜碎",
          "1汤匙南瓜籽",
          "½茶匙孜然粉",
          "海盐，适量"
        ],
        "steps": [
          "将红薯以425°F烤40分钟至变软。",
          "加热黑豆，拌入孜然粉和一撮盐。",
          "把每个红薯纵向切开，用叉子把果肉挑松。",
          "填入黑豆、牛油果和莎莎酱。",
          "最后淋上青柠汁，撒上香菜和南瓜籽。"
        ],
        "swaps": [
          "黑豆 → 花斑豆（换换口味）",
          "牛油果 → 牛油果酱（更方便）",
          "莎莎酱 → 皮科德加洛番茄莎莎（口感更清爽）"
        ]
      },
      "hi": {
        "title": "ब्लैक बीन स्टफ्ड शकरकंद",
        "desc": "भुना हुआ शकरकंद बीच से काटकर, धुएंदार ब्लैक बीन्स, एवोकाडो, साल्सा और नींबू से भरा हुआ।",
        "why": "शकरकंद और ब्लैक बीन्स घुलनशील और रेज़िस्टेंट-स्टाइल फाइबर की भरपूर मात्रा देते हैं जो लाभकारी आंत बैक्टीरिया को पोषण देती है, और उनके धीरे रिलीज़ होने वाले कार्ब्स दोपहर भर आपको तृप्त रखते हैं।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "वीगन",
          "हाई-फाइबर",
          "मील-प्रेप"
        ],
        "ingredients": [
          "2 मध्यम शकरकंद",
          "1 कप पकी हुई ब्लैक बीन्स",
          "1/2 एवोकाडो, कटा हुआ",
          "1/4 कप साल्सा",
          "1 नींबू का रस",
          "2 बड़े चम्मच कटा हुआ धनिया",
          "1 बड़ा चम्मच कद्दू के बीज",
          "1/2 छोटा चम्मच जीरा",
          "स्वादानुसार सी सॉल्ट"
        ],
        "steps": [
          "शकरकंद को 425F पर 40 मिनट तक नरम होने तक भूनें।",
          "ब्लैक बीन्स को जीरे और एक चुटकी नमक के साथ गर्म करें।",
          "हर शकरकंद को लंबाई में काटें और कांटे से गूदे को फुलाएं।",
          "ब्लैक बीन्स, एवोकाडो और साल्सा से भरें।",
          "अंत में नींबू का रस, धनिया और कद्दू के बीज डालें।"
        ],
        "swaps": [
          "ब्लैक बीन्स → पिंटो बीन्स (विविधता के लिए)",
          "एवोकाडो → ग्वाकामोले (सुविधा के लिए)",
          "साल्सा → पिको डी गैयो (ज़्यादा ताज़ा स्वाद)"
        ]
      },
      "he": {
        "title": "בטטה ממולאת שעועית שחורה",
        "desc": "בטטה קלויה נפתחת ומעומסת בשעועית שחורה מעושנת, אבוקדו, סלסה וליים.",
        "why": "בטטה ושעועית שחורה מצטברות לסיבים מסיסים ודמויי-עמידים שמזינים חיידקי מעי מועילים, והפחמימות שמשתחררות לאט שלהן שומרות על שובע לאורך אחר הצהריים.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "טבעוני",
          "עתיר סיבים",
          "הכנה מראש"
        ],
        "ingredients": [
          "2 בטטות בינוניות",
          "1 כוס שעועית שחורה מבושלת",
          "½ אבוקדו, קצוץ לקוביות",
          "¼ כוס סלסה",
          "1 ליים, סחוט",
          "2 כפות כוסברה קצוצה",
          "1 כף גרעיני דלעת",
          "½ כפית כמון",
          "מלח ים, לפי הטעם"
        ],
        "steps": [
          "לקלות את הבטטות ב-220 מעלות למשך 40 דקות עד רכות.",
          "לחמם את השעועית השחורה עם כמון וקורט מלח.",
          "לפצל כל בטטה לאורך ולתחוח את הבשר במזלג.",
          "למלא בשעועית שחורה, אבוקדו וסלסה.",
          "לסיים במיץ ליים, כוסברה וגרעיני דלעת."
        ],
        "swaps": [
          "שעועית שחורה → שעועית פינטו (גיוון)",
          "אבוקדו → גוואקמולי (נוחות)",
          "סלסה → פיקו דה גיו (טעם רענן יותר)"
        ]
      }
    }
  },
  {
    "id": "lunch-veggie-egg-muffins",
    "title": "Spinach and Pepper Egg Muffins",
    "desc": "Portable baked egg cups loaded with spinach, bell pepper and tomato — meal-prep protein you can grab cold or warm.",
    "image": "/assets/recipes/lunch-veggie-egg-muffins.png",
    "level": "club",
    "daypart": "lunch",
    "makes": "6",
    "goals": [
      "Protein"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "Grain-free",
      "High-protein",
      "Meal-prep"
    ],
    "macros": {
      "kcal": 180,
      "protein": "14g",
      "carbs": "5g",
      "fat": "12g",
      "fiber": "2g"
    },
    "why": "Whole eggs deliver complete, highly absorbable protein plus choline, making these muffins a steady, satisfying protein base you can prep once and eat all week.",
    "swaps": [
      "eggs → egg whites plus 1 whole (lighter fat)",
      "spinach → chopped kale (variety)",
      "add crumbled feta → nutritional yeast (dairy-free umami)"
    ],
    "ingredients": [
      "8 large eggs",
      "1 cup chopped spinach",
      "1/2 red bell pepper, diced",
      "1/4 cup diced tomato",
      "2 tbsp diced onion",
      "1 tbsp olive oil",
      "1/2 tsp garlic powder",
      "Sea salt and pepper to taste"
    ],
    "steps": [
      "Preheat oven to 375F and grease a 12-cup muffin tin with olive oil.",
      "Whisk eggs with garlic powder, salt and pepper.",
      "Stir in spinach, bell pepper, tomato and onion.",
      "Divide the mixture evenly among the muffin cups.",
      "Bake 18 to 20 minutes until set, then cool before storing."
    ],
    "i18n": {
      "pt": {
        "title": "Muffins de Ovo com Espinafre e Pimentão",
        "desc": "Copinhos de ovo assado, portáteis e carregados de espinafre, pimentão e tomate — proteína de meal prep que você pega frio ou quente.",
        "why": "Os ovos inteiros entregam proteína completa e altamente absorvível, além de colina, transformando esses muffins em uma base de proteína estável e satisfatória que você prepara uma vez e come a semana toda.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Sem grãos",
          "Rico em proteína",
          "Meal-prep"
        ],
        "ingredients": [
          "8 ovos grandes",
          "1 xícara de espinafre picado",
          "1/2 pimentão vermelho, picado",
          "1/4 xícara de tomate picado",
          "2 colheres de sopa de cebola picada",
          "1 colher de sopa de azeite de oliva",
          "1/2 colher de chá de alho em pó",
          "Sal marinho e pimenta a gosto"
        ],
        "steps": [
          "Preaqueça o forno a 375F e unte uma forma de muffins para 12 unidades com azeite.",
          "Bata os ovos com o alho em pó, o sal e a pimenta.",
          "Junte o espinafre, o pimentão, o tomate e a cebola.",
          "Divida a mistura igualmente entre as cavidades da forma.",
          "Asse por 18 a 20 minutos até firmar, depois deixe esfriar antes de guardar."
        ],
        "swaps": [
          "ovos → claras mais 1 ovo inteiro (menos gordura)",
          "espinafre → couve picada (variedade)",
          "adicione queijo feta esfarelado → levedura nutricional (umami sem lactose)"
        ]
      },
      "es": {
        "title": "Muffins de Huevo con Espinaca y Pimiento",
        "desc": "Vasitos de huevo horneados y portátiles, cargados de espinaca, pimiento y tomate: proteína para meal-prep que puedes comer fría o caliente.",
        "why": "Los huevos enteros aportan proteína completa y altamente absorbible además de colina, lo que convierte estos muffins en una base de proteína estable y saciante que puedes preparar una vez y comer toda la semana.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Sin granos",
          "Alto en proteína",
          "Ideal para meal-prep"
        ],
        "ingredients": [
          "8 huevos grandes",
          "1 taza de espinaca picada",
          "1/2 pimiento rojo, en cubos",
          "1/4 taza de tomate en cubos",
          "2 cucharadas de cebolla en cubos",
          "1 cucharada de aceite de oliva",
          "1/2 cucharadita de ajo en polvo",
          "Sal marina y pimienta al gusto"
        ],
        "steps": [
          "Precalienta el horno a 375°F y engrasa un molde para 12 muffins con aceite de oliva.",
          "Bate los huevos con el ajo en polvo, la sal y la pimienta.",
          "Incorpora la espinaca, el pimiento, el tomate y la cebolla.",
          "Reparte la mezcla en partes iguales entre los moldes.",
          "Hornea de 18 a 20 minutos hasta que cuajen, luego deja enfriar antes de guardar."
        ],
        "swaps": [
          "huevos → claras de huevo más 1 entero (menos grasa)",
          "espinaca → kale picado (variedad)",
          "queso feta desmenuzado → levadura nutricional (umami sin lácteos)"
        ]
      },
      "it": {
        "title": "Muffin Salati di Uova con Spinaci e Peperoni",
        "desc": "Coppette di uova al forno, pratiche da portare via, colme di spinaci, peperone e pomodoro — proteine per il meal-prep da gustare fredde o calde.",
        "why": "Le uova intere forniscono proteine complete e altamente assimilabili, oltre alla colina, rendendo questi muffin una base proteica stabile e appagante da preparare una volta e mangiare per tutta la settimana.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Senza cereali",
          "Ricco di proteine",
          "Meal-prep"
        ],
        "ingredients": [
          "8 uova grandi",
          "1 tazza di spinaci tritati",
          "1/2 peperone rosso, a cubetti",
          "1/4 di tazza di pomodoro a cubetti",
          "2 cucchiai di cipolla a cubetti",
          "1 cucchiaio di olio d'oliva",
          "1/2 cucchiaino di aglio in polvere",
          "Sale marino e pepe, quanto basta"
        ],
        "steps": [
          "Preriscalda il forno a 375°F (190°C) e ungi con olio d'oliva uno stampo per muffin da 12 cavità.",
          "Sbatti le uova con l'aglio in polvere, sale e pepe.",
          "Incorpora spinaci, peperone, pomodoro e cipolla.",
          "Dividi il composto in modo uniforme tra le cavità dello stampo.",
          "Cuoci in forno per 18-20 minuti finché non si rapprendono, poi lascia raffreddare prima di conservare."
        ],
        "swaps": [
          "uova → albumi più 1 uovo intero (meno grassi)",
          "spinaci → cavolo riccio tritato (per variare)",
          "aggiungi feta sbriciolata → lievito alimentare (umami senza latticini)"
        ]
      },
      "zh": {
        "title": "菠菜甜椒鸡蛋马芬",
        "desc": "便携的烤鸡蛋杯，满满菠菜、甜椒和番茄——冷食热食皆宜的备餐蛋白质来源。",
        "why": "全蛋提供完整、易吸收的蛋白质和胆碱，让这些马芬成为一次准备、可以吃一整周的稳定满足的蛋白质基础。",
        "tags": [
          "无麸质",
          "无乳制品",
          "无谷物",
          "高蛋白",
          "备餐友好"
        ],
        "ingredients": [
          "8个大鸡蛋",
          "1杯菠菜碎",
          "半个红甜椒，切丁",
          "¼杯番茄丁",
          "2汤匙洋葱丁",
          "1汤匙橄榄油",
          "½茶匙蒜粉",
          "海盐和胡椒，适量"
        ],
        "steps": [
          "将烤箱预热至375°F，用橄榄油涂抹12孔马芬模具。",
          "把鸡蛋与蒜粉、盐和胡椒搅打均匀。",
          "拌入菠菜、甜椒、番茄和洋葱。",
          "把蛋液均匀分装到马芬模具中。",
          "烤18到20分钟至凝固定型，放凉后再保存。"
        ],
        "swaps": [
          "鸡蛋 → 蛋清加1个全蛋（脂肪含量更低）",
          "菠菜 → 羽衣甘蓝碎（换换口味）",
          "加入碎羊乳酪 → 营养酵母（无乳制品的鲜味）"
        ]
      },
      "hi": {
        "title": "पालक और शिमला मिर्च एग मफिन्स",
        "desc": "साथ ले जाने लायक बेक्ड एग कप्स, पालक, शिमला मिर्च और टमाटर से भरपूर — मील-प्रेप प्रोटीन जिसे आप ठंडा या गर्म उठाकर खा सकें।",
        "why": "साबुत अंडे पूरा, आसानी से अवशोषित होने वाला प्रोटीन और कोलीन देते हैं, जिससे ये मफिन्स एक स्थिर, संतोषजनक प्रोटीन आधार बनते हैं जिन्हें आप एक बार बनाकर पूरे हफ्ते खा सकें।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "अनाज-रहित",
          "हाई-प्रोटीन",
          "मील-प्रेप"
        ],
        "ingredients": [
          "8 बड़े अंडे",
          "1 कप कटा हुआ पालक",
          "1/2 लाल शिमला मिर्च, कटी हुई",
          "1/4 कप कटा हुआ टमाटर",
          "2 बड़े चम्मच कटा हुआ प्याज़",
          "1 बड़ा चम्मच ऑलिव ऑयल",
          "1/2 छोटा चम्मच लहसुन पाउडर",
          "स्वादानुसार सी सॉल्ट और काली मिर्च"
        ],
        "steps": [
          "ओवन को 375F पर पहले से गर्म करें और 12-कप मफिन टिन को ऑलिव ऑयल से चिकना करें।",
          "अंडों को लहसुन पाउडर, नमक और काली मिर्च के साथ फेंटें।",
          "पालक, शिमला मिर्च, टमाटर और प्याज़ मिलाएं।",
          "मिश्रण को मफिन कप्स में बराबर बांटें।",
          "18 से 20 मिनट तक बेक करें जब तक जम न जाए, फिर स्टोर करने से पहले ठंडा करें।"
        ],
        "swaps": [
          "अंडे → अंडे की सफेदी और 1 साबुत अंडा (कम फैट)",
          "पालक → कटा हुआ केल (विविधता के लिए)",
          "क्रम्बल फेटा डालें → न्यूट्रिशनल यीस्ट (डेयरी-फ्री उमामी)"
        ]
      },
      "he": {
        "title": "מאפיני ביצה עם תרד ופלפל",
        "desc": "כוסות ביצה אפויות וניידות עמוסות תרד, פלפל מתוק ועגבנייה — חלבון להכנה מראש שאפשר לתפוס קר או חם.",
        "why": "ביצים שלמות מספקות חלבון מלא וזמין ביולוגית לצד כולין, מה שהופך את המאפינים הללו לבסיס חלבון יציב ומשביע שאפשר להכין פעם אחת ולאכול לאורך כל השבוע.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "ללא דגנים",
          "עתיר חלבון",
          "הכנה מראש"
        ],
        "ingredients": [
          "8 ביצים גדולות",
          "1 כוס תרד קצוץ",
          "½ פלפל אדום, קצוץ לקוביות",
          "¼ כוס עגבנייה קצוצה לקוביות",
          "2 כפות בצל קצוץ לקוביות",
          "1 כף שמן זית",
          "½ כפית אבקת שום",
          "מלח ים ופלפל, לפי הטעם"
        ],
        "steps": [
          "לחמם תנור ל-190 מעלות ולשמן תבנית מאפינים ל-12 כוסות בשמן זית.",
          "לטרוף ביצים עם אבקת שום, מלח ופלפל.",
          "לערבב פנימה תרד, פלפל, עגבנייה ובצל.",
          "לחלק את התערובת באופן שווה בין כוסות המאפינים.",
          "לאפות 18-20 דקות עד שמתייצבות, ואז לצנן לפני האחסון."
        ],
        "swaps": [
          "ביצים → חלבוני ביצה ועוד ביצה שלמה אחת (פחות שומן)",
          "תרד → קייל קצוץ (גיוון)",
          "תוספת גבינת פטה מפוררת → שמרי תזונה (עושר ללא חלב)"
        ]
      }
    }
  },
  {
    "id": "lunch-sesame-zoodle-bowl",
    "title": "Sesame Almond Zoodle Bowl",
    "desc": "Cool zucchini noodles tossed with edamame and crunchy cabbage in a creamy almond-sesame dressing.",
    "image": "/assets/recipes/lunch-sesame-zoodle-bowl.png",
    "level": "club",
    "daypart": "lunch",
    "makes": "2",
    "goals": [
      "Anti-inflammatory",
      "Protein"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "Vegan",
      "Grain-free",
      "15-minute"
    ],
    "macros": {
      "kcal": 360,
      "protein": "16g",
      "carbs": "26g",
      "fat": "22g",
      "fiber": "8g"
    },
    "why": "Edamame adds plant protein while ginger, sesame and almonds bring healthy fats and compounds traditionally used to support a calm inflammatory response — a light bowl that still satisfies.",
    "swaps": [
      "zucchini noodles → cucumber ribbons (no spiralizer)",
      "almond butter → sunflower seed butter (nut-free)",
      "edamame → shelled hemp seeds (soy-free)"
    ],
    "ingredients": [
      "3 medium zucchini, spiralized",
      "1 cup shelled edamame",
      "1 cup shredded red cabbage",
      "1 carrot, julienned",
      "2 tbsp almond butter",
      "1 tbsp tamari",
      "1 tbsp rice vinegar",
      "1 tsp grated ginger",
      "1 tbsp sesame seeds",
      "1 tsp sesame oil"
    ],
    "steps": [
      "Whisk almond butter, tamari, rice vinegar, ginger, sesame oil and 2 tbsp water into a dressing.",
      "Pat the spiralized zucchini dry with a towel to remove excess water.",
      "Toss zucchini, edamame, cabbage and carrot together in a large bowl.",
      "Add the dressing and toss until everything is coated.",
      "Top with sesame seeds and serve chilled."
    ],
    "i18n": {
      "pt": {
        "title": "Bowl de Macarrão de Abobrinha com Gergelim e Amêndoa",
        "desc": "Macarrão fresquinho de abobrinha misturado com edamame e repolho crocante em um molho cremoso de amêndoa e gergelim.",
        "why": "O edamame soma proteína vegetal enquanto o gengibre, o gergelim e a amêndoa trazem gorduras boas e compostos tradicionalmente usados para apoiar uma resposta inflamatória mais calma — um bowl leve que ainda assim satisfaz.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Vegano",
          "Sem grãos",
          "15 minutos"
        ],
        "ingredients": [
          "3 abobrinhas médias, cortadas em espiral",
          "1 xícara de edamame sem casca",
          "1 xícara de repolho roxo picado",
          "1 cenoura, cortada em juliana",
          "2 colheres de sopa de pasta de amêndoas",
          "1 colher de sopa de tamari",
          "1 colher de sopa de vinagre de arroz",
          "1 colher de chá de gengibre ralado",
          "1 colher de sopa de sementes de gergelim",
          "1 colher de chá de óleo de gergelim"
        ],
        "steps": [
          "Bata a pasta de amêndoas, o tamari, o vinagre de arroz, o gengibre, o óleo de gergelim e 2 colheres de sopa de água até formar um molho.",
          "Seque a abobrinha em espiral com um pano para remover o excesso de água.",
          "Misture a abobrinha, o edamame, o repolho e a cenoura em uma tigela grande.",
          "Adicione o molho e misture até cobrir tudo.",
          "Finalize com as sementes de gergelim e sirva gelado."
        ],
        "swaps": [
          "macarrão de abobrinha → fitas de pepino (sem espiralizador)",
          "pasta de amêndoas → pasta de sementes de girassol (sem oleaginosas)",
          "edamame → sementes de cânhamo descascadas (sem soja)"
        ]
      },
      "es": {
        "title": "Bowl de Fideos de Calabacín con Sésamo y Almendra",
        "desc": "Fideos fríos de calabacín mezclados con edamame y col crujiente, en un cremoso aderezo de almendra y sésamo.",
        "why": "El edamame aporta proteína vegetal, mientras que el jengibre, el sésamo y la almendra suman grasas saludables y compuestos usados tradicionalmente para favorecer una respuesta inflamatoria calmada: un bowl ligero que igual satisface.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Vegano",
          "Sin granos",
          "15 minutos"
        ],
        "ingredients": [
          "3 calabacines medianos, en espiral",
          "1 taza de edamame sin vaina",
          "1 taza de col morada rallada",
          "1 zanahoria, en juliana",
          "2 cucharadas de mantequilla de almendra",
          "1 cucharada de tamari",
          "1 cucharada de vinagre de arroz",
          "1 cucharadita de jengibre rallado",
          "1 cucharada de semillas de sésamo",
          "1 cucharadita de aceite de sésamo"
        ],
        "steps": [
          "Bate la mantequilla de almendra, el tamari, el vinagre de arroz, el jengibre, el aceite de sésamo y 2 cucharadas de agua hasta formar un aderezo.",
          "Seca el calabacín en espiral con un paño para quitar el exceso de agua.",
          "Mezcla el calabacín, el edamame, la col y la zanahoria en un bowl grande.",
          "Agrega el aderezo y mezcla hasta cubrir todo.",
          "Corona con las semillas de sésamo y sirve frío."
        ],
        "swaps": [
          "fideos de calabacín → cintas de pepino (si no tienes espiralizador)",
          "mantequilla de almendra → mantequilla de semillas de girasol (sin frutos secos)",
          "edamame → semillas de cáñamo peladas (sin soya)"
        ]
      },
      "it": {
        "title": "Ciotola di Zoodle al Sesamo e Mandorle",
        "desc": "Spaghetti di zucchine freschi conditi con edamame e cavolo croccante, in una cremosa salsa di mandorle e sesamo.",
        "why": "Gli edamame aggiungono proteine vegetali, mentre zenzero, sesamo e mandorle apportano grassi buoni e composti tradizionalmente usati per sostenere una risposta infiammatoria calma — una ciotola leggera che comunque sazia.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Vegano",
          "Senza cereali",
          "15 minuti"
        ],
        "ingredients": [
          "3 zucchine medie, spiralizzate",
          "1 tazza di edamame sgusciati",
          "1 tazza di cavolo rosso tagliato fine",
          "1 carota, a julienne",
          "2 cucchiai di burro di mandorle",
          "1 cucchiaio di tamari",
          "1 cucchiaio di aceto di riso",
          "1 cucchiaino di zenzero grattugiato",
          "1 cucchiaio di semi di sesamo",
          "1 cucchiaino di olio di sesamo"
        ],
        "steps": [
          "Sbatti burro di mandorle, tamari, aceto di riso, zenzero, olio di sesamo e 2 cucchiai d'acqua per ottenere un condimento.",
          "Tampona le zucchine spiralizzate con un canovaccio per rimuovere l'acqua in eccesso.",
          "Mescola zucchine, edamame, cavolo e carota in una ciotola capiente.",
          "Aggiungi il condimento e mescola finché tutto non è ben ricoperto.",
          "Guarnisci con semi di sesamo e servi fredda."
        ],
        "swaps": [
          "spaghetti di zucchine → nastri di cetriolo (senza spiralizzatore)",
          "burro di mandorle → burro di semi di girasole (senza frutta a guscio)",
          "edamame → semi di canapa sgusciati (senza soia)"
        ]
      },
      "zh": {
        "title": "芝麻杏仁西葫芦面碗",
        "desc": "清爽的西葫芦面拌上毛豆和爽脆卷心菜，淋上绵密的杏仁芝麻酱。",
        "why": "毛豆提供植物蛋白，姜、芝麻和杏仁带来健康脂肪和一些在传统上用于帮助维持平和炎症反应的成分——清爽却依然令人满足的一碗。",
        "tags": [
          "无麸质",
          "无乳制品",
          "纯素",
          "无谷物",
          "15分钟"
        ],
        "ingredients": [
          "3根中等大小西葫芦，刨成螺旋面条",
          "1杯毛豆仁",
          "1杯紫甘蓝丝",
          "1根胡萝卜，切细丝",
          "2汤匙杏仁酱",
          "1汤匙溜酱油",
          "1汤匙米醋",
          "1茶匙姜末",
          "1汤匙芝麻",
          "1茶匙芝麻油"
        ],
        "steps": [
          "把杏仁酱、溜酱油、米醋、姜末、芝麻油和2汤匙水搅拌成酱汁。",
          "用厨房纸把西葫芦螺旋面拍干，去除多余水分。",
          "把西葫芦面、毛豆、卷心菜和胡萝卜一起放入大碗中拌匀。",
          "加入酱汁，拌匀至所有食材均匀裹上酱汁。",
          "撒上芝麻，冰镇后享用。"
        ],
        "swaps": [
          "西葫芦面 → 黄瓜薄片（没有螺旋切菜器时）",
          "杏仁酱 → 葵花籽酱（无坚果）",
          "毛豆 → 去壳大麻籽（无大豆）"
        ]
      },
      "hi": {
        "title": "तिल आमंड ज़ूडल बाउल",
        "desc": "ठंडी तोरई नूडल्स, एडामामे और कुरकुरी पत्तागोभी के साथ, मलाईदार बादाम-तिल ड्रेसिंग में मिली हुई।",
        "why": "एडामामे पौधे-आधारित प्रोटीन जोड़ता है जबकि अदरक, तिल और बादाम अच्छे फैट्स और वे तत्व लाते हैं जिनका पारंपरिक रूप से शांत सूजन-प्रतिक्रिया को सहारा देने के लिए उपयोग होता है — एक हल्का बाउल जो फिर भी संतुष्ट करता है।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "वीगन",
          "अनाज-रहित",
          "15-मिनट"
        ],
        "ingredients": [
          "3 मध्यम तोरई, स्पाइरल कटी हुई",
          "1 कप छिला हुआ एडामामे",
          "1 कप कसी हुई लाल पत्तागोभी",
          "1 गाजर, पतली कटी हुई",
          "2 बड़े चम्मच बादाम बटर",
          "1 बड़ा चम्मच तमारी",
          "1 बड़ा चम्मच राइस विनेगर",
          "1 छोटा चम्मच कद्दूकस किया हुआ अदरक",
          "1 बड़ा चम्मच तिल",
          "1 छोटा चम्मच तिल का तेल"
        ],
        "steps": [
          "बादाम बटर, तमारी, राइस विनेगर, अदरक, तिल का तेल और 2 बड़े चम्मच पानी को फेंटकर ड्रेसिंग बनाएं।",
          "स्पाइरल कटी तोरई को तौलिये से सुखाकर अतिरिक्त पानी हटाएं।",
          "एक बड़े बाउल में तोरई, एडामामे, पत्तागोभी और गाजर मिलाएं।",
          "ड्रेसिंग डालें और तब तक मिलाएं जब तक सब कुछ अच्छे से लिपट न जाए।",
          "ऊपर तिल डालें और ठंडा परोसें।"
        ],
        "swaps": [
          "तोरई नूडल्स → खीरे की पट्टियां (स्पाइरलाइज़र न हो तो)",
          "बादाम बटर → सूरजमुखी बीज बटर (नट-फ्री)",
          "एडामामे → छिले हुए हेम्प बीज (सोया-फ्री)"
        ]
      },
      "he": {
        "title": "קערת נודלס קישוא עם שומשום ושקדים",
        "desc": "נודלס קישוא קרים מעורבבים עם אדממה וכרוב פריך ברוטב שקדים-שומשום קרמי.",
        "why": "אדממה מוסיפה חלבון צמחי בעוד ג'ינג'ר, שומשום ושקדים מביאים שומנים בריאים ותרכובות שמשמשות באופן מסורתי לתמיכה בתגובה דלקתית רגועה — קערה קלילה שעדיין משביעה.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "טבעוני",
          "ללא דגנים",
          "15 דקות"
        ],
        "ingredients": [
          "3 קישואים בינוניים, חתוכים לספירלה",
          "1 כוס אדממה קלוף",
          "1 כוס כרוב סגול מגורר",
          "1 גזר, פרוס לרצועות",
          "2 כפות חמאת שקדים",
          "1 כף טמארי",
          "1 כף חומץ אורז",
          "1 כפית ג'ינג'ר מגורר",
          "1 כף שומשום",
          "1 כפית שמן שומשום"
        ],
        "steps": [
          "לטרוף חמאת שקדים, טמארי, חומץ אורז, ג'ינג'ר, שמן שומשום ו-2 כפות מים לרוטב.",
          "לייבש את הקישוא המספרל במגבת כדי להסיר עודף מים.",
          "לערבב יחד קישוא, אדממה, כרוב וגזר בקערה גדולה.",
          "להוסיף את הרוטב ולערבב עד שהכול מצופה.",
          "לקשט בשומשום ולהגיש קר."
        ],
        "swaps": [
          "נודלס קישוא → רצועות מלפפון (בלי מכשיר ספירלה)",
          "חמאת שקדים → חמאת גרעיני חמנייה (ללא אגוזים)",
          "אדממה → זרעי קנביס קלופים (ללא סויה)"
        ]
      }
    }
  },
  {
    "id": "dinner-sheet-pan-salmon",
    "title": "Sheet-Pan Salmon with Lemon & Greens",
    "desc": "One tray, twenty minutes — jammy salmon over blistered broccoli and asparagus with a bright lemon finish.",
    "image": "/assets/recipes/dinner-sheet-pan-salmon.png",
    "level": "free",
    "daypart": "dinner",
    "makes": "2",
    "goals": [
      "Anti-inflammatory",
      "Protein"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "One-pan",
      "High-protein",
      "Anti-inflammatory"
    ],
    "macros": {
      "kcal": 510,
      "protein": "44g",
      "carbs": "12g",
      "fat": "33g",
      "fiber": "6g"
    },
    "why": "Wild salmon is rich in omega-3 fats traditionally linked to a calmer inflammatory response, while the cruciferous greens add fiber and antioxidants that support recovery after a long day.",
    "swaps": [
      "salmon → arctic char or trout (same omega-3 profile)",
      "asparagus → green beans (seasonal swap)",
      "olive oil → avocado oil (higher smoke point)"
    ],
    "ingredients": [
      "2 salmon fillets (6 oz each)",
      "2 cups broccoli florets",
      "1 bunch asparagus, trimmed",
      "2 tbsp olive oil",
      "2 cloves garlic, minced",
      "1 lemon (half juiced, half sliced)",
      "1/2 tsp sea salt",
      "1/4 tsp black pepper",
      "Fresh dill, to finish"
    ],
    "steps": [
      "Heat oven to 425F and line a sheet pan.",
      "Toss broccoli and asparagus with 1 tbsp oil, garlic, salt and pepper; spread on the pan and roast 8 minutes.",
      "Push veg to the edges, nestle salmon in the center, brush with remaining oil and top with lemon slices.",
      "Roast 10-12 minutes until salmon flakes and greens are charred at the tips.",
      "Finish with lemon juice and fresh dill, then serve straight from the pan."
    ],
    "i18n": {
      "pt": {
        "title": "Salmão de Assadeira com Limão Siciliano e Verduras",
        "desc": "Uma assadeira só, vinte minutos — salmão suculento sobre brócolis e aspargos tostados, com um toque final vibrante de limão siciliano.",
        "why": "O salmão selvagem é rico em gorduras ômega-3 tradicionalmente associadas a uma resposta inflamatória mais calma, enquanto os vegetais crucíferos somam fibras e antioxidantes que apoiam a recuperação depois de um dia longo.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Panela única",
          "Rico em proteína",
          "Anti-inflamatório"
        ],
        "ingredients": [
          "2 filés de salmão (6 oz cada)",
          "2 xícaras de floretes de brócolis",
          "1 maço de aspargos, aparados",
          "2 colheres de sopa de azeite de oliva",
          "2 dentes de alho, picados",
          "1 limão siciliano (metade espremido, metade fatiado)",
          "1/2 colher de chá de sal marinho",
          "1/4 colher de chá de pimenta-do-reino",
          "Endro fresco, para finalizar"
        ],
        "steps": [
          "Aqueça o forno a 425F e forre uma assadeira.",
          "Misture o brócolis e os aspargos com 1 colher de sopa de azeite, o alho, o sal e a pimenta; espalhe na assadeira e asse por 8 minutos.",
          "Empurre os vegetais para as bordas, acomode o salmão no centro, pincele com o azeite restante e cubra com as fatias de limão.",
          "Asse por 10 a 12 minutos até o salmão desfiar facilmente e os vegetais ficarem levemente tostados nas pontas.",
          "Finalize com suco de limão e endro fresco, e sirva direto da assadeira."
        ],
        "swaps": [
          "salmão → truta-ártica ou truta (mesmo perfil de ômega-3)",
          "aspargos → vagem (troca sazonal)",
          "azeite de oliva → óleo de abacate (ponto de fumaça mais alto)"
        ]
      },
      "es": {
        "title": "Salmón al Horno en Bandeja con Limón y Verduras",
        "desc": "Una sola bandeja, veinte minutos: salmón jugoso sobre brócoli y espárragos tostados, con un toque final de limón.",
        "why": "El salmón salvaje es rico en grasas omega-3, tradicionalmente asociadas con una respuesta inflamatoria más calmada, mientras que las verduras crucíferas suman fibra y antioxidantes que apoyan la recuperación después de un día largo.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Una sola bandeja",
          "Alto en proteína",
          "Antiinflamatorio"
        ],
        "ingredients": [
          "2 filetes de salmón (6 oz cada uno)",
          "2 tazas de ramilletes de brócoli",
          "1 manojo de espárragos, recortados",
          "2 cucharadas de aceite de oliva",
          "2 dientes de ajo, picados finos",
          "1 limón (mitad en jugo, mitad en rodajas)",
          "1/2 cucharadita de sal marina",
          "1/4 cucharadita de pimienta negra",
          "Eneldo fresco, para terminar"
        ],
        "steps": [
          "Precalienta el horno a 425°F y forra una bandeja.",
          "Mezcla el brócoli y los espárragos con 1 cucharada de aceite, el ajo, la sal y la pimienta; extiende en la bandeja y asa 8 minutos.",
          "Empuja las verduras hacia los bordes, acomoda el salmón en el centro, pincélalo con el aceite restante y cúbrelo con las rodajas de limón.",
          "Asa 10-12 minutos hasta que el salmón se desmenuce fácilmente y las verduras se doren en las puntas.",
          "Termina con el jugo de limón y el eneldo fresco, y sirve directo de la bandeja."
        ],
        "swaps": [
          "salmón → trucha ártica o trucha común (mismo perfil de omega-3)",
          "espárragos → ejotes (sustituto de temporada)",
          "aceite de oliva → aceite de aguacate (mayor punto de humeo)"
        ]
      },
      "it": {
        "title": "Salmone in Teglia con Limone e Verdure",
        "desc": "Una teglia sola, venti minuti — salmone succoso su broccoli e asparagi abbrustoliti, con un tocco finale di limone vivace.",
        "why": "Il salmone selvaggio è ricco di grassi omega-3, tradizionalmente associati a una risposta infiammatoria più calma, mentre le verdure crucifere aggiungono fibre e antiossidanti che sostengono il recupero dopo una lunga giornata.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "In un'unica teglia",
          "Ricco di proteine",
          "Antinfiammatorio"
        ],
        "ingredients": [
          "2 filetti di salmone (6 once ciascuno)",
          "2 tazze di cimette di broccolo",
          "1 mazzetto di asparagi, spuntati",
          "2 cucchiai di olio d'oliva",
          "2 spicchi d'aglio, tritati",
          "1 limone (metà spremuto, metà a fette)",
          "1/2 cucchiaino di sale marino",
          "1/4 di cucchiaino di pepe nero",
          "Aneto fresco, per completare"
        ],
        "steps": [
          "Scalda il forno a 425°F (220°C) e fodera una teglia.",
          "Condisci broccoli e asparagi con 1 cucchiaio di olio, aglio, sale e pepe; distribuisci sulla teglia e arrostisci per 8 minuti.",
          "Sposta le verdure ai bordi, adagia il salmone al centro, spennella con l'olio rimasto e guarnisci con le fette di limone.",
          "Arrostisci per 10-12 minuti finché il salmone non si sfalda e le verdure non sono abbrustolite in punta.",
          "Completa con succo di limone e aneto fresco, poi servi direttamente dalla teglia."
        ],
        "swaps": [
          "salmone → salmerino artico o trota (stesso profilo di omega-3)",
          "asparagi → fagiolini (variante di stagione)",
          "olio d'oliva → olio di avocado (punto di fumo più alto)"
        ]
      },
      "zh": {
        "title": "一盘搞定柠檬三文鱼配时蔬",
        "desc": "一个烤盘、二十分钟——软嫩多汁的三文鱼，搭配烤出焦香的西兰花和芦笋，最后点缀清新柠檬。",
        "why": "野生三文鱼富含omega-3脂肪酸，在传统上与更平稳的炎症反应有关，十字花科蔬菜则带来膳食纤维和抗氧化物，支持忙碌一天后的身体恢复。",
        "tags": [
          "无麸质",
          "无乳制品",
          "一锅料理",
          "高蛋白",
          "抗炎"
        ],
        "ingredients": [
          "2块三文鱼排（各6盎司）",
          "2杯西兰花小朵",
          "1把芦笋，去除老根",
          "2汤匙橄榄油",
          "2瓣大蒜，切末",
          "1个柠檬（一半榨汁，一半切片）",
          "½茶匙海盐",
          "¼茶匙黑胡椒",
          "新鲜莳萝，用于装饰"
        ],
        "steps": [
          "将烤箱预热至425°F，在烤盘上铺好烘焙纸。",
          "把西兰花和芦笋与1汤匙橄榄油、蒜末、盐和胡椒拌匀，铺在烤盘上烤8分钟。",
          "把蔬菜推到两边，三文鱼放在中间，刷上剩余橄榄油，铺上柠檬片。",
          "再烤10-12分钟，直到三文鱼一拨即散、蔬菜边缘微焦。",
          "淋上柠檬汁，撒上新鲜莳萝，直接连烤盘上桌。"
        ],
        "swaps": [
          "三文鱼 → 北极红点鲑或鳟鱼（同样富含omega-3）",
          "芦笋 → 四季豆（应季替代）",
          "橄榄油 → 牛油果油（烟点更高）"
        ]
      },
      "hi": {
        "title": "शीट-पैन सैल्मन विद लेमन एंड ग्रीन्स",
        "desc": "एक ट्रे, बीस मिनट — मुलायम सैल्मन, कुरकुरी भुनी हुई ब्रोकली और शतावरी के ऊपर, चटख नींबू के तड़के के साथ।",
        "why": "वाइल्ड सैल्मन ओमेगा-3 फैट्स से भरपूर है जो पारंपरिक रूप से शांत सूजन-प्रतिक्रिया से जुड़े माने जाते हैं, जबकि क्रूसिफेरस हरी सब्ज़ियां फाइबर और एंटीऑक्सीडेंट्स जोड़ती हैं जो लंबे दिन के बाद रिकवरी को सहारा देती हैं।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "वन-पैन",
          "हाई-प्रोटीन",
          "एंटी-इन्फ्लेमेटरी"
        ],
        "ingredients": [
          "2 सैल्मन फिलेट (6 औंस प्रत्येक)",
          "2 कप ब्रोकली के फूल",
          "1 गुच्छा शतावरी, छांटी हुई",
          "2 बड़े चम्मच ऑलिव ऑयल",
          "2 लहसुन की कलियां, बारीक कटी हुई",
          "1 नींबू (आधे का रस, आधा कटा हुआ)",
          "1/2 छोटा चम्मच सी सॉल्ट",
          "1/4 छोटा चम्मच काली मिर्च",
          "अंत में डालने के लिए ताज़ी डिल"
        ],
        "steps": [
          "ओवन को 425F पर गर्म करें और एक शीट पैन को लाइन करें।",
          "ब्रोकली और शतावरी को 1 बड़ा चम्मच तेल, लहसुन, नमक और काली मिर्च के साथ मिलाएं; पैन पर फैलाकर 8 मिनट भूनें।",
          "सब्ज़ियों को किनारों पर धकेलें, बीच में सैल्मन रखें, बचा हुआ तेल लगाएं और ऊपर नींबू के टुकड़े रखें।",
          "10-12 मिनट भूनें जब तक सैल्मन आसानी से टूटने लगे और सब्ज़ियों के सिरे हल्के जल न जाएं।",
          "अंत में नींबू का रस और ताज़ी डिल डालें, फिर पैन से सीधे परोसें।"
        ],
        "swaps": [
          "सैल्मन → आर्कटिक चार या ट्राउट (समान ओमेगा-3 प्रोफाइल)",
          "शतावरी → हरी फलियां (मौसमी विकल्प)",
          "ऑलिव ऑयल → एवोकाडो ऑयल (ज़्यादा स्मोक पॉइंट)"
        ]
      },
      "he": {
        "title": "סלמון בתבנית אחת עם לימון וירקות ירוקים",
        "desc": "תבנית אחת, עשרים דקות — סלמון עסיסי מעל ברוקולי ואספרגוס משוחמים עם סיום לימון בהיר.",
        "why": "סלמון בר עשיר בשומני אומגה 3 שקשורים באופן מסורתי לתגובה דלקתית רגועה יותר, בעוד הירקות המצליבים מוסיפים סיבים ונוגדי חמצון שתומכים בהתאוששות אחרי יום ארוך.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "מחבת אחת",
          "עתיר חלבון",
          "אנטי-דלקתי"
        ],
        "ingredients": [
          "2 פילטי סלמון (170 גרם כל אחד)",
          "2 כוסות פרחי ברוקולי",
          "1 צרור אספרגוס, קצוות מוסרים",
          "2 כפות שמן זית",
          "2 שיני שום, קצוצות דק",
          "1 לימון (חצי סחוט, חצי פרוס)",
          "½ כפית מלח ים",
          "¼ כפית פלפל שחור",
          "שמיר טרי, לסיום"
        ],
        "steps": [
          "לחמם תנור ל-220 מעלות ולרפד תבנית אפייה.",
          "לערבב ברוקולי ואספרגוס עם 1 כף שמן, שום, מלח ופלפל; לפזר על התבנית ולקלות 8 דקות.",
          "להזיז את הירקות לקצוות, לשים את הסלמון במרכז, למרוח בשמן הנותר ולקשט בפרוסות לימון.",
          "לקלות עוד 10-12 דקות עד שהסלמון מתפרק בקלות והירקות משוחמים בקצוות.",
          "לסיים במיץ לימון ושמיר טרי ולהגיש ישירות מהתבנית."
        ],
        "swaps": [
          "סלמון → פורל ארקטי או פורל רגיל (אותו פרופיל אומגה 3)",
          "אספרגוס → שעועית ירוקה (החלפה עונתית)",
          "שמן זית → שמן אבוקדו (נקודת עשן גבוהה יותר)"
        ]
      }
    }
  },
  {
    "id": "dinner-ginger-beef-broccoli-stir-fry",
    "title": "Ginger Beef & Broccoli Stir-Fry",
    "desc": "A takeout classic rebuilt clean — thin-sliced beef and crisp broccoli in a glossy ginger-garlic sauce, no gluten, no gunk.",
    "image": "/assets/recipes/dinner-ginger-beef-broccoli-stir-fry.png",
    "level": "club",
    "daypart": "dinner",
    "makes": "2",
    "goals": [
      "Protein",
      "Anti-inflammatory"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "High-protein",
      "One-pan",
      "15-minute"
    ],
    "macros": {
      "kcal": 400,
      "protein": "37g",
      "carbs": "14g",
      "fat": "22g",
      "fiber": "5g"
    },
    "why": "Lean beef delivers highly bioavailable protein and iron to rebuild tissue, while fresh ginger and garlic bring warming compounds traditionally used to support digestion and a balanced inflammatory response.",
    "swaps": [
      "flank steak → chicken thigh or tempeh (leaner or plant-based)",
      "tamari → coconut aminos (soy-free)",
      "sesame oil → avocado oil (nut/seed-free)"
    ],
    "ingredients": [
      "12 oz flank steak, thinly sliced",
      "3 cups broccoli florets",
      "1 tbsp fresh ginger, grated",
      "3 cloves garlic, minced",
      "3 tbsp tamari",
      "1 tbsp toasted sesame oil",
      "1 tsp arrowroot starch",
      "2 tbsp water",
      "1 tsp sesame seeds"
    ],
    "steps": [
      "Whisk tamari, arrowroot and water into a sauce and set aside.",
      "Heat sesame oil in a wok or large skillet over high heat.",
      "Sear beef in a single layer for 2 minutes until browned, then remove.",
      "Add broccoli with a splash of water, cover and steam-fry 3 minutes until bright green.",
      "Return beef, add ginger and garlic, and stir 1 minute until fragrant.",
      "Pour in sauce, toss until glossy and thickened, and finish with sesame seeds."
    ],
    "i18n": {
      "pt": {
        "title": "Stir-Fry de Carne com Gengibre e Brócolis",
        "desc": "Um clássico de comida chinesa reconstruído de forma limpa — carne fatiada fininha e brócolis crocante em um molho brilhante de gengibre e alho, sem glúten, sem porcaria.",
        "why": "A carne magra entrega proteína e ferro altamente biodisponíveis para reconstruir tecidos, enquanto o gengibre e o alho frescos trazem compostos aquecedores tradicionalmente usados para apoiar a digestão e uma resposta inflamatória equilibrada.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Rico em proteína",
          "Panela única",
          "15 minutos"
        ],
        "ingredients": [
          "12 oz de contrafilé (flank steak), fatiado fininho",
          "3 xícaras de floretes de brócolis",
          "1 colher de sopa de gengibre fresco, ralado",
          "3 dentes de alho, picados",
          "3 colheres de sopa de tamari",
          "1 colher de sopa de óleo de gergelim tostado",
          "1 colher de chá de amido de araruta",
          "2 colheres de sopa de água",
          "1 colher de chá de sementes de gergelim"
        ],
        "steps": [
          "Bata o tamari, o amido de araruta e a água até formar um molho e reserve.",
          "Aqueça o óleo de gergelim em um wok ou frigideira grande, em fogo alto.",
          "Sele a carne em uma única camada por 2 minutos até dourar, depois retire.",
          "Adicione o brócolis com um pouco de água, tampe e cozinhe no vapor por 3 minutos até ficar verde vivo.",
          "Volte com a carne, adicione o gengibre e o alho, e mexa por 1 minuto até soltar o aroma.",
          "Despeje o molho, misture até ficar brilhante e encorpado, e finalize com as sementes de gergelim."
        ],
        "swaps": [
          "contrafilé → sobrecoxa de frango ou tempeh (mais magro ou à base de plantas)",
          "tamari → aminos de coco (sem soja)",
          "óleo de gergelim → óleo de abacate (sem oleaginosas/sementes)"
        ]
      },
      "es": {
        "title": "Salteado de Res, Jengibre y Brócoli",
        "desc": "Un clásico de comida para llevar reinventado con ingredientes limpios: res en láminas finas y brócoli crujiente en una salsa brillante de jengibre y ajo, sin gluten y sin nada de más.",
        "why": "La res magra aporta proteína y hierro altamente biodisponibles para reconstruir tejido, mientras que el jengibre y el ajo frescos suman compuestos cálidos usados tradicionalmente para favorecer la digestión y una respuesta inflamatoria equilibrada.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Alto en proteína",
          "Una sola sartén",
          "15 minutos"
        ],
        "ingredients": [
          "12 oz de arrachera, en láminas finas",
          "3 tazas de ramilletes de brócoli",
          "1 cucharada de jengibre fresco, rallado",
          "3 dientes de ajo, picados finos",
          "3 cucharadas de tamari",
          "1 cucharada de aceite de sésamo tostado",
          "1 cucharadita de almidón de arrurruz",
          "2 cucharadas de agua",
          "1 cucharadita de semillas de sésamo"
        ],
        "steps": [
          "Bate el tamari, el arrurruz y el agua hasta formar una salsa y reserva.",
          "Calienta el aceite de sésamo en un wok o sartén grande a fuego alto.",
          "Sella la res en una sola capa durante 2 minutos hasta que dore, luego retírala.",
          "Agrega el brócoli con un chorrito de agua, tapa y cocina al vapor 3 minutos hasta que quede verde brillante.",
          "Regresa la res, agrega el jengibre y el ajo, y saltea 1 minuto hasta que suelten aroma.",
          "Vierte la salsa, mezcla hasta que quede brillante y espesa, y termina con las semillas de sésamo."
        ],
        "swaps": [
          "arrachera → muslo de pollo o tempeh (más magro o de origen vegetal)",
          "tamari → aminos de coco (sin soya)",
          "aceite de sésamo → aceite de aguacate (sin frutos secos ni semillas)"
        ]
      },
      "it": {
        "title": "Saltato di Manzo, Zenzero e Broccoli",
        "desc": "Un classico da asporto ricostruito in versione pulita — manzo tagliato sottile e broccoli croccanti in una salsa lucida allo zenzero e aglio, senza glutine, senza ingredienti superflui.",
        "why": "Il manzo magro fornisce proteine e ferro altamente biodisponibili per ricostruire i tessuti, mentre zenzero e aglio freschi apportano composti riscaldanti tradizionalmente usati per sostenere la digestione e una risposta infiammatoria equilibrata.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Ricco di proteine",
          "In un'unica padella",
          "15 minuti"
        ],
        "ingredients": [
          "12 once di controfiletto di manzo (flank steak), tagliato sottile",
          "3 tazze di cimette di broccolo",
          "1 cucchiaio di zenzero fresco, grattugiato",
          "3 spicchi d'aglio, tritati",
          "3 cucchiai di tamari",
          "1 cucchiaio di olio di sesamo tostato",
          "1 cucchiaino di amido di arrowroot",
          "2 cucchiai d'acqua",
          "1 cucchiaino di semi di sesamo"
        ],
        "steps": [
          "Sbatti tamari, amido di arrowroot e acqua per ottenere una salsa e metti da parte.",
          "Scalda l'olio di sesamo in un wok o in una padella capiente a fuoco alto.",
          "Rosola il manzo in un unico strato per 2 minuti finché non è dorato, poi togli dalla padella.",
          "Aggiungi i broccoli con un goccio d'acqua, copri e cuoci al vapore per 3 minuti finché non diventano verde brillante.",
          "Rimetti il manzo, aggiungi zenzero e aglio e mescola per 1 minuto finché non sprigionano il profumo.",
          "Versa la salsa, mescola finché non diventa lucida e densa, e completa con i semi di sesamo."
        ],
        "swaps": [
          "controfiletto di manzo → coscia di pollo o tempeh (più magro o vegetale)",
          "tamari → coconut aminos (senza soia)",
          "olio di sesamo → olio di avocado (senza frutta a guscio/semi)"
        ]
      },
      "zh": {
        "title": "姜香牛肉炒西兰花",
        "desc": "经典外卖菜的干净重塑版——薄切牛肉和爽脆西兰花裹上油亮的姜蒜酱汁，不含麸质，没有多余添加。",
        "why": "瘦牛肉提供高生物利用度的蛋白质和铁，帮助组织修复，新鲜姜和蒜则带来温暖的成分，在传统上用于帮助消化和维持平衡的炎症反应。",
        "tags": [
          "无麸质",
          "无乳制品",
          "高蛋白",
          "一锅料理",
          "15分钟"
        ],
        "ingredients": [
          "12盎司牛腹肉排，切薄片",
          "3杯西兰花小朵",
          "1汤匙姜末",
          "3瓣大蒜，切末",
          "3汤匙溜酱油",
          "1汤匙烤芝麻油",
          "1茶匙葛根粉",
          "2汤匙水",
          "1茶匙芝麻"
        ],
        "steps": [
          "把溜酱油、葛根粉和水搅拌成酱汁备用。",
          "用大火在炒锅或大煎锅中加热芝麻油。",
          "把牛肉铺成单层煎2分钟至微焦，取出备用。",
          "加入西兰花和少许水，加盖焖炒3分钟至颜色鲜绿。",
          "把牛肉放回锅中，加入姜末和蒜末，翻炒1分钟至香气释放。",
          "倒入酱汁，翻炒至浓稠油亮，最后撒上芝麻。"
        ],
        "swaps": [
          "牛腹肉排 → 鸡腿肉或天贝（更瘦或植物基替代）",
          "溜酱油 → 椰子氨基酱油（无大豆）",
          "芝麻油 → 牛油果油（无坚果/种子）"
        ]
      },
      "hi": {
        "title": "जिंजर बीफ एंड ब्रोकली स्टिर-फ्राई",
        "desc": "एक टेकआउट क्लासिक अब सेहतमंद अंदाज़ में — पतले कटे बीफ और कुरकुरी ब्रोकली, चमकदार अदरक-लहसुन सॉस में, बिना ग्लूटेन, बिना अनचाही चीज़ों के।",
        "why": "लीन बीफ ऊतकों की मरम्मत के लिए अत्यधिक अवशोषित होने वाला प्रोटीन और आयरन देता है, जबकि ताज़ा अदरक और लहसुन गर्माहट देने वाले तत्व लाते हैं जिनका पारंपरिक रूप से पाचन और संतुलित सूजन-प्रतिक्रिया को सहारा देने के लिए उपयोग होता है।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "हाई-प्रोटीन",
          "वन-पैन",
          "15-मिनट"
        ],
        "ingredients": [
          "12 औंस फ्लैंक स्टेक, पतला कटा हुआ",
          "3 कप ब्रोकली के फूल",
          "1 बड़ा चम्मच ताज़ा अदरक, कद्दूकस किया हुआ",
          "3 लहसुन की कलियां, बारीक कटी हुई",
          "3 बड़े चम्मच तमारी",
          "1 बड़ा चम्मच भुना हुआ तिल का तेल",
          "1 छोटा चम्मच एरोरूट स्टार्च",
          "2 बड़े चम्मच पानी",
          "1 छोटा चम्मच तिल"
        ],
        "steps": [
          "तमारी, एरोरूट और पानी को फेंटकर सॉस बनाएं और अलग रखें।",
          "वोक या बड़े तवे में तेज़ आंच पर तिल का तेल गर्म करें।",
          "बीफ को एक परत में 2 मिनट तक ब्राउन होने तक सेकें, फिर निकाल लें।",
          "थोड़ा पानी डालकर ब्रोकली डालें, ढककर 3 मिनट भाप में पकाएं जब तक चटख हरी न हो जाए।",
          "बीफ वापस डालें, अदरक और लहसुन डालें, और खुशबू आने तक 1 मिनट चलाएं।",
          "सॉस डालें, चमकदार और गाढ़ा होने तक मिलाएं, और अंत में तिल डालें।"
        ],
        "swaps": [
          "फ्लैंक स्टेक → चिकन थाई या टेम्पेह (हल्का या पौधे-आधारित विकल्प)",
          "तमारी → नारियल एमिनोज़ (सोया-फ्री)",
          "तिल का तेल → एवोकाडो ऑयल (नट/बीज-रहित)"
        ]
      },
      "he": {
        "title": "מוקפץ בקר וברוקולי בג'ינג'ר",
        "desc": "קלאסיקת מסעדה סינית בנויה מחדש נקי — בקר פרוס דק וברוקולי פריך ברוטב ג'ינג'ר-שום מבריק, בלי גלוטן, בלי זבל.",
        "why": "בקר רזה מספק חלבון וברזל זמינים ביולוגית לבנייה מחדש של רקמות, בעוד ג'ינג'ר ושום טריים מביאים תרכובות מחממות שמשמשות באופן מסורתי לתמיכה בעיכול ובתגובה דלקתית מאוזנת.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "עתיר חלבון",
          "מחבת אחת",
          "15 דקות"
        ],
        "ingredients": [
          "340 גרם פלנק סטייק, פרוס דק",
          "3 כוסות פרחי ברוקולי",
          "1 כף ג'ינג'ר טרי מגורר",
          "3 שיני שום, קצוצות דק",
          "3 כפות טמארי",
          "1 כף שמן שומשום קלוי",
          "1 כפית עמילן חץ (ארורוט)",
          "2 כפות מים",
          "1 כפית שומשום"
        ],
        "steps": [
          "לטרוף טמארי, עמילן חץ ומים לרוטב ולהניח בצד.",
          "לחמם שמן שומשום בווק או במחבת גדולה על אש גבוהה.",
          "לצרוב את הבקר בשכבה אחת למשך 2 דקות עד שמשחים, ואז להוציא.",
          "להוסיף את הברוקולי עם קצת מים, לכסות ולאדות-מטגן 3 דקות עד ירוק בוהק.",
          "להחזיר את הבקר, להוסיף ג'ינג'ר ושום ולערבב דקה עד ריחני.",
          "למזוג את הרוטב, לערבב עד מבריק ומעובה ולסיים בשומשום."
        ],
        "swaps": [
          "פלנק סטייק → שוק עוף או טמפה (רזה יותר או צמחי)",
          "טמארי → אמינו קוקוס (ללא סויה)",
          "שמן שומשום → שמן אבוקדו (ללא אגוזים/זרעים)"
        ]
      }
    }
  },
  {
    "id": "dinner-coconut-chickpea-curry",
    "title": "Golden Coconut Chickpea Curry",
    "desc": "A cozy, plant-powered bowl of chickpeas simmered in turmeric-spiced coconut with wilted spinach — comfort with a purpose.",
    "image": "/assets/recipes/dinner-coconut-chickpea-curry.png",
    "level": "club",
    "daypart": "dinner",
    "makes": "4",
    "goals": [
      "Anti-inflammatory",
      "Satiety"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "Vegan",
      "High-fiber",
      "Anti-inflammatory"
    ],
    "macros": {
      "kcal": 440,
      "protein": "14g",
      "carbs": "41g",
      "fat": "26g",
      "fiber": "10g"
    },
    "why": "Turmeric and ginger are traditionally used to calm inflammation, and the fiber-dense chickpeas support steady blood sugar and lasting fullness so you leave the table satisfied, not stuffed.",
    "swaps": [
      "chickpeas → red lentils (faster-cooking)",
      "spinach → kale or chard (heartier green)",
      "full-fat coconut milk → light coconut milk (lower fat)"
    ],
    "ingredients": [
      "2 cans chickpeas, drained",
      "1 can (14 oz) full-fat coconut milk",
      "1 can (14 oz) diced tomatoes",
      "3 cups baby spinach",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "1 tbsp fresh ginger, grated",
      "1 tbsp curry powder",
      "1 tsp ground turmeric",
      "1 tbsp olive oil",
      "1/2 tsp sea salt"
    ],
    "steps": [
      "Warm olive oil in a deep pan and soften the onion 4 minutes.",
      "Add garlic, ginger, curry powder and turmeric; toast 1 minute until fragrant.",
      "Stir in tomatoes and chickpeas, then pour in the coconut milk.",
      "Simmer uncovered 15 minutes until the sauce thickens and deepens in color.",
      "Fold in spinach until wilted, season with salt, and serve over cauliflower rice or on its own."
    ],
    "i18n": {
      "pt": {
        "title": "Curry Dourado de Grão-de-Bico com Coco",
        "desc": "Uma tigela aconchegante e à base de plantas, com grão-de-bico cozido em leite de coco temperado com cúrcuma e espinafre murcho — conforto com propósito.",
        "why": "A cúrcuma e o gengibre são tradicionalmente usados para acalmar a inflamação, e o grão-de-bico, denso em fibras, apoia uma glicemia estável e uma saciedade duradoura, para você sair da mesa satisfeito, não empanturrado.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Vegano",
          "Rico em fibras",
          "Anti-inflamatório"
        ],
        "ingredients": [
          "2 latas de grão-de-bico, escorrido",
          "1 lata (14 oz) de leite de coco integral",
          "1 lata (14 oz) de tomate picado",
          "3 xícaras de espinafre baby",
          "1 cebola, picada",
          "3 dentes de alho, picados",
          "1 colher de sopa de gengibre fresco, ralado",
          "1 colher de sopa de curry em pó",
          "1 colher de chá de cúrcuma em pó",
          "1 colher de sopa de azeite de oliva",
          "1/2 colher de chá de sal marinho"
        ],
        "steps": [
          "Aqueça o azeite em uma panela funda e refogue a cebola por 4 minutos até amaciar.",
          "Adicione o alho, o gengibre, o curry em pó e a cúrcuma; toste por 1 minuto até soltar o aroma.",
          "Junte o tomate e o grão-de-bico, depois acrescente o leite de coco.",
          "Cozinhe em fogo brando, sem tampa, por 15 minutos até o molho engrossar e escurecer.",
          "Junte o espinafre até murchar, tempere com sal e sirva sobre arroz de couve-flor ou puro."
        ],
        "swaps": [
          "grão-de-bico → lentilha vermelha (cozimento mais rápido)",
          "espinafre → couve ou acelga (folha mais encorpada)",
          "leite de coco integral → leite de coco light (menos gordura)"
        ]
      },
      "es": {
        "title": "Curry Dorado de Garbanzos y Coco",
        "desc": "Un bowl acogedor y a base de plantas, con garbanzos cocidos a fuego lento en coco especiado con cúrcuma y espinaca marchita: reconfortante y con propósito.",
        "why": "La cúrcuma y el jengibre se usan tradicionalmente para calmar la inflamación, y los garbanzos, densos en fibra, favorecen una glucosa estable y una saciedad duradera para que te levantes de la mesa satisfecho, no atiborrado.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Vegano",
          "Alto en fibra",
          "Antiinflamatorio"
        ],
        "ingredients": [
          "2 latas de garbanzos, escurridos",
          "1 lata (14 oz) de leche de coco entera",
          "1 lata (14 oz) de tomates en cubos",
          "3 tazas de espinaca baby",
          "1 cebolla, en cubos",
          "3 dientes de ajo, picados finos",
          "1 cucharada de jengibre fresco, rallado",
          "1 cucharada de curry en polvo",
          "1 cucharadita de cúrcuma molida",
          "1 cucharada de aceite de oliva",
          "1/2 cucharadita de sal marina"
        ],
        "steps": [
          "Calienta el aceite de oliva en una sartén profunda y sofríe la cebolla 4 minutos hasta ablandar.",
          "Agrega el ajo, el jengibre, el curry en polvo y la cúrcuma; tuesta 1 minuto hasta que suelten aroma.",
          "Incorpora los tomates y los garbanzos, luego vierte la leche de coco.",
          "Cocina a fuego lento, sin tapar, 15 minutos hasta que la salsa espese y oscurezca.",
          "Incorpora la espinaca hasta que se marchite, sazona con sal, y sirve sobre arroz de coliflor o solo."
        ],
        "swaps": [
          "garbanzos → lentejas rojas (cocción más rápida)",
          "espinaca → kale o acelga (verdura más consistente)",
          "leche de coco entera → leche de coco light (menos grasa)"
        ]
      },
      "it": {
        "title": "Curry Dorato di Ceci e Cocco",
        "desc": "Una ciotola avvolgente e a base vegetale di ceci cotti a fuoco lento in cocco speziato alla curcuma con spinaci appassiti — comfort food con uno scopo.",
        "why": "Curcuma e zenzero sono tradizionalmente usati per calmare l'infiammazione, e i ceci ricchi di fibre sostengono una glicemia stabile e una sazietà duratura, così lasci la tavola appagato, non stipato.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Vegano",
          "Ricco di fibre",
          "Antinfiammatorio"
        ],
        "ingredients": [
          "2 barattoli di ceci, sgocciolati",
          "1 barattolo (14 once) di latte di cocco intero",
          "1 barattolo (14 once) di pomodori a cubetti",
          "3 tazze di spinacini",
          "1 cipolla, a cubetti",
          "3 spicchi d'aglio, tritati",
          "1 cucchiaio di zenzero fresco, grattugiato",
          "1 cucchiaio di curry in polvere",
          "1 cucchiaino di curcuma in polvere",
          "1 cucchiaio di olio d'oliva",
          "1/2 cucchiaino di sale marino"
        ],
        "steps": [
          "Scalda l'olio d'oliva in una pentola capiente e fai ammorbidire la cipolla per 4 minuti.",
          "Aggiungi aglio, zenzero, curry in polvere e curcuma; tosta per 1 minuto finché non sprigionano il profumo.",
          "Unisci pomodori e ceci, poi versa il latte di cocco.",
          "Cuoci a fuoco lento senza coperchio per 15 minuti finché la salsa non si addensa e scurisce.",
          "Incorpora gli spinaci finché non appassiscono, condisci con sale, e servi sul riso di cavolfiore o da solo."
        ],
        "swaps": [
          "ceci → lenticchie rosse (cottura più rapida)",
          "spinaci → cavolo riccio o bietola (verdure più corpose)",
          "latte di cocco intero → latte di cocco light (meno grassi)"
        ]
      },
      "zh": {
        "title": "金色椰香鹰嘴豆咖喱",
        "desc": "暖心的植物系一碗——鹰嘴豆在姜黄椰香汤汁中慢煮，加入微软菠菜——满满慰藉，也满满用心。",
        "why": "姜黄和姜在传统上用于舒缓炎症，富含膳食纤维的鹰嘴豆则支持血糖平稳和持久饱腹感，让你离开餐桌时是满足，而不是撑胀。",
        "tags": [
          "无麸质",
          "无乳制品",
          "纯素",
          "高纤维",
          "抗炎"
        ],
        "ingredients": [
          "2罐鹰嘴豆，沥干",
          "1罐（14盎司）全脂椰奶",
          "1罐（14盎司）番茄丁",
          "3杯嫩菠菜",
          "1个洋葱，切丁",
          "3瓣大蒜，切末",
          "1汤匙姜末",
          "1汤匙咖喱粉",
          "1茶匙姜黄粉",
          "1汤匙橄榄油",
          "½茶匙海盐"
        ],
        "steps": [
          "在深锅中加热橄榄油，把洋葱炒软约4分钟。",
          "加入蒜末、姜末、咖喱粉和姜黄粉，炒1分钟至香气释放。",
          "拌入番茄丁和鹰嘴豆，再倒入椰奶。",
          "不加盖煮15分钟，直到酱汁变浓稠、颜色加深。",
          "拌入菠菜至变软，用盐调味，可搭配花椰菜米或单独享用。"
        ],
        "swaps": [
          "鹰嘴豆 → 红扁豆（煮制更快）",
          "菠菜 → 羽衣甘蓝或牛皮菜（口感更扎实的绿叶菜）",
          "全脂椰奶 → 低脂椰奶（脂肪含量更低）"
        ]
      },
      "hi": {
        "title": "गोल्डन कोकोनट चना करी",
        "desc": "एक आरामदायक, पौधे-आधारित बाउल — हल्दी-मसालेदार नारियल में पके चने, मुरझाई पालक के साथ — मकसद के साथ आराम।",
        "why": "हल्दी और अदरक का पारंपरिक रूप से उपयोग सूजन को शांत करने के लिए होता है, और फाइबर से भरपूर चने स्थिर ब्लड-शुगर और लंबी तृप्ति को सहारा देते हैं ताकि आप मेज़ से संतुष्ट होकर उठें, न कि भरा हुआ महसूस करें।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "वीगन",
          "हाई-फाइबर",
          "एंटी-इन्फ्लेमेटरी"
        ],
        "ingredients": [
          "2 डिब्बे चने, पानी निकाला हुआ",
          "1 डिब्बा (14 औंस) फुल-फैट नारियल दूध",
          "1 डिब्बा (14 औंस) कटे हुए टमाटर",
          "3 कप बेबी पालक",
          "1 प्याज़, कटा हुआ",
          "3 लहसुन की कलियां, बारीक कटी हुई",
          "1 बड़ा चम्मच ताज़ा अदरक, कद्दूकस किया हुआ",
          "1 बड़ा चम्मच करी पाउडर",
          "1 छोटा चम्मच हल्दी पाउडर",
          "1 बड़ा चम्मच ऑलिव ऑयल",
          "1/2 छोटा चम्मच सी सॉल्ट"
        ],
        "steps": [
          "गहरे पैन में ऑलिव ऑयल गर्म करें और प्याज़ को 4 मिनट नरम होने तक पकाएं।",
          "लहसुन, अदरक, करी पाउडर और हल्दी डालें; खुशबू आने तक 1 मिनट भूनें।",
          "टमाटर और चने मिलाएं, फिर नारियल दूध डालें।",
          "बिना ढके 15 मिनट पकाएं जब तक सॉस गाढ़ा और गहरे रंग का न हो जाए।",
          "पालक मिलाकर मुरझाने तक पकाएं, नमक से सीज़न करें, और गोभी चावल के साथ या ऐसे ही परोसें।"
        ],
        "swaps": [
          "चने → मसूर दाल (जल्दी पकने वाली)",
          "पालक → केल या चार्ड (भारी हरी सब्ज़ी)",
          "फुल-फैट नारियल दूध → लाइट नारियल दूध (कम फैट)"
        ]
      },
      "he": {
        "title": "קארי חומוס וקוקוס זהוב",
        "desc": "קערה מנחמת ועוצמתית מהצומח של חומוס מבושל בקוקוס מתובל בכורכום עם תרד קמל — נחמה עם מטרה.",
        "why": "כורכום וג'ינג'ר משמשים באופן מסורתי להרגעת דלקת, והחומוס העשיר בסיבים תומך בסוכר דם יציב ובתחושת שובע מתמשכת כך שעוזבים את השולחן שבעים, לא תפוחים.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "טבעוני",
          "עתיר סיבים",
          "אנטי-דלקתי"
        ],
        "ingredients": [
          "2 קופסאות חומוס, מסוננות",
          "1 קופסה (400 גרם) חלב קוקוס שמן מלא",
          "1 קופסה (400 גרם) עגבניות מקוצצות",
          "3 כוסות תרד רך",
          "1 בצל, קצוץ",
          "3 שיני שום, קצוצות דק",
          "1 כף ג'ינג'ר טרי מגורר",
          "1 כף אבקת קארי",
          "1 כפית כורכום טחון",
          "1 כף שמן זית",
          "½ כפית מלח ים"
        ],
        "steps": [
          "לחמם שמן זית במחבת עמוקה ולרכך את הבצל 4 דקות.",
          "להוסיף שום, ג'ינג'ר, אבקת קארי וכורכום; לקלות דקה עד ריחני.",
          "לערבב פנימה עגבניות וחומוס, ואז למזוג את חלב הקוקוס.",
          "לבשל ללא כיסוי 15 דקות עד שהרוטב מעובה ומעמיק בצבע.",
          "לקפל פנימה את התרד עד שקמל, לתבל במלח ולהגיש מעל אורז כרובית או לבד."
        ],
        "swaps": [
          "חומוס → עדשים אדומות (מתבשלות מהר יותר)",
          "תרד → קייל או מנגולד (ירק משמעותי יותר)",
          "חלב קוקוס שמן מלא → חלב קוקוס דל שומן (פחות שומן)"
        ]
      }
    }
  },
  {
    "id": "dinner-herb-baked-cod-sweet-potato",
    "title": "Herb-Baked Cod with Roasted Sweet Potato",
    "desc": "Flaky, lemon-herb cod alongside caramelized sweet potato rounds — a light, clean plate that still eats like a real dinner.",
    "image": "/assets/recipes/dinner-herb-baked-cod-sweet-potato.png",
    "level": "club",
    "daypart": "dinner",
    "makes": "2",
    "goals": [
      "Protein",
      "Sleep"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "High-protein",
      "One-pan"
    ],
    "macros": {
      "kcal": 340,
      "protein": "31g",
      "carbs": "20g",
      "fat": "15g",
      "fiber": "3g"
    },
    "why": "Lean cod offers easy-to-digest protein for an evening meal, while sweet potato provides the gentle complex carbohydrate traditionally used to help the body wind down and settle into restful sleep.",
    "swaps": [
      "cod → haddock or halibut (any firm white fish)",
      "sweet potato → butternut squash (lower-carb)",
      "olive oil → melted ghee (if dairy is tolerated)"
    ],
    "ingredients": [
      "2 cod fillets (6 oz each)",
      "1 large sweet potato, sliced into rounds",
      "2 tbsp olive oil",
      "2 cloves garlic, minced",
      "1 tsp dried oregano",
      "1 lemon, half juiced and half sliced",
      "2 tbsp fresh parsley, chopped",
      "1/2 tsp sea salt",
      "1/4 tsp black pepper"
    ],
    "steps": [
      "Heat oven to 400F and line a sheet pan.",
      "Toss sweet potato rounds with 1 tbsp oil and salt; roast 15 minutes.",
      "Pat cod dry, rub with remaining oil, garlic, oregano and pepper, and set on the pan with lemon slices on top.",
      "Return to the oven and bake 12-14 minutes until the cod flakes easily.",
      "Finish with lemon juice and fresh parsley and serve warm."
    ],
    "i18n": {
      "pt": {
        "title": "Bacalhau Assado com Ervas e Batata-Doce Assada",
        "desc": "Bacalhau macio, com ervas e limão siciliano, ao lado de rodelas caramelizadas de batata-doce — um prato leve e limpo que ainda parece um jantar de verdade.",
        "why": "O bacalhau magro oferece proteína de fácil digestão para uma refeição noturna, enquanto a batata-doce fornece o carboidrato complexo suave tradicionalmente usado para ajudar o corpo a desacelerar e se preparar para um sono tranquilo.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Rico em proteína",
          "Panela única"
        ],
        "ingredients": [
          "2 filés de bacalhau (6 oz cada)",
          "1 batata-doce grande, cortada em rodelas",
          "2 colheres de sopa de azeite de oliva",
          "2 dentes de alho, picados",
          "1 colher de chá de orégano seco",
          "1 limão siciliano, metade espremido e metade fatiado",
          "2 colheres de sopa de salsinha fresca, picada",
          "1/2 colher de chá de sal marinho",
          "1/4 colher de chá de pimenta-do-reino"
        ],
        "steps": [
          "Aqueça o forno a 400F e forre uma assadeira.",
          "Misture as rodelas de batata-doce com 1 colher de sopa de azeite e sal; asse por 15 minutos.",
          "Seque o bacalhau, tempere com o azeite restante, o alho, o orégano e a pimenta, e disponha na assadeira com as fatias de limão por cima.",
          "Volte ao forno e asse por 12 a 14 minutos até o bacalhau desfiar facilmente.",
          "Finalize com suco de limão e salsinha fresca e sirva quente."
        ],
        "swaps": [
          "bacalhau → arinca ou linguado-da-groenlândia (qualquer peixe branco firme)",
          "batata-doce → abóbora butternut (menos carboidratos)",
          "azeite de oliva → ghee derretido (se a lactose for tolerada)"
        ]
      },
      "es": {
        "title": "Bacalao al Horno con Hierbas y Batata Asada",
        "desc": "Bacalao tierno con limón y hierbas, junto a rodajas de batata caramelizadas: un plato ligero y limpio que igual se siente como una cena de verdad.",
        "why": "El bacalao magro ofrece proteína fácil de digerir para una comida nocturna, mientras que la batata aporta el carbohidrato complejo y suave usado tradicionalmente para ayudar al cuerpo a relajarse y prepararse para un sueño reparador.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Alto en proteína",
          "Una sola bandeja"
        ],
        "ingredients": [
          "2 filetes de bacalao (6 oz cada uno)",
          "1 batata grande, en rodajas",
          "2 cucharadas de aceite de oliva",
          "2 dientes de ajo, picados finos",
          "1 cucharadita de orégano seco",
          "1 limón, mitad en jugo y mitad en rodajas",
          "2 cucharadas de perejil fresco, picado",
          "1/2 cucharadita de sal marina",
          "1/4 cucharadita de pimienta negra"
        ],
        "steps": [
          "Precalienta el horno a 400°F y forra una bandeja.",
          "Mezcla las rodajas de batata con 1 cucharada de aceite y sal; asa 15 minutos.",
          "Seca el bacalao, úntalo con el aceite restante, el ajo, el orégano y la pimienta, y colócalo en la bandeja con las rodajas de limón encima.",
          "Vuelve a meter al horno y hornea 12-14 minutos hasta que el bacalao se desmenuce fácilmente.",
          "Termina con el jugo de limón y el perejil fresco, y sirve caliente."
        ],
        "swaps": [
          "bacalao → eglefino o mero (cualquier pescado blanco firme)",
          "batata → calabaza butternut (menos carbohidratos)",
          "aceite de oliva → ghee derretido (si toleras lácteos)"
        ]
      },
      "it": {
        "title": "Merluzzo alle Erbe con Patate Dolci Arrostite",
        "desc": "Merluzzo sfaldabile alle erbe e limone accanto a rondelle di patata dolce caramellate — un piatto leggero e pulito che sa comunque di vera cena.",
        "why": "Il merluzzo magro offre proteine facili da digerire per un pasto serale, mentre la patata dolce fornisce il carboidrato complesso delicato tradizionalmente usato per aiutare il corpo a rilassarsi e favorire un sonno ristoratore.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Ricco di proteine",
          "In un'unica teglia"
        ],
        "ingredients": [
          "2 filetti di merluzzo (6 once ciascuno)",
          "1 patata dolce grande, tagliata a rondelle",
          "2 cucchiai di olio d'oliva",
          "2 spicchi d'aglio, tritati",
          "1 cucchiaino di origano secco",
          "1 limone, metà spremuto e metà a fette",
          "2 cucchiai di prezzemolo fresco, tritato",
          "1/2 cucchiaino di sale marino",
          "1/4 di cucchiaino di pepe nero"
        ],
        "steps": [
          "Scalda il forno a 400°F (200°C) e fodera una teglia.",
          "Condisci le rondelle di patata dolce con 1 cucchiaio di olio e sale; arrostisci per 15 minuti.",
          "Tampona il merluzzo per asciugarlo, strofinalo con l'olio rimasto, aglio, origano e pepe, e sistemalo sulla teglia con le fette di limone sopra.",
          "Rimetti in forno e cuoci per 12-14 minuti finché il merluzzo non si sfalda facilmente.",
          "Completa con succo di limone e prezzemolo fresco e servi caldo."
        ],
        "swaps": [
          "merluzzo → eglefino o halibut (qualsiasi pesce bianco sodo)",
          "patata dolce → zucca butternut (meno carboidrati)",
          "olio d'oliva → ghee fuso (se i latticini sono tollerati)"
        ]
      },
      "zh": {
        "title": "香草烤鳕鱼配烤红薯",
        "desc": "松软的柠檬香草鳕鱼，搭配焦糖化的红薯圆片——清爽干净，却依然像一顿正经晚餐。",
        "why": "瘦鳕鱼为晚餐提供易消化的蛋白质，红薯则提供温和的复合碳水化合物，在传统上用于帮助身体放松、进入安稳的睡眠状态。",
        "tags": [
          "无麸质",
          "无乳制品",
          "高蛋白",
          "一锅料理"
        ],
        "ingredients": [
          "2块鳕鱼排（各6盎司）",
          "1个大红薯，切成圆片",
          "2汤匙橄榄油",
          "2瓣大蒜，切末",
          "1茶匙干牛至叶",
          "1个柠檬，一半榨汁，一半切片",
          "2汤匙新鲜欧芹碎",
          "½茶匙海盐",
          "¼茶匙黑胡椒"
        ],
        "steps": [
          "将烤箱预热至400°F，在烤盘上铺好烘焙纸。",
          "把红薯片与1汤匙橄榄油和盐拌匀，烤15分钟。",
          "把鳕鱼拍干水分，抹上剩余橄榄油、蒜末、牛至叶和黑胡椒，放到烤盘上并铺上柠檬片。",
          "放回烤箱烤12-14分钟，直到鳕鱼轻轻一拨即散。",
          "淋上柠檬汁，撒上新鲜欧芹，趁热享用。"
        ],
        "swaps": [
          "鳕鱼 → 黑线鳕或大比目鱼（任何肉质紧实的白鱼）",
          "红薯 → 白胡桃南瓜（低碳水）",
          "橄榄油 → 融化的印度酥油（如果能耐受乳制品）"
        ]
      },
      "hi": {
        "title": "हर्ब-बेक्ड कॉड विद रोस्टेड शकरकंद",
        "desc": "परतदार, लेमन-हर्ब कॉड, कैरेमलाइज़्ड शकरकंद के गोल टुकड़ों के साथ — एक हल्की, सेहतमंद थाली जो फिर भी असली डिनर जैसी लगती है।",
        "why": "लीन कॉड शाम के भोजन के लिए आसानी से पचने वाला प्रोटीन देता है, जबकि शकरकंद वह हल्का जटिल कार्बोहाइड्रेट देता है जिसका पारंपरिक रूप से उपयोग शरीर को शांत होने और चैन की नींद में जाने में मदद के लिए होता है।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "हाई-प्रोटीन",
          "वन-पैन"
        ],
        "ingredients": [
          "2 कॉड फिलेट (6 औंस प्रत्येक)",
          "1 बड़ा शकरकंद, गोल टुकड़ों में कटा हुआ",
          "2 बड़े चम्मच ऑलिव ऑयल",
          "2 लहसुन की कलियां, बारीक कटी हुई",
          "1 छोटा चम्मच सूखा ओरिगैनो",
          "1 नींबू, आधे का रस और आधा कटा हुआ",
          "2 बड़े चम्मच ताज़ा अजमोद, कटा हुआ",
          "1/2 छोटा चम्मच सी सॉल्ट",
          "1/4 छोटा चम्मच काली मिर्च"
        ],
        "steps": [
          "ओवन को 400F पर गर्म करें और एक शीट पैन को लाइन करें।",
          "शकरकंद के गोल टुकड़ों को 1 बड़ा चम्मच तेल और नमक के साथ मिलाएं; 15 मिनट भूनें।",
          "कॉड को सुखाएं, बचा हुआ तेल, लहसुन, ओरिगैनो और काली मिर्च लगाएं, और पैन पर ऊपर नींबू के टुकड़ों के साथ रखें।",
          "फिर से ओवन में रखें और 12-14 मिनट बेक करें जब तक कॉड आसानी से टूटने लगे।",
          "अंत में नींबू का रस और ताज़ा अजमोद डालें और गर्म-गर्म परोसें।"
        ],
        "swaps": [
          "कॉड → हैडॉक या हैलिबट (कोई भी फर्म सफेद मछली)",
          "शकरकंद → बटरनट स्क्वैश (कम कार्ब)",
          "ऑलिव ऑयल → पिघला हुआ घी (अगर डेयरी सहन हो)"
        ]
      },
      "he": {
        "title": "קוד אפוי בעשבי תיבול עם בטטה קלויה",
        "desc": "קוד פתית עם לימון ועשבי תיבול לצד עיגולי בטטה מקורמלים — צלחת קלילה ונקייה שעדיין אוכלת כמו ארוחת ערב אמיתית.",
        "why": "קוד רזה מציע חלבון קל לעיכול לארוחת ערב, בעוד הבטטה מספקת פחמימה מורכבת עדינה שמשמשת באופן מסורתי לעזור לגוף להירגע ולהתמסר לשינה רגועה.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "עתיר חלבון",
          "מחבת אחת"
        ],
        "ingredients": [
          "2 פילטי קוד (170 גרם כל אחד)",
          "1 בטטה גדולה, פרוסה לעיגולים",
          "2 כפות שמן זית",
          "2 שיני שום, קצוצות דק",
          "1 כפית אורגנו מיובש",
          "1 לימון, חצי סחוט וחצי פרוס",
          "2 כפות פטרוזיליה טרייה, קצוצה",
          "½ כפית מלח ים",
          "¼ כפית פלפל שחור"
        ],
        "steps": [
          "לחמם תנור ל-200 מעלות ולרפד תבנית אפייה.",
          "לערבב את עיגולי הבטטה עם 1 כף שמן ומלח; לקלות 15 דקות.",
          "לייבש את הקוד, לשפשף בשמן הנותר, שום, אורגנו ופלפל, ולהניח על התבנית עם פרוסות לימון מלמעלה.",
          "להחזיר לתנור ולאפות 12-14 דקות עד שהקוד מתפרק בקלות.",
          "לסיים במיץ לימון ופטרוזיליה טרייה ולהגיש חם."
        ],
        "swaps": [
          "קוד → הדוק או הליבוט (כל דג לבן חזק)",
          "בטטה → דלעת חמאה (דל פחמימות יותר)",
          "שמן זית → חמאה מזוקקת מומסת (אם חלב נסבל)"
        ]
      }
    }
  },
  {
    "id": "dinner-turkey-sweet-potato-skillet",
    "title": "Turkey & Sweet Potato Wind-Down Skillet",
    "desc": "A one-pan medley of savory ground turkey, sweet potato and wilted spinach — the kind of warm, grounding dinner that quiets a busy day.",
    "image": "/assets/recipes/dinner-turkey-sweet-potato-skillet.png",
    "level": "club",
    "daypart": "dinner",
    "makes": "4",
    "goals": [
      "Sleep",
      "Protein"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "High-protein",
      "One-pan",
      "Meal-prep"
    ],
    "macros": {
      "kcal": 290,
      "protein": "22g",
      "carbs": "13g",
      "fat": "16g",
      "fiber": "4g"
    },
    "why": "Turkey is a natural source of tryptophan, the amino acid traditionally used to support the body's evening melatonin rhythm, while sweet potato and magnesium-rich spinach round it into a meal that helps you unwind.",
    "swaps": [
      "ground turkey → ground chicken or lentils (leaner or plant-based)",
      "spinach → kale (heartier green)",
      "sweet potato → diced zucchini (lower-carb)"
    ],
    "ingredients": [
      "1 lb ground turkey (93% lean)",
      "1 large sweet potato, diced small",
      "1 bell pepper, diced",
      "1 onion, diced",
      "2 cups baby spinach",
      "2 tbsp olive oil",
      "2 cloves garlic, minced",
      "1 tsp smoked paprika",
      "1/2 tsp sea salt",
      "1/4 tsp black pepper"
    ],
    "steps": [
      "Heat 1 tbsp oil in a large skillet and saute sweet potato 8 minutes until nearly tender.",
      "Add onion and bell pepper with the remaining oil and cook 4 minutes.",
      "Push veg aside, add turkey and garlic, and brown, breaking it up, 6-7 minutes.",
      "Season with paprika, salt and pepper and stir everything together.",
      "Fold in spinach until just wilted and serve warm."
    ],
    "i18n": {
      "pt": {
        "title": "Frigideira de Peru e Batata-Doce para Relaxar",
        "desc": "Uma mistura de panela única de peru moído saboroso, batata-doce e espinafre murcho — o tipo de jantar quente e reconfortante que acalma um dia corrido.",
        "why": "O peru é uma fonte natural de triptofano, o aminoácido tradicionalmente usado para apoiar o ritmo noturno de melatonina do corpo, enquanto a batata-doce e o espinafre, rico em magnésio, completam uma refeição que ajuda você a relaxar.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Rico em proteína",
          "Panela única",
          "Meal-prep"
        ],
        "ingredients": [
          "1 libra de peru moído (93% magro)",
          "1 batata-doce grande, cortada em cubos pequenos",
          "1 pimentão, picado",
          "1 cebola, picada",
          "2 xícaras de espinafre baby",
          "2 colheres de sopa de azeite de oliva",
          "2 dentes de alho, picados",
          "1 colher de chá de páprica defumada",
          "1/2 colher de chá de sal marinho",
          "1/4 colher de chá de pimenta-do-reino"
        ],
        "steps": [
          "Aqueça 1 colher de sopa de azeite em uma frigideira grande e refogue a batata-doce por 8 minutos até quase amaciar.",
          "Adicione a cebola e o pimentão com o azeite restante e cozinhe por 4 minutos.",
          "Empurre os vegetais para o lado, adicione o peru e o alho, e doure, desmanchando com a colher, por 6 a 7 minutos.",
          "Tempere com a páprica, o sal e a pimenta e misture tudo.",
          "Junte o espinafre até murchar levemente e sirva quente."
        ],
        "swaps": [
          "peru moído → frango moído ou lentilha (mais magro ou à base de plantas)",
          "espinafre → couve (folha mais encorpada)",
          "batata-doce → abobrinha em cubos (menos carboidratos)"
        ]
      },
      "es": {
        "title": "Sartén de Pavo y Batata para Relajarte",
        "desc": "Una mezcla en una sola sartén de pavo molido sabroso, batata y espinaca marchita: el tipo de cena cálida y reconfortante que calma un día ajetreado.",
        "why": "El pavo es una fuente natural de triptófano, el aminoácido usado tradicionalmente para apoyar el ritmo nocturno de melatonina del cuerpo, mientras que la batata y la espinaca, rica en magnesio, redondean una comida que te ayuda a relajarte.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Alto en proteína",
          "Una sola sartén",
          "Ideal para meal-prep"
        ],
        "ingredients": [
          "1 lb de pavo molido (93% magro)",
          "1 batata grande, en cubos pequeños",
          "1 pimiento morrón, en cubos",
          "1 cebolla, en cubos",
          "2 tazas de espinaca baby",
          "2 cucharadas de aceite de oliva",
          "2 dientes de ajo, picados finos",
          "1 cucharadita de pimentón ahumado",
          "1/2 cucharadita de sal marina",
          "1/4 cucharadita de pimienta negra"
        ],
        "steps": [
          "Calienta 1 cucharada de aceite en una sartén grande y saltea la batata 8 minutos hasta casi ablandar.",
          "Agrega la cebolla y el pimiento con el aceite restante y cocina 4 minutos.",
          "Empuja las verduras a un lado, agrega el pavo y el ajo, y dora, desmenuzando, 6-7 minutos.",
          "Sazona con el pimentón, la sal y la pimienta y mezcla todo.",
          "Incorpora la espinaca hasta que apenas se marchite y sirve caliente."
        ],
        "swaps": [
          "pavo molido → pollo molido o lentejas (más magro o de origen vegetal)",
          "espinaca → kale (verdura más consistente)",
          "batata → calabacín en cubos (menos carbohidratos)"
        ]
      },
      "it": {
        "title": "Padellata Rilassante di Tacchino e Patate Dolci",
        "desc": "Un mix in un'unica padella di tacchino macinato saporito, patata dolce e spinaci appassiti — il tipo di cena calda e rassicurante che placa una giornata intensa.",
        "why": "Il tacchino è una fonte naturale di triptofano, l'amminoacido tradizionalmente usato per sostenere il ritmo serale della melatonina, mentre la patata dolce e gli spinaci ricchi di magnesio completano un pasto che aiuta a rilassarsi.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Ricco di proteine",
          "In un'unica padella",
          "Meal-prep"
        ],
        "ingredients": [
          "1 libbra di tacchino macinato (93% magro)",
          "1 patata dolce grande, a cubetti piccoli",
          "1 peperone, a cubetti",
          "1 cipolla, a cubetti",
          "2 tazze di spinacini",
          "2 cucchiai di olio d'oliva",
          "2 spicchi d'aglio, tritati",
          "1 cucchiaino di paprika affumicata",
          "1/2 cucchiaino di sale marino",
          "1/4 di cucchiaino di pepe nero"
        ],
        "steps": [
          "Scalda 1 cucchiaio di olio in una padella capiente e soffriggi la patata dolce per 8 minuti finché non è quasi tenera.",
          "Aggiungi cipolla e peperone con l'olio rimasto e cuoci per 4 minuti.",
          "Sposta le verdure da un lato, aggiungi tacchino e aglio, e rosola sgranando per 6-7 minuti.",
          "Condisci con paprika, sale e pepe e mescola tutto insieme.",
          "Incorpora gli spinaci finché non appassiscono appena e servi caldo."
        ],
        "swaps": [
          "tacchino macinato → pollo macinato o lenticchie (più magro o vegetale)",
          "spinaci → cavolo riccio (verdura più corposa)",
          "patata dolce → zucchine a cubetti (meno carboidrati)"
        ]
      },
      "zh": {
        "title": "火鸡红薯放松晚餐煎锅",
        "desc": "一锅炖煮的咸香火鸡肉末、红薯和微软菠菜——温暖踏实的晚餐，让忙碌的一天安静下来。",
        "why": "火鸡肉天然富含色氨酸，这种氨基酸在传统上用于支持身体夜间的褪黑素节律，红薯和富含镁的菠菜则让这道菜成为一顿有助于放松身心的晚餐。",
        "tags": [
          "无麸质",
          "无乳制品",
          "高蛋白",
          "一锅料理",
          "备餐友好"
        ],
        "ingredients": [
          "1磅火鸡肉末（93%瘦肉）",
          "1个大红薯，切小丁",
          "1个甜椒，切丁",
          "1个洋葱，切丁",
          "2杯嫩菠菜",
          "2汤匙橄榄油",
          "2瓣大蒜，切末",
          "1茶匙烟熏红椒粉",
          "½茶匙海盐",
          "¼茶匙黑胡椒"
        ],
        "steps": [
          "在大煎锅中加热1汤匙橄榄油，炒红薯约8分钟至接近变软。",
          "加入洋葱、甜椒和剩余橄榄油，炒4分钟。",
          "把蔬菜拨到一边，加入火鸡肉末和蒜末，边煎边捣散，煮6-7分钟至微焦。",
          "加入红椒粉、盐和胡椒调味，把所有食材拌匀。",
          "拌入菠菜至微软，趁热享用。"
        ],
        "swaps": [
          "火鸡肉末 → 鸡肉末或扁豆（更瘦或植物基替代）",
          "菠菜 → 羽衣甘蓝（口感更扎实的绿叶菜）",
          "红薯 → 西葫芦丁（低碳水）"
        ]
      },
      "hi": {
        "title": "टर्की एंड शकरकंद विंड-डाउन स्किलेट",
        "desc": "एक वन-पैन मिश्रण — नमकीन कीमा टर्की, शकरकंद और मुरझाई पालक — वह गर्म, संतुलित करने वाला डिनर जो व्यस्त दिन को शांत करता है।",
        "why": "टर्की ट्रिप्टोफैन का प्राकृतिक स्रोत है, वह एमिनो एसिड जिसका पारंपरिक रूप से उपयोग शरीर की शाम की मेलाटोनिन लय को सहारा देने के लिए होता है, जबकि शकरकंद और मैग्नीशियम-युक्त पालक इसे एक ऐसे भोजन में बदल देते हैं जो आपको शांत होने में मदद करता है।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "हाई-प्रोटीन",
          "वन-पैन",
          "मील-प्रेप"
        ],
        "ingredients": [
          "1 पाउंड कीमा टर्की (93% लीन)",
          "1 बड़ा शकरकंद, छोटे टुकड़ों में कटा हुआ",
          "1 शिमला मिर्च, कटी हुई",
          "1 प्याज़, कटा हुआ",
          "2 कप बेबी पालक",
          "2 बड़े चम्मच ऑलिव ऑयल",
          "2 लहसुन की कलियां, बारीक कटी हुई",
          "1 छोटा चम्मच स्मोक्ड पैप्रिका",
          "1/2 छोटा चम्मच सी सॉल्ट",
          "1/4 छोटा चम्मच काली मिर्च"
        ],
        "steps": [
          "बड़े तवे में 1 बड़ा चम्मच तेल गर्म करें और शकरकंद को 8 मिनट तक लगभग नरम होने तक भूनें।",
          "बचा हुआ तेल डालकर प्याज़ और शिमला मिर्च डालें और 4 मिनट पकाएं।",
          "सब्ज़ियों को एक तरफ करें, टर्की और लहसुन डालें, और तोड़ते हुए 6-7 मिनट ब्राउन होने तक पकाएं।",
          "पैप्रिका, नमक और काली मिर्च डालें और सब कुछ मिलाएं।",
          "पालक मिलाकर हल्का मुरझाने तक पकाएं और गर्म-गर्म परोसें।"
        ],
        "swaps": [
          "कीमा टर्की → कीमा चिकन या दाल (हल्का या पौधे-आधारित विकल्प)",
          "पालक → केल (भारी हरी सब्ज़ी)",
          "शकरकंद → कटी हुई तोरई (कम कार्ब)"
        ]
      },
      "he": {
        "title": "מחבת הודו ובטטה להרגעת הערב",
        "desc": "מנת מחבת אחת של הודו טחון מלוח, בטטה ותרד קמל — ארוחת ערב חמה ומקרקעת שמשקיטה יום עמוס.",
        "why": "הודו הוא מקור טבעי לטריפטופן, חומצת האמינו שמשמשת באופן מסורתי לתמיכה בקצב המלטונין הערבי של הגוף, בעוד הבטטה והתרד העשיר במגנזיום עוגלים אותה לארוחה שעוזרת להירגע.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "עתיר חלבון",
          "מחבת אחת",
          "הכנה מראש"
        ],
        "ingredients": [
          "450 גרם הודו טחון (93% רזה)",
          "1 בטטה גדולה, קצוצה דק",
          "1 פלפל מתוק, קצוץ",
          "1 בצל, קצוץ",
          "2 כוסות עלי תרד רך",
          "2 כפות שמן זית",
          "2 שיני שום, קצוצות דק",
          "1 כפית פפריקה מעושנת",
          "½ כפית מלח ים",
          "¼ כפית פלפל שחור"
        ],
        "steps": [
          "לחמם כף אחת שמן במחבת גדולה ולטגן קלות את הבטטה 8 דקות עד שכמעט רכה.",
          "להוסיף בצל ופלפל עם השמן הנותר ולבשל 4 דקות.",
          "להזיז את הירקות הצידה, להוסיף הודו ושום ולשחם, תוך פירוק, 6-7 דקות.",
          "לתבל בפפריקה, מלח ופלפל ולערבב הכול יחד.",
          "לקפל פנימה את התרד עד שקמל בדיוק ולהגיש חם."
        ],
        "swaps": [
          "הודו טחון → עוף טחון או עדשים (רזה יותר או צמחי)",
          "תרד → קייל (ירק משמעותי יותר)",
          "בטטה → קישוא קצוץ (דל פחמימות יותר)"
        ]
      }
    }
  },
  {
    "id": "dinner-turkey-quinoa-stuffed-peppers",
    "title": "Turkey & Quinoa Stuffed Peppers",
    "desc": "Sweet roasted bell peppers packed with herby turkey, quinoa and tomato — a hearty hand-held dinner that keeps you full for hours.",
    "image": "/assets/recipes/dinner-turkey-quinoa-stuffed-peppers.png",
    "level": "club",
    "daypart": "dinner",
    "makes": "4",
    "goals": [
      "Satiety",
      "Protein"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "High-protein",
      "High-fiber",
      "Meal-prep"
    ],
    "macros": {
      "kcal": 320,
      "protein": "23g",
      "carbs": "23g",
      "fat": "14g",
      "fiber": "5g"
    },
    "why": "The pairing of lean turkey protein with fiber-rich quinoa and peppers slows digestion and supports steady blood sugar, keeping hunger quiet well past dinner.",
    "swaps": [
      "ground turkey → grass-fed ground beef or lentils",
      "quinoa → cauliflower rice (lower-carb)",
      "diced tomatoes → fresh tomato + tomato paste (no-can)"
    ],
    "ingredients": [
      "4 large bell peppers, halved and seeded",
      "1 lb ground turkey (93% lean)",
      "1 cup cooked quinoa",
      "1 can (14 oz) diced tomatoes, drained",
      "1 onion, diced",
      "2 cloves garlic, minced",
      "1 tbsp olive oil",
      "1 tsp dried oregano",
      "1/2 tsp cumin",
      "1/2 tsp sea salt"
    ],
    "steps": [
      "Heat oven to 375F and set pepper halves cut-side up in a baking dish.",
      "Warm olive oil in a skillet and soften onion and garlic 3 minutes.",
      "Add turkey and brown 6 minutes, then stir in tomatoes, oregano, cumin and salt.",
      "Fold in the cooked quinoa and simmer 2 minutes to bring it together.",
      "Spoon the filling into the peppers, cover with foil and bake 25 minutes.",
      "Uncover and bake 10 more minutes until the peppers are tender."
    ],
    "i18n": {
      "pt": {
        "title": "Pimentões Recheados com Peru e Quinoa",
        "desc": "Pimentões doces assados, recheados com peru temperado com ervas, quinoa e tomate — um jantar farto que mantém a saciedade por horas.",
        "why": "A combinação da proteína magra do peru com a quinoa e os pimentões, ricos em fibras, desacelera a digestão e apoia uma glicemia estável, mantendo a fome sob controle bem depois do jantar.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Rico em proteína",
          "Rico em fibras",
          "Meal-prep"
        ],
        "ingredients": [
          "4 pimentões grandes, cortados ao meio e sem sementes",
          "1 libra de peru moído (93% magro)",
          "1 xícara de quinoa cozida",
          "1 lata (14 oz) de tomate picado, escorrido",
          "1 cebola, picada",
          "2 dentes de alho, picados",
          "1 colher de sopa de azeite de oliva",
          "1 colher de chá de orégano seco",
          "1/2 colher de chá de cominho",
          "1/2 colher de chá de sal marinho"
        ],
        "steps": [
          "Aqueça o forno a 375F e disponha as metades de pimentão com o lado cortado para cima em um refratário.",
          "Aqueça o azeite em uma frigideira e refogue a cebola e o alho por 3 minutos até amaciarem.",
          "Adicione o peru e doure por 6 minutos, depois junte o tomate, o orégano, o cominho e o sal.",
          "Junte a quinoa cozida e cozinhe por 2 minutos para incorporar.",
          "Coloque o recheio nos pimentões, cubra com papel-alumínio e asse por 25 minutos.",
          "Retire o papel-alumínio e asse por mais 10 minutos até os pimentões ficarem macios."
        ],
        "swaps": [
          "peru moído → carne moída de gado a pasto ou lentilha",
          "quinoa → arroz de couve-flor (menos carboidratos)",
          "tomate picado em lata → tomate fresco + extrato de tomate (sem lata)"
        ]
      },
      "es": {
        "title": "Pimientos Rellenos de Pavo y Quinoa",
        "desc": "Pimientos dulces asados, rellenos de pavo con hierbas, quinoa y tomate: una cena contundente que se come con la mano y te mantiene satisfecho por horas.",
        "why": "La combinación de proteína magra de pavo con quinoa y pimientos ricos en fibra ralentiza la digestión y favorece una glucosa estable, manteniendo el hambre a raya mucho después de la cena.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Alto en proteína",
          "Alto en fibra",
          "Ideal para meal-prep"
        ],
        "ingredients": [
          "4 pimientos morrones grandes, cortados a la mitad y sin semillas",
          "1 lb de pavo molido (93% magro)",
          "1 taza de quinoa cocida",
          "1 lata (14 oz) de tomates en cubos, escurridos",
          "1 cebolla, en cubos",
          "2 dientes de ajo, picados finos",
          "1 cucharada de aceite de oliva",
          "1 cucharadita de orégano seco",
          "1/2 cucharadita de comino",
          "1/2 cucharadita de sal marina"
        ],
        "steps": [
          "Precalienta el horno a 375°F y coloca las mitades de pimiento con el corte hacia arriba en una fuente para horno.",
          "Calienta el aceite de oliva en una sartén y sofríe la cebolla y el ajo 3 minutos.",
          "Agrega el pavo y dora 6 minutos, luego incorpora los tomates, el orégano, el comino y la sal.",
          "Incorpora la quinoa cocida y cocina a fuego lento 2 minutos para integrar todo.",
          "Rellena los pimientos con la mezcla, cubre con papel aluminio y hornea 25 minutos.",
          "Destapa y hornea 10 minutos más hasta que los pimientos estén tiernos."
        ],
        "swaps": [
          "pavo molido → res molida de pastoreo o lentejas",
          "quinoa → arroz de coliflor (menos carbohidratos)",
          "tomates en cubos → tomate fresco + puré de tomate (sin lata)"
        ]
      },
      "it": {
        "title": "Peperoni Ripieni di Tacchino e Quinoa",
        "desc": "Dolci peperoni arrostiti colmi di tacchino alle erbe, quinoa e pomodoro — una cena sostanziosa da gustare con le mani che ti sazia per ore.",
        "why": "L'abbinamento di proteine magre di tacchino con quinoa e peperoni ricchi di fibre rallenta la digestione e sostiene una glicemia stabile, tenendo a bada la fame ben oltre la cena.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Ricco di proteine",
          "Ricco di fibre",
          "Meal-prep"
        ],
        "ingredients": [
          "4 peperoni grandi, tagliati a metà e privati dei semi",
          "1 libbra di tacchino macinato (93% magro)",
          "1 tazza di quinoa cotta",
          "1 barattolo (14 once) di pomodori a cubetti, sgocciolati",
          "1 cipolla, a cubetti",
          "2 spicchi d'aglio, tritati",
          "1 cucchiaio di olio d'oliva",
          "1 cucchiaino di origano secco",
          "1/2 cucchiaino di cumino",
          "1/2 cucchiaino di sale marino"
        ],
        "steps": [
          "Scalda il forno a 375°F (190°C) e disponi le metà di peperone con il taglio verso l'alto in una teglia da forno.",
          "Scalda l'olio d'oliva in una padella e fai ammorbidire cipolla e aglio per 3 minuti.",
          "Aggiungi il tacchino e rosola per 6 minuti, poi unisci pomodori, origano, cumino e sale.",
          "Incorpora la quinoa cotta e cuoci a fuoco lento per 2 minuti per amalgamare il tutto.",
          "Riempi i peperoni con il composto, copri con carta stagnola e cuoci in forno per 25 minuti.",
          "Scopri e cuoci per altri 10 minuti finché i peperoni non sono teneri."
        ],
        "swaps": [
          "tacchino macinato → manzo macinato di allevamento a erba o lenticchie",
          "quinoa → riso di cavolfiore (meno carboidrati)",
          "pomodori a cubetti → pomodoro fresco + concentrato di pomodoro (senza barattolo)"
        ]
      },
      "zh": {
        "title": "火鸡藜麦酿甜椒",
        "desc": "香甜的烤甜椒里塞满香草火鸡肉、藜麦和番茄——丰盛的手拿晚餐，饱腹感能维持数小时。",
        "why": "瘦火鸡肉蛋白质与富含膳食纤维的藜麦和甜椒搭配，能延缓消化速度、支持血糖平稳，让饥饿感在晚餐后很久都不会来打扰。",
        "tags": [
          "无麸质",
          "无乳制品",
          "高蛋白",
          "高纤维",
          "备餐友好"
        ],
        "ingredients": [
          "4个大甜椒，切半去籽",
          "1磅火鸡肉末（93%瘦肉）",
          "1杯煮熟的藜麦",
          "1罐（14盎司）番茄丁，沥干",
          "1个洋葱，切丁",
          "2瓣大蒜，切末",
          "1汤匙橄榄油",
          "1茶匙干牛至叶",
          "½茶匙孜然粉",
          "½茶匙海盐"
        ],
        "steps": [
          "将烤箱预热至375°F，把甜椒切面朝上放入烤盘。",
          "在煎锅中加热橄榄油，把洋葱和大蒜炒软约3分钟。",
          "加入火鸡肉末煎6分钟至微焦，再拌入番茄丁、牛至叶、孜然粉和盐。",
          "拌入煮熟的藜麦，煮2分钟让食材融合。",
          "把馅料填入甜椒中，盖上锡纸烤25分钟。",
          "揭开锡纸再烤10分钟，直到甜椒变软。"
        ],
        "swaps": [
          "火鸡肉末 → 草饲牛肉末或扁豆",
          "藜麦 → 花椰菜米（低碳水）",
          "番茄丁 → 新鲜番茄+番茄膏（不用罐头）"
        ]
      },
      "hi": {
        "title": "टर्की एंड क्विनोआ स्टफ्ड शिमला मिर्च",
        "desc": "मीठी भुनी हुई शिमला मिर्च, हर्ब वाली टर्की, क्विनोआ और टमाटर से भरी हुई — एक भरपूर हाथ से पकड़ने वाला डिनर जो घंटों तक आपको भरा रखता है।",
        "why": "लीन टर्की प्रोटीन का फाइबर-युक्त क्विनोआ और शिमला मिर्च के साथ मेल पाचन को धीमा करता है और स्थिर ब्लड-शुगर को सहारा देता है, जिससे डिनर के बाद देर तक भूख शांत रहती है।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "हाई-प्रोटीन",
          "हाई-फाइबर",
          "मील-प्रेप"
        ],
        "ingredients": [
          "4 बड़ी शिमला मिर्च, आधी कटी और बीज निकाली हुई",
          "1 पाउंड कीमा टर्की (93% लीन)",
          "1 कप पका हुआ क्विनोआ",
          "1 डिब्बा (14 औंस) कटे हुए टमाटर, पानी निकाला हुआ",
          "1 प्याज़, कटा हुआ",
          "2 लहसुन की कलियां, बारीक कटी हुई",
          "1 बड़ा चम्मच ऑलिव ऑयल",
          "1 छोटा चम्मच सूखा ओरिगैनो",
          "1/2 छोटा चम्मच जीरा",
          "1/2 छोटा चम्मच सी सॉल्ट"
        ],
        "steps": [
          "ओवन को 375F पर गर्म करें और शिमला मिर्च के आधे टुकड़ों को कटे हुए हिस्से को ऊपर रखते हुए बेकिंग डिश में रखें।",
          "तवे में ऑलिव ऑयल गर्म करें और प्याज़ व लहसुन को 3 मिनट नरम होने तक पकाएं।",
          "टर्की डालें और 6 मिनट ब्राउन होने तक पकाएं, फिर टमाटर, ओरिगैनो, जीरा और नमक मिलाएं।",
          "पका हुआ क्विनोआ मिलाएं और सब कुछ एक साथ लाने के लिए 2 मिनट पकाएं।",
          "भरावन को शिमला मिर्च में भरें, फॉइल से ढकें और 25 मिनट बेक करें।",
          "फॉइल हटाकर 10 मिनट और बेक करें जब तक शिमला मिर्च नरम न हो जाए।"
        ],
        "swaps": [
          "कीमा टर्की → ग्रास-फेड कीमा बीफ या दाल",
          "क्विनोआ → गोभी चावल (कम कार्ब)",
          "कटे हुए टमाटर → ताज़ा टमाटर + टमाटर पेस्ट (बिना डिब्बे के)"
        ]
      },
      "he": {
        "title": "פלפלים ממולאים הודו וקינואה",
        "desc": "פלפלים מתוקים קלויים ממולאים בהודו מתובל עשבי תיבול, קינואה ועגבנייה — ארוחת ערב לאכילה ביד שממלאה לשעות.",
        "why": "השילוב של חלבון הודו רזה עם קינואה עתירת סיבים ופלפלים מאט את העיכול ותומך בסוכר דם יציב, ושומר על השקט ברעב הרבה אחרי ארוחת הערב.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "עתיר חלבון",
          "עתיר סיבים",
          "הכנה מראש"
        ],
        "ingredients": [
          "4 פלפלים מתוקים גדולים, חצויים ומגולענים",
          "450 גרם הודו טחון (93% רזה)",
          "1 כוס קינואה מבושלת",
          "1 קופסה (400 גרם) עגבניות מקוצצות, מסוננות",
          "1 בצל, קצוץ",
          "2 שיני שום, קצוצות דק",
          "1 כף שמן זית",
          "1 כפית אורגנו מיובש",
          "½ כפית כמון",
          "½ כפית מלח ים"
        ],
        "steps": [
          "לחמם תנור ל-190 מעלות ולסדר את חצאי הפלפל עם הצד החתוך כלפי מעלה בתבנית אפייה.",
          "לחמם שמן זית במחבת ולרכך בצל ושום 3 דקות.",
          "להוסיף הודו ולשחם 6 דקות, ואז לערבב פנימה עגבניות, אורגנו, כמון ומלח.",
          "לקפל פנימה את הקינואה המבושלת ולבשל דקה כדי שהכול יתאחד.",
          "לכף את המילוי לתוך הפלפלים, לכסות בנייר כסף ולאפות 25 דקות.",
          "לגלות ולאפות עוד 10 דקות עד שהפלפלים רכים."
        ],
        "swaps": [
          "הודו טחון → בקר טחון מהזנה עשבית או עדשים",
          "קינואה → אורז כרובית (דל פחמימות יותר)",
          "עגבניות מקוצצות → עגבנייה טרייה + רסק עגבניות (בלי שימורים)"
        ]
      }
    }
  },
  {
    "id": "dinner-chicken-cauliflower-rice-bowl",
    "title": "Turmeric Chicken Cauliflower-Rice Bowl",
    "desc": "Golden turmeric chicken over fluffy cauliflower rice with avocado, tomato and lime — a light bowl that eats big.",
    "image": "/assets/recipes/dinner-chicken-cauliflower-rice-bowl.png",
    "level": "club",
    "daypart": "dinner",
    "makes": "2",
    "goals": [
      "Satiety",
      "Anti-inflammatory"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "Grain-free",
      "High-protein",
      "Anti-inflammatory"
    ],
    "macros": {
      "kcal": 390,
      "protein": "31g",
      "carbs": "13g",
      "fat": "24g",
      "fiber": "6g"
    },
    "why": "Turmeric with a crack of black pepper is traditionally used to support a balanced inflammatory response, while protein-rich chicken and healthy-fat avocado keep the low-carb bowl genuinely filling.",
    "swaps": [
      "chicken thigh → shrimp or chickpeas (faster or plant-based)",
      "cauliflower rice → cooked quinoa (if grains are welcome)",
      "avocado → tahini drizzle (nightshade-free richness)"
    ],
    "ingredients": [
      "2 boneless skinless chicken thighs (5 oz each)",
      "3 cups cauliflower rice",
      "1/2 avocado, sliced",
      "1 cup cherry tomatoes, halved",
      "1 tbsp olive oil",
      "1 tsp ground turmeric",
      "1/4 tsp black pepper",
      "1 lime, juiced",
      "2 tbsp fresh cilantro",
      "1/2 tsp sea salt"
    ],
    "steps": [
      "Rub chicken with turmeric, black pepper and half the salt.",
      "Sear in 1/2 tbsp oil over medium-high heat 5-6 minutes per side, then rest and slice.",
      "In the same pan, add remaining oil and saute cauliflower rice 4 minutes with the rest of the salt.",
      "Divide the rice between two bowls and top with sliced chicken, tomatoes and avocado.",
      "Finish with lime juice and cilantro and serve."
    ],
    "i18n": {
      "pt": {
        "title": "Bowl de Frango com Cúrcuma e Arroz de Couve-Flor",
        "desc": "Frango dourado com cúrcuma sobre arroz de couve-flor fofinho, com abacate, tomate e limão — um bowl leve que satisfaz muito.",
        "why": "A cúrcuma com uma pitada de pimenta-do-reino é tradicionalmente usada para apoiar uma resposta inflamatória equilibrada, enquanto o frango, rico em proteína, e o abacate, com suas gorduras boas, mantêm esse bowl low-carb genuinamente saciante.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Sem grãos",
          "Rico em proteína",
          "Anti-inflamatório"
        ],
        "ingredients": [
          "2 sobrecoxas de frango sem osso e sem pele (5 oz cada)",
          "3 xícaras de arroz de couve-flor",
          "1/2 abacate, fatiado",
          "1 xícara de tomate-cereja, cortado ao meio",
          "1 colher de sopa de azeite de oliva",
          "1 colher de chá de cúrcuma em pó",
          "1/4 colher de chá de pimenta-do-reino",
          "1 limão, espremido",
          "2 colheres de sopa de coentro fresco",
          "1/2 colher de chá de sal marinho"
        ],
        "steps": [
          "Tempere o frango com a cúrcuma, a pimenta-do-reino e metade do sal.",
          "Sele em 1/2 colher de sopa de azeite, em fogo médio-alto, por 5 a 6 minutos de cada lado, depois deixe descansar e fatie.",
          "Na mesma frigideira, adicione o azeite restante e refogue o arroz de couve-flor por 4 minutos com o restante do sal.",
          "Divida o arroz entre duas tigelas e cubra com o frango fatiado, o tomate e o abacate.",
          "Finalize com suco de limão e coentro e sirva."
        ],
        "swaps": [
          "sobrecoxa de frango → camarão ou grão-de-bico (mais rápido ou à base de plantas)",
          "arroz de couve-flor → quinoa cozida (se grãos forem bem-vindos)",
          "abacate → fio de tahine (cremosidade sem solanáceas)"
        ]
      },
      "es": {
        "title": "Bowl de Pollo con Cúrcuma y Arroz de Coliflor",
        "desc": "Pollo dorado con cúrcuma sobre esponjoso arroz de coliflor, con aguacate, tomate y lima: un bowl ligero que rinde grande.",
        "why": "La cúrcuma con un toque de pimienta negra se usa tradicionalmente para favorecer una respuesta inflamatoria equilibrada, mientras que el pollo, rico en proteína, y el aguacate, con grasas saludables, mantienen este bowl bajo en carbohidratos genuinamente saciante.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Sin granos",
          "Alto en proteína",
          "Antiinflamatorio"
        ],
        "ingredients": [
          "2 muslos de pollo sin hueso ni piel (5 oz cada uno)",
          "3 tazas de arroz de coliflor",
          "1/2 aguacate, en rodajas",
          "1 taza de tomates cherry, cortados a la mitad",
          "1 cucharada de aceite de oliva",
          "1 cucharadita de cúrcuma molida",
          "1/4 cucharadita de pimienta negra",
          "1 lima, exprimida",
          "2 cucharadas de cilantro fresco",
          "1/2 cucharadita de sal marina"
        ],
        "steps": [
          "Frota el pollo con la cúrcuma, la pimienta negra y la mitad de la sal.",
          "Sella en 1/2 cucharada de aceite a fuego medio-alto 5-6 minutos por lado, deja reposar y corta en rodajas.",
          "En la misma sartén, agrega el aceite restante y saltea el arroz de coliflor 4 minutos con el resto de la sal.",
          "Reparte el arroz en dos bowls y corona con el pollo en rodajas, los tomates y el aguacate.",
          "Termina con el jugo de lima y el cilantro, y sirve."
        ],
        "swaps": [
          "muslo de pollo → camarones o garbanzos (más rápido o de origen vegetal)",
          "arroz de coliflor → quinoa cocida (si los granos son bienvenidos)",
          "aguacate → un hilo de tahini (cremosidad sin solanáceas)"
        ]
      },
      "it": {
        "title": "Ciotola di Pollo alla Curcuma con Riso di Cavolfiore",
        "desc": "Pollo dorato alla curcuma su un letto di soffice riso di cavolfiore con avocado, pomodoro e lime — una ciotola leggera che sazia.",
        "why": "La curcuma abbinata a una macinata di pepe nero è tradizionalmente usata per sostenere una risposta infiammatoria equilibrata, mentre il pollo ricco di proteine e l'avocado ricco di grassi buoni rendono questa ciotola a basso contenuto di carboidrati davvero saziante.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Senza cereali",
          "Ricco di proteine",
          "Antinfiammatorio"
        ],
        "ingredients": [
          "2 cosce di pollo disossate e senza pelle (5 once ciascuna)",
          "3 tazze di riso di cavolfiore",
          "1/2 avocado, a fette",
          "1 tazza di pomodorini, tagliati a metà",
          "1 cucchiaio di olio d'oliva",
          "1 cucchiaino di curcuma in polvere",
          "1/4 di cucchiaino di pepe nero",
          "1 lime, spremuto",
          "2 cucchiai di coriandolo fresco",
          "1/2 cucchiaino di sale marino"
        ],
        "steps": [
          "Strofina il pollo con curcuma, pepe nero e metà del sale.",
          "Rosola in 1/2 cucchiaio di olio a fuoco medio-alto per 5-6 minuti per lato, poi lascia riposare e affetta.",
          "Nella stessa padella, aggiungi l'olio rimasto e soffriggi il riso di cavolfiore per 4 minuti con il resto del sale.",
          "Dividi il riso in due ciotole e guarnisci con il pollo affettato, i pomodorini e l'avocado.",
          "Completa con succo di lime e coriandolo e servi."
        ],
        "swaps": [
          "coscia di pollo → gamberi o ceci (più rapido o vegetale)",
          "riso di cavolfiore → quinoa cotta (se i cereali sono ben accetti)",
          "avocado → filo di tahina (cremosità senza solanacee)"
        ]
      },
      "zh": {
        "title": "姜黄鸡肉花椰菜米碗",
        "desc": "金黄姜黄鸡肉铺在蓬松花椰菜米上，搭配牛油果、番茄和青柠——清爽却分量十足的一碗。",
        "why": "姜黄搭配现磨黑胡椒在传统上用于帮助维持平衡的炎症反应，富含蛋白质的鸡肉和健康脂肪牛油果则让这道低碳水的碗真正令人饱足。",
        "tags": [
          "无麸质",
          "无乳制品",
          "无谷物",
          "高蛋白",
          "抗炎"
        ],
        "ingredients": [
          "2块去骨去皮鸡腿肉（各5盎司）",
          "3杯花椰菜米",
          "½个牛油果，切片",
          "1杯圣女果，切半",
          "1汤匙橄榄油",
          "1茶匙姜黄粉",
          "¼茶匙黑胡椒",
          "1个青柠，榨汁",
          "2汤匙新鲜香菜",
          "½茶匙海盐"
        ],
        "steps": [
          "把姜黄粉、黑胡椒和一半的盐抹在鸡腿肉上。",
          "用½汤匙橄榄油，中高火两面各煎5-6分钟，静置后切片。",
          "用同一个锅加入剩余橄榄油，炒花椰菜米4分钟，加入剩下的盐。",
          "把花椰菜米分装到两个碗中，铺上切片鸡肉、番茄和牛油果。",
          "淋上青柠汁，撒上香菜，即可享用。"
        ],
        "swaps": [
          "鸡腿肉 → 虾或鹰嘴豆（更快熟或植物基替代）",
          "花椰菜米 → 煮熟的藜麦（如果可以接受谷物）",
          "牛油果 → 淋芝麻酱（无茄科的浓郁口感）"
        ]
      },
      "hi": {
        "title": "हल्दी चिकन कॉलीफ्लावर-राइस बाउल",
        "desc": "फूले हुए गोभी चावल के ऊपर सुनहरा हल्दी चिकन, एवोकाडो, टमाटर और नींबू के साथ — एक हल्का बाउल जो भरपूर लगता है।",
        "why": "काली मिर्च के साथ हल्दी का पारंपरिक रूप से उपयोग संतुलित सूजन-प्रतिक्रिया को सहारा देने के लिए होता है, जबकि प्रोटीन-युक्त चिकन और अच्छे फैट वाला एवोकाडो इस लो-कार्ब बाउल को सचमुच भरपेट बनाए रखते हैं।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "अनाज-रहित",
          "हाई-प्रोटीन",
          "एंटी-इन्फ्लेमेटरी"
        ],
        "ingredients": [
          "2 बोनलेस स्किनलेस चिकन थाई (5 औंस प्रत्येक)",
          "3 कप गोभी चावल",
          "1/2 एवोकाडो, कटा हुआ",
          "1 कप चेरी टमाटर, आधे कटे हुए",
          "1 बड़ा चम्मच ऑलिव ऑयल",
          "1 छोटा चम्मच हल्दी पाउडर",
          "1/4 छोटा चम्मच काली मिर्च",
          "1 नींबू का रस",
          "2 बड़े चम्मच ताज़ा धनिया",
          "1/2 छोटा चम्मच सी सॉल्ट"
        ],
        "steps": [
          "चिकन पर हल्दी, काली मिर्च और आधा नमक लगाएं।",
          "मध्यम-तेज़ आंच पर 1/2 बड़ा चम्मच तेल में हर तरफ 5-6 मिनट सेकें, फिर आराम देकर काटें।",
          "उसी पैन में बचा हुआ तेल डालें और बचे हुए नमक के साथ गोभी चावल को 4 मिनट भूनें।",
          "चावल को दो बाउल में बांटें और ऊपर कटा हुआ चिकन, टमाटर और एवोकाडो डालें।",
          "अंत में नींबू का रस और धनिया डालें और परोसें।"
        ],
        "swaps": [
          "चिकन थाई → झींगा या चने (तेज़ या पौधे-आधारित विकल्प)",
          "गोभी चावल → पका हुआ क्विनोआ (अगर अनाज ठीक हो)",
          "एवोकाडो → ताहिनी की बूंदें (नाइटशेड-रहित मलाईदारपन)"
        ]
      },
      "he": {
        "title": "קערת עוף כורכום עם אורז כרובית",
        "desc": "עוף כורכום זהוב מעל אורז כרובית תפוח עם אבוקדו, עגבנייה וליים — קערה קלילה שאוכלת גדול.",
        "why": "כורכום עם קורט פלפל שחור משמש באופן מסורתי לתמיכה בתגובה דלקתית מאוזנת, בעוד עוף עשיר בחלבון ואבוקדו עתיר שומן בריא שומרים על הקערה הדלה בפחמימות משביעה באמת.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "ללא דגנים",
          "עתיר חלבון",
          "אנטי-דלקתי"
        ],
        "ingredients": [
          "2 שוקי עוף ללא עצם וללא עור (140 גרם כל אחד)",
          "3 כוסות אורז כרובית",
          "½ אבוקדו, פרוס",
          "1 כוס עגבניות שרי, חצויות",
          "1 כף שמן זית",
          "1 כפית כורכום טחון",
          "¼ כפית פלפל שחור",
          "1 ליים, סחוט",
          "2 כפות כוסברה טרייה",
          "½ כפית מלח ים"
        ],
        "steps": [
          "לשפשף את העוף בכורכום, פלפל שחור וחצי מהמלח.",
          "לצרוב ב-½ כף שמן על אש בינונית-גבוהה 5-6 דקות מכל צד, ואז לתת לנוח ולפרוס.",
          "באותה מחבת, להוסיף את השמן הנותר ולטגן קלות את אורז הכרובית 4 דקות עם שאר המלח.",
          "לחלק את האורז בין שתי קערות ולקשט בעוף פרוס, עגבניות ואבוקדו.",
          "לסיים במיץ ליים וכוסברה ולהגיש."
        ],
        "swaps": [
          "שוק עוף → שרימפס או חומוס (מהיר יותר או צמחי)",
          "אורז כרובית → קינואה מבושלת (אם דגנים מתקבלים בברכה)",
          "אבוקדו → טפטוף טחינה (עושר ללא סולניים)"
        ]
      }
    }
  },
  {
    "id": "snack-chocolate-protein-bites",
    "title": "Chocolate Almond Protein Bites",
    "desc": "No-bake fudgy bites that taste like dessert but land like fuel — roll, chill, grab and go.",
    "image": "/assets/recipes/snack-chocolate-protein-bites.png",
    "level": "free",
    "daypart": "snack",
    "makes": "12",
    "goals": [
      "Protein",
      "Sweet cravings"
    ],
    "tags": [
      "Gluten-free",
      "Refined-sugar-free",
      "High-protein",
      "Meal-prep"
    ],
    "macros": {
      "kcal": 112,
      "protein": "5g",
      "carbs": "10g",
      "fat": "6g",
      "fiber": "2g"
    },
    "why": "Almond butter and protein powder pair steady protein with healthy fat to slow the sugar curve, so the chocolate hit satisfies a craving without the crash.",
    "swaps": [
      "whey protein → pea protein (vegan)",
      "almond butter → sunflower seed butter (nut-free)",
      "maple syrup → 3 pitted medjool dates, blended (whole-food sweetener)"
    ],
    "ingredients": [
      "1 cup rolled oats",
      "1/2 cup almond butter",
      "1/3 cup chocolate protein powder",
      "3 tbsp maple syrup",
      "2 tbsp cacao powder",
      "1 tbsp chia seeds",
      "2 tbsp dark chocolate chips (70%+)",
      "1-2 tbsp water, as needed"
    ],
    "steps": [
      "Stir oats, protein powder, cacao and chia in a bowl.",
      "Mix in almond butter and maple syrup until a stiff dough forms, adding water a splash at a time.",
      "Fold in chocolate chips, then roll into 12 balls.",
      "Chill 20 minutes to firm up before serving."
    ],
    "i18n": {
      "pt": {
        "title": "Bocadinhos de Proteína com Chocolate e Amêndoa",
        "desc": "Bocadinhos sem forno, macios como fudge, que têm gosto de sobremesa mas funcionam como combustível — enrole, gele, pegue e vá.",
        "why": "A pasta de amêndoas e a proteína em pó combinam proteína estável com gordura boa para desacelerar a curva glicêmica, assim o toque de chocolate satisfaz a vontade sem o baque depois.",
        "tags": [
          "Sem glúten",
          "Sem açúcar refinado",
          "Rico em proteína",
          "Meal-prep"
        ],
        "ingredients": [
          "1 xícara de aveia em flocos",
          "1/2 xícara de pasta de amêndoas",
          "1/3 xícara de proteína em pó sabor chocolate",
          "3 colheres de sopa de xarope de bordo",
          "2 colheres de sopa de cacau em pó",
          "1 colher de sopa de sementes de chia",
          "2 colheres de sopa de gotas de chocolate amargo (70%+)",
          "1 a 2 colheres de sopa de água, conforme necessário"
        ],
        "steps": [
          "Misture a aveia, a proteína em pó, o cacau e a chia em uma tigela.",
          "Junte a pasta de amêndoas e o xarope de bordo até formar uma massa firme, adicionando água aos poucos se necessário.",
          "Incorpore as gotas de chocolate e enrole em 12 bolinhas.",
          "Leve à geladeira por 20 minutos para firmar antes de servir."
        ],
        "swaps": [
          "whey protein → proteína de ervilha (vegano)",
          "pasta de amêndoas → pasta de sementes de girassol (sem oleaginosas)",
          "xarope de bordo → 3 tâmaras Medjool sem caroço, batidas (adoçante de alimento integral)"
        ]
      },
      "es": {
        "title": "Bocaditos de Proteína con Chocolate y Almendra",
        "desc": "Bocaditos sin horno, densos y suaves, que saben a postre pero rinden como combustible: enrolla, enfría y llévatelos.",
        "why": "La mantequilla de almendra y la proteína en polvo combinan proteína estable con grasa saludable para ralentizar la curva de azúcar, así el toque de chocolate satisface el antojo sin el bajón.",
        "tags": [
          "Sin gluten",
          "Sin azúcar refinada",
          "Alto en proteína",
          "Ideal para meal-prep"
        ],
        "ingredients": [
          "1 taza de avena en hojuelas",
          "1/2 taza de mantequilla de almendra",
          "1/3 taza de proteína en polvo sabor chocolate",
          "3 cucharadas de jarabe de arce",
          "2 cucharadas de cacao en polvo",
          "1 cucharada de semillas de chía",
          "2 cucharadas de chispas de chocolate negro (70%+)",
          "1-2 cucharadas de agua, las necesarias"
        ],
        "steps": [
          "Mezcla la avena, la proteína en polvo, el cacao y la chía en un bowl.",
          "Incorpora la mantequilla de almendra y el jarabe de arce hasta formar una masa firme, agregando agua poco a poco.",
          "Incorpora las chispas de chocolate y forma 12 bolitas.",
          "Refrigera 20 minutos para que endurezcan antes de servir."
        ],
        "swaps": [
          "proteína de suero → proteína de guisante (vegano)",
          "mantequilla de almendra → mantequilla de semillas de girasol (sin frutos secos)",
          "jarabe de arce → 3 dátiles Medjool sin hueso, licuados (endulzante integral)"
        ]
      },
      "it": {
        "title": "Bocconcini Proteici al Cioccolato e Mandorle",
        "desc": "Bocconcini fondenti senza cottura che sanno di dessert ma nutrono come carburante — arrotola, raffredda, prendi e vai.",
        "why": "Il burro di mandorle e le proteine in polvere abbinano proteine stabili a grassi buoni per rallentare la curva glicemica, così la voglia di cioccolato si soddisfa senza il crollo energetico.",
        "tags": [
          "Senza glutine",
          "Senza zuccheri raffinati",
          "Ricco di proteine",
          "Meal-prep"
        ],
        "ingredients": [
          "1 tazza di fiocchi d'avena",
          "1/2 tazza di burro di mandorle",
          "1/3 di tazza di proteine in polvere al cioccolato",
          "3 cucchiai di sciroppo d'acero",
          "2 cucchiai di cacao amaro in polvere",
          "1 cucchiaio di semi di chia",
          "2 cucchiai di gocce di cioccolato fondente (70%+)",
          "1-2 cucchiai d'acqua, quanto basta"
        ],
        "steps": [
          "Mescola avena, proteine in polvere, cacao e chia in una ciotola.",
          "Incorpora burro di mandorle e sciroppo d'acero finché non si forma un impasto sodo, aggiungendo acqua poco alla volta.",
          "Incorpora le gocce di cioccolato, poi forma 12 palline.",
          "Raffredda in frigo per 20 minuti prima di servire, così si compattano."
        ],
        "swaps": [
          "proteine whey → proteine di piselli (vegano)",
          "burro di mandorle → burro di semi di girasole (senza frutta a guscio)",
          "sciroppo d'acero → 3 datteri Medjool denocciolati, frullati (dolcificante integrale)"
        ]
      },
      "zh": {
        "title": "巧克力杏仁蛋白能量球",
        "desc": "免烤的软糯能量球，吃起来像甜点，却能提供扎实能量——搓好、冷藏、随手带走。",
        "why": "杏仁酱和蛋白粉将稳定的蛋白质与健康脂肪相搭配，延缓血糖上升曲线，让巧克力的满足感不会伴随随后的疲惫感。",
        "tags": [
          "无麸质",
          "无精制糖",
          "高蛋白",
          "备餐友好"
        ],
        "ingredients": [
          "1杯燕麦片",
          "½杯杏仁酱",
          "⅓杯巧克力蛋白粉",
          "3汤匙枫糖浆",
          "2汤匙可可粉",
          "1汤匙奇亚籽",
          "2汤匙黑巧克力豆（可可含量70%以上）",
          "1-2汤匙水，按需添加"
        ],
        "steps": [
          "把燕麦片、蛋白粉、可可粉和奇亚籽在碗中拌匀。",
          "拌入杏仁酱和枫糖浆，逐次少量加水，直到形成扎实的面团。",
          "拌入巧克力豆，搓成12个球。",
          "冷藏20分钟至定型后再享用。"
        ],
        "swaps": [
          "乳清蛋白 → 豌豆蛋白（纯素）",
          "杏仁酱 → 葵花籽酱（无坚果）",
          "枫糖浆 → 3颗去核麦地那椰枣打碎（全食物甜味来源）"
        ]
      },
      "hi": {
        "title": "चॉकलेट आमंड प्रोटीन बाइट्स",
        "desc": "बिना बेक किए फजी बाइट्स जो मिठाई जैसी लगती हैं पर ईंधन जैसा असर करती हैं — बेलें, ठंडा करें, उठाएं और चलते बनें।",
        "why": "बादाम बटर और प्रोटीन पाउडर स्थिर प्रोटीन को अच्छे फैट के साथ जोड़ते हैं जो शुगर की रफ्तार को धीमा करता है, इसलिए चॉकलेट का यह स्वाद बिना क्रैश के तलब को शांत करता है।",
        "tags": [
          "ग्लूटेन-फ्री",
          "रिफाइंड-शुगर-फ्री",
          "हाई-प्रोटीन",
          "मील-प्रेप"
        ],
        "ingredients": [
          "1 कप रोल्ड ओट्स",
          "1/2 कप बादाम बटर",
          "1/3 कप चॉकलेट प्रोटीन पाउडर",
          "3 बड़े चम्मच मेपल सिरप",
          "2 बड़े चम्मच काकाओ पाउडर",
          "1 बड़ा चम्मच चिया बीज",
          "2 बड़े चम्मच डार्क चॉकलेट चिप्स (70%+)",
          "ज़रूरत अनुसार 1-2 बड़े चम्मच पानी"
        ],
        "steps": [
          "एक बाउल में ओट्स, प्रोटीन पाउडर, काकाओ और चिया मिलाएं।",
          "बादाम बटर और मेपल सिरप मिलाएं जब तक सख्त आटा न बन जाए, थोड़ा-थोड़ा पानी डालते हुए।",
          "चॉकलेट चिप्स मिलाएं, फिर 12 गोले बनाएं।",
          "परोसने से पहले सख्त होने के लिए 20 मिनट फ्रिज में रखें।"
        ],
        "swaps": [
          "व्हे प्रोटीन → पी प्रोटीन (वीगन)",
          "बादाम बटर → सूरजमुखी बीज बटर (नट-फ्री)",
          "मेपल सिरप → 3 बीज निकाले मेडजूल खजूर, ब्लेंड किए हुए (होल-फूड स्वीटनर)"
        ]
      },
      "he": {
        "title": "ביסי חלבון שוקולד ושקדים",
        "desc": "ביסים פאדג'יים ללא אפייה שטועמים כמו קינוח אבל נוחתים כמו דלק — מגלגלים, מקררים, תופסים ויוצאים.",
        "why": "חמאת שקדים ואבקת חלבון מזווגות חלבון יציב עם שומן בריא כדי להאט את עקומת הסוכר, כך שהתשוקה לשוקולד מתמלאת בלי הקריסה.",
        "tags": [
          "ללא גלוטן",
          "ללא סוכר מזוקק",
          "עתיר חלבון",
          "הכנה מראש"
        ],
        "ingredients": [
          "1 כוס שיבולת שועל",
          "½ כוס חמאת שקדים",
          "⅓ כוס אבקת חלבון בטעם שוקולד",
          "3 כפות סירופ מייפל",
          "2 כפות אבקת קקאו",
          "1 כף זרעי צ'יה",
          "2 כפות שוקולד צ'יפס מריר (70%+)",
          "1-2 כפות מים, לפי הצורך"
        ],
        "steps": [
          "לערבב שיבולת שועל, אבקת חלבון, קקאו וצ'יה בקערה.",
          "לערבב פנימה חמאת שקדים וסירופ מייפל עד שנוצר בצק קשה, תוך הוספת מים בכפית בכל פעם.",
          "לקפל פנימה שוקולד צ'יפס, ואז לגלגל ל-12 כדורים.",
          "לקרר 20 דקות כדי להתייצב לפני ההגשה."
        ],
        "swaps": [
          "חלבון מי גבינה → חלבון אפונה (טבעוני)",
          "חמאת שקדים → חמאת גרעיני חמנייה (ללא אגוזים)",
          "סירופ מייפל → 3 תמרי מג'הול מגולענים, טחונים (ממתיק מזון שלם)"
        ]
      }
    }
  },
  {
    "id": "snack-crispy-roasted-chickpeas",
    "title": "Crispy Roasted Chickpeas",
    "desc": "Crunchy, smoky and salty — the popcorn swap that actually keeps you full.",
    "image": "/assets/recipes/snack-crispy-roasted-chickpeas.png",
    "level": "free",
    "daypart": "snack",
    "makes": "4",
    "goals": [
      "Satiety",
      "Protein"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "Vegan",
      "High-fiber"
    ],
    "macros": {
      "kcal": 205,
      "protein": "10g",
      "carbs": "28g",
      "fat": "7g",
      "fiber": "8g"
    },
    "why": "Chickpeas bring plant protein and fiber together, a combo linked to slower digestion and lasting fullness that keeps mindless snacking in check.",
    "swaps": [
      "chickpeas → white beans (same method, softer bite)",
      "smoked paprika → curry powder (flavor swap)",
      "olive oil → avocado oil (higher smoke point)"
    ],
    "ingredients": [
      "2 cans chickpeas (15 oz each), drained and rinsed",
      "1 tbsp olive oil",
      "1 tsp smoked paprika",
      "1/2 tsp garlic powder",
      "1/2 tsp ground cumin",
      "1/2 tsp sea salt"
    ],
    "steps": [
      "Heat oven to 425F and pat chickpeas fully dry with a towel.",
      "Toss with olive oil and all seasonings on a lined sheet pan.",
      "Roast 30-35 minutes, shaking halfway, until deeply crisp.",
      "Cool 5 minutes so they crunch, then serve."
    ],
    "i18n": {
      "pt": {
        "title": "Grão-de-Bico Crocante Assado",
        "desc": "Crocante, defumado e salgado — a alternativa à pipoca que realmente mantém a saciedade.",
        "why": "O grão-de-bico reúne proteína vegetal e fibras, uma combinação associada a uma digestão mais lenta e a uma saciedade duradoura que mantém a beliscada automática sob controle.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Vegano",
          "Rico em fibras"
        ],
        "ingredients": [
          "2 latas de grão-de-bico (15 oz cada), escorrido e enxaguado",
          "1 colher de sopa de azeite de oliva",
          "1 colher de chá de páprica defumada",
          "1/2 colher de chá de alho em pó",
          "1/2 colher de chá de cominho em pó",
          "1/2 colher de chá de sal marinho"
        ],
        "steps": [
          "Aqueça o forno a 425F e seque bem o grão-de-bico com um pano.",
          "Misture com o azeite e todos os temperos em uma assadeira forrada.",
          "Asse por 30 a 35 minutos, sacudindo na metade do tempo, até ficar bem crocante.",
          "Deixe esfriar por 5 minutos para ficar ainda mais crocante, depois sirva."
        ],
        "swaps": [
          "grão-de-bico → feijão-branco (mesmo método, mordida mais macia)",
          "páprica defumada → curry em pó (troca de sabor)",
          "azeite de oliva → óleo de abacate (ponto de fumaça mais alto)"
        ]
      },
      "es": {
        "title": "Garbanzos Crujientes Asados",
        "desc": "Crujientes, ahumados y salados: el sustituto de las palomitas que sí te mantiene saciado.",
        "why": "Los garbanzos combinan proteína vegetal y fibra, un dúo asociado con una digestión más lenta y una saciedad duradera que mantiene a raya el picoteo sin control.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Vegano",
          "Alto en fibra"
        ],
        "ingredients": [
          "2 latas de garbanzos (15 oz cada una), escurridos y enjuagados",
          "1 cucharada de aceite de oliva",
          "1 cucharadita de pimentón ahumado",
          "1/2 cucharadita de ajo en polvo",
          "1/2 cucharadita de comino molido",
          "1/2 cucharadita de sal marina"
        ],
        "steps": [
          "Precalienta el horno a 425°F y seca bien los garbanzos con un paño.",
          "Mezcla con el aceite de oliva y todos los condimentos sobre una bandeja forrada.",
          "Asa 30-35 minutos, agitando a la mitad, hasta que queden bien crujientes.",
          "Deja enfriar 5 minutos para que crujan, y sirve."
        ],
        "swaps": [
          "garbanzos → frijoles blancos (mismo método, textura más suave)",
          "pimentón ahumado → curry en polvo (cambio de sabor)",
          "aceite de oliva → aceite de aguacate (mayor punto de humeo)"
        ]
      },
      "it": {
        "title": "Ceci Croccanti Arrostiti",
        "desc": "Croccanti, affumicati e salati — l'alternativa ai popcorn che davvero sazia.",
        "why": "I ceci uniscono proteine vegetali e fibre, una combinazione associata a una digestione più lenta e a una sazietà duratura che tiene a bada gli spuntini distratti.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Vegano",
          "Ricco di fibre"
        ],
        "ingredients": [
          "2 barattoli di ceci (15 once ciascuno), sgocciolati e sciacquati",
          "1 cucchiaio di olio d'oliva",
          "1 cucchiaino di paprika affumicata",
          "1/2 cucchiaino di aglio in polvere",
          "1/2 cucchiaino di cumino in polvere",
          "1/2 cucchiaino di sale marino"
        ],
        "steps": [
          "Scalda il forno a 425°F (220°C) e tampona i ceci per asciugarli completamente con un canovaccio.",
          "Condisci con olio d'oliva e tutte le spezie su una teglia foderata.",
          "Arrostisci per 30-35 minuti, scuotendo a metà cottura, finché non diventano molto croccanti.",
          "Lascia raffreddare 5 minuti perché diventino croccanti, poi servi."
        ],
        "swaps": [
          "ceci → fagioli bianchi (stesso metodo, morso più morbido)",
          "paprika affumicata → curry in polvere (variante di sapore)",
          "olio d'oliva → olio di avocado (punto di fumo più alto)"
        ]
      },
      "zh": {
        "title": "香脆烤鹰嘴豆",
        "desc": "酥脆、烟熏、咸香——真正能让你有饱腹感的爆米花替代品。",
        "why": "鹰嘴豆将植物蛋白和膳食纤维结合在一起，这种组合与更缓慢的消化和持久的饱腹感有关，能有效控制无意识的零食摄入。",
        "tags": [
          "无麸质",
          "无乳制品",
          "纯素",
          "高纤维"
        ],
        "ingredients": [
          "2罐鹰嘴豆（各15盎司），沥干冲洗",
          "1汤匙橄榄油",
          "1茶匙烟熏红椒粉",
          "½茶匙蒜粉",
          "½茶匙孜然粉",
          "½茶匙海盐"
        ],
        "steps": [
          "将烤箱预热至425°F，用厨房纸把鹰嘴豆彻底拍干。",
          "把鹰嘴豆与橄榄油和所有调味料拌匀，铺在铺好烘焙纸的烤盘上。",
          "烤30-35分钟，中途摇动一次，直到彻底香脆。",
          "放凉5分钟让口感更酥脆，再享用。"
        ],
        "swaps": [
          "鹰嘴豆 → 白豆（做法相同，口感更软）",
          "烟熏红椒粉 → 咖喱粉（换换风味）",
          "橄榄油 → 牛油果油（烟点更高）"
        ]
      },
      "hi": {
        "title": "क्रिस्पी रोस्टेड चने",
        "desc": "कुरकुरे, धुएंदार और नमकीन — पॉपकॉर्न का वह विकल्प जो सच में आपको भरा रखता है।",
        "why": "चने पौधे-आधारित प्रोटीन और फाइबर को साथ लाते हैं, यह मेल धीमे पाचन और लंबी तृप्ति से जुड़ा है जो बेवजह की स्नैकिंग को काबू में रखता है।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "वीगन",
          "हाई-फाइबर"
        ],
        "ingredients": [
          "2 डिब्बे चने (15 औंस प्रत्येक), पानी निकाले और धुले हुए",
          "1 बड़ा चम्मच ऑलिव ऑयल",
          "1 छोटा चम्मच स्मोक्ड पैप्रिका",
          "1/2 छोटा चम्मच लहसुन पाउडर",
          "1/2 छोटा चम्मच जीरा पाउडर",
          "1/2 छोटा चम्मच सी सॉल्ट"
        ],
        "steps": [
          "ओवन को 425F पर गर्म करें और चनों को तौलिये से पूरी तरह सुखाएं।",
          "लाइन किए हुए शीट पैन पर ऑलिव ऑयल और सभी मसालों के साथ मिलाएं।",
          "30-35 मिनट भूनें, बीच में हिलाते हुए, जब तक बहुत कुरकुरे न हो जाएं।",
          "कुरकुरेपन के लिए 5 मिनट ठंडा होने दें, फिर परोसें।"
        ],
        "swaps": [
          "चने → व्हाइट बीन्स (वही तरीका, नरम बाइट)",
          "स्मोक्ड पैप्रिका → करी पाउडर (स्वाद विकल्प)",
          "ऑलिव ऑयल → एवोकाडो ऑयल (ज़्यादा स्मोक पॉइंट)"
        ]
      },
      "he": {
        "title": "חומוס קלוי פריך",
        "desc": "פריך, מעושן ומלוח — התחליף לפופקורן שבאמת שומר על שובע.",
        "why": "חומוס מביא יחד חלבון צמחי וסיבים, שילוב שקשור לעיכול איטי יותר ולתחושת שובע מתמשכת ששומרת על נשנוש חסר מחשבה בשליטה.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "טבעוני",
          "עתיר סיבים"
        ],
        "ingredients": [
          "2 קופסאות חומוס (425 גרם כל אחת), מסונן ושטוף",
          "1 כף שמן זית",
          "1 כפית פפריקה מעושנת",
          "½ כפית אבקת שום",
          "½ כפית כמון טחון",
          "½ כפית מלח ים"
        ],
        "steps": [
          "לחמם תנור ל-220 מעלות ולייבש את החומוס לגמרי במגבת.",
          "לערבב עם שמן זית וכל התיבולים על תבנית אפייה מרופדת.",
          "לקלות 30-35 דקות, תוך ניעור באמצע, עד פריך לעומק.",
          "לצנן 5 דקות כדי שיפצפצו, ואז להגיש."
        ],
        "swaps": [
          "חומוס → שעועית לבנה (אותה שיטה, ביס רך יותר)",
          "פפריקה מעושנת → אבקת קארי (החלפת טעם)",
          "שמן זית → שמן אבוקדו (נקודת עשן גבוהה יותר)"
        ]
      }
    }
  },
  {
    "id": "snack-berry-yogurt-bark",
    "title": "Frozen Berry Yogurt Bark",
    "desc": "Creamy, tart and snappable straight from the freezer — a clean answer to the ice-cream urge.",
    "image": "/assets/recipes/snack-berry-yogurt-bark.png",
    "level": "club",
    "daypart": "snack",
    "makes": "6",
    "goals": [
      "Gut health",
      "Sweet cravings"
    ],
    "tags": [
      "Gluten-free",
      "Refined-sugar-free",
      "High-protein",
      "Meal-prep"
    ],
    "macros": {
      "kcal": 112,
      "protein": "7g",
      "carbs": "13g",
      "fat": "4g",
      "fiber": "2g"
    },
    "why": "Live-culture Greek yogurt supplies probiotics traditionally used to support a balanced gut, while berries add polyphenols and just enough natural sweetness to end the meal.",
    "swaps": [
      "greek yogurt → coconut yogurt (dairy-free)",
      "honey → maple syrup (vegan)",
      "almonds → pumpkin seeds (nut-free)"
    ],
    "ingredients": [
      "2 cups plain Greek yogurt",
      "2 tbsp honey",
      "1 tsp vanilla extract",
      "1 cup mixed berries, sliced",
      "1/4 cup sliced almonds",
      "1 tbsp chia seeds"
    ],
    "steps": [
      "Stir yogurt with honey and vanilla, then spread 1/4 inch thick on a lined sheet.",
      "Scatter berries, almonds and chia across the surface.",
      "Freeze at least 4 hours until solid.",
      "Break into 6 shards and keep frozen until serving."
    ],
    "i18n": {
      "pt": {
        "title": "Casquinha Congelada de Iogurte com Frutas Vermelhas",
        "desc": "Cremosa, azedinha e crocante direto do freezer — uma resposta limpa para a vontade de sorvete.",
        "why": "O iogurte grego com culturas vivas fornece probióticos tradicionalmente usados para apoiar um intestino equilibrado, enquanto as frutas vermelhas somam polifenóis e a dose exata de doçura natural para fechar a refeição.",
        "tags": [
          "Sem glúten",
          "Sem açúcar refinado",
          "Rico em proteína",
          "Meal-prep"
        ],
        "ingredients": [
          "2 xícaras de iogurte grego natural",
          "2 colheres de sopa de mel",
          "1 colher de chá de extrato de baunilha",
          "1 xícara de frutas vermelhas variadas, fatiadas",
          "1/4 xícara de amêndoas fatiadas",
          "1 colher de sopa de sementes de chia"
        ],
        "steps": [
          "Misture o iogurte com o mel e a baunilha, depois espalhe em uma camada de 1/4 de polegada em uma assadeira forrada.",
          "Espalhe as frutas vermelhas, as amêndoas e a chia por cima.",
          "Congele por pelo menos 4 horas até ficar sólido.",
          "Quebre em 6 pedaços e mantenha congelado até a hora de servir."
        ],
        "swaps": [
          "iogurte grego → iogurte de coco (sem lactose)",
          "mel → xarope de bordo (vegano)",
          "amêndoas → sementes de abóbora (sem oleaginosas)"
        ]
      },
      "es": {
        "title": "Corteza Helada de Yogur y Frutos Rojos",
        "desc": "Cremosa, ácida y crujiente directo del congelador: una respuesta limpia al antojo de helado.",
        "why": "El yogur griego con cultivos vivos aporta probióticos usados tradicionalmente para favorecer un intestino equilibrado, mientras que los frutos rojos suman polifenoles y justo el dulzor natural necesario para cerrar la comida.",
        "tags": [
          "Sin gluten",
          "Sin azúcar refinada",
          "Alto en proteína",
          "Ideal para meal-prep"
        ],
        "ingredients": [
          "2 tazas de yogur griego natural",
          "2 cucharadas de miel",
          "1 cucharadita de extracto de vainilla",
          "1 taza de frutos rojos variados, en rodajas",
          "1/4 taza de almendras en láminas",
          "1 cucharada de semillas de chía"
        ],
        "steps": [
          "Mezcla el yogur con la miel y la vainilla, luego extiéndelo con un grosor de 1/4 de pulgada sobre una bandeja forrada.",
          "Esparce los frutos rojos, las almendras y la chía por toda la superficie.",
          "Congela al menos 4 horas hasta que esté sólido.",
          "Rompe en 6 trozos y mantén congelado hasta servir."
        ],
        "swaps": [
          "yogur griego → yogur de coco (sin lácteos)",
          "miel → jarabe de arce (vegano)",
          "almendras → semillas de calabaza (sin frutos secos)"
        ]
      },
      "it": {
        "title": "Croccante Ghiacciato allo Yogurt e Frutti di Bosco",
        "desc": "Cremoso, aspro e croccante direttamente dal freezer — una risposta genuina alla voglia di gelato.",
        "why": "Lo yogurt greco con fermenti vivi fornisce probiotici tradizionalmente usati per sostenere un intestino equilibrato, mentre i frutti di bosco aggiungono polifenoli e quel tanto di dolcezza naturale che basta per chiudere il pasto.",
        "tags": [
          "Senza glutine",
          "Senza zuccheri raffinati",
          "Ricco di proteine",
          "Meal-prep"
        ],
        "ingredients": [
          "2 tazze di yogurt greco naturale",
          "2 cucchiai di miele",
          "1 cucchiaino di estratto di vaniglia",
          "1 tazza di frutti di bosco misti, a fette",
          "1/4 di tazza di mandorle a lamelle",
          "1 cucchiaio di semi di chia"
        ],
        "steps": [
          "Mescola lo yogurt con miele e vaniglia, poi stendi uno strato di circa 6 mm su una teglia foderata.",
          "Cospargi la superficie con frutti di bosco, mandorle e chia.",
          "Congela per almeno 4 ore finché non è solido.",
          "Spezza in 6 pezzi e tieni in freezer fino al momento di servire."
        ],
        "swaps": [
          "yogurt greco → yogurt di cocco (senza latticini)",
          "miele → sciroppo d'acero (vegano)",
          "mandorle → semi di zucca (senza frutta a guscio)"
        ]
      },
      "zh": {
        "title": "冷冻莓果酸奶脆片",
        "desc": "绵密微酸、直接从冷冻室取出就能掰开——是对冰淇淋馋念的干净回应。",
        "why": "含活性菌的希腊酸奶提供益生菌，在传统上用于帮助维持肠道平衡，莓果则带来多酚，以及恰到好处的天然甜味来收尾这顿餐。",
        "tags": [
          "无麸质",
          "无精制糖",
          "高蛋白",
          "备餐友好"
        ],
        "ingredients": [
          "2杯原味希腊酸奶",
          "2汤匙蜂蜜",
          "1茶匙香草精",
          "1杯什锦莓果，切片",
          "¼杯杏仁片",
          "1汤匙奇亚籽"
        ],
        "steps": [
          "把酸奶与蜂蜜和香草精拌匀，在铺好烘焙纸的烤盘上抹成约0.6厘米厚。",
          "在表面撒上莓果、杏仁片和奇亚籽。",
          "冷冻至少4小时至完全凝固。",
          "掰成6片，保持冷冻状态直到食用。"
        ],
        "swaps": [
          "希腊酸奶 → 椰子酸奶（无乳制品）",
          "蜂蜜 → 枫糖浆（纯素）",
          "杏仁 → 南瓜籽（无坚果）"
        ]
      },
      "hi": {
        "title": "फ्रोज़न बेरी योगर्ट बार्क",
        "desc": "मलाईदार, खट्टी और फ्रीज़र से सीधे तोड़ी जा सकने वाली — आइसक्रीम की तलब का सेहतमंद जवाब।",
        "why": "लाइव-कल्चर ग्रीक योगर्ट प्रोबायोटिक्स देती है जिनका पारंपरिक रूप से उपयोग संतुलित आंत को सहारा देने के लिए होता है, जबकि बेरीज़ पॉलीफेनॉल्स और भोजन खत्म करने के लिए बस उतनी प्राकृतिक मिठास जोड़ती हैं।",
        "tags": [
          "ग्लूटेन-फ्री",
          "रिफाइंड-शुगर-फ्री",
          "हाई-प्रोटीन",
          "मील-प्रेप"
        ],
        "ingredients": [
          "2 कप प्लेन ग्रीक योगर्ट",
          "2 बड़े चम्मच शहद",
          "1 छोटा चम्मच वैनिला एक्सट्रैक्ट",
          "1 कप मिक्स बेरीज़, कटी हुई",
          "1/4 कप कटे हुए बादाम",
          "1 बड़ा चम्मच चिया बीज"
        ],
        "steps": [
          "योगर्ट को शहद और वैनिला के साथ मिलाएं, फिर लाइन की हुई शीट पर 1/4 इंच मोटा फैलाएं।",
          "ऊपरी सतह पर बेरीज़, बादाम और चिया बिखेरें।",
          "कम से कम 4 घंटे तक जमने तक फ्रीज़र में रखें।",
          "6 टुकड़ों में तोड़ें और परोसने तक जमा हुआ रखें।"
        ],
        "swaps": [
          "ग्रीक योगर्ट → नारियल योगर्ट (डेयरी-फ्री)",
          "शहद → मेपल सिरप (वीगन)",
          "बादाम → कद्दू के बीज (नट-फ्री)"
        ]
      },
      "he": {
        "title": "טבלת יוגורט קפוא עם פירות יער",
        "desc": "קרמי, חמצמץ ופריך היישר מהמקפיא — תשובה נקייה לתשוקה לגלידה.",
        "why": "יוגורט יווני עם תרביות חיות מספק פרוביוטיקה שמשמשת באופן מסורתי לתמיכה במעי מאוזן, בעוד פירות היער מוסיפים פוליפנולים ובדיוק את המתיקות הטבעית הדרושה כדי לסיים את הארוחה.",
        "tags": [
          "ללא גלוטן",
          "ללא סוכר מזוקק",
          "עתיר חלבון",
          "הכנה מראש"
        ],
        "ingredients": [
          "2 כוסות יוגורט יווני טבעי",
          "2 כפות דבש",
          "1 כפית תמצית וניל",
          "1 כוס תערובת פירות יער, פרוסים",
          "¼ כוס שקדים פרוסים",
          "1 כף זרעי צ'יה"
        ],
        "steps": [
          "לערבב את היוגורט עם הדבש והוניל, ואז לפזר בעובי כ-0.5 ס\"מ על תבנית מרופדת.",
          "לפזר פירות יער, שקדים וצ'יה על פני השטח.",
          "להקפיא לפחות 4 שעות עד מוצק.",
          "לשבור ל-6 רסיסים ולשמור קפוא עד ההגשה."
        ],
        "swaps": [
          "יוגורט יווני → יוגורט קוקוס (ללא חלב)",
          "דבש → סירופ מייפל (טבעוני)",
          "שקדים → גרעיני דלעת (ללא אגוזים)"
        ]
      }
    }
  },
  {
    "id": "snack-avocado-white-bean-dip",
    "title": "Avocado White Bean Dip with Crudites",
    "desc": "Silky, lemony and green — a scoopable dip with real staying power and a rainbow of veg to dunk.",
    "image": "/assets/recipes/snack-avocado-white-bean-dip.png",
    "level": "club",
    "daypart": "snack",
    "makes": "4",
    "goals": [
      "Gut health",
      "Satiety"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "Vegan",
      "High-fiber"
    ],
    "macros": {
      "kcal": 205,
      "protein": "7g",
      "carbs": "20g",
      "fat": "12g",
      "fiber": "8g"
    },
    "why": "White beans and crunchy vegetables deliver prebiotic fiber that feeds beneficial gut bacteria, while avocado's monounsaturated fat makes the snack genuinely filling.",
    "swaps": [
      "tahini → olive oil (nut/seed-free)",
      "cannellini beans → chickpeas (pantry swap)",
      "lemon → lime (flavor swap)"
    ],
    "ingredients": [
      "1 can cannellini beans (15 oz), drained and rinsed",
      "1 ripe avocado",
      "2 tbsp tahini",
      "2 tbsp lemon juice",
      "1 small garlic clove",
      "1/4 tsp sea salt",
      "2 tbsp water, as needed",
      "4 cups sliced carrots, cucumber and bell pepper"
    ],
    "steps": [
      "Blend beans, avocado, tahini, lemon, garlic and salt until smooth.",
      "Loosen with water a spoonful at a time to a dip consistency.",
      "Taste and adjust salt and lemon.",
      "Serve with the crudites for dunking."
    ],
    "i18n": {
      "pt": {
        "title": "Pasta de Abacate e Feijão-Branco com Crudités",
        "desc": "Sedosa, com um toque cítrico e bem verde — uma pasta de mergulhar com real poder de saciar e um arco-íris de vegetais para molhar.",
        "why": "O feijão-branco e os vegetais crocantes entregam fibras prebióticas que alimentam as bactérias intestinais benéficas, enquanto a gordura monoinsaturada do abacate torna o lanche genuinamente saciante.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Vegano",
          "Rico em fibras"
        ],
        "ingredients": [
          "1 lata de feijão cannellini (15 oz), escorrido e enxaguado",
          "1 abacate maduro",
          "2 colheres de sopa de tahine",
          "2 colheres de sopa de suco de limão siciliano",
          "1 dente de alho pequeno",
          "1/4 colher de chá de sal marinho",
          "2 colheres de sopa de água, conforme necessário",
          "4 xícaras de cenoura, pepino e pimentão fatiados"
        ],
        "steps": [
          "Bata o feijão, o abacate, o tahine, o limão, o alho e o sal até ficar homogêneo.",
          "Afine com água, uma colher de cada vez, até obter a consistência de pasta.",
          "Prove e ajuste o sal e o limão.",
          "Sirva com os crudités para mergulhar."
        ],
        "swaps": [
          "tahine → azeite de oliva (sem oleaginosas/sementes)",
          "feijão cannellini → grão-de-bico (troca de despensa)",
          "limão siciliano → limão (troca de sabor)"
        ]
      },
      "es": {
        "title": "Dip de Aguacate y Frijoles Blancos con Crudités",
        "desc": "Sedoso, con toque de limón y bien verde: un dip para untar con verdadero poder de saciedad y un arcoíris de verduras para mojar.",
        "why": "Los frijoles blancos y las verduras crujientes aportan fibra prebiótica que alimenta a las bacterias intestinales beneficiosas, mientras que la grasa monoinsaturada del aguacate hace que este snack sea genuinamente saciante.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Vegano",
          "Alto en fibra"
        ],
        "ingredients": [
          "1 lata de frijoles cannellini (15 oz), escurridos y enjuagados",
          "1 aguacate maduro",
          "2 cucharadas de tahini",
          "2 cucharadas de jugo de limón",
          "1 diente de ajo pequeño",
          "1/4 cucharadita de sal marina",
          "2 cucharadas de agua, las necesarias",
          "4 tazas de zanahoria, pepino y pimiento en rodajas"
        ],
        "steps": [
          "Licúa los frijoles, el aguacate, el tahini, el limón, el ajo y la sal hasta obtener una mezcla homogénea.",
          "Aligera con agua, cucharada a cucharada, hasta lograr la consistencia de un dip.",
          "Prueba y ajusta la sal y el limón.",
          "Sirve con las crudités para mojar."
        ],
        "swaps": [
          "tahini → aceite de oliva (sin frutos secos ni semillas)",
          "frijoles cannellini → garbanzos (sustituto de despensa)",
          "limón → lima (cambio de sabor)"
        ]
      },
      "it": {
        "title": "Dip di Avocado e Fagioli Bianchi con Verdure Crude",
        "desc": "Setoso, agrumato e verde — una salsa da spalmare con vera capacità saziante e un arcobaleno di verdure da intingere.",
        "why": "I fagioli bianchi e le verdure croccanti apportano fibre prebiotiche che nutrono i batteri intestinali benefici, mentre i grassi monoinsaturi dell'avocado rendono lo spuntino davvero saziante.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Vegano",
          "Ricco di fibre"
        ],
        "ingredients": [
          "1 barattolo di fagioli cannellini (15 once), sgocciolati e sciacquati",
          "1 avocado maturo",
          "2 cucchiai di tahina",
          "2 cucchiai di succo di limone",
          "1 piccolo spicchio d'aglio",
          "1/4 di cucchiaino di sale marino",
          "2 cucchiai d'acqua, quanto basta",
          "4 tazze di carote, cetriolo e peperone a fette"
        ],
        "steps": [
          "Frulla fagioli, avocado, tahina, limone, aglio e sale finché non è liscio.",
          "Ammorbidisci con acqua un cucchiaio alla volta fino alla consistenza di una salsa da intingere.",
          "Assaggia e regola di sale e limone.",
          "Servi con le verdure crude da intingere."
        ],
        "swaps": [
          "tahina → olio d'oliva (senza frutta a guscio/semi)",
          "fagioli cannellini → ceci (alternativa da dispensa)",
          "limone → lime (variante di sapore)"
        ]
      },
      "zh": {
        "title": "牛油果白豆蘸酱配时蔬条",
        "desc": "丝滑柠檬香的绿色蘸酱——真正扛饿的一款，还搭配五彩缤纷的蔬菜条一起蘸食。",
        "why": "白豆和爽脆蔬菜提供益生元膳食纤维，滋养有益肠道菌群，牛油果的单不饱和脂肪则让这份小食真正令人饱足。",
        "tags": [
          "无麸质",
          "无乳制品",
          "纯素",
          "高纤维"
        ],
        "ingredients": [
          "1罐白腰豆（15盎司），沥干冲洗",
          "1个熟牛油果",
          "2汤匙芝麻酱",
          "2汤匙柠檬汁",
          "1瓣小蒜",
          "¼茶匙海盐",
          "2汤匙水，按需添加",
          "4杯胡萝卜、黄瓜和甜椒切条"
        ],
        "steps": [
          "把白豆、牛油果、芝麻酱、柠檬汁、蒜和盐搅打至顺滑。",
          "逐勺加水稀释，直到达到蘸酱的浓稠度。",
          "试味后调整盐和柠檬汁的用量。",
          "搭配蔬菜条蘸食享用。"
        ],
        "swaps": [
          "芝麻酱 → 橄榄油（无坚果/种子）",
          "白腰豆 → 鹰嘴豆（常备食材替代）",
          "柠檬 → 青柠（换换风味）"
        ]
      },
      "hi": {
        "title": "एवोकाडो व्हाइट बीन डिप विद क्रूडिटे",
        "desc": "रेशमी, नींबू जैसी खट्टी और हरी — एक चम्मच से खाने लायक डिप जिसमें सच में टिकने की ताकत है, साथ में डुबोने के लिए रंग-बिरंगी सब्ज़ियां।",
        "why": "व्हाइट बीन्स और कुरकुरी सब्ज़ियां प्रीबायोटिक फाइबर देती हैं जो लाभकारी आंत बैक्टीरिया को पोषण देता है, जबकि एवोकाडो का मोनोअनसैचुरेटेड फैट इस स्नैक को सचमुच भरपेट बनाता है।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "वीगन",
          "हाई-फाइबर"
        ],
        "ingredients": [
          "1 डिब्बा कैनेलिनी बीन्स (15 औंस), पानी निकाली और धुली हुई",
          "1 पका एवोकाडो",
          "2 बड़े चम्मच ताहिनी",
          "2 बड़े चम्मच नींबू का रस",
          "1 छोटी लहसुन की कली",
          "1/4 छोटा चम्मच सी सॉल्ट",
          "ज़रूरत अनुसार 2 बड़े चम्मच पानी",
          "4 कप कटी हुई गाजर, खीरा और शिमला मिर्च"
        ],
        "steps": [
          "बीन्स, एवोकाडो, ताहिनी, नींबू, लहसुन और नमक को चिकना होने तक ब्लेंड करें।",
          "डिप जैसी गाढ़ाई के लिए एक-एक चम्मच पानी डालकर पतला करें।",
          "चखें और नमक व नींबू समायोजित करें।",
          "डुबोने के लिए सब्ज़ियों के साथ परोसें।"
        ],
        "swaps": [
          "ताहिनी → ऑलिव ऑयल (नट/बीज-रहित)",
          "कैनेलिनी बीन्स → चने (पैंट्री विकल्प)",
          "नींबू → कागज़ी नींबू (स्वाद विकल्प)"
        ]
      },
      "he": {
        "title": "ממרח אבוקדו ושעועית לבנה עם ירקות חיים",
        "desc": "משיי, לימוני וירוק — ממרח לכף עם כוח החזקה אמיתי וקשת בענן של ירקות לטבילה.",
        "why": "שעועית לבנה וירקות פריכים מספקים סיבים פרה-ביוטיים שמזינים חיידקי מעי מועילים, בעוד השומן החד-בלתי-רווי של האבוקדו הופך את הנשנוש למשביע באמת.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "טבעוני",
          "עתיר סיבים"
        ],
        "ingredients": [
          "1 קופסת שעועית קנלוני (425 גרם), מסוננת ושטופה",
          "1 אבוקדו בשל",
          "2 כפות טחינה",
          "2 כפות מיץ לימון",
          "1 שן שום קטנה",
          "¼ כפית מלח ים",
          "2 כפות מים, לפי הצורך",
          "4 כוסות גזר, מלפפון ופלפל מתוק, פרוסים"
        ],
        "steps": [
          "לטחון שעועית, אבוקדו, טחינה, לימון, שום ומלח עד חלק.",
          "לרכך במים בכפית בכל פעם עד מרקם של ממרח.",
          "לטעום ולכוון מלח ולימון.",
          "להגיש עם הירקות החיים לטבילה."
        ],
        "swaps": [
          "טחינה → שמן זית (ללא אגוזים/זרעים)",
          "שעועית קנלוני → חומוס (החלפת מזווה)",
          "לימון → ליים (החלפת טעם)"
        ]
      }
    }
  },
  {
    "id": "snack-everything-seed-crackers",
    "title": "Everything Seed Crackers",
    "desc": "Shatteringly crisp, grain-free crackers loaded with seeds — the savory crunch you can feel good about.",
    "image": "/assets/recipes/snack-everything-seed-crackers.png",
    "level": "club",
    "daypart": "snack",
    "makes": "4",
    "goals": [
      "Satiety",
      "Anti-inflammatory"
    ],
    "tags": [
      "Gluten-free",
      "Grain-free",
      "Vegan",
      "High-fiber"
    ],
    "macros": {
      "kcal": 192,
      "protein": "7g",
      "carbs": "9g",
      "fat": "15g",
      "fiber": "6g"
    },
    "why": "Flax and chia are rich in omega-3 ALA, traditionally linked to a calmer inflammatory response, and their fiber gels in water for crackers that satisfy far longer than the boxed kind.",
    "swaps": [
      "sunflower seeds → pepitas (flavor swap)",
      "everything seasoning → flaky salt + herbs (lower sodium)",
      "sesame seeds → hemp hearts (extra protein)"
    ],
    "ingredients": [
      "1/2 cup sunflower seeds",
      "1/4 cup pumpkin seeds",
      "3 tbsp chia seeds",
      "3 tbsp ground flaxseed",
      "2 tbsp sesame seeds",
      "1 tbsp everything bagel seasoning",
      "3/4 cup water"
    ],
    "steps": [
      "Stir all seeds and seasoning with the water and rest 10 minutes until gelled.",
      "Spread the mixture very thin on a lined sheet pan.",
      "Bake at 300F for 30 minutes, flip the sheet, and bake 20-25 minutes more until crisp.",
      "Cool completely, then break into crackers."
    ],
    "i18n": {
      "pt": {
        "title": "Crackers de Sementes Everything",
        "desc": "Crackers extra crocantes e sem grãos, carregados de sementes — o crocante salgado que traz boa consciência.",
        "why": "Linhaça e chia são ricas em ômega-3 ALA, tradicionalmente associado a uma resposta inflamatória mais calma, e suas fibras formam um gel em contato com a água, resultando em crackers que saciam muito mais do que os industrializados.",
        "tags": [
          "Sem glúten",
          "Sem grãos",
          "Vegano",
          "Rico em fibras"
        ],
        "ingredients": [
          "1/2 xícara de sementes de girassol",
          "1/4 xícara de sementes de abóbora",
          "3 colheres de sopa de sementes de chia",
          "3 colheres de sopa de linhaça moída",
          "2 colheres de sopa de sementes de gergelim",
          "1 colher de sopa de tempero everything bagel",
          "3/4 xícara de água"
        ],
        "steps": [
          "Misture todas as sementes e o tempero com a água e deixe descansar por 10 minutos até gelatinizar.",
          "Espalhe a mistura bem fina em uma assadeira forrada.",
          "Asse a 300F por 30 minutos, vire a placa, e asse por mais 20 a 25 minutos até ficar crocante.",
          "Deixe esfriar completamente, depois quebre em pedaços de cracker."
        ],
        "swaps": [
          "sementes de girassol → pepitas (troca de sabor)",
          "tempero everything → sal em flocos + ervas (menos sódio)",
          "sementes de gergelim → sementes de cânhamo descascadas (proteína extra)"
        ]
      },
      "es": {
        "title": "Galletas Saladas de Semillas Everything",
        "desc": "Galletas saladas increíblemente crujientes y sin granos, cargadas de semillas: el crunch salado del que puedes sentirte bien.",
        "why": "El lino y la chía son ricos en omega-3 ALA, tradicionalmente asociado con una respuesta inflamatoria más calmada, y su fibra forma un gel en agua para unas galletas que sacian mucho más que las de caja.",
        "tags": [
          "Sin gluten",
          "Sin granos",
          "Vegano",
          "Alto en fibra"
        ],
        "ingredients": [
          "1/2 taza de semillas de girasol",
          "1/4 taza de semillas de calabaza",
          "3 cucharadas de semillas de chía",
          "3 cucharadas de linaza molida",
          "2 cucharadas de semillas de sésamo",
          "1 cucharada de sazonador everything bagel",
          "3/4 taza de agua"
        ],
        "steps": [
          "Mezcla todas las semillas y el sazonador con el agua y deja reposar 10 minutos hasta que gelifique.",
          "Extiende la mezcla muy fina sobre una bandeja forrada.",
          "Hornea a 300°F durante 30 minutos, voltea la lámina, y hornea 20-25 minutos más hasta que esté crujiente.",
          "Deja enfriar por completo y luego rompe en galletas."
        ],
        "swaps": [
          "semillas de girasol → pepitas de calabaza (cambio de sabor)",
          "sazonador everything → sal en escamas + hierbas (menos sodio)",
          "semillas de sésamo → corazones de cáñamo (proteína extra)"
        ]
      },
      "it": {
        "title": "Cracker ai Semi Misti",
        "desc": "Cracker friabilissimi e senza cereali, colmi di semi — la croccantezza salata di cui puoi essere orgoglioso.",
        "why": "Lino e chia sono ricchi di omega-3 ALA, tradizionalmente associati a una risposta infiammatoria più calma, e la loro fibra forma un gel a contatto con l'acqua, dando cracker che saziano molto più a lungo di quelli confezionati.",
        "tags": [
          "Senza glutine",
          "Senza cereali",
          "Vegano",
          "Ricco di fibre"
        ],
        "ingredients": [
          "1/2 tazza di semi di girasole",
          "1/4 di tazza di semi di zucca",
          "3 cucchiai di semi di chia",
          "3 cucchiai di semi di lino macinati",
          "2 cucchiai di semi di sesamo",
          "1 cucchiaio di miscela di spezie \"everything bagel\"",
          "3/4 di tazza d'acqua"
        ],
        "steps": [
          "Mescola tutti i semi e le spezie con l'acqua e lascia riposare 10 minuti finché non si forma un gel.",
          "Stendi il composto molto sottile su una teglia foderata.",
          "Cuoci in forno a 300°F (150°C) per 30 minuti, gira il foglio, e cuoci altri 20-25 minuti finché non è croccante.",
          "Lascia raffreddare completamente, poi spezza in cracker."
        ],
        "swaps": [
          "semi di girasole → pepitas di zucca (variante di sapore)",
          "miscela \"everything bagel\" → sale in fiocchi + erbe aromatiche (meno sodio)",
          "semi di sesamo → cuori di canapa (proteine extra)"
        ]
      },
      "zh": {
        "title": "综合籽仁脆饼",
        "desc": "一咬即碎的酥脆脆饼，无谷物，满满种子——让你安心享受的咸香口感。",
        "why": "亚麻籽和奇亚籽富含omega-3脂肪酸（ALA），在传统上与更平稳的炎症反应有关，它们的膳食纤维遇水成胶，做出的脆饼比盒装款更持久地令人满足。",
        "tags": [
          "无麸质",
          "无谷物",
          "纯素",
          "高纤维"
        ],
        "ingredients": [
          "½杯葵花籽",
          "¼杯南瓜籽",
          "3汤匙奇亚籽",
          "3汤匙亚麻籽粉",
          "2汤匙芝麻",
          "1汤匙综合贝果调味料",
          "¾杯水"
        ],
        "steps": [
          "把所有种子和调味料与水拌匀，静置10分钟至成胶状。",
          "把混合物在铺好烘焙纸的烤盘上摊得非常薄。",
          "以300°F烤30分钟，翻面后再烤20-25分钟至酥脆。",
          "完全放凉后掰成脆饼。"
        ],
        "swaps": [
          "葵花籽 → 南瓜籽仁（换换风味）",
          "综合贝果调味料 → 片状海盐+香草（降低钠含量）",
          "芝麻 → 去壳大麻籽（额外蛋白质）"
        ]
      },
      "hi": {
        "title": "एवरीथिंग सीड क्रैकर्स",
        "desc": "बेहद कुरकुरे, अनाज-रहित क्रैकर्स, बीजों से भरपूर — वह नमकीन कुरकुरापन जिसके बारे में आप अच्छा महसूस कर सकें।",
        "why": "अलसी और चिया ओमेगा-3 ALA से भरपूर हैं, जो पारंपरिक रूप से शांत सूजन-प्रतिक्रिया से जुड़े माने जाते हैं, और उनका फाइबर पानी में जेल बनकर ऐसे क्रैकर्स बनाता है जो डिब्बाबंद वाले से कहीं ज़्यादा देर तक संतुष्ट रखते हैं।",
        "tags": [
          "ग्लूटेन-फ्री",
          "अनाज-रहित",
          "वीगन",
          "हाई-फाइबर"
        ],
        "ingredients": [
          "1/2 कप सूरजमुखी के बीज",
          "1/4 कप कद्दू के बीज",
          "3 बड़े चम्मच चिया बीज",
          "3 बड़े चम्मच पिसा हुआ अलसी",
          "2 बड़े चम्मच तिल",
          "1 बड़ा चम्मच एवरीथिंग बेगल सीज़निंग",
          "3/4 कप पानी"
        ],
        "steps": [
          "सभी बीज और सीज़निंग को पानी के साथ मिलाएं और जेल बनने तक 10 मिनट रखें।",
          "मिश्रण को लाइन किए हुए शीट पैन पर बहुत पतला फैलाएं।",
          "300F पर 30 मिनट बेक करें, शीट पलटें, और कुरकुरा होने तक 20-25 मिनट और बेक करें।",
          "पूरी तरह ठंडा करें, फिर टुकड़ों में तोड़ें।"
        ],
        "swaps": [
          "सूरजमुखी के बीज → पेपिटास (स्वाद विकल्प)",
          "एवरीथिंग सीज़निंग → फ्लेकी नमक + हर्ब्स (कम सोडियम)",
          "तिल → हेम्प हार्ट्स (अतिरिक्त प्रोटीन)"
        ]
      },
      "he": {
        "title": "קרקרים אוורדינג' עם זרעים",
        "desc": "קרקרים ללא דגנים, פריכים מרשרשים, עמוסי זרעים — הפריכות המלוחה שאפשר להרגיש טוב לגביה.",
        "why": "פשתן וצ'יה עשירים באומגה 3 מסוג ALA, שקשורים באופן מסורתי לתגובה דלקתית רגועה יותר, והסיבים שלהם נהפכים לג'ל במים לקרקרים שמשביעים הרבה יותר זמן מהסוג הקנוי בקופסה.",
        "tags": [
          "ללא גלוטן",
          "ללא דגנים",
          "טבעוני",
          "עתיר סיבים"
        ],
        "ingredients": [
          "½ כוס גרעיני חמנייה",
          "¼ כוס גרעיני דלעת",
          "3 כפות זרעי צ'יה",
          "3 כפות פשתן טחון",
          "2 כפות שומשום",
          "1 כף תיבול אוורדינג' בייגל",
          "¾ כוס מים"
        ],
        "steps": [
          "לערבב את כל הזרעים והתיבול עם המים ולתת לנוח 10 דקות עד שנהפך לג'ל.",
          "לפזר את התערובת דק מאוד על תבנית אפייה מרופדת.",
          "לאפות ב-150 מעלות למשך 30 דקות, להפוך את התבנית, ולאפות עוד 20-25 דקות עד פריך.",
          "לצנן לגמרי, ואז לשבור לקרקרים."
        ],
        "swaps": [
          "גרעיני חמנייה → פפיטס (החלפת טעם)",
          "תיבול אוורדינג' → מלח גס ועשבי תיבול (פחות נתרן)",
          "שומשום → לב קנביס (חלבון נוסף)"
        ]
      }
    }
  },
  {
    "id": "snack-cottage-cheese-power-bowl",
    "title": "Savory Cottage Cheese Power Bowl",
    "desc": "Creamy cottage cheese under crunchy cucumber, sweet tomato and a hemp-seed shower — a two-minute protein hit.",
    "image": "/assets/recipes/snack-cottage-cheese-power-bowl.png",
    "level": "club",
    "daypart": "snack",
    "makes": "1",
    "goals": [
      "Protein",
      "Satiety"
    ],
    "tags": [
      "Gluten-free",
      "High-protein",
      "15-minute"
    ],
    "macros": {
      "kcal": 252,
      "protein": "24g",
      "carbs": "10g",
      "fat": "13g",
      "fiber": "3g"
    },
    "why": "Cottage cheese is a casein-rich, slow-digesting protein linked to sustained fullness, and the hemp seeds and olive oil round it into a snack that holds you to the next meal.",
    "swaps": [
      "cottage cheese → dairy-free cottage cheese (dairy-free)",
      "hemp seeds → toasted sunflower seeds (nut-free)",
      "olive oil → drizzle of tahini (creamier)"
    ],
    "ingredients": [
      "3/4 cup cottage cheese",
      "1/2 cup cucumber, diced",
      "1/2 cup cherry tomatoes, halved",
      "1 tbsp hemp seeds",
      "1 tsp olive oil",
      "1/2 tsp everything bagel seasoning",
      "Cracked black pepper, to taste"
    ],
    "steps": [
      "Spoon cottage cheese into a bowl.",
      "Top with cucumber and cherry tomatoes.",
      "Scatter hemp seeds and everything seasoning over the top.",
      "Drizzle with olive oil, add pepper and serve."
    ],
    "i18n": {
      "pt": {
        "title": "Bowl Power Salgado de Cottage",
        "desc": "Queijo cottage cremoso coberto de pepino crocante, tomate docinho e uma chuva de sementes de cânhamo — uma dose de proteína em dois minutos.",
        "why": "O queijo cottage é uma proteína rica em caseína, de digestão lenta, associada a uma saciedade sustentada, e as sementes de cânhamo com o azeite completam um lanche que segura a fome até a próxima refeição.",
        "tags": [
          "Sem glúten",
          "Rico em proteína",
          "15 minutos"
        ],
        "ingredients": [
          "3/4 xícara de queijo cottage",
          "1/2 xícara de pepino, picado",
          "1/2 xícara de tomate-cereja, cortado ao meio",
          "1 colher de sopa de sementes de cânhamo",
          "1 colher de chá de azeite de oliva",
          "1/2 colher de chá de tempero everything bagel",
          "Pimenta-do-reino moída na hora, a gosto"
        ],
        "steps": [
          "Coloque o queijo cottage em uma tigela.",
          "Cubra com o pepino e o tomate-cereja.",
          "Espalhe as sementes de cânhamo e o tempero everything por cima.",
          "Regue com azeite, adicione pimenta e sirva."
        ],
        "swaps": [
          "queijo cottage → cottage sem lactose (sem lactose)",
          "sementes de cânhamo → sementes de girassol tostadas (sem oleaginosas)",
          "azeite de oliva → um fio de tahine (mais cremoso)"
        ]
      },
      "es": {
        "title": "Bowl Power Salado de Requesón",
        "desc": "Requesón cremoso bajo pepino crujiente, tomate dulce y una lluvia de semillas de cáñamo: una dosis de proteína en dos minutos.",
        "why": "El requesón es una proteína rica en caseína, de digestión lenta, asociada con una saciedad sostenida, y las semillas de cáñamo y el aceite de oliva la redondean en un snack que te sostiene hasta la próxima comida.",
        "tags": [
          "Sin gluten",
          "Alto en proteína",
          "15 minutos"
        ],
        "ingredients": [
          "3/4 taza de requesón",
          "1/2 taza de pepino, en cubos",
          "1/2 taza de tomates cherry, cortados a la mitad",
          "1 cucharada de semillas de cáñamo",
          "1 cucharadita de aceite de oliva",
          "1/2 cucharadita de sazonador everything bagel",
          "Pimienta negra recién molida, al gusto"
        ],
        "steps": [
          "Coloca el requesón en un bowl.",
          "Corona con el pepino y los tomates cherry.",
          "Esparce las semillas de cáñamo y el sazonador everything por encima.",
          "Rocía con aceite de oliva, agrega pimienta y sirve."
        ],
        "swaps": [
          "requesón → requesón sin lácteos (sin lácteos)",
          "semillas de cáñamo → semillas de girasol tostadas (sin frutos secos)",
          "aceite de oliva → un hilo de tahini (más cremoso)"
        ]
      },
      "it": {
        "title": "Ciotola Energetica Salata alla Cottage Cheese",
        "desc": "Cottage cheese cremosa sotto cetriolo croccante, pomodoro dolce e una pioggia di semi di canapa — una carica proteica in due minuti.",
        "why": "La cottage cheese è una proteina ricca di caseina a digestione lenta, associata a una sazietà prolungata, e i semi di canapa con l'olio d'oliva la completano in uno spuntino che ti sostiene fino al pasto successivo.",
        "tags": [
          "Senza glutine",
          "Ricco di proteine",
          "15 minuti"
        ],
        "ingredients": [
          "3/4 di tazza di cottage cheese",
          "1/2 tazza di cetriolo, a cubetti",
          "1/2 tazza di pomodorini, tagliati a metà",
          "1 cucchiaio di semi di canapa",
          "1 cucchiaino di olio d'oliva",
          "1/2 cucchiaino di miscela di spezie \"everything bagel\"",
          "Pepe nero macinato al momento, quanto basta"
        ],
        "steps": [
          "Versa la cottage cheese in una ciotola.",
          "Guarnisci con cetriolo e pomodorini.",
          "Cospargi con semi di canapa e la miscela di spezie.",
          "Irrora con olio d'oliva, aggiungi pepe e servi."
        ],
        "swaps": [
          "cottage cheese → cottage cheese senza latticini (senza latticini)",
          "semi di canapa → semi di girasole tostati (senza frutta a guscio)",
          "olio d'oliva → filo di tahina (più cremoso)"
        ]
      },
      "zh": {
        "title": "咸香茅屋芝士能量碗",
        "desc": "绵密茅屋芝士铺上爽脆黄瓜、香甜番茄和一把大麻籽——两分钟搞定的蛋白质补给。",
        "why": "茅屋芝士富含酪蛋白，消化缓慢，与持久饱腹感有关，大麻籽和橄榄油则让这份小食足以支撑你到下一餐。",
        "tags": [
          "无麸质",
          "高蛋白",
          "15分钟"
        ],
        "ingredients": [
          "¾杯茅屋芝士",
          "½杯黄瓜丁",
          "½杯圣女果，切半",
          "1汤匙大麻籽",
          "1茶匙橄榄油",
          "½茶匙综合贝果调味料",
          "现磨黑胡椒，适量"
        ],
        "steps": [
          "把茅屋芝士盛入碗中。",
          "铺上黄瓜和圣女果。",
          "撒上大麻籽和综合贝果调味料。",
          "淋上橄榄油，撒上黑胡椒即可享用。"
        ],
        "swaps": [
          "茅屋芝士 → 无乳茅屋芝士（无乳制品）",
          "大麻籽 → 烤香葵花籽（无坚果）",
          "橄榄油 → 淋芝麻酱（口感更绵密）"
        ]
      },
      "hi": {
        "title": "सेवरी कॉटेज चीज़ पावर बाउल",
        "desc": "मलाईदार कॉटेज चीज़ के ऊपर कुरकुरा खीरा, मीठा टमाटर और हेम्प बीजों की बौछार — दो मिनट का प्रोटीन डोज़।",
        "why": "कॉटेज चीज़ केसीन-युक्त, धीरे पचने वाला प्रोटीन है जो लंबी तृप्ति से जुड़ा है, और हेम्प बीज व ऑलिव ऑयल इसे एक ऐसे स्नैक में बदल देते हैं जो अगले भोजन तक आपको टिकाए रखता है।",
        "tags": [
          "ग्लूटेन-फ्री",
          "हाई-प्रोटीन",
          "15-मिनट"
        ],
        "ingredients": [
          "3/4 कप कॉटेज चीज़",
          "1/2 कप खीरा, कटा हुआ",
          "1/2 कप चेरी टमाटर, आधे कटे हुए",
          "1 बड़ा चम्मच हेम्प बीज",
          "1 छोटा चम्मच ऑलिव ऑयल",
          "1/2 छोटा चम्मच एवरीथिंग बेगल सीज़निंग",
          "स्वादानुसार कुटी हुई काली मिर्च"
        ],
        "steps": [
          "कॉटेज चीज़ को एक बाउल में डालें।",
          "ऊपर खीरा और चेरी टमाटर डालें।",
          "ऊपर हेम्प बीज और एवरीथिंग सीज़निंग बिखेरें।",
          "ऑलिव ऑयल की बूंदें डालें, काली मिर्च डालें और परोसें।"
        ],
        "swaps": [
          "कॉटेज चीज़ → डेयरी-फ्री कॉटेज चीज़ (डेयरी-फ्री)",
          "हेम्प बीज → भुने हुए सूरजमुखी के बीज (नट-फ्री)",
          "ऑलिव ऑयल → ताहिनी की बूंदें (ज़्यादा मलाईदार)"
        ]
      },
      "he": {
        "title": "קערת כוח מלוחה עם קוטג'",
        "desc": "גבינת קוטג' קרמית מתחת למלפפון פריך, עגבנייה מתוקה וגשם של זרעי קנביס — מנת חלבון של שתי דקות.",
        "why": "גבינת קוטג' היא חלבון עשיר בקזאין שמתעכל לאט וקשור לתחושת שובע מתמשכת, וזרעי הקנביס ושמן הזית עוגלים אותה לנשנוש שמחזיק עד הארוחה הבאה.",
        "tags": [
          "ללא גלוטן",
          "עתיר חלבון",
          "15 דקות"
        ],
        "ingredients": [
          "¾ כוס גבינת קוטג'",
          "½ כוס מלפפון, קצוץ לקוביות",
          "½ כוס עגבניות שרי, חצויות",
          "1 כף זרעי קנביס",
          "1 כפית שמן זית",
          "½ כפית תיבול אוורדינג' בייגל",
          "פלפל שחור טחון גס, לפי הטעם"
        ],
        "steps": [
          "לכף את גבינת הקוטג' לקערה.",
          "לקשט במלפפון ובעגבניות שרי.",
          "לפזר זרעי קנביס ותיבול אוורדינג' מלמעלה.",
          "לטפטף שמן זית, להוסיף פלפל ולהגיש."
        ],
        "swaps": [
          "גבינת קוטג' → גבינת קוטג' ללא חלב (ללא חלב)",
          "זרעי קנביס → גרעיני חמנייה קלויים (ללא אגוזים)",
          "שמן זית → טפטוף טחינה (קרמי יותר)"
        ]
      }
    }
  },
  {
    "id": "drink-golden-milk",
    "title": "Anti-Inflammatory Golden Milk",
    "desc": "A warm, silky turmeric latte that turns down the heat after a long day.",
    "image": "/assets/recipes/drink-golden-milk.png",
    "level": "free",
    "daypart": "drink",
    "makes": "1",
    "goals": [
      "Anti-inflammatory"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "Refined-sugar-free",
      "Vegan",
      "Anti-inflammatory"
    ],
    "macros": {
      "kcal": 100,
      "protein": "1g",
      "carbs": "8g",
      "fat": "6g",
      "fiber": "1g"
    },
    "why": "Turmeric's curcumin is traditionally used to support the body's inflammatory balance, and the pinch of black pepper plus a little fat may help your body take it in.",
    "swaps": [
      "coconut milk → almond milk (lighter)",
      "maple syrup → skip for unsweetened",
      "ground turmeric → 1 tsp fresh grated"
    ],
    "ingredients": [
      "1 cup unsweetened coconut milk (drinking)",
      "1 tsp ground turmeric",
      "1/2 tsp ground cinnamon",
      "1/4 tsp ground ginger",
      "1 pinch black pepper",
      "1 tsp coconut oil",
      "1 tsp maple syrup (optional)"
    ],
    "steps": [
      "Whisk all ingredients in a small saucepan over medium heat.",
      "Warm 3-4 minutes until steaming, whisking so it stays smooth.",
      "Pour into a mug and sip warm."
    ],
    "i18n": {
      "pt": {
        "title": "Golden Milk Anti-Inflamatório",
        "desc": "Um latte quente e aveludado de cúrcuma que ajuda a esfriar a cabeça depois de um dia longo.",
        "why": "A curcumina da cúrcuma é tradicionalmente usada para apoiar o equilíbrio inflamatório do corpo, e a pitada de pimenta-do-reino junto com um pouco de gordura pode ajudar sua absorção.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Sem açúcar refinado",
          "Vegano",
          "Anti-inflamatório"
        ],
        "ingredients": [
          "1 xícara de leite de coco sem açúcar (para beber)",
          "1 colher de chá de cúrcuma em pó",
          "1/2 colher de chá de canela em pó",
          "1/4 colher de chá de gengibre em pó",
          "1 pitada de pimenta-do-reino",
          "1 colher de chá de óleo de coco",
          "1 colher de chá de xarope de bordo (opcional)"
        ],
        "steps": [
          "Bata todos os ingredientes em uma panela pequena, em fogo médio.",
          "Aqueça por 3 a 4 minutos até soltar vapor, batendo para manter homogêneo.",
          "Sirva em uma caneca e beba quente."
        ],
        "swaps": [
          "leite de coco → leite de amêndoas (mais leve)",
          "xarope de bordo → omita para versão sem açúcar",
          "cúrcuma em pó → 1 colher de chá de cúrcuma fresca ralada"
        ]
      },
      "es": {
        "title": "Leche Dorada Antiinflamatoria",
        "desc": "Un latte cálido y sedoso de cúrcuma que baja la temperatura después de un día largo.",
        "why": "La curcumina de la cúrcuma se usa tradicionalmente para favorecer el equilibrio inflamatorio del cuerpo, y la pizca de pimienta negra junto con un poco de grasa puede ayudar a que el cuerpo la absorba mejor.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Sin azúcar refinada",
          "Vegano",
          "Antiinflamatorio"
        ],
        "ingredients": [
          "1 taza de leche de coco sin endulzar (para beber)",
          "1 cucharadita de cúrcuma molida",
          "1/2 cucharadita de canela molida",
          "1/4 cucharadita de jengibre molido",
          "1 pizca de pimienta negra",
          "1 cucharadita de aceite de coco",
          "1 cucharadita de jarabe de arce (opcional)"
        ],
        "steps": [
          "Bate todos los ingredientes en una olla pequeña a fuego medio.",
          "Calienta 3-4 minutos hasta que humee, batiendo para que quede suave.",
          "Vierte en una taza y bebe caliente."
        ],
        "swaps": [
          "leche de coco → leche de almendras (más ligera)",
          "jarabe de arce → omítelo para una versión sin endulzar",
          "cúrcuma molida → 1 cucharadita de cúrcuma fresca rallada"
        ]
      },
      "it": {
        "title": "Golden Milk Antinfiammatorio",
        "desc": "Un latte caldo e setoso alla curcuma che abbassa la tensione dopo una lunga giornata.",
        "why": "La curcumina della curcuma è tradizionalmente usata per sostenere l'equilibrio infiammatorio del corpo, e il pizzico di pepe nero insieme a un po' di grasso può aiutare il corpo ad assorbirla meglio.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Senza zuccheri raffinati",
          "Vegano",
          "Antinfiammatorio"
        ],
        "ingredients": [
          "1 tazza di latte di cocco da bere, non zuccherato",
          "1 cucchiaino di curcuma in polvere",
          "1/2 cucchiaino di cannella in polvere",
          "1/4 di cucchiaino di zenzero in polvere",
          "1 pizzico di pepe nero",
          "1 cucchiaino di olio di cocco",
          "1 cucchiaino di sciroppo d'acero (facoltativo)"
        ],
        "steps": [
          "Sbatti tutti gli ingredienti in un pentolino a fuoco medio.",
          "Scalda per 3-4 minuti finché non fuma, sbattendo per mantenerlo liscio.",
          "Versa in una tazza e sorseggia caldo."
        ],
        "swaps": [
          "latte di cocco → latte di mandorla (più leggero)",
          "sciroppo d'acero → omettilo per una versione non zuccherata",
          "curcuma in polvere → 1 cucchiaino di curcuma fresca grattugiata"
        ]
      },
      "zh": {
        "title": "抗炎姜黄金牛奶",
        "desc": "温热丝滑的姜黄拿铁，在漫长一天后为你降降火气。",
        "why": "姜黄中的姜黄素在传统上用于帮助支持身体的炎症平衡，一小撮黑胡椒和少许脂肪则可能有助于身体更好地吸收它。",
        "tags": [
          "无麸质",
          "无乳制品",
          "无精制糖",
          "纯素",
          "抗炎"
        ],
        "ingredients": [
          "1杯无糖椰奶（饮用型）",
          "1茶匙姜黄粉",
          "½茶匙肉桂粉",
          "¼茶匙姜粉",
          "一小撮黑胡椒",
          "1茶匙椰子油",
          "1茶匙枫糖浆（可选）"
        ],
        "steps": [
          "把所有食材放入小锅中，用中火搅拌。",
          "加热3-4分钟至冒热气，边煮边搅拌保持顺滑。",
          "倒入马克杯中，趁温热饮用。"
        ],
        "swaps": [
          "椰奶 → 杏仁奶（口感更清爽）",
          "枫糖浆 → 不加即为无糖版",
          "姜黄粉 → 1茶匙新鲜姜黄末"
        ]
      },
      "hi": {
        "title": "एंटी-इन्फ्लेमेटरी गोल्डन मिल्क",
        "desc": "एक गर्म, रेशमी हल्दी लाटे जो लंबे दिन के बाद तपिश को कम करता है।",
        "why": "हल्दी का करक्यूमिन पारंपरिक रूप से शरीर के सूजन-संतुलन को सहारा देने के लिए उपयोग किया जाता है, और एक चुटकी काली मिर्च व थोड़ा फैट इसे शरीर में बेहतर अवशोषित होने में मदद कर सकते हैं।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "रिफाइंड-शुगर-फ्री",
          "वीगन",
          "एंटी-इन्फ्लेमेटरी"
        ],
        "ingredients": [
          "1 कप बिना मीठा नारियल दूध (पीने वाला)",
          "1 छोटा चम्मच हल्दी पाउडर",
          "1/2 छोटा चम्मच दालचीनी पाउडर",
          "1/4 छोटा चम्मच सोंठ पाउडर",
          "1 चुटकी काली मिर्च",
          "1 छोटा चम्मच नारियल तेल",
          "1 छोटा चम्मच मेपल सिरप (वैकल्पिक)"
        ],
        "steps": [
          "मध्यम आंच पर एक छोटे पैन में सभी सामग्री फेंटें।",
          "3-4 मिनट तक भाप आने तक गर्म करें, फेंटते रहें ताकि मिश्रण चिकना बना रहे।",
          "मग में डालें और गर्म-गर्म पिएं।"
        ],
        "swaps": [
          "नारियल दूध → बादाम दूध (हल्का विकल्प)",
          "मेपल सिरप → बिना मीठे के लिए छोड़ दें",
          "हल्दी पाउडर → 1 छोटा चम्मच ताज़ा कद्दूकस की हुई हल्दी"
        ]
      },
      "he": {
        "title": "חלב זהוב אנטי-דלקתי",
        "desc": "לאטה כורכום חם ומשיי שמנמיך את החום אחרי יום ארוך.",
        "why": "הכורכומין שבכורכום משמש באופן מסורתי לתמיכה באיזון הדלקתי של הגוף, וקורט הפלפל השחור עם קצת שומן עשויים לעזור לגוף לספוג אותו.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "ללא סוכר מזוקק",
          "טבעוני",
          "אנטי-דלקתי"
        ],
        "ingredients": [
          "1 כוס חלב קוקוס לשתייה ללא סוכר",
          "1 כפית כורכום טחון",
          "½ כפית קינמון טחון",
          "¼ כפית ג'ינג'ר טחון",
          "קורט פלפל שחור",
          "1 כפית שמן קוקוס",
          "1 כפית סירופ מייפל (אופציונלי)"
        ],
        "steps": [
          "לטרוף את כל המרכיבים בסיר קטן על אש בינונית.",
          "לחמם 3-4 דקות עד מהביל, תוך טריפה כדי שיישאר חלק.",
          "למזוג לספל ולשתות חם."
        ],
        "swaps": [
          "חלב קוקוס → חלב שקדים (קליל יותר)",
          "סירופ מייפל → לוותר לגרסה לא ממותקת",
          "כורכום טחון → 1 כפית כורכום טרי מגורר"
        ]
      }
    }
  },
  {
    "id": "drink-matcha-latte",
    "title": "Everyday Matcha Latte",
    "desc": "A frothy green latte for calm, jitter-free morning energy.",
    "image": "/assets/recipes/drink-matcha-latte.png",
    "level": "free",
    "daypart": "drink",
    "makes": "1",
    "goals": [
      "Energy",
      "Focus"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "Refined-sugar-free",
      "Vegan"
    ],
    "macros": {
      "kcal": 60,
      "protein": "1g",
      "carbs": "8g",
      "fat": "2g",
      "fiber": "1g"
    },
    "why": "Matcha pairs caffeine with L-theanine, an amino acid traditionally linked to steady, focused energy without the coffee spike-and-crash.",
    "swaps": [
      "almond milk → oat milk (creamier)",
      "maple syrup → date syrup or omit",
      "hot → iced over ice for summer"
    ],
    "ingredients": [
      "1 tsp ceremonial matcha powder",
      "2 tbsp hot (not boiling) water",
      "1 cup unsweetened almond milk, warmed",
      "1 tsp maple syrup",
      "1/4 tsp vanilla extract"
    ],
    "steps": [
      "Whisk matcha with the hot water into a smooth, lump-free paste.",
      "Warm and froth the almond milk, then pour over the matcha.",
      "Stir in maple and vanilla and enjoy right away."
    ],
    "i18n": {
      "pt": {
        "title": "Matcha Latte do Dia a Dia",
        "desc": "Um latte verde e espumoso para uma energia matinal calma, sem agitação.",
        "why": "O matcha combina cafeína com L-teanina, um aminoácido tradicionalmente associado a uma energia estável e focada, sem o pico e a queda do café.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Sem açúcar refinado",
          "Vegano"
        ],
        "ingredients": [
          "1 colher de chá de matcha cerimonial em pó",
          "2 colheres de sopa de água quente (não fervente)",
          "1 xícara de leite de amêndoas sem açúcar, aquecido",
          "1 colher de chá de xarope de bordo",
          "1/4 colher de chá de extrato de baunilha"
        ],
        "steps": [
          "Bata o matcha com a água quente até formar uma pasta lisa, sem grumos.",
          "Aqueça e espume o leite de amêndoas, depois despeje sobre o matcha.",
          "Misture o xarope de bordo e a baunilha e aproveite na hora."
        ],
        "swaps": [
          "leite de amêndoas → leite de aveia (mais cremoso)",
          "xarope de bordo → xarope de tâmara ou omita",
          "quente → gelado, com gelo, para o verão"
        ]
      },
      "es": {
        "title": "Latte de Matcha de Todos los Días",
        "desc": "Un latte verde espumoso para una energía matutina calmada y sin nervios.",
        "why": "El matcha combina cafeína con L-teanina, un aminoácido tradicionalmente asociado con una energía estable y enfocada, sin el pico y bajón del café.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Sin azúcar refinada",
          "Vegano"
        ],
        "ingredients": [
          "1 cucharadita de matcha ceremonial en polvo",
          "2 cucharadas de agua caliente (no hirviendo)",
          "1 taza de leche de almendras sin endulzar, tibia",
          "1 cucharadita de jarabe de arce",
          "1/4 cucharadita de extracto de vainilla"
        ],
        "steps": [
          "Bate el matcha con el agua caliente hasta formar una pasta suave, sin grumos.",
          "Calienta y espuma la leche de almendras, luego viértela sobre el matcha.",
          "Incorpora el jarabe de arce y la vainilla, y disfruta de inmediato."
        ],
        "swaps": [
          "leche de almendras → leche de avena (más cremosa)",
          "jarabe de arce → jarabe de dátil, u omítelo",
          "caliente → con hielo para el verano"
        ]
      },
      "it": {
        "title": "Matcha Latte di Tutti i Giorni",
        "desc": "Un latte verde spumoso per un'energia mattutina calma, senza nervosismo.",
        "why": "Il matcha abbina caffeina e L-teanina, un amminoacido tradizionalmente associato a un'energia stabile e concentrata, senza il picco e il crollo tipici del caffè.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Senza zuccheri raffinati",
          "Vegano"
        ],
        "ingredients": [
          "1 cucchiaino di matcha in polvere cerimoniale",
          "2 cucchiai d'acqua calda (non bollente)",
          "1 tazza di latte di mandorla non zuccherato, scaldato",
          "1 cucchiaino di sciroppo d'acero",
          "1/4 di cucchiaino di estratto di vaniglia"
        ],
        "steps": [
          "Sbatti il matcha con l'acqua calda fino a ottenere una pasta liscia e senza grumi.",
          "Scalda e monta il latte di mandorla, poi versalo sul matcha.",
          "Incorpora sciroppo d'acero e vaniglia e gustalo subito."
        ],
        "swaps": [
          "latte di mandorla → latte d'avena (più cremoso)",
          "sciroppo d'acero → sciroppo di datteri o omettilo",
          "caldo → con ghiaccio per l'estate"
        ]
      },
      "zh": {
        "title": "日常抹茶拿铁",
        "desc": "绵密起泡的绿色拿铁，带来平静、不焦躁的晨间能量。",
        "why": "抹茶把咖啡因与L-茶氨酸相搭配，这种氨基酸在传统上与平稳、专注的能量有关，不会像咖啡那样先冲高再骤降。",
        "tags": [
          "无麸质",
          "无乳制品",
          "无精制糖",
          "纯素"
        ],
        "ingredients": [
          "1茶匙仪式级抹茶粉",
          "2汤匙热水（非沸水）",
          "1杯无糖杏仁奶，加热",
          "1茶匙枫糖浆",
          "¼茶匙香草精"
        ],
        "steps": [
          "把抹茶粉与热水搅拌成顺滑无结块的糊状。",
          "把杏仁奶加热打出奶泡，倒入抹茶糊中。",
          "拌入枫糖浆和香草精，即刻享用。"
        ],
        "swaps": [
          "杏仁奶 → 燕麦奶（口感更绵密）",
          "枫糖浆 → 椰枣糖浆，或不加",
          "热饮 → 夏天可加冰做成冰饮"
        ]
      },
      "hi": {
        "title": "एवरीडे माचा लाटे",
        "desc": "एक झागदार हरा लाटे, शांत और बिना घबराहट वाली सुबह की ऊर्जा के लिए।",
        "why": "माचा कैफीन को L-थियानिन के साथ जोड़ता है, वह एमिनो एसिड जो पारंपरिक रूप से स्थिर, केंद्रित ऊर्जा से जुड़ा है, बिना कॉफी वाले उतार-चढ़ाव के।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "रिफाइंड-शुगर-फ्री",
          "वीगन"
        ],
        "ingredients": [
          "1 छोटा चम्मच सेरेमोनियल माचा पाउडर",
          "2 बड़े चम्मच गर्म (उबलता नहीं) पानी",
          "1 कप बिना मीठा बादाम दूध, गर्म किया हुआ",
          "1 छोटा चम्मच मेपल सिरप",
          "1/4 छोटा चम्मच वैनिला एक्सट्रैक्ट"
        ],
        "steps": [
          "माचा को गर्म पानी के साथ फेंटकर चिकना, बिना गुठली वाला पेस्ट बनाएं।",
          "बादाम दूध को गर्म करके झाग बनाएं, फिर माचा के ऊपर डालें।",
          "मेपल सिरप और वैनिला मिलाएं और तुरंत आनंद लें।"
        ],
        "swaps": [
          "बादाम दूध → ओट दूध (ज़्यादा मलाईदार)",
          "मेपल सिरप → खजूर सिरप या छोड़ दें",
          "गर्म → गर्मियों के लिए बर्फ के साथ ठंडा परोसें"
        ]
      },
      "he": {
        "title": "לאטה מאצ'ה יומיומי",
        "desc": "לאטה ירוק קצפי לאנרגיית בוקר רגועה ונקייה מרעד.",
        "why": "מאצ'ה מזווג קפאין עם L-תיאנין, חומצת אמינו שקשורה באופן מסורתי לאנרגיה יציבה וממוקדת בלי קפיצה וקריסה של קפה.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "ללא סוכר מזוקק",
          "טבעוני"
        ],
        "ingredients": [
          "1 כפית אבקת מאצ'ה טקסית",
          "2 כפות מים חמים (לא רותחים)",
          "1 כוס חלב שקדים ללא סוכר, מחומם",
          "1 כפית סירופ מייפל",
          "¼ כפית תמצית וניל"
        ],
        "steps": [
          "לטרוף את המאצ'ה עם המים החמים למשחה חלקה ללא גושים.",
          "לחמם ולהקציף את חלב השקדים, ואז למזוג מעל המאצ'ה.",
          "לערבב פנימה מייפל ווניל וליהנות מיד."
        ],
        "swaps": [
          "חלב שקדים → חלב שיבולת שועל (קרמי יותר)",
          "סירופ מייפל → סירופ תמרים או לוותר",
          "חם → קר עם קרח לקיץ"
        ]
      }
    }
  },
  {
    "id": "drink-green-protein-smoothie",
    "title": "Green Machine Protein Smoothie",
    "desc": "A creamy green blend that eats like a meal and fuels the whole morning.",
    "image": "/assets/recipes/drink-green-protein-smoothie.png",
    "level": "club",
    "daypart": "drink",
    "makes": "1",
    "goals": [
      "Protein",
      "Energy"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "High-protein",
      "High-fiber",
      "15-minute"
    ],
    "macros": {
      "kcal": 335,
      "protein": "24g",
      "carbs": "31g",
      "fat": "12g",
      "fiber": "7g"
    },
    "why": "A full scoop of plant protein plus almond butter delivers the amino acids and steady fats that support lasting energy, while spinach and mango add fiber and micronutrients.",
    "swaps": [
      "plant protein → whey (if tolerated)",
      "almond butter → sunflower seed butter (nut-free)",
      "banana → 1/2 avocado (lower sugar)"
    ],
    "ingredients": [
      "1 cup fresh spinach",
      "1 scoop vanilla plant protein powder",
      "1/2 frozen banana",
      "1/2 cup frozen mango",
      "1 tbsp almond butter",
      "1 cup unsweetened almond milk",
      "1/2 cup ice"
    ],
    "steps": [
      "Add liquid and spinach to the blender first and blend until smooth.",
      "Add protein, banana, mango, almond butter and ice.",
      "Blend on high until creamy, then pour and drink."
    ],
    "i18n": {
      "pt": {
        "title": "Smoothie Verde de Proteína",
        "desc": "Uma mistura verde e cremosa que satisfaz como uma refeição e sustenta a manhã inteira.",
        "why": "Uma dose cheia de proteína vegetal mais a pasta de amêndoas entrega os aminoácidos e as gorduras estáveis que apoiam uma energia duradoura, enquanto o espinafre e a manga somam fibras e micronutrientes.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Rico em proteína",
          "Rico em fibras",
          "15 minutos"
        ],
        "ingredients": [
          "1 xícara de espinafre fresco",
          "1 dose de proteína vegetal em pó sabor baunilha",
          "1/2 banana congelada",
          "1/2 xícara de manga congelada",
          "1 colher de sopa de pasta de amêndoas",
          "1 xícara de leite de amêndoas sem açúcar",
          "1/2 xícara de gelo"
        ],
        "steps": [
          "Coloque o líquido e o espinafre no liquidificador primeiro e bata até ficar homogêneo.",
          "Adicione a proteína, a banana, a manga, a pasta de amêndoas e o gelo.",
          "Bata em velocidade alta até ficar cremoso, depois sirva e beba."
        ],
        "swaps": [
          "proteína vegetal → whey protein (se tolerado)",
          "pasta de amêndoas → pasta de sementes de girassol (sem oleaginosas)",
          "banana → 1/2 abacate (menos açúcar)"
        ]
      },
      "es": {
        "title": "Batido Verde de Proteína",
        "desc": "Una mezcla verde y cremosa que se come como una comida y alimenta toda la mañana.",
        "why": "Un scoop completo de proteína vegetal junto con mantequilla de almendra aporta los aminoácidos y grasas estables que sostienen la energía duradera, mientras que la espinaca y el mango suman fibra y micronutrientes.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Alto en proteína",
          "Alto en fibra",
          "15 minutos"
        ],
        "ingredients": [
          "1 taza de espinaca fresca",
          "1 scoop de proteína vegetal en polvo sabor vainilla",
          "1/2 plátano congelado",
          "1/2 taza de mango congelado",
          "1 cucharada de mantequilla de almendra",
          "1 taza de leche de almendras sin endulzar",
          "1/2 taza de hielo"
        ],
        "steps": [
          "Agrega primero el líquido y la espinaca a la licuadora y licúa hasta que quede suave.",
          "Agrega la proteína, el plátano, el mango, la mantequilla de almendra y el hielo.",
          "Licúa a velocidad alta hasta que quede cremoso, y sirve."
        ],
        "swaps": [
          "proteína vegetal → proteína de suero (si la toleras)",
          "mantequilla de almendra → mantequilla de semillas de girasol (sin frutos secos)",
          "plátano → 1/2 aguacate (menos azúcar)"
        ]
      },
      "it": {
        "title": "Smoothie Proteico Green Machine",
        "desc": "Un frullato verde e cremoso che sazia come un pasto e alimenta tutta la mattinata.",
        "why": "Un misurino intero di proteine vegetali insieme al burro di mandorle fornisce gli amminoacidi e i grassi stabili che sostengono un'energia duratura, mentre spinaci e mango aggiungono fibre e micronutrienti.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Ricco di proteine",
          "Ricco di fibre",
          "15 minuti"
        ],
        "ingredients": [
          "1 tazza di spinaci freschi",
          "1 misurino di proteine vegetali in polvere alla vaniglia",
          "1/2 banana surgelata",
          "1/2 tazza di mango surgelato",
          "1 cucchiaio di burro di mandorle",
          "1 tazza di latte di mandorla non zuccherato",
          "1/2 tazza di ghiaccio"
        ],
        "steps": [
          "Metti prima il liquido e gli spinaci nel frullatore e frulla fino a ottenere un composto liscio.",
          "Aggiungi proteine, banana, mango, burro di mandorle e ghiaccio.",
          "Frulla a velocità alta finché non diventa cremoso, poi versa e bevi."
        ],
        "swaps": [
          "proteine vegetali → whey (se tollerate)",
          "burro di mandorle → burro di semi di girasole (senza frutta a guscio)",
          "banana → 1/2 avocado (meno zucchero)"
        ]
      },
      "zh": {
        "title": "绿色能量蛋白思慕雪",
        "desc": "绵密的绿色思慕雪，喝起来像一顿正餐，能为整个上午提供能量。",
        "why": "满满一勺植物蛋白加上杏仁酱，提供支持持久能量的氨基酸和稳定脂肪，菠菜和芒果则带来膳食纤维和微量营养素。",
        "tags": [
          "无麸质",
          "无乳制品",
          "高蛋白",
          "高纤维",
          "15分钟"
        ],
        "ingredients": [
          "1杯新鲜菠菜",
          "1勺香草植物蛋白粉",
          "½根冷冻香蕉",
          "½杯冷冻芒果",
          "1汤匙杏仁酱",
          "1杯无糖杏仁奶",
          "½杯冰块"
        ],
        "steps": [
          "先把液体和菠菜放入搅拌机，打至顺滑。",
          "加入蛋白粉、香蕉、芒果、杏仁酱和冰块。",
          "高速搅打至绵密，倒出即可饮用。"
        ],
        "swaps": [
          "植物蛋白 → 乳清蛋白（如果能耐受）",
          "杏仁酱 → 葵花籽酱（无坚果）",
          "香蕉 → ½个牛油果（更低糖）"
        ]
      },
      "hi": {
        "title": "ग्रीन मशीन प्रोटीन स्मूदी",
        "desc": "एक मलाईदार हरा मिश्रण जो भोजन जैसा लगता है और पूरी सुबह को ऊर्जा देता है।",
        "why": "एक पूरा स्कूप प्लांट प्रोटीन और बादाम बटर वे एमिनो एसिड और स्थिर फैट्स देते हैं जो लंबे समय तक ऊर्जा को सहारा देते हैं, जबकि पालक और आम फाइबर और सूक्ष्म पोषक तत्व जोड़ते हैं।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "हाई-प्रोटीन",
          "हाई-फाइबर",
          "15-मिनट"
        ],
        "ingredients": [
          "1 कप ताज़ा पालक",
          "1 स्कूप वैनिला प्लांट प्रोटीन पाउडर",
          "1/2 जमा हुआ केला",
          "1/2 कप जमा हुआ आम",
          "1 बड़ा चम्मच बादाम बटर",
          "1 कप बिना मीठा बादाम दूध",
          "1/2 कप बर्फ"
        ],
        "steps": [
          "पहले ब्लेंडर में तरल और पालक डालें और चिकना होने तक ब्लेंड करें।",
          "प्रोटीन, केला, आम, बादाम बटर और बर्फ डालें।",
          "तेज़ स्पीड पर तब तक ब्लेंड करें जब तक मलाईदार न हो जाए, फिर डालकर पिएं।"
        ],
        "swaps": [
          "प्लांट प्रोटीन → व्हे प्रोटीन (अगर सहन हो)",
          "बादाम बटर → सूरजमुखी बीज बटर (नट-फ्री)",
          "केला → 1/2 एवोकाडो (कम शुगर)"
        ]
      },
      "he": {
        "title": "סמוזי חלבון ירוק",
        "desc": "תערובת ירוקה וקרמית שאוכלת כמו ארוחה ומתדלקת את כל הבוקר.",
        "why": "מנה מלאה של חלבון צמחי בתוספת חמאת שקדים מספקת את חומצות האמינו והשומנים היציבים שתומכים באנרגיה מתמשכת, בעוד התרד והמנגו מוסיפים סיבים ומיקרו-נוטריינטים.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "עתיר חלבון",
          "עתיר סיבים",
          "15 דקות"
        ],
        "ingredients": [
          "1 כוס תרד טרי",
          "1 מנת אבקת חלבון צמחי בטעם וניל",
          "½ בננה קפואה",
          "½ כוס מנגו קפוא",
          "1 כף חמאת שקדים",
          "1 כוס חלב שקדים ללא סוכר",
          "½ כוס קרח"
        ],
        "steps": [
          "להוסיף נוזל ותרד לבלנדר קודם ולטחון עד חלק.",
          "להוסיף חלבון, בננה, מנגו, חמאת שקדים וקרח.",
          "לטחון בעוצמה גבוהה עד קרמי, ואז למזוג ולשתות."
        ],
        "swaps": [
          "חלבון צמחי → מי גבינה (אם נסבל)",
          "חמאת שקדים → חמאת גרעיני חמנייה (ללא אגוזים)",
          "בננה → ½ אבוקדו (פחות סוכר)"
        ]
      }
    }
  },
  {
    "id": "drink-ginger-kefir-tonic",
    "title": "Ginger-Lime Kefir Gut Tonic",
    "desc": "A tangy, lightly fizzy probiotic tonic to reset a sluggish gut.",
    "image": "/assets/recipes/drink-ginger-kefir-tonic.png",
    "level": "club",
    "daypart": "drink",
    "makes": "1",
    "goals": [
      "Gut health"
    ],
    "tags": [
      "Gluten-free",
      "Refined-sugar-free",
      "High-fiber",
      "15-minute"
    ],
    "macros": {
      "kcal": 150,
      "protein": "8g",
      "carbs": "18g",
      "fat": "5g",
      "fiber": "5g"
    },
    "why": "Kefir brings live cultures that support a diverse gut microbiome, while ginger is traditionally used to ease digestion and chia adds prebiotic fiber to feed those good bacteria.",
    "swaps": [
      "dairy kefir → coconut water kefir (dairy-free)",
      "honey → omit for unsweetened",
      "chia → ground flax"
    ],
    "ingredients": [
      "3/4 cup plain kefir",
      "1 tsp fresh grated ginger",
      "1 tbsp lime juice",
      "1 tbsp chia seeds",
      "1 tsp raw honey (optional)",
      "Sparkling water, to top"
    ],
    "steps": [
      "Whisk kefir, ginger, lime, chia and honey in a glass.",
      "Let sit 5 minutes so the chia softens and thickens.",
      "Top with a splash of sparkling water, stir and sip chilled."
    ],
    "i18n": {
      "pt": {
        "title": "Tônico Intestinal de Kefir com Gengibre e Limão",
        "desc": "Um tônico probiótico azedinho e levemente gaseificado para resetar um intestino preguiçoso.",
        "why": "O kefir traz culturas vivas que apoiam um microbioma intestinal diverso, enquanto o gengibre é tradicionalmente usado para facilitar a digestão e a chia soma fibra prebiótica para alimentar essas bactérias boas.",
        "tags": [
          "Sem glúten",
          "Sem açúcar refinado",
          "Rico em fibras",
          "15 minutos"
        ],
        "ingredients": [
          "3/4 xícara de kefir natural",
          "1 colher de chá de gengibre fresco ralado",
          "1 colher de sopa de suco de limão",
          "1 colher de sopa de sementes de chia",
          "1 colher de chá de mel cru (opcional)",
          "Água com gás, para completar"
        ],
        "steps": [
          "Misture o kefir, o gengibre, o limão, a chia e o mel em um copo.",
          "Deixe descansar por 5 minutos para a chia amolecer e engrossar.",
          "Complete com um pouco de água com gás, mexa e beba gelado."
        ],
        "swaps": [
          "kefir de leite → kefir de água de coco (sem lactose)",
          "mel → omita para versão sem açúcar",
          "chia → linhaça moída"
        ]
      },
      "es": {
        "title": "Tónico Intestinal de Kéfir con Jengibre y Lima",
        "desc": "Un tónico probiótico ácido y ligeramente burbujeante para reiniciar un intestino perezoso.",
        "why": "El kéfir aporta cultivos vivos que favorecen un microbioma intestinal diverso, mientras que el jengibre se usa tradicionalmente para facilitar la digestión y la chía suma fibra prebiótica para alimentar a esas bacterias buenas.",
        "tags": [
          "Sin gluten",
          "Sin azúcar refinada",
          "Alto en fibra",
          "15 minutos"
        ],
        "ingredients": [
          "3/4 taza de kéfir natural",
          "1 cucharadita de jengibre fresco rallado",
          "1 cucharada de jugo de lima",
          "1 cucharada de semillas de chía",
          "1 cucharadita de miel cruda (opcional)",
          "Agua con gas, para completar"
        ],
        "steps": [
          "Bate el kéfir, el jengibre, la lima, la chía y la miel en un vaso.",
          "Deja reposar 5 minutos para que la chía se suavice y espese.",
          "Completa con un chorrito de agua con gas, revuelve y bebe frío."
        ],
        "swaps": [
          "kéfir de leche → kéfir de agua de coco (sin lácteos)",
          "miel → omítela para una versión sin endulzar",
          "chía → linaza molida"
        ]
      },
      "it": {
        "title": "Tonico Intestinale al Kefir, Zenzero e Lime",
        "desc": "Un tonico probiotico agrodolce e leggermente frizzante per rimettere in sesto un intestino pigro.",
        "why": "Il kefir apporta fermenti vivi che sostengono un microbiota intestinale diversificato, mentre lo zenzero è tradizionalmente usato per facilitare la digestione e la chia aggiunge fibre prebiotiche per nutrire quei batteri buoni.",
        "tags": [
          "Senza glutine",
          "Senza zuccheri raffinati",
          "Ricco di fibre",
          "15 minuti"
        ],
        "ingredients": [
          "3/4 di tazza di kefir naturale",
          "1 cucchiaino di zenzero fresco grattugiato",
          "1 cucchiaio di succo di lime",
          "1 cucchiaio di semi di chia",
          "1 cucchiaino di miele grezzo (facoltativo)",
          "Acqua frizzante, per completare"
        ],
        "steps": [
          "Sbatti kefir, zenzero, lime, chia e miele in un bicchiere.",
          "Lascia riposare 5 minuti perché la chia si ammorbidisca e addensi.",
          "Completa con un goccio di acqua frizzante, mescola e sorseggia freddo."
        ],
        "swaps": [
          "kefir di latte → kefir d'acqua di cocco (senza latticini)",
          "miele → omettilo per una versione non zuccherata",
          "chia → semi di lino macinati"
        ]
      },
      "zh": {
        "title": "姜香青柠开菲尔养肠饮",
        "desc": "酸爽微气泡的益生菌养生饮，为迟缓的肠道按下重启键。",
        "why": "开菲尔带来活性菌群，支持多样化的肠道菌群，姜在传统上用于帮助消化，奇亚籽则提供益生元膳食纤维来滋养这些有益菌。",
        "tags": [
          "无麸质",
          "无精制糖",
          "高纤维",
          "15分钟"
        ],
        "ingredients": [
          "¾杯原味开菲尔",
          "1茶匙姜末",
          "1汤匙青柠汁",
          "1汤匙奇亚籽",
          "1茶匙生蜂蜜（可选）",
          "气泡水，用于补满"
        ],
        "steps": [
          "把开菲尔、姜末、青柠汁、奇亚籽和蜂蜜在杯中搅拌均匀。",
          "静置5分钟，让奇亚籽变软增稠。",
          "加入少许气泡水，搅拌后冰镇饮用。"
        ],
        "swaps": [
          "乳制开菲尔 → 椰子水开菲尔（无乳制品）",
          "蜂蜜 → 不加即为无糖版",
          "奇亚籽 → 亚麻籽粉"
        ]
      },
      "hi": {
        "title": "जिंजर-लाइम केफिर गट टॉनिक",
        "desc": "एक तीखा, हल्का फिज़ी प्रोबायोटिक टॉनिक, सुस्त आंत को फिर से सक्रिय करने के लिए।",
        "why": "केफिर लाइव कल्चर्स लाता है जो विविध आंत माइक्रोबायोम को सहारा देते हैं, जबकि अदरक का पारंपरिक रूप से उपयोग पाचन को आसान बनाने के लिए होता है और चिया उन अच्छे बैक्टीरिया को पोषण देने के लिए प्रीबायोटिक फाइबर जोड़ती है।",
        "tags": [
          "ग्लूटेन-फ्री",
          "रिफाइंड-शुगर-फ्री",
          "हाई-फाइबर",
          "15-मिनट"
        ],
        "ingredients": [
          "3/4 कप प्लेन केफिर",
          "1 छोटा चम्मच ताज़ा कद्दूकस किया हुआ अदरक",
          "1 बड़ा चम्मच नींबू का रस",
          "1 बड़ा चम्मच चिया बीज",
          "1 छोटा चम्मच कच्चा शहद (वैकल्पिक)",
          "ऊपर डालने के लिए स्पार्कलिंग वाटर"
        ],
        "steps": [
          "एक गिलास में केफिर, अदरक, नींबू, चिया और शहद फेंटें।",
          "5 मिनट रहने दें ताकि चिया नरम होकर गाढ़ी हो जाए।",
          "थोड़ा स्पार्कलिंग वाटर ऊपर से डालें, मिलाएं और ठंडा पिएं।"
        ],
        "swaps": [
          "डेयरी केफिर → नारियल पानी केफिर (डेयरी-फ्री)",
          "शहद → बिना मीठे के लिए छोड़ दें",
          "चिया → पिसा हुआ अलसी"
        ]
      },
      "he": {
        "title": "טוניק קפיר ג'ינג'ר-ליים למעי",
        "desc": "טוניק פרוביוטי חמצמץ ומעט מבעבע לאיפוס מעי עצל.",
        "why": "קפיר מביא תרביות חיות שתומכות במיקרוביום מעי מגוון, בעוד ג'ינג'ר משמש באופן מסורתי להקלת העיכול והצ'יה מוסיפה סיבים פרה-ביוטיים להאכלת החיידקים הטובים הללו.",
        "tags": [
          "ללא גלוטן",
          "ללא סוכר מזוקק",
          "עתיר סיבים",
          "15 דקות"
        ],
        "ingredients": [
          "¾ כוס קפיר טבעי",
          "1 כפית ג'ינג'ר טרי מגורר",
          "1 כף מיץ ליים",
          "1 כף זרעי צ'יה",
          "1 כפית דבש גולמי (אופציונלי)",
          "מים מוגזים, למילוי"
        ],
        "steps": [
          "לטרוף קפיר, ג'ינג'ר, ליים, צ'יה ודבש בכוס.",
          "לתת לשבת 5 דקות כדי שהצ'יה תתרכך ותתעבה.",
          "למלא בטפטוף מים מוגזים, לערבב ולשתות קר."
        ],
        "swaps": [
          "קפיר חלב → קפיר מי קוקוס (ללא חלב)",
          "דבש → לוותר לגרסה לא ממותקת",
          "צ'יה → פשתן טחון"
        ]
      }
    }
  },
  {
    "id": "drink-tart-cherry-sleep-cooler",
    "title": "Tart Cherry Sleep Cooler",
    "desc": "A ruby, lightly sparkling wind-down cooler for the hour before bed.",
    "image": "/assets/recipes/drink-tart-cherry-sleep-cooler.png",
    "level": "club",
    "daypart": "drink",
    "makes": "1",
    "goals": [
      "Sleep"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "Refined-sugar-free",
      "Vegan"
    ],
    "macros": {
      "kcal": 90,
      "protein": "1g",
      "carbs": "21g",
      "fat": "0g",
      "fiber": "1g"
    },
    "why": "Tart cherry is a natural source of melatonin and has traditionally been used to support a calmer, deeper night's sleep, making it a gentle evening ritual.",
    "swaps": [
      "sparkling water → chamomile tea (warm version)",
      "lime → lemon",
      "add 1 scoop magnesium glycinate (optional, for wind-down)"
    ],
    "ingredients": [
      "1/2 cup unsweetened tart cherry juice",
      "3/4 cup sparkling water",
      "1 tsp lime juice",
      "1 pinch sea salt",
      "Ice, to serve"
    ],
    "steps": [
      "Pour tart cherry juice over ice in a glass.",
      "Top with sparkling water and add lime and a pinch of salt.",
      "Stir gently and sip slowly about an hour before bed."
    ],
    "i18n": {
      "pt": {
        "title": "Refrescante de Cereja Ácida para o Sono",
        "desc": "Um refrescante rubi, levemente gaseificado, para a hora antes de dormir.",
        "why": "A cereja ácida é uma fonte natural de melatonina e tem sido tradicionalmente usada para apoiar um sono mais calmo e profundo, tornando-se um ritual noturno suave.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Sem açúcar refinado",
          "Vegano"
        ],
        "ingredients": [
          "1/2 xícara de suco de cereja ácida sem açúcar",
          "3/4 xícara de água com gás",
          "1 colher de chá de suco de limão",
          "1 pitada de sal marinho",
          "Gelo, para servir"
        ],
        "steps": [
          "Despeje o suco de cereja ácida sobre gelo em um copo.",
          "Complete com água com gás e adicione o limão e uma pitada de sal.",
          "Mexa delicadamente e beba devagar cerca de uma hora antes de dormir."
        ],
        "swaps": [
          "água com gás → chá de camomila (versão quente)",
          "limão → limão siciliano",
          "adicione 1 dose de glicinato de magnésio (opcional, para relaxar)"
        ]
      },
      "es": {
        "title": "Refresco de Cereza Ácida para Dormir",
        "desc": "Un refresco rubí, ligeramente burbujeante, para relajarte en la hora previa a dormir.",
        "why": "La cereza ácida es una fuente natural de melatonina y se ha usado tradicionalmente para favorecer un sueño más calmado y profundo, convirtiéndose en un suave ritual nocturno.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Sin azúcar refinada",
          "Vegano"
        ],
        "ingredients": [
          "1/2 taza de jugo de cereza ácida sin endulzar",
          "3/4 taza de agua con gas",
          "1 cucharadita de jugo de lima",
          "1 pizca de sal marina",
          "Hielo, para servir"
        ],
        "steps": [
          "Vierte el jugo de cereza ácida sobre hielo en un vaso.",
          "Completa con agua con gas y agrega la lima y una pizca de sal.",
          "Revuelve suavemente y bebe despacio, aproximadamente una hora antes de dormir."
        ],
        "swaps": [
          "agua con gas → té de manzanilla (versión caliente)",
          "lima → limón",
          "agrega 1 scoop de glicinato de magnesio (opcional, para relajarte)"
        ]
      },
      "it": {
        "title": "Cooler alla Amarena per il Sonno",
        "desc": "Un cooler rosso rubino, leggermente frizzante, per l'ora prima di andare a dormire.",
        "why": "L'amarena è una fonte naturale di melatonina ed è tradizionalmente usata per favorire un sonno notturno più calmo e profondo, rendendola un dolce rituale serale.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Senza zuccheri raffinati",
          "Vegano"
        ],
        "ingredients": [
          "1/2 tazza di succo di amarena non zuccherato",
          "3/4 di tazza di acqua frizzante",
          "1 cucchiaino di succo di lime",
          "1 pizzico di sale marino",
          "Ghiaccio, per servire"
        ],
        "steps": [
          "Versa il succo di amarena sul ghiaccio in un bicchiere.",
          "Completa con acqua frizzante e aggiungi lime e un pizzico di sale.",
          "Mescola delicatamente e sorseggia lentamente circa un'ora prima di andare a dormire."
        ],
        "swaps": [
          "acqua frizzante → tè alla camomilla (versione calda)",
          "lime → limone",
          "aggiungi 1 misurino di glicinato di magnesio (facoltativo, per rilassarsi)"
        ]
      },
      "zh": {
        "title": "酸樱桃助眠冷饮",
        "desc": "宝石红色、微微冒泡的睡前放松冷饮，在入睡前一小时享用。",
        "why": "酸樱桃天然含有褪黑素，在传统上用于帮助支持更平静、更深沉的夜间睡眠，是一种温和的夜间仪式。",
        "tags": [
          "无麸质",
          "无乳制品",
          "无精制糖",
          "纯素"
        ],
        "ingredients": [
          "½杯无糖酸樱桃汁",
          "¾杯气泡水",
          "1茶匙青柠汁",
          "一小撮海盐",
          "冰块，适量"
        ],
        "steps": [
          "把酸樱桃汁倒入装有冰块的杯中。",
          "加入气泡水，再放入青柠汁和一小撮盐。",
          "轻轻搅拌，在睡前约一小时慢慢饮用。"
        ],
        "swaps": [
          "气泡水 → 洋甘菊茶（温热版）",
          "青柠 → 柠檬",
          "加入1勺甘氨酸镁粉（可选，助力放松）"
        ]
      },
      "hi": {
        "title": "टार्ट चेरी स्लीप कूलर",
        "desc": "एक रूबी रंग का, हल्का स्पार्कलिंग कूलर, सोने से पहले के घंटे को शांत करने के लिए।",
        "why": "टार्ट चेरी मेलाटोनिन का प्राकृतिक स्रोत है और पारंपरिक रूप से इसका उपयोग शांत, गहरी रात की नींद को सहारा देने के लिए किया जाता रहा है, जिससे यह एक हल्की शाम की रस्म बन जाती है।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "रिफाइंड-शुगर-फ्री",
          "वीगन"
        ],
        "ingredients": [
          "1/2 कप बिना मीठा टार्ट चेरी जूस",
          "3/4 कप स्पार्कलिंग वाटर",
          "1 छोटा चम्मच नींबू का रस",
          "1 चुटकी सी सॉल्ट",
          "परोसने के लिए बर्फ"
        ],
        "steps": [
          "एक गिलास में बर्फ के ऊपर टार्ट चेरी जूस डालें।",
          "ऊपर से स्पार्कलिंग वाटर डालें और नींबू व एक चुटकी नमक मिलाएं।",
          "धीरे से मिलाएं और सोने से लगभग एक घंटे पहले धीरे-धीरे पिएं।"
        ],
        "swaps": [
          "स्पार्कलिंग वाटर → कैमोमाइल चाय (गर्म विकल्प)",
          "कागज़ी नींबू → नींबू",
          "1 स्कूप मैग्नीशियम ग्लाइसिनेट डालें (वैकल्पिक, शांत होने के लिए)"
        ]
      },
      "he": {
        "title": "משקה קירור דובדבן חמוץ לשינה",
        "desc": "משקה קירור אודם ומעט מבעבע להרגעה בשעה שלפני השינה.",
        "why": "דובדבן חמוץ הוא מקור טבעי למלטונין ומשמש באופן מסורתי לתמיכה בשינה רגועה ועמוקה יותר, מה שהופך אותו לטקס ערב עדין.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "ללא סוכר מזוקק",
          "טבעוני"
        ],
        "ingredients": [
          "½ כוס מיץ דובדבן חמוץ ללא סוכר",
          "¾ כוס מים מוגזים",
          "1 כפית מיץ ליים",
          "קורט מלח ים",
          "קרח, להגשה"
        ],
        "steps": [
          "למזוג את מיץ הדובדבן החמוץ מעל קרח בכוס.",
          "למלא במים מוגזים ולהוסיף ליים וקורט מלח.",
          "לערבב בעדינות וללגום לאט כשעה לפני השינה."
        ],
        "swaps": [
          "מים מוגזים → תה קמומיל (גרסה חמה)",
          "ליים → לימון",
          "להוסיף מנת מגנזיום גליצינאט (אופציונלי, להרגעה)"
        ]
      }
    }
  },
  {
    "id": "drink-cacao-calm-latte",
    "title": "Reishi Cacao Calm Latte",
    "desc": "A warm, chocolatey adaptogen latte that soothes the nervous system at night.",
    "image": "/assets/recipes/drink-cacao-calm-latte.png",
    "level": "club",
    "daypart": "drink",
    "makes": "1",
    "goals": [
      "Sleep",
      "Anti-inflammatory"
    ],
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "Refined-sugar-free",
      "Vegan",
      "Anti-inflammatory"
    ],
    "macros": {
      "kcal": 95,
      "protein": "2g",
      "carbs": "10g",
      "fat": "4g",
      "fiber": "3g"
    },
    "why": "Raw cacao offers magnesium and polyphenols while reishi is a calming adaptogen traditionally used to support relaxation and a restful evening wind-down.",
    "swaps": [
      "reishi → ashwagandha (also calming)",
      "almond milk → coconut milk (richer)",
      "maple syrup → 1 soft date, blended"
    ],
    "ingredients": [
      "1 cup unsweetened almond milk",
      "1 tbsp raw cacao powder",
      "1 tsp reishi mushroom powder",
      "1/2 tsp ground cinnamon",
      "1 tsp maple syrup",
      "1 pinch sea salt"
    ],
    "steps": [
      "Warm the almond milk in a small saucepan until steaming.",
      "Whisk in cacao, reishi, cinnamon, maple and salt until frothy.",
      "Pour into a mug and sip while warm before bed."
    ],
    "i18n": {
      "pt": {
        "title": "Latte Calmante de Cacau com Reishi",
        "desc": "Um latte quente e achocolatado com adaptógeno que acalma o sistema nervoso à noite.",
        "why": "O cacau cru oferece magnésio e polifenóis, enquanto o reishi é um adaptógeno calmante tradicionalmente usado para apoiar o relaxamento e uma desaceleração tranquila no fim do dia.",
        "tags": [
          "Sem glúten",
          "Sem lactose",
          "Sem açúcar refinado",
          "Vegano",
          "Anti-inflamatório"
        ],
        "ingredients": [
          "1 xícara de leite de amêndoas sem açúcar",
          "1 colher de sopa de cacau cru em pó",
          "1 colher de chá de cogumelo reishi em pó",
          "1/2 colher de chá de canela em pó",
          "1 colher de chá de xarope de bordo",
          "1 pitada de sal marinho"
        ],
        "steps": [
          "Aqueça o leite de amêndoas em uma panela pequena até soltar vapor.",
          "Bata o cacau, o reishi, a canela, o xarope de bordo e o sal até ficar espumoso.",
          "Sirva em uma caneca e beba morno antes de dormir."
        ],
        "swaps": [
          "reishi → ashwagandha (também calmante)",
          "leite de amêndoas → leite de coco (mais encorpado)",
          "xarope de bordo → 1 tâmara macia, batida"
        ]
      },
      "es": {
        "title": "Latte Calmante de Cacao y Reishi",
        "desc": "Un latte cálido, achocolatado y adaptogénico que calma el sistema nervioso por la noche.",
        "why": "El cacao crudo ofrece magnesio y polifenoles, mientras que el reishi es un adaptógeno calmante usado tradicionalmente para favorecer la relajación y un cierre de día reparador.",
        "tags": [
          "Sin gluten",
          "Sin lácteos",
          "Sin azúcar refinada",
          "Vegano",
          "Antiinflamatorio"
        ],
        "ingredients": [
          "1 taza de leche de almendras sin endulzar",
          "1 cucharada de cacao crudo en polvo",
          "1 cucharadita de polvo de hongo reishi",
          "1/2 cucharadita de canela molida",
          "1 cucharadita de jarabe de arce",
          "1 pizca de sal marina"
        ],
        "steps": [
          "Calienta la leche de almendras en una olla pequeña hasta que humee.",
          "Bate el cacao, el reishi, la canela, el jarabe de arce y la sal hasta que quede espumoso.",
          "Vierte en una taza y bebe tibio antes de dormir."
        ],
        "swaps": [
          "reishi → ashwagandha (también calmante)",
          "leche de almendras → leche de coco (más cremosa)",
          "jarabe de arce → 1 dátil blando, licuado"
        ]
      },
      "it": {
        "title": "Latte Calmante al Cacao e Reishi",
        "desc": "Un latte caldo e cioccolatoso agli adattogeni che calma il sistema nervoso la sera.",
        "why": "Il cacao crudo offre magnesio e polifenoli, mentre il reishi è un adattogeno calmante tradizionalmente usato per favorire il rilassamento e un tranquillo momento di decompressione serale.",
        "tags": [
          "Senza glutine",
          "Senza latticini",
          "Senza zuccheri raffinati",
          "Vegano",
          "Antinfiammatorio"
        ],
        "ingredients": [
          "1 tazza di latte di mandorla non zuccherato",
          "1 cucchiaio di cacao crudo in polvere",
          "1 cucchiaino di polvere di fungo reishi",
          "1/2 cucchiaino di cannella in polvere",
          "1 cucchiaino di sciroppo d'acero",
          "1 pizzico di sale marino"
        ],
        "steps": [
          "Scalda il latte di mandorla in un pentolino finché non fuma.",
          "Incorpora cacao, reishi, cannella, sciroppo d'acero e sale sbattendo finché non diventa spumoso.",
          "Versa in una tazza e sorseggia caldo prima di dormire."
        ],
        "swaps": [
          "reishi → ashwagandha (anch'essa calmante)",
          "latte di mandorla → latte di cocco (più ricco)",
          "sciroppo d'acero → 1 dattero morbido, frullato"
        ]
      },
      "zh": {
        "title": "灵芝可可安神拿铁",
        "desc": "温暖巧克力风味的适应原拿铁，在夜晚舒缓神经系统。",
        "why": "生可可提供镁和多酚，灵芝则是一种镇静适应原，在传统上用于帮助支持放松和安稳的夜间收尾。",
        "tags": [
          "无麸质",
          "无乳制品",
          "无精制糖",
          "纯素",
          "抗炎"
        ],
        "ingredients": [
          "1杯无糖杏仁奶",
          "1汤匙生可可粉",
          "1茶匙灵芝粉",
          "½茶匙肉桂粉",
          "1茶匙枫糖浆",
          "一小撮海盐"
        ],
        "steps": [
          "把杏仁奶在小锅中加热至冒热气。",
          "拌入可可粉、灵芝粉、肉桂粉、枫糖浆和盐，搅打至起泡。",
          "倒入马克杯中，趁温热在睡前饮用。"
        ],
        "swaps": [
          "灵芝 → 南非醉茄（同样有镇静效果）",
          "杏仁奶 → 椰奶（口感更浓郁）",
          "枫糖浆 → 1颗软椰枣，打碎"
        ]
      },
      "hi": {
        "title": "रीशी काकाओ काम लाटे",
        "desc": "एक गर्म, चॉकलेटी एडाप्टोजन लाटे, जो रात में नर्वस सिस्टम को शांत करता है।",
        "why": "कच्चा काकाओ मैग्नीशियम और पॉलीफेनॉल्स देता है जबकि रीशी एक शांत करने वाला एडाप्टोजन है जिसका पारंपरिक रूप से उपयोग विश्राम और आरामदायक शाम को शांत होने में मदद के लिए होता है।",
        "tags": [
          "ग्लूटेन-फ्री",
          "डेयरी-फ्री",
          "रिफाइंड-शुगर-फ्री",
          "वीगन",
          "एंटी-इन्फ्लेमेटरी"
        ],
        "ingredients": [
          "1 कप बिना मीठा बादाम दूध",
          "1 बड़ा चम्मच कच्चा काकाओ पाउडर",
          "1 छोटा चम्मच रीशी मशरूम पाउडर",
          "1/2 छोटा चम्मच दालचीनी पाउडर",
          "1 छोटा चम्मच मेपल सिरप",
          "1 चुटकी सी सॉल्ट"
        ],
        "steps": [
          "एक छोटे पैन में बादाम दूध को भाप आने तक गर्म करें।",
          "काकाओ, रीशी, दालचीनी, मेपल सिरप और नमक मिलाकर झागदार होने तक फेंटें।",
          "मग में डालें और सोने से पहले गर्म-गर्म पिएं।"
        ],
        "swaps": [
          "रीशी → अश्वगंधा (यह भी शांत करने वाली है)",
          "बादाम दूध → नारियल दूध (ज़्यादा गाढ़ा)",
          "मेपल सिरप → 1 नरम खजूर, ब्लेंड किया हुआ"
        ]
      },
      "he": {
        "title": "לאטה קקאו ורישי מרגיע",
        "desc": "לאטה חם ואדפטוגני עם טעם שוקולד שמרגיע את מערכת העצבים בלילה.",
        "why": "קקאו גולמי מציע מגנזיום ופוליפנולים בעוד רישי הוא אדפטוגן מרגיע שמשמש באופן מסורתי לתמיכה בהרפיה ובהרגעת ערב שלווה.",
        "tags": [
          "ללא גלוטן",
          "ללא חלב",
          "ללא סוכר מזוקק",
          "טבעוני",
          "אנטי-דלקתי"
        ],
        "ingredients": [
          "1 כוס חלב שקדים ללא סוכר",
          "1 כף אבקת קקאו גולמי",
          "1 כפית אבקת פטריית רישי",
          "½ כפית קינמון טחון",
          "1 כפית סירופ מייפל",
          "קורט מלח ים"
        ],
        "steps": [
          "לחמם את חלב השקדים בסיר קטן עד מהביל.",
          "לטרוף פנימה קקאו, רישי, קינמון, מייפל ומלח עד קצפי.",
          "למזוג לספל וללגום חם לפני השינה."
        ],
        "swaps": [
          "רישי → אשווגנדה (גם מרגיע)",
          "חלב שקדים → חלב קוקוס (עשיר יותר)",
          "סירופ מייפל → 1 תמר רך, טחון"
        ]
      }
    }
  }
];
