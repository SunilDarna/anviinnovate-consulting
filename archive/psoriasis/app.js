// ==========================================================================
// FOOD CHECKER DATASET
// ==========================================================================
const foodDatabase = [
  {
    id: "salmon",
    status: "safe",
    en: { name: "Salmon", desc: "Rich in Omega-3 fatty acids and Vitamin D. Extremely anti-inflammatory and supports skin healing." },
    hi: { name: "साल्मन मछली", desc: "ओमेगा-3 फैटी एसिड और विटामिन डी से भरपूर। सूजन-रोधी और त्वचा को ठीक करने में सहायक।" },
    te: { name: "సాల్మన్ చేప", desc: "ఒమేగా-3లు మరియు విటమిన్ డి సమృద్ధిగా ఉంటాయి. చర్మ మంటను తగ్గించి త్వరితంగా నయం చేస్తుంది." }
  },
  {
    id: "sweet_potato",
    status: "safe",
    en: { name: "Sweet Potato", desc: "Loaded with beta-carotene (Vitamin A). Nourishes the skin barrier and provides safe complex carbs." },
    hi: { name: "शकरकंद", desc: "बीटा-कैरोटीन (विटामिन ए) से भरपूर। त्वचा की परतों को पोषण देता है और स्वस्थ ऊर्जा प्रदान करता है।" },
    te: { name: "చిలగడదుంప", desc: "బీటా-కెరోటిన్ (విటామిన్ ఎ) సమృద్ధిగా ఉంటుంది. చర్మ సంరక్షణకు మరియు శక్తికి ఎంతో మేలు చేస్తుంది." }
  },
  {
    id: "blueberries",
    status: "safe",
    en: { name: "Blueberries", desc: "Packed with antioxidants and Vitamin C. Fights cellular stress and boosts immune health." },
    hi: { name: "ब्लूबेरी", desc: "एंटीऑक्सीडेंट और विटामिन सी से भरपूर। त्वचा की कोशिकाओं को स्वस्थ रखता है।" },
    te: { name: "బ్లూబెర్రీస్", desc: "యాంటీఆక్సిడెంట్లు మరియు విటమిన్ సి అధికంగా ఉంటాయి. రోగనిరోధక శక్తిని పెంచుతుంది." }
  },
  {
    id: "spinach",
    status: "safe",
    en: { name: "Spinach", desc: "Iron and folate rich. Supports healthy cell replication. Cook soft/puree for toddlers." },
    hi: { name: "पालक", desc: "आयरन और फोलेट से भरपूर। स्वस्थ कोशिकाओं के निर्माण में सहायक। बच्चों के लिए नरम पकाएं।" },
    te: { name: "పాలకూర", desc: "ఇనుము (Iron) మరియు ఫోలేట్ సమృద్ధిగా లభిస్తాయి. మెత్తగా ఉడికించి పెట్టడం మంచిది." }
  },
  {
    id: "avocado",
    status: "safe",
    en: { name: "Avocado", desc: "High in monounsaturated healthy fats and Vitamin E. Hydrates dry skin from within." },
    hi: { name: "एवोकैडो", desc: "स्वस्थ वसा और विटामिन ई से भरपूर। सूखी त्वचा को अंदर से नमी प्रदान करता है।" },
    te: { name: "అవకాడో", desc: "ఆరోగ్యకరమైన కొవ్వులు మరియు విటమిన్ ఇ లభిస్తాయి. పొడిబారిన చర్మానికి తేమను అందిస్తుంది." }
  },
  {
    id: "carrots",
    status: "safe",
    en: { name: "Carrots", desc: "Great source of Vitamin A. Cook soft to prevent choking." },
    hi: { name: "गाजर", desc: "विटामिन ए का बेहतरीन स्रोत। घुटन से बचाने के लिए अच्छी तरह नरम पकाएं।" },
    te: { name: "క్యారెట్లు", desc: "విటమిన్ ఎ అధికంగా ఉంటుంది. పిల్లలకు సులభంగా నమిలేలా ఉడికించి ఇవ్వాలి." }
  },
  {
    id: "zucchini",
    status: "safe",
    en: { name: "Zucchini", desc: "Highly hydrating, easy to digest, and gentle on a toddler's stomach. Steam soft." },
    hi: { name: "जुकिनी", desc: "अत्यधिक हाइड्रेटिंग, पचाने में आसान और बच्चों के पेट के लिए हल्की। भाप में नरम पकाएं।" },
    te: { name: "జుకిని", desc: "ఎక్కువ తేమ కలిగి సులభంగా జీర్ణమవుతుంది. చిన్నారి పొట్టకు ఎంతో మేలు చేస్తుంది." }
  },
  {
    id: "olive_oil",
    status: "safe",
    en: { name: "Extra Virgin Olive Oil", desc: "Contains oleocanthal, a natural anti-inflammatory agent. Drizzle on cooked foods." },
    hi: { name: "जैतून का तेल", desc: "प्राकृतिक सूजन-रोधी गुण होते हैं। पके हुए भोजन पर ऊपर से डालें।" },
    te: { name: "ఆలివ్ ఆయిల్", desc: "సహజ సిద్ధమైన వాపు నివారిణి. ఉడికించిన వంటకాలపై కొద్దిగా వేసి ఇవ్వవచ్చు." }
  },
  {
    id: "bananas",
    status: "safe",
    en: { name: "Bananas", desc: "Contains prebiotic fibers that feed good gut bacteria, strengthening the skin-gut axis." },
    hi: { name: "केला", desc: "प्रीबायोटिक फाइबर होते हैं जो पेट के अच्छे बैक्टीरिया को बढ़ाते हैं, पेट-त्वचा संबंध मजबूत करते हैं।" },
    te: { name: "అరటిపండు", desc: "జీర్ణకోశానికి మేలు చేసే మంచి బ్యాక్టీరియాను పెంచి, రోగనిరోధక శక్తిని ఇస్తుంది." }
  },
  {
    id: "oats",
    status: "safe",
    en: { name: "Oats (Gluten-Free)", desc: "Contains beta-glucan fiber, supporting a healthy gut microbiome and reducing flares." },
    hi: { name: "ओट्स (ग्लूटेन-मुक्त)", desc: "फाइबर से भरपूर जो पेट के बैक्टीरिया को स्वस्थ रखता है और फ्लेयर-अप को कम करता है।" },
    te: { name: "ఓట్స్ (గ్లూటెన్ లేనివి)", desc: "పీచు పదార్థం సమృద్ధిగా ఉంటుంది. జీర్ణక్రియను మెరుగుపరిచి చర్మ ఆరోగ్యాన్ని కాపాడుతుంది." }
  },
  {
    id: "refined_sugar",
    status: "trigger",
    en: { name: "Refined Sugar", desc: "Highly inflammatory. Spikes insulin levels and triggers psoriasis flare-ups. Avoid completely." },
    hi: { name: "परिष्कृत चीनी", desc: "अत्यधिक सूजन बढ़ाने वाली। इंसुलिन बढ़ाती है और सोरायसिस को भड़काती है। पूरी तरह से बचें।" },
    te: { name: "చక్కెర / స్వీట్లు", desc: "శరీరంలో మంటను పెంచుతుంది. పొరసరియాసిస్ ను మరింత తీవ్రం చేస్తుంది కాబట్టి పూర్తిగా దూరం చేయండి." }
  },
  {
    id: "cows_milk",
    status: "trigger",
    en: { name: "Cow's Milk", desc: "Casein protein and arachidonic acid can act as triggers. Try unsweetened coconut/almond milk instead." },
    hi: { name: "गाय का दूध", desc: "इसमें मौजूद प्रोटीन और एसिड ट्रिगर का काम कर सकते हैं। इसके बजाय नारियल या बादाम का दूध आजमाएं।" },
    te: { name: "ఆవు పాలు", desc: "దీనిలోని ప్రొటీన్ కొందరు పిల్లల్లో అలర్జీని పెంచుతుంది. దీనికి బదులుగా కొబ్బరి/బాదం పాలు ఇవ్వవచ్చు." }
  },
  {
    id: "wheat_gluten",
    status: "trigger",
    en: { name: "Wheat & Gluten", desc: "High correlation with psoriasis flares. Try eliminating wheat, barley, and rye to see if skin clears." },
    hi: { name: "गेहूं और ग्लूटेन", desc: "सोरायसिस बढ़ाने से गहरा संबंध। त्वचा में सुधार देखने के लिए गेहूं, जौ और राई से बचें।" },
    te: { name: "గోధుమలు / గ్లూటెన్", desc: "పొరసరియాసిస్ పెంచడానికి గ్లూటెన్ ఒక కారణం కావచ్చు. కొన్ని రోజులు గోధుమ ఆహారాలను నివారించండి." }
  },
  {
    id: "tomatoes",
    status: "trigger",
    en: { name: "Tomatoes", desc: "Nightshade family. Contains solanine, which can cause gut irritation and skin flare-ups in some children." },
    hi: { name: "टमाटर", desc: "टमाटर, नाइटशेड परिवार की सब्जी। इसमें सोलेनिन होता है, जो पेट और त्वचा की सूजन को बढ़ा सकता है।" },
    te: { name: "టమోటాలు", desc: "నైట్షేడ్ జాతికి చెందినవి. దీనిలోని సొలనిన్ కొందరికి చర్మ దురదలను పెంచుతుంది." }
  },
  {
    id: "white_potatoes",
    status: "trigger",
    en: { name: "White Potatoes", desc: "Nightshade family. Try sweet potatoes instead as a safer, vitamin-rich alternative." },
    hi: { name: "सफेद आलू", desc: "नाइटशेड परिवार। सुरक्षित और विटामिन-युक्त विकल्प के रूप में शकरकंद का उपयोग करें।" },
    te: { name: "తెల్ల బంగాళాదుంపలు", desc: "నైట్షేడ్ కూరగాయ. దీనికి బదులుగా విటమిన్లు అధికంగా ఉండే చిలగడదుంపలు వాడడం మంచిది." }
  },
  {
    id: "eggplant",
    status: "trigger",
    en: { name: "Eggplant", desc: "Nightshade family. Contains trace solanine and histamine which can worsen itching." },
    hi: { name: "बैंगन", desc: "बैंगन, नाइटशेड परिवार। इसमें सोलेनिन और हिस्टामाइन होते हैं जो खुजली को बदतर बना सकते हैं।" },
    te: { name: "వంకాయ", desc: "నైట్షేడ్ కుటుంబం. దీనిలోని హిస్టామైన్ చర్మ దురదను మరింత పెంచుతుంది." }
  },
  {
    id: "peppers",
    status: "trigger",
    en: { name: "Bell Peppers / Chilies", desc: "Nightshade family. Capasaicin or irritants can trigger cellular pathways linked to skin inflammation." },
    hi: { name: "शिमला मिर्च / मिर्च", desc: "शिमला मिर्च, नाइटशेड परिवार। इसमें मौजूद तत्व त्वचा की सूजन और खुजली को ट्रिगर कर सकते हैं।" },
    te: { name: "మిరపకాయలు / బెల్ పెప్పర్స్", desc: "నైట్షేడ్ జాతి. దీనిలోని కారం లేదా ఘాటు చర్మ దురదను ప్రేరేపించవచ్చు." }
  },
  {
    id: "chips_processed",
    status: "trigger",
    en: { name: "Processed Snacks / Chips", desc: "High in trans fats, sodium, and preservatives. Highly inflammatory for a toddler's gut." },
    hi: { name: "चिप्स / प्रोसेस्ड स्नैक्स", desc: "चिप्स, ट्रांस फैट, सोडियम और परिरक्षकों से भरपूर। बच्चे के पेट के लिए अत्यधिक सूजन बढ़ाने वाला।" },
    te: { name: "చిప్స్ / ప్యాకెట్ ఫుడ్స్", desc: "చిప్స్, ట్రాన్స్ ఫ్యాట్స్ మరియు ప్రిజర్వేటివ్స్ అధికంగా ఉంటాయి. शरीరంలో వేడిని పెంచుతాయి." }
  },
  {
    id: "red_meat",
    status: "trigger",
    en: { name: "Red & Processed Meat", desc: "High in arachidonic acid, which directly fuels the inflammatory pathways of psoriasis." },
    hi: { name: "लाल और प्रोसेस्ड मांस", desc: "लाल मांस, एराकिडोनिक एसिड से भरपूर, जो सीधे सोरायसिस की सूजन को बढ़ावा देता है।" },
    te: { name: "రెడ్ మీట్ / ప్యాక్డ్ మాంసం", desc: "రెడ్ మీట్, శరీరంలో ఇన్ఫ్లమేషన్ను నేరుగా పెంచే కొవ్వులు దీనిలో ఎక్కువగా ఉంటాయి." }
  }
];

// ==========================================================================
// WEEKLY DIET PLAN DATASET BY AGE GROUP
// ==========================================================================
const weeklyPlanData = {
  en: {
    infant_toddler: {
      mon: { b: "Spinach Green Oats with Bananas", l: "Salmon & Sweet Potato Mash", d: "Steamed Zucchini & Rice Mash", s: "Avocado Banana Pudding" },
      tue: { b: "Berry Oatmeal Bowl", l: "Zucchini Rice Mash", d: "Salmon Mash with Carrots", s: "Banana Puree with Chia Seeds" },
      wed: { b: "Avocado & Banana Smoothie", l: "Sweet Potato Salmon Mash", d: "Soft Carrot Rice", s: "Fresh Blueberries (Halves)" },
      thu: { b: "Warm Apple Oats", l: "Steamed Carrot & Rice Mash", d: "Salmon & Zucchini Mash", s: "Avocado Mash on Gluten-Free Toast" },
      fri: { b: "Spinach Green Oats", l: "Salmon & Sweet Potato Mash", d: "Zucchini Rice Porridge", s: "Avocado Banana Pudding" },
      sat: { b: "Berry Banana Oats", l: "Rice & Zucchini Mash", d: "Soft Salmon Rice", s: "Steamed Carrot Fingers" },
      sun: { b: "Avocado Banana Smoothie", l: "Salmon & Sweet Potato Mash", d: "Soft Carrot & Rice Mash", s: "Soft Gluten-Free Bread with Avocado" }
    },
    child: {
      mon: { b: "Berry Oats Smoothie Bowl", l: "Salmon Sweet Potato Wedges", d: "Steamed Zucchini & Chicken Rice", s: "Baked Zucchini Sticks" },
      tue: { b: "Warm Apple Cinnamon Oats", l: "Avocado Chicken Salad Boat", d: "Soft Salmon Rice Bowl", s: "Fresh Apple Slices & Walnuts" },
      wed: { b: "Avocado Banana Smoothie", l: "Baked Salmon with Carrot Mash", d: "Zucchini Rice Porridge", s: "Halved Blueberries" },
      thu: { b: "Spinach Green Oats Bowl", l: "Avocado Egg Salad Boat", d: "Baked Salmon & Sweet Potato", s: "Crispy Zucchini Sticks" },
      fri: { b: "Berry Banana Oatmeal Bowl", l: "Chicken Rice with Steamed Carrots", d: "Salmon Zucchini Rice", s: "Avocado Mash Toast" },
      sat: { b: "Oats with Stewed Apples", l: "Baked Salmon Wedges", d: "Chicken Veggie Rice Mash", s: "Steamed Carrot sticks" },
      sun: { b: "Avocado Smoothie", l: "Salmon & Sweet Potato Wedges", d: "Steamed Veggies & Rice", s: "Banana Slices with Chia Seeds" }
    },
    teen: {
      mon: { b: "Berry Spinach Protein Shake", l: "Tuna Avocado Salad Wrap", d: "Grilled Salmon Quinoa Bowl", s: "Sweet Potato Fries & Guac" },
      tue: { b: "Spinach Oats Bowl with Blueberries", l: "Chicken Quinoa Spinach Salad", d: "Baked Salmon & Broccoli Rice", s: "Raw Walnuts & Apple" },
      wed: { b: "Avocado Banana Protein Shake", l: "Tuna Lettuce Wraps", d: "Salmon Sweet Potato Bowl", s: "Chia Seed Berry Pudding" },
      thu: { b: "Oatmeal with Almond Milk & Berries", l: "Avocado Egg Toast on GF Bread", d: "Grilled Chicken Quinoa Bowl", s: "Baked Sweet Potato Fries" },
      fri: { b: "Berry Spinach Protein Smoothie", l: "Salmon Salad with EVOO", d: "Chicken Zucchini Rice Pot", s: "Avocado Toast" },
      sat: { b: "Warm Apple Cinnamon Oats Bowl", l: "Tuna Salad Lettuce Boats", d: "Baked Salmon Quinoa Plate", s: "Finely Ground Walnuts & Berries" },
      sun: { b: "Avocado Smoothie Bowl", l: "Grilled Salmon Quinoa Salad", d: "Chicken Steamed Green Bowl", s: "Sweet Potato Fries" }
    },
    adult: {
      mon: { b: "Avocado & Egg on GF Toast", l: "Berry Spinach Quinoa Bowl", d: "Pan-Seared Salmon & Broccoli", s: "Steamed Carrot & Zucchini" },
      tue: { b: "Berry Spinach Oats Bowl", l: "Salmon Salad with EVOO & Lemon", d: "Chicken Quinoa spinach Bowl", s: "Raw Walnuts & Blueberries" },
      wed: { b: "Avocado Protein Smoothie", l: "Tuna Avocado Salad Wraps", d: "Salmon & Baked Sweet Potato", s: "Steamed Veggie Medley" },
      thu: { b: "Oatmeal with Blueberries & Chia", l: "Pan-Seared Salmon Salad", d: "Chicken Broccoli Rice Plate", s: "Avocado Toast" },
      fri: { b: "Spinach Green Oats Bowl", l: "Quinoa Salad with Olive Oil", d: "Baked Salmon & Sweet Potato", s: "Raw Walnuts" },
      sat: { b: "Avocado Toast with Poached Egg", l: "Tuna Lettuce Wraps with EVOO", d: "Salmon Zucchini Quinoa", s: "Steamed Zucchini sticks" },
      sun: { b: "Berry Protein Shake", l: "Salmon Quinoa Salad Bowl", d: "Steamed Veggies & Chicken Rice", s: "Avocado Salad" }
    },
    senior: {
      mon: { b: "Soft Berry Spinach Oatmeal", l: "Soft Poached Salmon & Mash", d: "Soft Steamed Carrot & Zucchini", s: "Avocado Banana Custard" },
      tue: { b: "Oats Cooked Soft with Apples", l: "Mashed Sweet Potato & Salmon", d: "Zucchini Rice Porridge", s: "Avocado Mash" },
      wed: { b: "Avocado Banana Smoothie", l: "Soft Salmon Zucchini Mash", d: "Soft Rice & Carrot Mash", s: "Warm Ginger Tea & Berries" },
      thu: { b: "Soft Cooked Spinach Oats", l: "Soft Poached Salmon & Zucchini", d: "Sweet Potato Mash & Rice", s: "Avocado Banana Custard" },
      fri: { b: "Soft Berry Oatmeal", l: "Salmon & Sweet Potato Puree", d: "Zucchini Rice Porridge", s: "Soft Mash Avocado Toast" },
      sat: { b: "Oats with Soft Blueberries", l: "Soft Salmon Rice Mash", d: "Steamed Carrot Zucchini Mash", s: "Turmeric Ginger Tea" },
      sun: { b: "Avocado Smoothie", l: "Soft Poached Salmon & Mash", d: "Soft Rice & Zucchini Mash", s: "Soft Avocado Toast" }
    }
  },
  hi: {
    infant_toddler: {
      mon: { b: "पालक हरी ओट्स और केला", l: "साल्मन और शकरकंद मैश", d: "उबली जुकिनी और चावल मैश", s: "एवोकैडो केला पुडिंग" },
      tue: { b: "बेरी ओटमील बाउल", l: "जुकिनी और चावल मैश", d: "साल्मन और गाजर मैश", s: "केला प्यूरी और चिया बीज" },
      wed: { b: "एवोकैडो केला स्मूदी", l: "शकरकंद साल्मन मैश", d: "नरम गाजर चावल", s: "कटी हुई ताजी ब्लूबेरी" },
      thu: { b: "एप्पल ओट्स", l: "उबली गाजर और चावल", d: "साल्मन और जुकिनी मैश", s: "एवोकैडो ग्लूटेन-मुक्त टोस्ट" },
      fri: { b: "पालक हरी ओट्स", l: "साल्मन और शकरकंद", d: "जुकिनी चावल की कांजी", s: "एवोकैडो केला पुडिंग" },
      sat: { b: "बेरी केला ओट्स", l: "चावल और जुकिनी मैश", d: "नरम साल्मन चावल", s: "उबली गाजर फिंगर्स" },
      sun: { b: "एवोकैडो केला स्मूदी", l: "साल्मन शकरकंद मैश", d: "नरम गाजर चावल", s: "एवोकैडो ग्लूटेन-मुक्त ब्रेड" }
    },
    child: {
      mon: { b: "बेरी ओट्स स्मूदी बाउल", l: "बेक्ड साल्मन और शकरकंद वेजेस", d: "जुकिनी चिकन चावल", s: "बेक्ड जुकिनी स्टिक्स" },
      tue: { b: "एप्पल दालचीनी ओट्स", l: "एवोकैडो चिकन लंच बॉक्स", d: "साल्मन राइस बाउल", s: "ताजा सेब और अखरोट" },
      wed: { b: "एवोकैडो केला स्मूदी", l: "बेक्ड साल्मन और गाजर मैश", d: "जुकिनी चावल कांजी", s: "ताजी कटी ब्लूबेरी" },
      thu: { b: "पालक हरी ओट्स बाउल", l: "एवोकैडो अंडा सलाद बोट", d: "बेक्ड साल्मन और शकरकंद", s: "कुरकुरी जुकिनी स्टिक्स" },
      fri: { b: "बेरी केला ओटमील बाउल", l: "चिकन चावल और उबली गाजर", d: "साल्मन जुकिनी चावल", s: "एवोकैडो टोस्ट" },
      sat: { b: "सेब और ओट्स दलिया", l: "बेक्ड साल्मन वेजेस", d: "चिकन सब्जी चावल मैश", s: "उबली हुई गाजर" },
      sun: { b: "एवोकैडो स्मूदी", l: "साल्मन शकरकंद वेजेस", d: "उबली सब्जी और चावल", s: "केला स्लाइस और चिया" }
    },
    teen: {
      mon: { b: "बेरी पालक प्रोटीन शेक", l: "ट्यूना एवोकैडो सलाद रैप", d: "ग्रिल्ड साल्मन क्विनोआ बाउल", s: "शकरकंद फ्राइज़ और एवोकैडो डिप" },
      tue: { b: "पालक ओट्स बाउल", l: "चिकन क्विनोआ सलाद", d: "बेक्ड साल्मन ब्रोकोली चावल", s: "अखरोट और सेब" },
      wed: { b: "एवोकैडो प्रोटीन शेक", l: "ट्यूना लेट्यूस रैप", d: "साल्मन शकरकंद बाउल", s: "चिया बेरी पुडिंग" },
      thu: { b: "ओट्स और बादाम दूध", l: "एवोकैडो अंडा टोस्ट", d: "ग्रिल्ड चिकन क्विनोआ", s: "बेक्ड शकरकंद" },
      fri: { b: "बेरी पालक स्मूदी", l: "साल्मन सलाद और जैतून तेल", d: "चिकन जुकिनी चावल", s: "एवोकैडो टोस्ट" },
      sat: { b: "एप्पल दालचीनी ओट्स बाउल", l: "ट्यूना सलाद लेट्यूस बोट", d: "बेक्ड साल्मन क्विनोआ", s: "अखरोट और बेरीज" },
      sun: { b: "एवोकैडो स्मूदी बाउल", l: "ग्रिल्ड साल्मन क्विनोआ", d: "चिकन स्टीम बाउल", s: "शकरकंद फ्राइज़" }
    },
    adult: {
      mon: { b: "एवोकैडो और अंडा टोस्ट", l: "बेरी पालक क्विनोआ सलाद", d: "पैन-सीयर साल्मन और ब्रोकोली", s: "उबली गाजर और जुकिनी" },
      tue: { b: "बेरी पालक ओट्स बाउल", l: "साल्मन सलाद और नींबू ड्रेसिंग", d: "चिकन क्विनोआ पालक बाउल", s: "अखरोट और ब्लूबेरी" },
      wed: { b: "एवोकैडो प्रोटीन स्मूदी", l: "ट्यूना एवोकैडो सलाद रैप", d: "साल्मन और बेक्ड शकरकंद", s: "उबली सब्जियों का मिश्रण" },
      thu: { b: "ओट्स, ब्लूबेरी और चिया", l: "पैन-सीयर साल्मन सलाद", d: "चिकन ब्रोकोली चावल प्लेट", s: "एवोकैडो टोस्ट" },
      fri: { b: "पालक हरी ओट्स बाउल", l: "क्विनोआ सलाद और जैतून तेल", d: "बेक्ड साल्मन शकरकंद", s: "कच्चे अखरोट" },
      sat: { b: "एवोकैडो अंडा टोस्ट", l: "ट्यूना लेट्यूस रैप और जैतून तेल", d: "साल्मन जुकिनी क्विनोआ", s: "उबली जुकिनी स्टिक्स" },
      sun: { b: "बेरी प्रोटीन शेक", l: "साल्मन क्विनोआ सलाद बाउल", d: "सब्जियां और चिकन चावल", s: "एवोकैडो सलाद" }
    },
    senior: {
      mon: { b: "नरम बेरी पालक ओट्स", l: "नरम पोच्ड साल्मन और मर्च प्यूरी", d: "नरम उबली गाजर और जुकिनी", s: "एवोकैडो केला कस्टर्ड" },
      tue: { b: "सेब के साथ पका नरम ओट्स", l: "मैश किया शकरकंद और साल्मन", d: "जुकिनी चावल की कांजी", s: "एवोकैडो मैश" },
      wed: { b: "एवोकैडो केला स्मूदी", l: "साल्मन जुकिनी मैश", d: "नरम चावल और गाजर मैश", s: "अदरक चाय और बेरीज" },
      thu: { b: "पालक रस में पका नरम ओट्स", l: "नरम पोच्ड साल्मन और जुकिनी", d: "शकरकंद मैश और चावल", s: "एवोकैडो केला कस्टर्ड" },
      fri: { b: "नरम बेरी ओट्स", l: "साल्मन और शकरकंद प्यूरी", d: "जुकिनी चावल कांजी", s: "एवोकैडो टोस्ट मैश" },
      sat: { b: "ओट्स और नरम ब्लूबेरी", l: "नरम साल्मन चावल मैश", d: "उबली गाजर जुकिनी मैश", s: "हल्दी अदरक की चाय" },
      sun: { b: "एवोकैडो स्मूदी", l: "नरम पोच्ड साल्मन और मर्च", d: "नरम चावल और जुकिनी मैश", s: "नरम एवोकैडो टोस्ट" }
    }
  },
  te: {
    infant_toddler: {
      mon: { b: "పాలకూర గ్రీన్ ఓట్స్", l: "సాల్మన్ చిలగడదుంప మ్యాష్", d: "మెత్తటి అన్నం జుకిని మ్యాష్", s: "అవకాడో అరటిపండు పుడ్డింగ్" },
      tue: { b: "బెర్రీ ఓట్మీల్ బౌల్", l: "జుకిని అన్నం మ్యాష్", d: "సాల్మన్ క్యారెట్ మ్యాష్", s: "అరటిపండు ప్యూరీ, చియా విత్తనాలు" },
      wed: { b: "అవకాడో అరటిపండు స్మూదీ", l: "చిలగడదుంప సాల్మన్ మ్యాష్", d: "క్యారెట్ అన్నం", s: "కట్ చేసిన బ్లూబెర్రీస్" },
      thu: { b: "ఆపిల్ ఓట్స్", l: "క్యారెట్ అన్నం మ్యాష్", d: "సాల్మన్ జుకిని మ్యాష్", s: "అవకాడో గ్లూటెన్-ఫ్రీ టోస్ట్" },
      fri: { b: "పాలకూర గ్రీన్ ఓట్స్", l: "సాల్మన్ చిలగడదుంప", d: "జుకిని అన్నం గంజి", s: "అవకాడో అరటిపండు పుడ్డింగ్" },
      sat: { b: "బెర్రీ అరటిపండు ఓట్స్", l: "అన్నం మరియు జుకిని మ్యాష్", d: "మెత్తటి సాల్మన్ అన్నం", s: "క్యారెట్ ఫింగర్స్" },
      sun: { b: "అవకాడో బనానా స్మూదీ", l: "సాల్మన్ చిలగడదుంప మ్యాష్", d: "క్యారెట్ అన్నం మ్యాష్", s: "గ్లూటెన్-ఫ్రీ బ్రెడ్, అవకాడో" }
    },
    child: {
      mon: { b: "బెర్రీ ఓట్స్ స్మూదీ బౌల్", l: "బేక్డ్ సాల్మన్ మరియు చిలగడదుంప వెజెస్", d: "జుకిని చికెన్ అన్నం", s: "బేక్డ్ జుకిని స్టిక్స్" },
      tue: { b: "ఆపిల్ దాల్చినచెక్క ఓట్స్", l: "అవకాడో చికెన్ లంచ్ బాక్స్", d: "సాల్మన్ రైస్ బౌల్", s: "తాజా ఆపిల్ & వాల్నట్స్" },
      wed: { b: "అవకాడో అరటిపండు స్మూదీ", l: "బేక్డ్ సాల్మన్, క్యారెట్ మ్యాష్", d: "జుకిని అన్నం గంజి", s: "బ్లూబెర్రీస్ ముక్కలు" },
      thu: { b: "పాలకూర గ్రీన్ ఓట్స్ బౌల్", l: "అవకాడో గుడ్డు సలాడ్ బోట్", d: "బేక్డ్ సాల్మన్, చిలగడదుంప", s: "కురకురలాడే జుకిని స్టిక్స్" },
      fri: { b: "బెర్రీ అరటిపండు ఓట్స్ బౌల్", l: "చికెన్ అన్నం, ఉడికించిన క్యారెట్లు", d: "సాల్మన్ జుకిని అన్నం", s: "అవకాడో టోస్ట్" },
      sat: { b: "ఆపిల్ ఓట్స్ గంజి", l: "బేక్డ్ సాల్మన్ వెజెస్", d: "చికెన్ వెజ్ రైస్ మ్యాష్", s: "ఉడికించిన క్యారెట్లు" },
      sun: { b: "అవకాడో స్మూదీ", l: "సాల్మన్ చిలగడదుంప వెజెస్", d: "ఉడికించిన కూరగాయలు, అన్నం", s: "అరటిపండు ముక్కలు, చియా" }
    },
    teen: {
      mon: { b: "బెర్రీ పాలకూర ప్రొటీన్ షేక్", l: "ట్యూనా అవకాడో సలాడ్ రాప్", d: "గ్రిల్డ్ సాల్మన్ క్వినోఆ బౌల్", s: "చిలగడదుంప ఫ్రైస్ & అవకాడో డిప్" },
      tue: { b: "పాలకూర ఓట్స్ బౌల్", l: "చికెన్ క్వినోఆ సలాడ్", d: "బేక్డ్ సాల్మన్ బ్రోకోలి అన్నం", s: "వాల్నట్స్ & ఆపిల్" },
      wed: { b: "అవకాడో ప్రొటీన్ షేక్", l: "ట్యూనా లెట్యూస్ రాప్", d: "సాల్మన్ చిలగడదుంప బౌల్", s: "చియా బెర్రీ పుడ్డింగ్" },
      thu: { b: "ఓట్స్, బాదం పాలు", l: "అవకాడో గుడ్డు టోస్ట్", d: "గ్రిల్డ్ చికెన్ క్వినోఆ", s: "బేక్డ్ చిలగడదుంప ఫ్రైస్" },
      fri: { b: "బెర్రీ పాలకూర స్మూదీ", l: "సాల్మన్ సలాడ్, ఆలివ్ ఆయిల్", d: "చికెన్ జుకిని అన్నం", s: "అవకాడో టోస్ట్" },
      sat: { b: "ఆపిల్ దాల్చినచెక్క ఓట్స్ బౌల్", l: "ట్యూనా సలాడ్ లెట్యూస్ బోట్", d: "బేక్డ్ సాల్మన్ క్వినోఆ", s: "వాల్నట్స్ & బెర్రీలు" },
      sun: { b: "అవకాడో స్మూదీ బౌల్", l: "గ్రిల్డ్ సాల్మన్ క్వినోఆ", d: "చికెన్ స్టీమ్ బౌల్", s: "చిలగడదుంప ఫ్రైస్" }
    },
    adult: {
      mon: { b: "అవకాడో మరియు గుడ్డు టోస్ట్", l: "బెర్రీ పాలకూర క్వినోఆ సలాడ్", d: "పాన్-సీర్ సాల్మన్, బ్రోకోలి", s: "ఉడికించిన క్యారెట్ & జుకిని" },
      tue: { b: "బెర్రీ పాలకూర ఓట్స్ బౌల్", l: "సాల్మన్ సలాడ్, నిమ్మ రసం", d: "చికెన్ క్వినోఆ పాలకూర బౌల్", s: "వాల్నట్స్ & బ్లూబెర్రీస్" },
      wed: { b: "అవకాడో ప్రొటీన్ స్మూదీ", l: "ట్యూనా అవకాడో సలాడ్ రాప్", d: "సాల్మన్, బేక్డ్ చిలగడదుంప", s: "ఉడికించిన కూరగాయల మిశ్రమం" },
      thu: { b: "ఓట్స్, బ్లూబెర్రీస్, చియా", l: "పాన్-సీర్ సాల్మన్ సలాడ్", d: "చికెన్ బ్రోకోలి అన్నం ప్లేట్", s: "అవకాడో టోస్ట్" },
      fri: { b: "పాలకూర గ్రీన్ ఓట్స్ బౌల్", l: "క్వినోఆ సలాడ్, ఆలివ్ ఆయిల్", d: "బేక్డ్ సాల్మన్ చిలగడదుంప", s: "పచ్చి వాల్నట్స్" },
      sat: { b: "అవకాడో గుడ్డు టోస్ట్", l: "ట్యూనా లెట్యూస్ రాప్, ఆలివ్ ఆయిల్", d: "సాల్మన్ జుకిని క్వినోఆ", s: "ఉడికించిన జుకిని ముక్కలు" },
      sun: { b: "బెర్రీ ప్రొటీన్ షేక్", l: "సాల్మన్ క్వినోఆ సలాడ్ బౌల్", d: "కూరగాయలు, చికెన్ అన్నం", s: "అవకాడో సలాడ్" }
    },
    senior: {
      mon: { b: "మెత్తటి బెర్రీ పాలకూర ఓట్స్", l: "మెత్తటి సాల్మన్, ప్యూరీ", d: "మెత్తటి క్యారెట్ & జుకిని", s: "అవకాడో అరటిపండు కస్టర్డ్" },
      tue: { b: "ఆపిల్ తో వండిన మెత్తటి ఓట్స్", l: "మ్యాష్ చేసిన చిలగడదుంప, సాల్మన్", d: "జుకిని అన్నం గంజి", s: "అవకాడో మ్యాష్" },
      wed: { b: "అవకాడో అరటిపండు స్మూదీ", l: "సాల్మన్ జుకిని మ్యాష్", d: "మెత్తటి అన్నం, క్యారెట్ మ్యాష్", s: "అల్లం టీ, బెర్రీలు" },
      thu: { b: "పాలకూర జ్యూస్ గ్రీన్ ఓట్స్", l: "మెత్తటి సాల్మన్, జుకిని", d: "చిలగడదుంప మ్యాష్, అన్నం", s: "అవకాడో అరటిపండు కస్టర్డ్" },
      fri: { b: "మెత్తటి బెర్రీ ఓట్స్", l: "సాల్మన్, చిలగడదుంప ప్యూరీ", d: "జుకిని అన్నం గంజి", s: "మెత్తటి అవకాడో టోస్ట్" },
      sat: { b: "ఓట్స్, మెత్తటి బ్లూబెర్రీస్", l: "మెత్తటి సాల్మన్ అన్నం మ్యాష్", d: "ఉడికించిన క్యారెట్ జుకిని మ్యాష్", s: "పసుపు అల్లం టీ" },
      sun: { b: "అవకాడో స్మూదీ", l: "మెత్తటి సాల్మన్, మ్యాష్", d: "మెత్తటి అన్నం, జుకిని మ్యాష్", s: "మెత్తటి అవకాడో టోస్ట్" }
    }
  }
};

// ==========================================================================
// CORE APPLICATION LOGIC
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  let currentLanguage = localStorage.getItem("app_lang") || "en";
  let currentAgeGroup = localStorage.getItem("app_age_group") || "infant_toddler";
  
  // DOM Elements
  const langSelect = document.getElementById("lang-select");
  const ageSelect = document.getElementById("age-select");
  const themeToggle = document.getElementById("theme-toggle");
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");
  const foodSearchInput = document.getElementById("food-search");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const checkerResultsContainer = document.getElementById("checker-results");
  const weeklyPlanGrid = document.getElementById("weekly-plan-grid");
  const recipeListContainer = document.getElementById("recipe-list");
  
  // Dynamic Page Containers
  const overviewWelcomeText = document.getElementById("overview-welcome-text");
  const overviewPillarsList = document.getElementById("overview-pillars-list");
  const activeAgeBadge = document.getElementById("active-age-badge");
  const illustrationAgeTag = document.getElementById("illustration-age-tag");
  const ageVisualCard = document.getElementById("age-group-visual-card");
  
  const skincareIntroText = document.getElementById("skincare-intro-text");
  const skincareRoutineTitle = document.getElementById("skincare-routine-title");
  const skincareRoutineList = document.getElementById("skincare-routine-list");
  const medicalTreatmentsList = document.getElementById("medical-treatments-list");
  
  const dietIntroText = document.getElementById("diet-intro-text");
  const dietTriggersIntro = document.getElementById("diet-triggers-intro");
  const dietTriggersList = document.getElementById("diet-triggers-list");
  const dietBeneficialIntro = document.getElementById("diet-beneficial-intro");
  const dietBeneficialList = document.getElementById("diet-beneficial-list");
  
  const recipesIntroText = document.getElementById("recipes-intro-text");
  const researchIntroText = document.getElementById("research-intro-text");
  const globalResearchList = document.getElementById("global-research-list");

  // Mobile day selectors
  const dayTabButtons = document.querySelectorAll(".day-tab-btn");
  let activeMobileDay = "mon";

  // Set initial selectors
  langSelect.value = currentLanguage;
  ageSelect.value = currentAgeGroup;

  // Initialize Page Content
  initTheme();
  renderApp();

  // 1. SELECT LISTENER - LANGUAGE SWITCH
  langSelect.addEventListener("change", (e) => {
    currentLanguage = e.target.value;
    localStorage.setItem("app_lang", currentLanguage);
    document.documentElement.lang = currentLanguage;
    renderApp();
  });

  // 2. SELECT LISTENER - AGE GROUP SWITCH
  ageSelect.addEventListener("change", (e) => {
    currentAgeGroup = e.target.value;
    localStorage.setItem("app_age_group", currentAgeGroup);
    renderApp();
  });

  // 3. MAIN RENDERING HUB
  function renderApp() {
    updateLocalization(currentLanguage);
    updateAgeGroupDynamicContent(currentLanguage, currentAgeGroup);
    renderFoodChecker(getActiveFoodFilter(), foodSearchInput.value);
    renderWeeklyPlanner(currentLanguage, currentAgeGroup, activeMobileDay);
    renderRecipes(currentLanguage, currentAgeGroup);
  }

  // 4. GLOBAL TRANSLATION PARSER
  function updateLocalization(lang) {
    const langData = window.translations[lang];
    if (!langData) return;

    // Translate standard static elements
    document.querySelectorAll("[data-translate]").forEach(el => {
      const key = el.getAttribute("data-translate");
      if (langData[key]) {
        if (el.tagName === "INPUT" && el.hasAttribute("placeholder")) {
          el.setAttribute("placeholder", langData[key]);
        } else {
          el.textContent = langData[key];
        }
      }
    });

    if (foodSearchInput) {
      foodSearchInput.placeholder = langData.checker_placeholder;
    }
  }

  // 5. AGE GROUP DYNAMIC CONTENT INJECTOR
  function updateAgeGroupDynamicContent(lang, ageGroup) {
    const langData = window.translations[lang];
    if (!langData) return;
    
    const ageData = langData.age_groups[ageGroup];
    if (!ageData) return;

    // Badges & Labels
    const badgeLabel = langData["age_" + (ageGroup === "senior" ? "65_plus" : ageGroup === "adult" ? "20_64" : ageGroup === "teen" ? "13_19" : ageGroup === "child" ? "4_12" : "0_3")];
    activeAgeBadge.textContent = badgeLabel;
    illustrationAgeTag.textContent = badgeLabel;

    // Update SVG/FontAwesome Icon based on Age Group
    let visualIcon = "fa-child-reaching";
    if (ageGroup === "child") visualIcon = "fa-child";
    if (ageGroup === "teen") visualIcon = "fa-people-pulling";
    if (ageGroup === "adult") visualIcon = "fa-user-tie";
    if (ageGroup === "senior") visualIcon = "fa-user-nurse";
    
    const illustrationContainer = ageVisualCard.querySelector(".child-illustration");
    if (illustrationContainer) {
      illustrationContainer.className = `fa-solid ${visualIcon} child-illustration`;
    }

    // Overview Welcome Card
    overviewWelcomeText.textContent = ageData.intro;

    // Overview Pillars - Generated dynamically for variety
    overviewPillarsList.innerHTML = "";
    const pillarIcons = ["fa-feather-pointed", "fa-carrot", "fa-prescription-bottle-medical", "fa-heart-circle-bolt"];
    const pillarTexts = [
      ageData.skincare_title,
      langData.nav_diet + " Control",
      ageData.treatments[0].title + " & " + ageData.treatments[1].title,
      "Manage Age-Specific Stress & Triggers"
    ];

    pillarTexts.forEach((text, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <div class="pillar-icon"><i class="fa-solid ${pillarIcons[index]}"></i></div>
        <div class="pillar-text">${text}</div>
      `;
      overviewPillarsList.appendChild(li);
    });

    // Skincare Section
    skincareIntroText.textContent = ageData.skincare_intro;
    skincareRoutineTitle.textContent = ageData.skincare_title;
    
    skincareRoutineList.innerHTML = "";
    ageData.skincare_steps.forEach(step => {
      const li = document.createElement("li");
      li.textContent = step;
      skincareRoutineList.appendChild(li);
    });

    // Medical treatments
    medicalTreatmentsList.innerHTML = "";
    ageData.treatments.forEach(med => {
      const div = document.createElement("div");
      div.className = "med-item";
      div.innerHTML = `
        <h4>${med.title}</h4>
        <p>${med.desc}</p>
      `;
      medicalTreatmentsList.appendChild(div);
    });

    // Diet Section
    dietIntroText.textContent = ageData.intro;
    dietTriggersIntro.textContent = ageData.triggers_intro;
    
    dietTriggersList.innerHTML = "";
    ageData.triggers.forEach(trig => {
      const div = document.createElement("div");
      div.className = "food-item-block";
      div.innerHTML = `
        <h4>${trig.title}</h4>
        <p>${trig.desc}</p>
      `;
      dietTriggersList.appendChild(div);
    });

    dietBeneficialIntro.textContent = ageData.beneficial_intro;
    
    dietBeneficialList.innerHTML = "";
    ageData.beneficial.forEach(ben => {
      const div = document.createElement("div");
      div.className = "food-item-block";
      div.innerHTML = `
        <h4>${ben.title}</h4>
        <p>${ben.desc}</p>
      `;
      dietBeneficialList.appendChild(div);
    });

    // Recipe Intro & Research Intro
    recipesIntroText.textContent = ageData.recipes_intro;
    researchIntroText.textContent = ageData.research_intro;

    // Research Section List
    globalResearchList.innerHTML = "";
    const researchIcons = ["fa-graduation-cap", "fa-dna", "fa-mortar-pestle"];
    ageData.research.forEach((res, index) => {
      const div = document.createElement("div");
      div.className = "info-card research-card";
      div.innerHTML = `
        <div class="research-icon-wrapper"><i class="fa-solid ${researchIcons[index] || "fa-microscope"}"></i></div>
        <h3>${res.title}</h3>
        <p>${res.desc}</p>
      `;
      globalResearchList.appendChild(div);
    });
  }

  // 6. TAB CONTROLLER
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const tabId = btn.getAttribute("data-tab");
      
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      tabPanes.forEach(pane => {
        pane.classList.remove("active");
        if (pane.id === tabId) {
          pane.classList.add("active");
        }
      });
      
      window.scrollTo({
        top: document.querySelector(".tab-nav").offsetTop - 90,
        behavior: 'smooth'
      });
    });
  });

  // 7. THEME CONTROLLER
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("app_theme", isDark ? "dark" : "light");
  });

  function initTheme() {
    const savedTheme = localStorage.getItem("app_theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }

  // 8. FOOD SAFETY CHECKER SEARCH & FILTER
  foodSearchInput.addEventListener("input", () => {
    const filter = getActiveFoodFilter();
    const query = foodSearchInput.value;
    renderFoodChecker(filter, query);
  });

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const filter = btn.getAttribute("data-filter");
      const query = foodSearchInput.value;
      renderFoodChecker(filter, query);
    });
  });

  function getActiveFoodFilter() {
    let activeFilter = "all";
    filterButtons.forEach(btn => {
      if (btn.classList.contains("active")) {
        activeFilter = btn.getAttribute("data-filter");
      }
    });
    return activeFilter;
  }

  function renderFoodChecker(filter, searchQuery = "") {
    if (!checkerResultsContainer) return;
    checkerResultsContainer.innerHTML = "";
    
    const lang = currentLanguage;
    const langData = window.translations[lang];
    const queryLower = searchQuery.toLowerCase().trim();

    const filteredFoods = foodDatabase.filter(food => {
      if (filter !== "all" && food.status !== filter) return false;
      
      if (queryLower !== "") {
        const foodName = food[lang].name.toLowerCase();
        const foodDesc = food[lang].desc.toLowerCase();
        const englishName = food["en"].name.toLowerCase();
        return foodName.includes(queryLower) || foodDesc.includes(queryLower) || englishName.includes(queryLower);
      }
      return true;
    });

    if (filteredFoods.length === 0) {
      const noResults = document.createElement("div");
      noResults.className = "span-all no-results";
      noResults.style.textAlign = "center";
      noResults.style.padding = "40px";
      noResults.style.color = "var(--text-secondary)";
      noResults.innerHTML = `<i class="fa-solid fa-face-frown" style="font-size: 2.5rem; margin-bottom: 12px; display: block; color: var(--text-light)"></i> No matching foods found.`;
      checkerResultsContainer.appendChild(noResults);
      return;
    }

    filteredFoods.forEach(food => {
      const card = document.createElement("div");
      card.className = `checker-item-card ${food.status}-status`;
      
      const isSafe = food.status === "safe";
      const statusText = isSafe ? langData.checker_safe : langData.checker_trigger;
      const statusIcon = isSafe ? "fa-circle-check" : "fa-circle-xmark";

      card.innerHTML = `
        <span class="item-status-badge">
          <i class="fa-solid ${statusIcon}"></i> ${statusText}
        </span>
        <h4>${food[lang].name}</h4>
        <p>${food[lang].desc}</p>
      `;
      checkerResultsContainer.appendChild(card);
    });
  }

  // 9. WEEKLY DIET PLANNER GENERATOR
  dayTabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      dayTabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      activeMobileDay = btn.getAttribute("data-day");
      renderWeeklyPlanner(currentLanguage, currentAgeGroup, activeMobileDay);
    });
  });

  function renderWeeklyPlanner(lang, ageGroup, activeDay) {
    if (!weeklyPlanGrid) return;
    weeklyPlanGrid.innerHTML = "";
    
    const langData = window.translations[lang];
    const plan = weeklyPlanData[lang][ageGroup];
    
    const days = [
      { id: "mon", name: langData.plan_mon },
      { id: "tue", name: langData.plan_tue },
      { id: "wed", name: langData.plan_wed },
      { id: "thu", name: langData.plan_thu },
      { id: "fri", name: langData.plan_fri },
      { id: "sat", name: langData.plan_sat },
      { id: "sun", name: langData.plan_sun }
    ];

    const meals = [
      { id: "b", name: langData.plan_meal_b, icon: "fa-mug-saucer" },
      { id: "l", name: langData.plan_meal_l, icon: "fa-bowl-rice" },
      { id: "d", name: langData.plan_meal_d, icon: "fa-utensils" },
      { id: "s", name: langData.plan_meal_s, icon: "fa-apple-whole" }
    ];

    // --- DESKTOP TABLE RENDER ---
    const cornerCell = document.createElement("div");
    cornerCell.className = "grid-cell grid-header-cell day-header-cell";
    weeklyPlanGrid.appendChild(cornerCell);

    days.forEach(day => {
      const headerCell = document.createElement("div");
      headerCell.className = `grid-cell grid-header-cell day-header-cell day-header ${day.id === activeDay ? 'active-day-header' : ''}`;
      headerCell.textContent = day.name;
      weeklyPlanGrid.appendChild(headerCell);
    });

    meals.forEach(meal => {
      const labelCell = document.createElement("div");
      labelCell.className = "grid-cell meal-label-cell";
      labelCell.innerHTML = `<i class="fa-solid ${meal.icon}" style="margin-right: 8px;"></i> ${meal.name}`;
      weeklyPlanGrid.appendChild(labelCell);

      days.forEach(day => {
        const mealCell = document.createElement("div");
        const isActiveDay = day.id === activeDay;
        mealCell.className = `grid-cell ${isActiveDay ? 'active-day-cell' : ''}`;
        mealCell.setAttribute("data-day", day.id);

        const mealTitle = plan[day.id][meal.id];
        
        mealCell.innerHTML = `
          <div class="meal-card-content">
            <div class="meal-title">${mealTitle}</div>
          </div>
        `;
        weeklyPlanGrid.appendChild(mealCell);
      });
    });
  }

  // 10. RECIPE CARD RENDER
  function renderRecipes(lang, ageGroup) {
    if (!recipeListContainer) return;
    recipeListContainer.innerHTML = "";

    const langData = window.translations[lang];
    const ageData = langData.age_groups[ageGroup];

    const imagePaths = [
      "images/salmon_mash.png",
      "images/berry_oats.png",
      "images/avocado_pudding.png",
      "images/veggie_fingers.png"
    ];

    const badges = [
      "Omega-3 & Vitamin D",
      "Antioxidants & Fiber",
      "Healthy Fats & Energy",
      "Vitamins & Fiber"
    ];

    ageData.recipes.forEach((recipe, index) => {
      const card = document.createElement("div");
      card.className = "recipe-card";

      let ingHTML = "";
      recipe.ing.forEach(ing => {
        ingHTML += `<li>${ing}</li>`;
      });

      let instHTML = "";
      recipe.inst.forEach(step => {
        instHTML += `<li>${step}</li>`;
      });

      card.innerHTML = `
        <div class="recipe-image-wrapper">
          <img src="${imagePaths[index]}" alt="${recipe.name}" class="recipe-image" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600'">
          <div class="recipe-badge">${badges[index]}</div>
        </div>
        <div class="recipe-details">
          <div class="recipe-details-header">
            <h3>${recipe.name}</h3>
            <p class="recipe-desc">${recipe.desc}</p>
          </div>
          
          <div class="recipe-sections">
            <div>
              <h4 style="margin-bottom: 12px; font-size: 1rem; color: var(--primary-color); border-bottom: 1px solid var(--border-color); padding-bottom: 6px;">
                <i class="fa-solid fa-list-check" style="margin-right: 6px;"></i> ${langData.recipes_ingredients}
              </h4>
              <ul class="recipe-ingredients-list">
                ${ingHTML}
              </ul>
            </div>
            
            <div>
              <h4 style="margin-bottom: 12px; font-size: 1rem; color: var(--primary-color); border-bottom: 1px solid var(--border-color); padding-bottom: 6px;">
                <i class="fa-solid fa-kitchen-set" style="margin-right: 6px;"></i> ${langData.recipes_instructions}
              </h4>
              <ol class="recipe-steps-list">
                ${instHTML}
              </ol>
            </div>
          </div>
          
          <div class="recipe-tip-box">
            <i class="fa-solid fa-lightbulb"></i>
            <div class="recipe-tip-text">
              <strong>${langData.recipes_toddler_tip}:</strong>
              <p>${recipe.tip}</p>
            </div>
          </div>
        </div>
      `;
      recipeListContainer.appendChild(card);
    });
  }

});
