// ==========================================================================
// VERSION 2 TRANSLATIONS DICTIONARY
// ==========================================================================
const translations = {
  en: {
    // UI Global Labels
    title: "Psoriasis Care & Diet Hub",
    subtitle: "Science-Backed Treatments, Diet Plans, and Care Guidelines by Age Group",
    nav_home: "Overview",
    nav_skincare: "Skincare & Treatment",
    nav_diet: "Dietary Science",
    nav_plan: "Weekly Diet Plan",
    nav_recipes: "Recipes & Cooking",
    nav_research: "Global Research",
    theme_light: "Light Mode",
    theme_dark: "Dark Mode",
    disclaimer_text: "Disclaimer: This website is for informational purposes only. Psoriasis management must always be supervised by a qualified pediatrician or dermatologist.",
    copyright_text: "© 2026 Psoriasis Care Hub. All rights reserved.",
    
    // Age Selector Label
    select_age_group: "Select Age Group:",
    age_0_3: "Infant / Toddler (Ages 0 - 3)",
    age_4_12: "Child (Ages 4 - 12)",
    age_13_19: "Adolescent / Teen (Ages 13 - 19)",
    age_20_64: "Adult (Ages 20 - 64)",
    age_65_plus: "Senior / Elderly (Ages 65+)",

    // Food Safety Checker UI
    checker_title: "Food Safety Checker",
    checker_desc: "Search for a food item to check if it is safe or a trigger for the active age group.",
    checker_placeholder: "Search for food (e.g., Salmon, Sugar, Tomato)...",
    checker_all: "All",
    checker_safe: "Safe / Anti-Inflammatory",
    checker_trigger: "Potential Trigger",
    
    // Recipe card labels
    recipes_ingredients: "Ingredients",
    recipes_instructions: "How to Cook",
    recipes_toddler_tip: "Serving / Nutrition Tip",
    
    // Weekly Planner Labels
    plan_title: "Weekly Anti-Inflammatory Plan",
    plan_intro: "A balanced 7-day schedule with anti-inflammatory meals tailored to the selected age group's caloric and texture requirements.",
    plan_mon: "Monday",
    plan_tue: "Tuesday",
    plan_wed: "Wednesday",
    plan_thu: "Thursday",
    plan_fri: "Friday",
    plan_sat: "Saturday",
    plan_sun: "Sunday",
    plan_meal_b: "Breakfast",
    plan_meal_l: "Lunch",
    plan_meal_d: "Dinner",
    plan_meal_s: "Snack",

    // WARNING BANNER
    warning_title: "When to Contact a Dermatologist / Doctor",
    warning_1: "If skin lesions show signs of secondary infection (yellow crusting, warmth, oozing).",
    warning_2: "If a sudden, widespread rash or fever develops (especially in children/teens).",
    warning_3: "If joint pain, stiffness, or swelling occurs (indicating psoriatic arthritis, which affects up to 30% of patients).",

    // ======================================================================
    // AGE GROUP SPECIFIC DATA - ENGLISH
    // ======================================================================
    age_groups: {
      infant_toddler: {
        intro: "Managing psoriasis in infants and toddlers (ages 0-3) requires a gentle, non-aggressive approach. Plaque psoriasis is rare; instead, diaper area involvement and face flexural psoriasis are common. Skincare focus is on barrier hydration and low-potency steroid monitoring under pediatric supervision. Diets must prioritize soft texture and simple nutrient absorption.",
        skincare_title: "Gentle Barrier Hydration & Bathing",
        skincare_intro: "Toddler skin is thin and absorbs topicals quickly. Focus on mild hydration and strict steroid limitation.",
        skincare_steps: [
          "Use lukewarm water and limit baths to 10 minutes maximum.",
          "Add colloidal oatmeal to soothe itching; avoid bubble baths or scented soaps.",
          "Pat dry gently with a soft towel; never rub the skin.",
          "Apply a thick emollient (petroleum jelly or ceramide cream) within 3 minutes of bathing.",
          "Use mild topical steroids (e.g. 1% hydrocortisone) only under direct medical advice, avoiding long-term use."
        ],
        treatments: [
          { title: "Fragrance-Free Emollients", desc: "Apply 3-4 times daily. Re-establishes the fragile skin barrier and stops itching." },
          { title: "Low-Potency Corticosteroids", desc: "Prescribed only for active flare-ups. Used sparingly on face and diaper areas." },
          { title: "Vitamin D Analogs (Calcipotriene)", desc: "Slows skin cell growth. Safe for toddlers when used as directed by a pediatrician." },
          { title: "Lukewarm Oatmeal Baths", desc: "Naturally anti-itch. Soothes red, inflamed skin and softens scales." }
        ],
        triggers_intro: "Avoid these common dietary triggers to reduce toddler skin flare-ups:",
        triggers: [
          { title: "Refined Sugars", desc: "Sugary snacks, candies, and juices trigger inflammatory spikes." },
          { title: "Processed Foods", desc: "Chips and packaged foods contain trans-fats and chemical additives." },
          { title: "Cow's Milk (Casein)", desc: "Some toddlers are sensitive to dairy proteins, causing gut-skin flares." },
          { title: "Wheat & Gluten", desc: "Strong link to celiac antibodies; trial elimination can show skin clearing." },
          { title: "Nightshade Veggies (Tomatoes, Potatoes)", desc: "Contains solanine which can trigger gut lining irritation in sensitive toddlers." }
        ],
        beneficial_intro: "Incorporate these anti-inflammatory foods to help heal your toddler's skin:",
        beneficial: [
          { title: "Omega-3 Fatty Acids", desc: "Salmon, ground chia seeds. Reduces systemic inflammation naturally." },
          { title: "Vitamin A (Beta-Carotene)", desc: "Mashed sweet potatoes and carrots. Promotes skin barrier healing." },
          { title: "Vitamin D Sources", desc: "Salmon, egg yolks. Crucial for immune system modulation." },
          { title: "Antioxidant-Rich Berries", desc: "Blueberries, strawberries. Neutralize free radicals." },
          { title: "Healthy Monounsaturated Fats", desc: "Avocado and extra virgin olive oil. Nourishes dry skin." }
        ],
        recipes_intro: "Nutritious, soft, and easy-to-digest recipes designed for toddlers aged 0-3:",
        recipes: [
          {
            name: "Salmon & Sweet Potato Mash",
            desc: "Rich in Omega-3s, Vitamin A, and Vitamin D. Easy to swallow and naturally sweet.",
            ing: ["50g deboned fresh salmon fillet", "1 medium sweet potato (peeled and diced)", "1 tsp olive oil"],
            inst: ["Steam sweet potato for 15 minutes.", "Steam salmon for 8-10 minutes; double-check for bones.", "Mash together with olive oil. Let cool and serve."],
            tip: "Double-check for tiny bones. Serve warm."
          },
          {
            name: "Berry Spinach Green Oats",
            desc: "Antioxidant-rich blueberries and iron-packed spinach blended into warm, soothing oats.",
            ing: ["1/2 cup rolled oats (gluten-free)", "1 cup coconut milk", "1/4 cup blueberries", "A handful of baby spinach"],
            inst: ["Puree spinach with coconut milk.", "Cook oats in green liquid for 7 mins.", "Stir in blueberries at the end. Cool to warm."],
            tip: "Create a smiley face with bananas on top to make it child-appealing."
          },
          {
            name: "Creamy Avocado Banana Pudding",
            desc: "A nutrient-dense raw pudding full of healthy fats and potassium. Completely dairy-free.",
            ing: ["1/2 ripe avocado", "1/2 ripe banana", "2 tbsp unsweetened almond milk"],
            inst: ["Scoop avocado and banana into a blender.", "Add almond milk and blend until creamy.", "Serve fresh immediately."],
            tip: "Serve chilled as a healthy alternative to store-bought puddings."
          },
          {
            name: "Steamed Carrot & Zucchini Fingers",
            desc: "Perfect soft finger food loaded with vitamins and fiber. Safe for young teeth.",
            ing: ["1 carrot (peeled)", "1 zucchini", "1 tsp extra virgin olive oil"],
            inst: ["Cut vegetables into finger-length sticks.", "Steam carrots for 4 mins, then add zucchini and steam 6 mins.", "Drizzle with olive oil and serve."],
            tip: "Veggies should be soft enough to easily mash between your fingers."
          }
        ],
        research_intro: "Trusted global clinical insights for the 0-3 age group:",
        research: [
          { title: "National Psoriasis Foundation (NPF) Guidelines", desc: "Recommends avoiding potent topical steroids on the face and diaper area due to high absorption rates." },
          { title: "Colloidal Oatmeal Efficacy Studies", desc: "Confirms oatmeal avenanthramides block inflammatory cytokines and relieve itching in early childhood." },
          { title: "Pediatric Gut Microbiome Clinical Trials", desc: "Reveals early gut dysbiosis in toddlers is linked to systemic skin inflammation; prebiotics can help." }
        ]
      },

      child: {
        intro: "For children (ages 4-12), guttate psoriasis is highly prevalent and frequently triggered by streptococcal throat infections (strep throat). Plaque and scalp psoriasis are also common. Management focuses on treating underlying infections, utilizing safe phototherapy, and supporting school-age nutrition with high-fiber anti-inflammatory foods.",
        skincare_title: "Scalp Care & Infection Monitoring",
        skincare_intro: "Active school kids face environmental triggers and scalp plaques. Monitor for strep throat symptoms.",
        skincare_steps: [
          "Use a soft brush to gently remove scalp scales; do not pick.",
          "Bathe with mild coal tar or salicylic acid shampoos if scalp is involved, under doctor guidance.",
          "Inspect cuts and scratches; treat immediately to prevent the Koebner phenomenon (psoriasis forming on injured skin).",
          "Apply moisturizers immediately after handwashing or outdoor play.",
          "Consult your pediatrician if your child gets a sore throat or fever (potential strep trigger)."
        ],
        treatments: [
          { title: "Calcipotriene + Steroid combination", desc: "A highly effective topical treatment used for localized plaques in school-aged children." },
          { title: "Narrowband UVB Phototherapy", desc: "Safe and highly recommended for moderate-to-severe childhood psoriasis. Avoids systemic drugs." },
          { title: "Topical Calcineurin Inhibitors", desc: "Non-steroidal creams (like Tacrolimus) used for sensitive facial and flexural plaques." },
          { title: "Strep Screening & Antibiotics", desc: "Immediate treatment of strep throat with antibiotics is critical to prevent guttate flares." }
        ],
        triggers_intro: "Eliminate these common triggers from school lunches and snacks:",
        triggers: [
          { title: "High-Fructose Corn Syrup", desc: "Found in sodas and school snacks; triggers systemic inflammatory cascades." },
          { title: "Packaged Bakery Items", desc: "Cookies and pastries contain gluten and trans-fats that trigger gut inflammation." },
          { title: "Processed Cheese & Fast Food", desc: "High in sodium and arachidonic acid, exacerbating skin redness." },
          { title: "Artificial Colors & Preservatives", desc: "Can provoke allergic immune responses in sensitive children." },
          { title: "Nightshades (Tomatoes, Eggplant)", desc: "Contains solanine; can aggravate joint pain or skin patches in some kids." }
        ],
        beneficial_intro: "Include these anti-inflammatory, kid-friendly foods:",
        beneficial: [
          { title: "Omega-3 Fatty Acids", desc: "Salmon, walnuts (finely ground). Blocks inflammatory pathways." },
          { title: "Vibrant Orange Vegetables", desc: "Carrots, pumpkins. High in Vitamin A for skin cell repair." },
          { title: "High-Fiber Whole Grains", desc: "Oats, brown rice, quinoa. Feeds beneficial gut microbes." },
          { title: "Sun-Dried Mushrooms / Egg Yolks", desc: "Natural sources of Vitamin D, essential for immune health." },
          { title: "Fresh Fruits (Apples, Pears)", desc: "Contain polyphenols and dietary fiber that support gut barrier." }
        ],
        recipes_intro: "Anti-inflammatory, school-age recipes that are delicious and easy to prepare:",
        recipes: [
          {
            name: "Baked Salmon with Sweet Potato Wedges",
            desc: "Kid-friendly salmon bites served with sweet potato wedges.",
            ing: ["80g salmon fillet (deboned)", "1 medium sweet potato (cut into wedges)", "1 tbsp olive oil", "Pinch of salt and oregano"],
            inst: ["Toss sweet potato wedges with 1/2 tbsp olive oil and bake at 200°C for 20 mins.", "Brush salmon with remaining olive oil, season, and bake alongside for 10-12 mins.", "Ensure salmon flakes easily and serve warm."],
            tip: "Serve with a simple avocado dip (mashed avocado with lemon)."
          },
          {
            name: "Berry Spinach Oats Smoothie Bowl",
            desc: "A thick, spoonable green smoothie bowl topped with berries and seeds.",
            ing: ["1/2 cup rolled oats", "1 cup almond milk", "1/2 cup mixed berries (blueberries, strawberries)", "A handful of spinach", "1 tsp chia seeds"],
            inst: ["Blend spinach, almond milk, and oats until smooth.", "Pour into a bowl and stir in the berries.", "Top with chia seeds and serve chilled."],
            tip: "A fun way to get greens and fiber into school-aged kids."
          },
          {
            name: "Avocado Chicken / Egg Salad Boats",
            desc: "Dairy-free, protein-packed avocado boats filled with mashed chicken or egg.",
            ing: ["1 ripe avocado (sliced in half)", "50g cooked shredded chicken breast or 1 hard-boiled egg", "1 tsp olive oil", "Lemon juice"],
            inst: ["Mash the chicken or boiled egg in a bowl with olive oil and a splash of lemon juice.", "Scoop the mixture into the avocado halves.", "Serve fresh with gluten-free crackers."],
            tip: "An excellent anti-inflammatory lunchbox option."
          },
          {
            name: "Crispy Roasted Zucchini Sticks",
            desc: "Baked zucchini fingers with a light gluten-free breading.",
            ing: ["1 zucchini (cut into sticks)", "2 tbsp gluten-free flour or cornmeal", "1 tbsp olive oil", "Pinch of salt"],
            inst: ["Toss zucchini sticks in a bowl with olive oil.", "Coat lightly with gluten-free flour/cornmeal.", "Bake at 200°C for 15 minutes until crispy. Let cool."],
            tip: "A healthy alternative to french fries that children love."
          }
        ],
        research_intro: "Clinical updates on pediatric guttate and plaque psoriasis:",
        research: [
          { title: "Streptococcal Infection and Psoriasis Link", desc: "Studies confirm that acute strep throat triggers an autoimmune response, leading to guttate psoriasis eruptions in children." },
          { title: "Tonsillectomy in Recurrent Guttate Cases", desc: "Dermatological consensus indicates that tonsillectomy may reduce guttate recurrence in kids with chronic tonsillitis." },
          { title: "Biologics Approval for Pediatric Patients", desc: "FDA has expanded approvals for specific IL-17 and TNF inhibitors down to age 6 for moderate-to-severe plaque psoriasis." }
        ]
      },

      teen: {
        intro: "Psoriasis in adolescents and teens (ages 13-19) is strongly influenced by hormonal fluctuations (puberty) and severe psychosocial stress (peer interactions, body image). Guttate and plaque variants are common. Treatment focuses on counseling, stress reduction, non-comedogenic topicals, and high-energy anti-inflammatory diets that support active growth.",
        skincare_title: "Acne-Safe Topicals & Stress Management",
        skincare_intro: "Hormonal changes during teens make skin prone to acne. Ensure psoriasis creams do not block pores.",
        skincare_steps: [
          "Use non-comedogenic, oil-free moisturizers to avoid triggering teen acne.",
          "Avoid hot, long showers after sports; use lukewarm water to prevent dry patches.",
          "Incorporate daily stress-reduction practices (exercise, meditation, yoga) to regulate cortisol.",
          "Do not scrub skin aggressively after sports; use gentle, pH-balanced cleansers.",
          "Use prescription topical therapies consistently as directed, managing scheduling independently."
        ],
        treatments: [
          { title: "Non-Comedogenic Moisturizers", desc: "Moisturizes dry plaques without clogging pores or triggering acne breakout." },
          { title: "Phototherapy (nb-UVB)", desc: "Excellent for widespread guttate/plaque psoriasis. Highly effective for busy teens." },
          { title: "Biologic Therapy", desc: "Targeted injections (e.g. Adalimumab, Secukinumab) approved for teens. Offers clear skin and improves quality of life." },
          { title: "Psychosocial Support / Counseling", desc: "An essential component. Helps teens manage anxiety, depression, and peer-related stress." }
        ],
        triggers_intro: "Avoid these common triggers to control both skin flares and acne:",
        triggers: [
          { title: "Fast Food & Trans Fats", desc: "Burgers, fries, and greasy foods are highly inflammatory." },
          { title: "Energy Drinks & Sugary Sodas", desc: "High caffeine and refined sugar worsen systemic inflammation." },
          { title: "Dairy Products (Excessive)", desc: "Hormones in dairy can trigger acne and worsen psoriasis inflammation." },
          { title: "Spicy & Processed Snacks", desc: "Contain additives and spices that can cause skin flushing and itching." },
          { title: "Gluten-Heavy Junk Foods", desc: "Instant noodles and packaged snacks trigger digestive inflammation." }
        ],
        beneficial_intro: "Support active growth and clear skin with these foods:",
        beneficial: [
          { title: "Omega-3 Rich Fatty Fish", desc: "Salmon, mackerel. Promotes skin cell health and lowers inflammation." },
          { title: "Zinc-Rich Foods", desc: "Pumpkin seeds, chickpeas. Essential for wound healing and acne prevention." },
          { title: "Antioxidant Berries & Greens", desc: "Blueberries, kale, spinach. Neutralize free radicals from stress." },
          { title: "Healthy Fats (Avocado, EVOO)", desc: "Extra virgin olive oil and avocados keep the skin supple." },
          { title: "Gut-Friendly Probiotics", desc: "Kefir, kombucha, or supplements. Supports the gut-skin axis." }
        ],
        recipes_intro: "High-protein, anti-inflammatory recipes for active teens:",
        recipes: [
          {
            name: "Grilled Salmon & Quinoa Bowl",
            desc: "A high-protein, nutrient-dense bowl featuring grilled salmon, quinoa, and avocado.",
            ing: ["100g salmon fillet", "1/2 cup quinoa (cooked)", "1/2 avocado (sliced)", "1/2 cup steamed spinach", "1 tbsp olive oil"],
            inst: ["Grill salmon in a pan with 1/2 tbsp olive oil for 4-5 mins per side.", "Place cooked quinoa in a bowl.", "Arrange salmon, sliced avocado, and spinach on top.", "Drizzle with remaining olive oil and a squeeze of lemon."],
            tip: "An excellent dinner rich in protein and Omega-3s for active teens."
          },
          {
            name: "Berry Spinach Protein Smoothie",
            desc: "A delicious, dairy-free high-protein shake for post-workout or breakfast.",
            ing: ["1 cup unsweetened almond milk", "1/2 cup frozen blueberries", "A handful of baby spinach", "1 scoop plant-based pea protein powder", "1 tbsp ground flaxseeds"],
            inst: ["Combine all ingredients in a blender.", "Blend on high speed until completely smooth.", "Pour into a shaker bottle and enjoy immediately."],
            tip: "Pea protein is hypoallergenic and does not trigger dairy-related flares."
          },
          {
            name: "Baked Sweet Potato Fries with Guacamole",
            desc: "Healthy, baked sweet potato wedges served with fresh homemade guacamole.",
            ing: ["1 large sweet potato (cut into thin strips)", "1 tbsp olive oil", "1 ripe avocado", "Lemon juice", "Salt and pepper"],
            inst: ["Toss sweet potato strips in olive oil, spread on a baking sheet, and bake at 200°C for 25 mins.", "Mash avocado with lemon juice, salt, and pepper.", "Serve the warm fries with the guacamole."],
            tip: "A satisfying, anti-inflammatory alternative to fast-food french fries."
          },
          {
            name: "Tuna Avocado Salad Wraps",
            desc: "A quick, low-carb lunch option wrapped in fresh lettuce leaves.",
            ing: ["1 can canned tuna (in water, drained)", "1/2 avocado (mashed)", "1 tbsp olive oil", "Large romaine lettuce leaves"],
            inst: ["In a bowl, mix drained tuna, mashed avocado, and olive oil.", "Scoop the mixture into large, washed romaine lettuce leaves.", "Wrap and serve immediately."],
            tip: "Romaine lettuce adds a nice crunch and hydration."
          }
        ],
        research_intro: "Recent adolescent dermatological and psychological studies:",
        research: [
          { title: "Psychosocial Impact of Psoriasis on Teens", desc: "Clinical studies show a direct correlation between psoriasis visibility and teen social anxiety; early intervention significantly improves mental health." },
          { title: "Puberty-Related Hormonal Flares", desc: "Dermatological research highlights that estrogen and progesterone changes during puberty can trigger or alter the severity of psoriasis." },
          { title: "Efficacy of Biologics in Teens", desc: "Long-term registry studies confirm that biologics are highly effective and safe for adolescents, showing superior clearance rates compared to traditional drugs." }
        ]
      },

      adult: {
        intro: "In adults (ages 20-64), plaque psoriasis is the most common form, often accompanied by psoriatic arthritis (up to 30%). Triggers include chronic stress, alcohol, smoking, metabolic syndrome, and obesity. Management requires a comprehensive anti-inflammatory diet (like the Mediterranean diet), weight control, lifestyle modification, and advanced systemic/biologic therapies.",
        skincare_title: "High-Potency Care & Joint Protection",
        skincare_intro: "Adults face thick plaques and risk of joint involvement. Protect your skin barrier and joints.",
        skincare_steps: [
          "Apply high-potency moisturizers (ointments or heavy creams) twice daily, especially after showering.",
          "Incorporate regular low-impact exercise (swimming, cycling) to maintain joint mobility and cardiovascular health.",
          "Avoid smoking and alcohol completely, as they decrease treatment efficacy and trigger severe flares.",
          "Manage work stress through structured mindfulness, sleep hygiene, and boundary setting.",
          "Track joint symptoms (stiffness in the morning, finger swelling) and report immediately to your doctor."
        ],
        treatments: [
          { title: "High-Potency Topical Corticosteroids", desc: "Used for body plaques. Applied for limited periods to avoid skin thinning." },
          { title: "Targeted Biologic Therapies", desc: "Injections (IL-17, IL-23 blockers) that target specific immune pathways. Provide high rates of complete skin clearance." },
          { title: "Oral Systemics (Methotrexate, Apremilast)", desc: "Systemic tablets that manage both skin plaques and joint inflammation." },
          { title: "Cardiovascular Risk Screening", desc: "Essential for adults. Psoriasis increases systemic cardiovascular risk; regular blood pressure and cholesterol checks are vital." }
        ],
        triggers_intro: "Eliminate these inflammatory triggers from your diet:",
        triggers: [
          { title: "Alcoholic Beverages", desc: "Directly triggers skin inflammation, damages the liver, and interferes with systemics." },
          { title: "Processed & Red Meats", desc: "High in saturated fat and arachidonic acid, which promote inflammatory pathways." },
          { title: "Refined Wheat & Gluten", desc: "Can exacerbate symptoms in adults with underlying gluten sensitivity." },
          { title: "Nightshade Vegetables", desc: "Tomatoes, potatoes, eggplants. Contain solanine, which some report increases joint pain." },
          { title: "Sugary Drinks & Trans Fats", desc: "Promote visceral fat accumulation, worsening metabolic syndrome and psoriasis." }
        ],
        beneficial_intro: "Adopt a Mediterranean anti-inflammatory eating pattern:",
        beneficial: [
          { title: "Extra Virgin Olive Oil", desc: "High in oleic acid and antioxidants. A cornerstone of anti-inflammatory diets." },
          { title: "Cold-Water Fatty Fish", desc: "Salmon, sardines. Rich in EPA/DHA Omega-3s that actively reduce inflammation." },
          { title: "Leafy Greens & Cruciferous Veggies", desc: "Broccoli, Brussels sprouts, kale. High in folate and fiber." },
          { title: "Avocado & Raw Nuts", desc: "Provide monounsaturated fats, Vitamin E, and minerals that nourish dry skin." },
          { title: "Prebiotics & Probiotics", desc: "Fermented foods (sauerkraut, kimchi). Improve gut barrier integrity." }
        ],
        recipes_intro: "Mediterranean anti-inflammatory recipes for adults:",
        recipes: [
          {
            name: "Pan-Seared Salmon & Baked Sweet Potato",
            desc: "A nutrient-rich dinner featuring fresh salmon and baked sweet potato.",
            ing: ["120g fresh salmon fillet", "1 medium sweet potato", "1 cup steamed broccoli", "1.5 tbsp extra virgin olive oil", "Garlic, salt, and pepper"],
            inst: ["Prick sweet potato and bake at 200°C for 45 mins until soft.", "Heat 1/2 tbsp olive oil in a pan, sear salmon for 4 mins skin-side down, flip and cook 3 mins.", "Steam broccoli and toss with remaining olive oil and garlic. Serve together."],
            tip: "Omega-3s in salmon and carotenoids in sweet potato are excellent for skin renewal."
          },
          {
            name: "Berry Spinach Quinoa Bowl",
            desc: "A high-fiber, antioxidant-packed lunch salad with quinoa and berries.",
            ing: ["1/2 cup cooked quinoa", "2 cups baby spinach", "1/2 cup fresh blueberries", "10 raw walnuts (chopped)", "1 tbsp olive oil & lemon juice dressing"],
            inst: ["Place baby spinach and cooked quinoa in a large bowl.", "Top with fresh blueberries and chopped walnuts.", "Drizzle with olive oil and lemon juice dressing, toss gently, and serve."],
            tip: "Quinoa provides complete protein, while walnuts offer plant-based Omega-3s."
          },
          {
            name: "Avocado & Egg on Gluten-Free Toast",
            desc: "A healthy, satisfying breakfast rich in proteins and monounsaturated fats.",
            ing: ["1 slice gluten-free bread", "1/2 ripe avocado", "1 poached or boiled egg", "1 tsp olive oil", "Red pepper flakes (optional)"],
            inst: ["Toast the gluten-free bread.", "Mash the avocado with a drop of olive oil and spread it on the toast.", "Top with the poached or boiled egg. Sprinkle with pepper flakes if desired."],
            tip: "A perfect start to the day that keeps blood sugar stable and avoids gluten."
          },
          {
            name: "Steamed Carrot & Zucchini Medley",
            desc: "A simple, anti-inflammatory side dish seasoned with fresh herbs.",
            ing: ["2 carrots (sliced)", "1 zucchini (sliced)", "1 tbsp olive oil", "1 tsp fresh rosemary (chopped)", "Pinch of salt"],
            inst: ["Steam carrot and zucchini slices for 8-10 minutes until tender.", "Toss with olive oil, chopped fresh rosemary, and a pinch of salt.", "Serve warm as a side dish."],
            tip: "Rosemary contains rosmarinic acid, a strong natural anti-inflammatory agent."
          }
        ],
        research_intro: "Key clinical research and updates for adult psoriasis:",
        research: [
          { title: "Psoriasis and Metabolic Syndrome Connection", desc: "Clinical studies prove that adult psoriasis patients have a higher prevalence of obesity, diabetes, and cardiovascular disease due to chronic systemic inflammation." },
          { title: "Biologics and Heart Health", desc: "Recent trials suggest that successful treatment of psoriasis with biologic therapies reduces arterial inflammation and lowers cardiovascular risk." },
          { title: "The Impact of Weight Loss on Psoriasis", desc: "Clinical evidence shows that weight loss through diet and exercise significantly improves psoriasis severity and increases response to systemics." }
        ]
      },

      senior: {
        intro: "In seniors (ages 65+), psoriasis management is complicated by thin skin, reduced organ function, and multiple comorbidities. High-potency topical steroids must be used cautiously to avoid skin thinning and bruising. Phototherapy is favored over systemic drugs due to low drug-interaction risk. Diets must prioritize soft textures, bone-supporting nutrients, and joint protection.",
        skincare_title: "Thin Skin Care & Comorbidity Management",
        skincare_intro: "Seniors have fragile, thin skin. Protect against bruising, dryness, and drug-drug interactions.",
        skincare_steps: [
          "Use extremely gentle, hydrating emollients; apply multiple times daily to prevent cracking.",
          "Avoid strong topical steroids; use low-to-medium potency under strict dermatological guidance.",
          "Use a humidifier in the home during winter to maintain ambient moisture and prevent dry flares.",
          "Ensure regular, safe mobility exercises (walking, stretching) to maintain joint flexibility.",
          "Review all medications (beta-blockers, NSAIDs) with your doctor, as some can worsen psoriasis."
        ],
        treatments: [
          { title: "Low-to-Medium Potency Steroids", desc: "Used sparingly to prevent skin atrophy (thinning), bruising, and tears." },
          { title: "Narrowband UVB Phototherapy", desc: "The preferred treatment. Highly effective, completely non-systemic, and has zero drug interactions." },
          { title: "Safe Biologics (e.g. anti-IL-23)", desc: "Selected based on low side-effect profiles and minimal liver/kidney strain." },
          { title: "Ceramide & Urea Creams", desc: "Deeply hydrate aging skin, locking in moisture and preventing cracking." }
        ],
        triggers_intro: "Limit these foods to protect kidney, heart, and skin health:",
        triggers: [
          { title: "High-Sodium Foods", desc: "Processed meats and canned soups increase blood pressure and worsen skin dryness." },
          { title: "Refined Sugars & Desserts", desc: "Worsen insulin resistance and fuel systemic inflammatory pathways." },
          { title: "Excessive Red Meat", desc: "Contains high levels of arachidonic acid, promoting joint and skin inflammation." },
          { title: "Nightshades (Tomatoes, Peppers)", desc: "Some seniors report an increase in arthritic stiffness when consuming nightshades." },
          { title: "Gluten & Refined Grains", desc: "Can lead to digestive discomfort and low-grade systemic inflammation." }
        ],
        beneficial_intro: "Prioritize nutrient-dense, easy-to-digest bone and joint-supporting foods:",
        beneficial: [
          { title: "Omega-3 Fatty Acids (Soft Fish)", desc: "Steamed or poached salmon. Reduces joint stiffness and dry skin patches." },
          { title: "Vitamin D & Calcium", desc: "Fortified foods, soft egg yolks, salmon. Crucial for bone density." },
          { title: "Beta-Carotene (Soft Purees)", desc: "Mashed carrots, sweet potatoes. Easy to digest and repair skin." },
          { title: "Olive Oil & Avocado Mash", desc: "Healthy monounsaturated fats that support heart health and skin suppleness." },
          { title: "Warm Ginger & Turmeric Teas", desc: "Natural anti-inflammatory beverages that soothe joint discomfort." }
        ],
        recipes_intro: "Nutritious, soft-textured, easy-to-digest recipes for seniors:",
        recipes: [
          {
            name: "Soft Poached Salmon & Sweet Potato Puree",
            desc: "Very soft poached salmon served with smooth sweet potato puree. Easy to chew.",
            ing: ["100g salmon fillet (deboned)", "1 medium sweet potato (peeled and diced)", "1 tbsp olive oil", "Lemon juice"],
            inst: ["Poach salmon in simmering water for 8 minutes until extremely tender and soft.", "Boil sweet potato cubes until very soft, then mash or blend with olive oil and a splash of warm water.", "Flake the salmon and serve with the smooth puree."],
            tip: "Perfect for seniors with chewing difficulties. Rich in protein and Omega-3s."
          },
          {
            name: "Soft Berry Spinach Oatmeal",
            desc: "Warm, soft-cooked rolled oats cooked with blended spinach and soft blueberries.",
            ing: ["1/2 cup rolled oats", "1 cup water or unsweetened almond milk", "1/4 cup blueberries", "A handful of baby spinach"],
            inst: ["Cook oats in almond milk/water for 8-10 mins until extremely soft.", "Stir in spinach puree and blueberries, cooking for 2 more mins until berries are soft.", "Serve warm."],
            tip: "High in fiber to support digestive health, which slows with age."
          },
          {
            name: "Easy Avocado Banana Custard",
            desc: "A raw, creamy, dairy-free dessert that is easy on the stomach and rich in potassium.",
            ing: ["1/2 ripe avocado", "1/2 ripe banana", "2 tbsp coconut milk", "Pinch of ground ginger"],
            inst: ["Place avocado and banana in a food processor or bowl.", "Add coconut milk and a pinch of ginger.", "Blend or mash thoroughly until a smooth, custard-like texture is formed. Serve immediately."],
            tip: "Ginger adds a mild warm flavor and supports anti-inflammatory pathways."
          },
          {
            name: "Soft Steamed Carrot & Zucchini Medley",
            desc: "Carrots and zucchini steamed until very soft and tossed with olive oil.",
            ing: ["1 carrot (sliced)", "1 zucchini (sliced)", "1 tbsp extra virgin olive oil", "Pinch of oregano"],
            inst: ["Steam carrot and zucchini slices for 12-14 minutes until very soft and easily mashed with a fork.", "Toss with olive oil and a pinch of oregano.", "Serve warm."],
            tip: "Easy to chew and digest; provides essential beta-carotene."
          }
        ],
        research_intro: "Dermatological research on geriatric psoriasis management:",
        research: [
          { title: "Geriatric Psoriasis and Treatment Challenges", desc: "Clinical studies highlight the high risk of systemic toxicity in seniors using methotrexate due to declining renal function; phototherapy is the safest first-line option." },
          { title: "Comorbidity Profiling in Elderly Patients", desc: "Research shows over 80% of seniors with psoriasis have at least one comorbidity (e.g. hypertension, osteoarthritis), making drug interaction screening critical." },
          { title: "Skin Atrophy Risk from Topical Steroids", desc: "Studies warn that long-term use of high-potency corticosteroids in older patients causes severe skin thinning, leading to easy bruising and tearing." }
        ]
      }
    }
  },
  hi: {
    title: "सोरायसिस केयर और आहार हब",
    subtitle: "उम्र के अनुसार विज्ञान-समर्थित उपचार, आहार योजनाएं और त्वचा की देखभाल",
    nav_home: "अवलोकन",
    nav_skincare: "त्वचा की देखभाल और उपचार",
    nav_diet: "आहार विज्ञान",
    nav_plan: "साप्ताहिक आहार योजना",
    nav_recipes: "रेसिपी और पाक कला",
    nav_research: "वैश्विक अनुसंधान",
    theme_light: "लाइट मोड",
    theme_dark: "डार्क मोड",
    disclaimer_text: "अस्वीकरण: यह वेबसाइट केवल सूचनात्मक उद्देश्यों के लिए है। सोरायसिस का प्रबंधन हमेशा एक योग्य चिकित्सक या त्वचा विशेषज्ञ की देखरेख में होना चाहिए।",
    copyright_text: "© 2026 सोरायसिस केयर हब। सर्वाधिकार सुरक्षित।",
    
    select_age_group: "आयु वर्ग चुनें:",
    age_0_3: "शिशु / बच्चा (उम्र 0 - 3 वर्ष)",
    age_4_12: "बच्चा (उम्र 4 - 12 वर्ष)",
    age_13_19: "किशोर (उम्र 13 - 19 वर्ष)",
    age_20_64: "वयस्क (उम्र 20 - 64 वर्ष)",
    age_65_plus: "बुजुर्ग (उम्र 65+ वर्ष)",

    checker_title: "खाद्य सुरक्षा जांचकर्ता",
    checker_desc: "यह देखने के लिए खोजें कि कोई खाद्य पदार्थ सक्रिय आयु वर्ग के लिए सुरक्षित है या ट्रिगर कर सकता है।",
    checker_placeholder: "खाद्य खोजें (जैसे साल्मन, चीनी, टमाटर)...",
    checker_all: "सभी",
    checker_safe: "सुरक्षित / सूजन-रोधी",
    checker_trigger: "संभावित ट्रिगर",
    
    recipes_ingredients: "सामग्री",
    recipes_instructions: "पकाने की विधि",
    recipes_toddler_tip: "परोसने / पोषण की टिप",
    
    plan_title: "साप्ताहिक सूजन-रोधी योजना",
    plan_intro: "चयनित आयु वर्ग की पोषण और कैलोरी आवश्यकताओं के अनुसार तैयार किया गया 7 दिनों का संतुलित भोजन चार्ट।",
    plan_mon: "सोमवार",
    plan_tue: "मंगलवार",
    plan_wed: "बुधवार",
    plan_thu: "गुरुवार",
    plan_fri: "शुक्रवार",
    plan_sat: "शनिवार",
    plan_sun: "रविवार",
    plan_meal_b: "नाश्ता",
    plan_meal_l: "दोपहर का भोजन",
    plan_meal_d: "रात का भोजन",
    plan_meal_s: "स्नैक",

    warning_title: "डॉक्टर या त्वचा विशेषज्ञ से कब संपर्क करें",
    warning_1: "यदि त्वचा के घावों में मवाद, गर्माहट या सूजन जैसे संक्रमण के लक्षण दिखाई दें।",
    warning_2: "यदि अचानक तेज बुखार और त्वचा पर लाल चकत्ते फैलने लगें (विशेष रूप से बच्चों में)।",
    warning_3: "यदि जोड़ों में दर्द, अकड़न या सूजन हो (यह सोरायटिक आर्थराइटिस का संकेत हो सकता है)।",

    // ======================================================================
    // AGE GROUP SPECIFIC DATA - HINDI
    // ======================================================================
    age_groups: {
      infant_toddler: {
        intro: "शिशुओं और छोटे बच्चों (उम्र 0-3) में सोरायसिस का प्रबंधन कोमलता से किया जाना चाहिए। इस उम्र में चेहरे और डायपर क्षेत्र में सोरायसिस होना आम है। त्वचा की देखभाल के लिए मॉइस्चराइज़र और हल्की स्टेरॉयड क्रीम का उपयोग डॉक्टर की सलाह से करें। बच्चों के लिए भोजन को नरम और आसानी से पचने वाला बनाएं।",
        skincare_title: "सौम्य नमी और स्नान दिनचर्या",
        skincare_intro: "छोटे बच्चों की त्वचा पतली होती है और क्रीम को जल्दी सोखती है। कोमल नमी प्रदान करने पर ध्यान दें।",
        skincare_steps: [
          "गुनगुने पानी का उपयोग करें और नहाने का समय अधिकतम 10 मिनट रखें।",
          "खुजली शांत करने के लिए पानी में ओटमील पाउडर मिलाएं; खुशबूदार साबुन से बचें।",
          "मुलायम तौलिए से त्वचा को थपथपाकर सुखाएं; रगड़ें नहीं।",
          "नहाने के 3 मिनट के भीतर एक गाढ़ा मॉइस्चराइज़र (जैसे पेट्रोलियम जेली) लगाएं।",
          "डॉक्टर की सलाह पर ही हल्की स्टेरॉयड क्रीम का बहुत सीमित उपयोग करें।"
        ],
        treatments: [
          { title: "खुशबू रहित मॉइस्चराइज़र", desc: "दिन में 3-4 बार लगाएं। यह त्वचा की परत को ठीक करता है और खुजली रोकता है।" },
          { title: "हल्की स्टेरॉयड क्रीम", desc: "केवल सक्रिय फ्लेयर-अप के लिए डॉक्टर के पर्चे पर दी जाती है। बहुत कम मात्रा में लगाएं।" },
          { title: "विटामिन डी एनालॉग", desc: "त्वचा की कोशिकाओं के तेजी से बढ़ने को धीमा करता है। बच्चों के लिए बहुत सुरक्षित है।" },
          { title: "गुनगुना ओटमील स्नान", desc: "खुजली को शांत करने और त्वचा की लालिमा को कम करने का प्राकृतिक तरीका।" }
        ],
        triggers_intro: "बच्चों की त्वचा में फ्लेयर-अप को रोकने के लिए इन खाद्य पदार्थों से बचें:",
        triggers: [
          { title: "रिफाइंड चीनी", desc: "मीठे स्नैक्स, चॉकलेट और डिब्बाबंद जूस शरीर में सूजन बढ़ाते हैं।" },
          { title: "प्रोसेस्ड फूड", desc: "चिप्स और पैकेट वाले भोजन में हानिकारक वसा और रसायन होते हैं।" },
          { title: "गाय का दूध (कैसिइन)", desc: "कुछ बच्चों को गाय के दूध के प्रोटीन से एलर्जी होती है, जिससे सोरायसिस बढ़ता है।" },
          { title: "गेहूं और ग्लूटेन", desc: "गेहूं के उत्पादों से बचें क्योंकि इनका सोरायसिस से गहरा संबंध है।" },
          { title: "टमाटर और आलू (नाइटशेड)", desc: "इनमें सोलेनिन होता है जो संवेदनशील बच्चों के पेट को नुकसान पहुंचा सकता है।" }
        ],
        beneficial_intro: "बच्चे की त्वचा को ठीक करने के लिए इन सूजन-रोधी खाद्य पदार्थों को शामिल करें:",
        beneficial: [
          { title: "ओमेगा-3 फैटी एसिड", desc: "साल्मन मछली, पिसे हुए चिया बीज। प्राकृतिक रूप से सूजन कम करते हैं।" },
          { title: "विटामिन ए (बीटा-कैरोटीन)", desc: "शकरकंद और गाजर की प्यूरी। त्वचा को ठीक करने में मदद करती है।" },
          { title: "विटामिन डी के स्रोत", desc: "साल्मन और अंडे की जर्दी। प्रतिरक्षा प्रणाली को मजबूत करते हैं।" },
          { title: "एंटीऑक्सीडेंट से भरपूर बेरीज", desc: "ब्लूबेरी और स्ट्रॉबेरी। कोशिकाओं को स्वस्थ रखती हैं।" },
          { title: "स्वस्थ वसा (एवोकैडो)", desc: "एवोकैडो और जैतून का तेल। सूखी त्वचा को अंदर से पोषण देते हैं।" }
        ],
        recipes_intro: "0-3 वर्ष के बच्चों के लिए पौष्टिक, नरम और आसानी से पचने वाली रेसिपी:",
        recipes: [
          {
            name: "साल्मन और शकरकंद का मैश",
            desc: "ओमेगा-3, विटामिन ए और डी से भरपूर। निगलने में आसान और प्राकृतिक रूप से मीठा।",
            ing: ["50 ग्राम कांटे रहित साल्मन मछली", "1 मध्यम शकरकंद (छीला और कटा हुआ)", "1 छोटा चम्मच जैतून का तेल"],
            inst: ["शकरकंद को 15 मिनट के लिए भाप में पकाएं।", "साल्मन को 8-10 मिनट भाप दें; कांटे अच्छी तरह जांच लें।", "दोनों को एक चम्मच जैतून तेल के साथ मैश करें। गुनगुना परोसें।"],
            tip: "कांटे बिल्कुल नहीं होने चाहिए। इसे कमरे के तापमान पर परोसें।"
          },
          {
            name: "बेरी और पालक का 'हरा' ओट्स",
            desc: "एंटीऑक्सीडेंट युक्त ब्लूबेरी और आयरन से भरपूर पालक के साथ बने ओट्स।",
            ing: ["1/2 कप ओट्स (ग्लूटेन-मुक्त)", "1 कप नारियल का दूध", "1/4 कप ब्लूबेरी", "एक मुट्ठी पालक के पत्ते"],
            inst: ["पालक को नारियल दूध के साथ पीस लें।", "इस हरे दूध में ओट्स को 7 मिनट तक पकाएं।", "आखिर में ब्लूबेरी डालें और ठंडा होने पर परोसें।"],
            tip: "आकर्षक बनाने के लिए ऊपर केले के स्लाइस से स्माइली फेस बनाएं।"
          },
          {
            name: "क्रीमी एवोकैडो केला पुडिंग",
            desc: "पोटेशियम और स्वस्थ वसा से भरपूर प्राकृतिक रूप से मीठी डेयरी-मुक्त पुडिंग।",
            ing: ["1/2 पका हुआ एवोकैडो", "1/2 पका हुआ केला", "2 बड़े चम्मच बादाम का दूध"],
            inst: ["एवोकैडो और केले को ब्लेंडर में डालें।", "बादाम का दूध डालकर चिकना होने तक पीसें।", "तुरंत परोसें।"],
            tip: "चिल्ड परोसें, यह बाजार की मीठी पुडिंग का एक बेहतरीन विकल्प है।"
          },
          {
            name: "भाप में पकी गाजर और जुकिनी फिंगर्स",
            desc: "पकड़ने में आसान और चबाने में नरम। विटामिन और फाइबर से भरपूर।",
            ing: ["1 गाजर (छीली हुई)", "1 जुकिनी", "1 छोटा चम्मच जैतून का तेल"],
            inst: ["सब्जियों को उंगली के आकार के टुकड़ों में काटें।", "गाजर को 4 मिनट स्टीम करें, फिर जुकिनी डालकर 6 मिनट और स्टीम करें।", "ऊपर से जैतून का तेल डालें।"],
            tip: "सुनिश्चित करें कि गाजर इतनी नरम हो कि हाथ से दबाने पर मैश हो जाए।"
          }
        ],
        research_intro: "0-3 वर्ष के आयु वर्ग के लिए विश्वसनीय शोध:",
        research: [
          { title: "नेशनल सोरायसिस फाउंडेशन (NPF) गाइडलाइंस", desc: "बच्चों की पतली त्वचा के कारण चेहरे और डायपर क्षेत्र पर तेज स्टेरॉयड क्रीम न लगाने की सलाह देता है।" },
          { title: "कोलाइडल ओटमील प्रभावशीलता अध्ययन", desc: "पुष्टि करता है कि ओटमील में मौजूद तत्व बच्चों में खुजली और सूजन को प्रभावी ढंग से कम करते हैं।" },
          { title: "बच्चों के पेट के बैक्टीरिया पर परीक्षण", desc: "दिखाता है कि पेट के अच्छे बैक्टीरिया त्वचा की सूजन को नियंत्रित करते हैं; फाइबर युक्त भोजन मददगार है।" }
        ]
      },

      child: {
        intro: "4-12 वर्ष के बच्चों में, गले के संक्रमण (गले में खराश / strep throat) के बाद सोरायसिस (guttate psoriasis) का अचानक फैलना बहुत आम है। इसके अलावा सिर की त्वचा (scalp) का सोरायसिस भी होता है। प्रबंधन का ध्यान संक्रमण के इलाज, सुरक्षित प्रकाश चिकित्सा (phototherapy) और फाइबर युक्त एंटी-इंफ्लेमेटरी स्कूल भोजन पर होता है।",
        skincare_title: "सिर की देखभाल और संक्रमण निगरानी",
        skincare_intro: "स्कूल जाने वाले बच्चों में बाहरी चोटों और सिर की पपड़ी का ध्यान रखें। गले के संक्रमण पर नजर रखें।",
        skincare_steps: [
          "सिर की पपड़ी हटाने के लिए मुलायम ब्रश का प्रयोग करें; हाथ से पपड़ी न निकालें।",
          "यदि सिर में सोरायसिस है, तो डॉक्टर की सलाह पर हल्की कोल टार शैम्पू का उपयोग करें।",
          "बच्चों के कटने और खरोंच का तुरंत इलाज करें ताकि उस स्थान पर सोरायसिस न फैले।",
          "खेलने या हाथ धोने के तुरंत बाद मॉइस्चराइज़र लगाएं।",
          "यदि बच्चे को गले में खराश या बुखार हो, तो तुरंत डॉक्टर से संपर्क करें।"
        ],
        treatments: [
          { title: "कैल्सीपोट्रियोन कॉम्बिनेशन क्रीम", desc: "बच्चों के शरीर पर सोरायसिस के चकत्तों को साफ करने के लिए बहुत प्रभावी क्रीम।" },
          { title: "नैरोबैंड यूवीबी फोटोथेरेपी", desc: "मध्यम से गंभीर मामलों के लिए अत्यधिक सुरक्षित प्रकाश चिकित्सा, जिसमें दवाओं की जरूरत नहीं होती।" },
          { title: "गैर-स्टेरॉयड क्रीम (टैक्रोलिमस)", desc: "चेहरे और संवेदनशील क्षेत्रों के लिए सुरक्षित क्रीम जो त्वचा को नुकसान नहीं पहुंचाती।" },
          { title: "एंटीबायोटिक उपचार", desc: "गले में खराश (strep throat) का तुरंत इलाज सोरायसिस को भड़कने से रोकता है।" }
        ],
        triggers_intro: "स्कूल के लंच बॉक्स और स्नैक्स से इन ट्रिगर्स को हटाएं:",
        triggers: [
          { title: "हाई-फ्रुक्टोज कॉर्न सिरप", desc: "सॉफ्ट ड्रिंक्स और बाजार के स्नैक्स में पाया जाता है; सूजन को बढ़ाता है।" },
          { title: "मैदा और पैकेट वाले बेकरी उत्पाद", desc: "बिस्कुट और केक में ग्लूटेन और ट्रांस-फैट होते हैं जो सोरायसिस बढ़ाते हैं।" },
          { title: "प्रोसेस्ड पनीर और फास्ट फूड", desc: "नमक और हानिकारक एसिड से भरपूर, जिससे त्वचा पर लालिमा और खुजली बढ़ती है।" },
          { title: "कृत्रिम रंग और प्रिजर्वेटिव्स", desc: "संवेदनशील बच्चों की प्रतिरक्षा प्रणाली को उत्तेजित कर सकते हैं।" },
          { title: "टमाटर और बैंगन (नाइटशेड)", desc: "इनके सेवन से कुछ बच्चों में जोड़ों का दर्द या त्वचा की खुजली बढ़ सकती है।" }
        ],
        beneficial_intro: "बच्चों के भोजन में इन पोषक तत्वों को शामिल करें:",
        beneficial: [
          { title: "ओमेगा-3 युक्त भोजन", desc: "साल्मन मछली, बारीक पिसे हुए अखरोट। सूजन को कम करने में सहायक।" },
          { title: "चमकीली नारंगी सब्जियां", desc: "गाजर, कद्दू। त्वचा की मरम्मत के लिए विटामिन ए से भरपूर।" },
          { title: "फाइबर युक्त साबुत अनाज", desc: "ओट्स, भूरे चावल (ब्राउन राइस)। पेट के अच्छे बैक्टीरिया को बढ़ाते हैं।" },
          { title: "अंडे की जर्दी / धूप", desc: "विटामिन डी के प्राकृतिक स्रोत जो प्रतिरक्षा प्रणाली को स्वस्थ रखते हैं।" },
          { title: "ताजे फल (सेब, नाशपाती)", desc: "एंटीऑक्सीडेंट और फाइबर से भरपूर जो पेट और त्वचा को स्वस्थ रखते हैं।" }
        ],
        recipes_intro: "4-12 वर्ष के बच्चों के लिए स्वादिष्ट और सूजन-रोधी रेसिपी:",
        recipes: [
          {
            name: "बेक्ड साल्मन और शकरकंद वेजेस",
            desc: "बच्चों के अनुकूल बेक्ड साल्मन के टुकड़े और मीठे आलू के वेजेस।",
            ing: ["80 ग्राम साल्मन मछली (कांटे रहित)", "1 मध्यम शकरकंद (वेजेस में कटा)", "1 बड़ा चम्मच जैतून का तेल", "नमक और अजवायन"],
            inst: ["शकरकंद वेजेस को जैतून तेल के साथ 200°C पर 20 मिनट बेक करें।", "साल्मन पर तेल लगाकर 10-12 मिनट साथ में बेक करें।", "गुनगुना परोसें।"],
            tip: "इसे ताजे एवोकैडो के साधारण डिप के साथ परोसें।"
          },
          {
            name: "बेरी पालक ओट्स स्मूदी बाउल",
            desc: "चम्मच से खाने योग्य स्वादिष्ट हरे ओट्स और बेरी का गाढ़ा मिश्रण।",
            ing: ["1/2 कप ओट्स", "1 कप बादाम का दूध", "1/2 कप मिक्स बेरीज", "एक मुट्ठी पालक", "1 छोटा चम्मच चिया बीज"],
            inst: ["पालक, बादाम दूध और ओट्स को पीस लें।", "बाउल में निकालें और ऊपर से बेरीज मिलाएं।", "चिया बीज छिड़क कर ठंडा परोसें।"],
            tip: "बच्चों को पालक और फाइबर खिलाने का एक शानदार और मजेदार तरीका।"
          },
          {
            name: "एवोकैडो चिकन / एग बोट्स",
            desc: "प्रोटीन से भरपूर एवोकैडो कप जिसमें मैश किया हुआ चिकन या अंडा भरा हो।",
            ing: ["1 पका एवोकैडो (दो भागों में कटा)", "50 ग्राम उबला चिकन या 1 उबला अंडा", "1 छोटा चम्मच जैतून का तेल", "नींबू का रस"],
            inst: ["चिकन या उबले अंडे को जैतून तेल और नींबू रस के साथ मैश करें।", "इस मिश्रण को एवोकैडो के खाली हिस्से में भरें।", "ग्लूटेन-मुक्त क्रैकर्स के साथ परोसें।"],
            tip: "स्कूल लंच बॉक्स के लिए एक बेहतरीन सूजन-रोधी विकल्प।"
          },
          {
            name: "कुरकुरी बेक्ड जुकिनी स्टिक्स",
            desc: "हल्के ग्लूटेन-मुक्त आटे की कोटिंग के साथ पकी हुई कुरकुरी जुकिनी फिंगर्स।",
            ing: ["1 जुकिनी (लंबे टुकड़ों में कटी)", "2 बड़े चम्मच ग्लूटेन-मुक्त आटा", "1 बड़ा चम्मच जैतून का तेल", "नमक"],
            inst: ["जुकिनी को जैतून के तेल के साथ मिलाएं।", "आटे की हल्की कोटिंग करें।", "200°C पर 15 मिनट बेक करें जब तक कि कुरकुरी न हो जाए।"],
            tip: "आलू के फ्रेंच फ्राइज़ का एक स्वस्थ और स्वादिष्ट विकल्प जो बच्चों को पसंद आता है।"
          }
        ],
        research_intro: "बच्चों के सोरायसिस पर हालिया वैज्ञानिक शोध:",
        research: [
          { title: "गले का संक्रमण और सोरायसिस संबंध", desc: "पुष्टि करता है कि गले में स्ट्रेप बैक्टीरिया का संक्रमण बच्चों में सोरायसिस की शुरुआत का प्रमुख कारण है।" },
          { title: "क्रोनिक मामलों में टॉन्सिल निकालने की सलाह", desc: "दिखाता है कि बार-बार गले के संक्रमण से पीड़ित बच्चों में टॉन्सिल निकालने से सोरायसिस का भड़कना कम हो सकता है।" },
          { title: "बच्चों के लिए नई बायोलॉजिक्स दवाओं को मंजूरी", desc: "गंभीर मामलों के लिए विशिष्ट इंजेक्शन थेरेपी को अब 6 वर्ष से अधिक उम्र के बच्चों के लिए भी सुरक्षित माना गया है।" }
        ]
      },

      teen: {
        intro: "किशोरों (उम्र 13-19) में सोरायसिस शारीरिक बदलावों (हार्मोन) और मानसिक तनाव (पढ़ाई, दोस्तों के बीच छवि) से बहुत अधिक प्रभावित होता है। उपचार में मानसिक सहायता, मुँहासे-सुरक्षित क्रीम और बढ़ती उम्र के अनुकूल उच्च ऊर्जा वाले सूजन-रोधी आहार पर ध्यान दिया जाता है।",
        skincare_title: "मुँहासे-सुरक्षित क्रीम और तनाव प्रबंधन",
        skincare_intro: "हार्मोनल बदलावों के कारण त्वचा तैलीय हो सकती है। ऐसी क्रीम चुनें जो रोमछिद्रों को बंद न करें।",
        skincare_steps: [
          "रोमछिद्र बंद होने और मुँहासे से बचने के लिए ऑयल-फ्री मॉइस्चराइज़र का उपयोग करें।",
          "खेलकूद के बाद तेज गर्म पानी से न नहाएं; गुनगुने पानी का प्रयोग करें।",
          "तनाव और कोर्टिसोल हार्मोन को नियंत्रित करने के लिए योग या ध्यान करें।",
          "पसीने के बाद त्वचा को रगड़कर साफ न करें; सौम्य क्लीन्ज़र का प्रयोग करें।",
          "डॉक्टर द्वारा दी गई क्रीम का नियमित और सही समय पर स्वयं उपयोग करना सीखें।"
        ],
        treatments: [
          { title: "ऑयल-फ्री मॉइस्चराइज़र", desc: "बिना मुँहासे बढ़ाए त्वचा के सूखे चकत्तों को नमी प्रदान करता है।" },
          { title: "नैरोबैंड फोटोथेरेपी (UVB)", desc: "तेजी से फैलने वाले सोरायसिस के लिए बहुत प्रभावी प्रकाश चिकित्सा जो किशोरों के लिए सुरक्षित है।" },
          { title: "बायोलॉजिक्स इंजेक्शन", desc: "गंभीर सोरायसिस के लिए लक्षित इंजेक्शन जो त्वचा को पूरी तरह साफ करने और आत्मविश्वास बढ़ाने में मदद करते हैं।" },
          { title: "मानसिक स्वास्थ्य परामर्श", desc: "तनाव, चिंता और सोरायसिस के कारण होने वाली हीनभावना को कम करने के लिए परामर्श महत्वपूर्ण है।" }
        ],
        triggers_intro: "सोरायसिस और मुँहासे दोनों को नियंत्रित करने के लिए इनसे बचें:",
        triggers: [
          { title: "फास्ट फूड और जंक फूड", desc: "बर्गर, समोसा और तैलीय भोजन शरीर में सूजन बढ़ाते हैं।" },
          { title: "एनर्जी ड्रिंक्स और सोडा", desc: "कैफीन और अत्यधिक चीनी त्वचा को नुकसान पहुंचाती है और सूजन भड़काती।" },
          { title: "अत्यधिक डेयरी उत्पाद", desc: "दूध और पनीर का अधिक सेवन हार्मोन असंतुलन पैदा कर सोरायसिस बढ़ा सकता है।" },
          { title: "चटपटे और प्रोसेस्ड चिप्स", desc: "मसाले और प्रिजर्वेटिव्स त्वचा पर खुजली और जलन बढ़ाते हैं।" },
          { title: "मैदा और नूडल्स", desc: "पेट को नुकसान पहुंचाते हैं जिससे त्वचा की सूजन बढ़ती है।" }
        ],
        beneficial_intro: "त्वचा को साफ रखने और विकास में मदद के लिए इन्हें खाएं:",
        beneficial: [
          { title: "ओमेगा-3 युक्त वसायुक्त मछली", desc: "साल्मन मछली त्वचा की कोशिकाओं को स्वस्थ और चमकदार बनाती है।" },
          { title: "जिंक से भरपूर खाद्य पदार्थ", desc: "कद्दू के बीज, काबुली चना। त्वचा के घाव भरने में सहायक।" },
          { title: "एंटीऑक्सीडेंट बेरीज और साग", desc: "पालक, ब्लूबेरी। मानसिक तनाव के बुरे प्रभावों को कम करते हैं।" },
          { title: "स्वस्थ वसा (एवोकैडो, जैतून तेल)", desc: "त्वचा को भीतर से चिकना और स्वस्थ रखते हैं।" },
          { title: "प्रोबायोटिक पेय (केफिर/दही)", desc: "पेट को स्वस्थ रखकर त्वचा की मंट को शांत करते हैं।" }
        ],
        recipes_intro: "बढ़ते बच्चों के लिए प्रोटीन और सूजन-रोधी रेसिपी:",
        recipes: [
          {
            name: "ग्रिल्ड साल्मन और क्विनोआ बाउल",
            desc: "प्रोटीन और स्वस्थ वसा से भरपूर क्विनोआ, एवोकैडो और पकी हुई साल्मन का बाउल।",
            ing: ["100 ग्राम साल्मन मछली", "1/2 कप क्विनोआ (पका हुआ)", "1/2 एवोकैडो", "1/2 कप उबला पालक", "1 बड़ा चम्मच जैतून का तेल"],
            inst: ["साल्मन को जैतून तेल में पैन में 4 मिनट प्रति साइड ग्रिल करें।", "एक बाउल में क्विनोआ रखें।", "ऊपर से साल्मन, एवोकैडो और पालक सजाकर जैतून तेल और नींबू डालें।"],
            tip: "सक्रिय किशोरों के लिए ओमेगा-3 और प्रोटीन से भरपूर एक बेहतरीन भोजन।"
          },
          {
            name: "बेरी पालक प्रोटीन स्मूदी",
            desc: "ब्रेकफास्ट या वर्कआउट के बाद के लिए डेयरी-मुक्त प्रोटीन शेक।",
            ing: ["1 कप बादाम का दूध", "1/2 कप जमी हुई ब्लूबेरी", "एक मुट्ठी पालक", "1 स्कूप वीगन प्रोटीन पाउडर", "1 बड़ा चम्मच अलसी का तेल"],
            inst: ["सभी सामग्रियों को ब्लेंडर में डालें।", "चिकना होने तक पीसें और तुरंत पिएं।"],
            tip: "यह डेयरी-मुक्त प्रोटीन शेक मुँहासे या सोरायसिस को नहीं भड़काता।"
          },
          {
            name: "बेक्ड शकरकंद फ्राइज़ और एवोकैडो डिप",
            desc: "बाजार के फ्रेंच फ्राइज़ का एक स्वस्थ और सूजन-रोधी विकल्प।",
            ing: ["1 बड़ा शकरकंद (पतले लंबे टुकड़ों में कटा)", "1 बड़ा चम्मच जैतून का तेल", "1 पका एवोकैडो", "नींबू रस", "नमक"],
            inst: ["शकरकंद को तेल लगाकर 200°C पर 25 मिनट बेक करें।", "एवोकैडो को नींबू और नमक के साथ मैश कर डिप बनाएं।", "गर्म फ्राइज़ के साथ परोसें।"],
            tip: "बाजार के तले हुए जंक फूड से बचने का एक शानदार तरीका।"
          },
          {
            name: "ट्यूना एवोकैडो लेट्यूस रैप्स",
            desc: "कम कार्बोहाइड्रेट वाला एक त्वरित और पौष्टिक दोपहर का भोजन।",
            ing: ["1 डिब्बा ट्यूना मछली (पानी वाली)", "1/2 एवोकैडो (मैश किया)", "1 बड़ा चम्मच जैतून का तेल", "बड़ी लेट्यूस (सलाद पत्ता) की पत्तियां"],
            inst: ["ट्यूना, मैश एवोकैडो और जैतून तेल को एक साथ मिलाएं।", "इसे लेट्यूस के पत्तों पर रखें और रोल बनाकर खाएं।"],
            tip: "लेट्यूस के पत्ते कुरकुरापन और भरपूर हाइड्रेशन प्रदान करते हैं।"
          }
        ],
        research_intro: "किशोरों के सोरायसिस पर महत्वपूर्ण शोध और निष्कर्ष:",
        research: [
          { title: "सोरायसिस का किशोरों के मानसिक स्वास्थ्य पर प्रभाव", desc: "शोध बताते हैं कि सोरायसिस के कारण किशोरों में सामाजिक हीनभावना बढ़ती है; समय पर इलाज से तनाव कम होता है।" },
          { title: "हार्मोनल बदलाव और सोरायसिस का संबंध", desc: "दिखाता है कि प्यूबर्टी (किशोरावस्था) के दौरान हार्मोन में होने वाले बदलाव त्वचा की सूजन को प्रभावित कर सकते हैं।" },
          { title: "किशोरों में बायोलॉजिक्स दवाओं की सुरक्षा", desc: "अध्ययन पुष्टि करते हैं कि आधुनिक इंजेक्शन दवाएं किशोरों के लिए पूरी तरह सुरक्षित और त्वचा साफ करने में अत्यंत प्रभावी हैं।" }
        ]
      },

      adult: {
        intro: "वयस्कों (उम्र 20-64) में पपड़ीदार सोरायसिस (plaque psoriasis) सबसे आम है, और लगभग 30% रोगियों में जोड़ों का दर्द (psoriatic arthritis) भी देखा जाता है। इसके मुख्य ट्रिगर्स में काम का तनाव, शराब, धूम्रपान, मोटापा और असंतुलित जीवनशैली शामिल हैं। प्रबंधन के लिए एक सख्त सूजन-रोधी आहार (जैसे भूमध्यसागरीय/Mediterranean आहार), वजन नियंत्रण और आधुनिक चिकित्सा आवश्यक है।",
        skincare_title: "गहन मॉइस्चराइजेशन और जोड़ों की सुरक्षा",
        skincare_intro: "वयस्कों में मोटी पपड़ी और जोड़ों के दर्द का खतरा अधिक होता है। त्वचा और जोड़ों दोनों की रक्षा करें।",
        skincare_steps: [
          "दिन में कम से कम दो बार गाढ़ा मॉइस्चराइज़र लगाएं, विशेष रूप से नहाने के तुरंत बाद।",
          "जोड़ों को लचीला रखने के लिए नियमित रूप से हल्का व्यायाम (तैराकी, साइकिल चलाना) करें।",
          "धूम्रपान और शराब से पूरी तरह बचें; ये दवा के असर को कम करते हैं और बीमारी बढ़ाते हैं।",
          "काम के तनाव को प्रबंधित करने के लिए ध्यान, गहरी नींद और स्वस्थ जीवनशैली अपनाएं।",
          "जोड़ों में दर्द या सुबह के समय अकड़न होने पर तुरंत अपने डॉक्टर को सूचित करें।"
        ],
        treatments: [
          { title: "शक्तिशाली स्टेरॉयड मलहम", desc: "शरीर की मोटी पपड़ी को साफ करने के लिए डॉक्टर की सलाह पर सीमित समय के लिए उपयोग किया जाता है।" },
          { title: "आधुनिक बायोलॉजिक्स दवाएं", desc: "प्रतिरक्षा प्रणाली के विशिष्ट हिस्सों को लक्षित करने वाले इंजेक्शन, जो त्वचा को पूरी तरह साफ करने में मदद करते हैं।" },
          { title: "ओरल सिस्टेमिक दवाएं (मेथोट्रेक्सेट)", desc: "गोलियां जो त्वचा के चकत्तों और जोड़ों के दर्द दोनों को एक साथ नियंत्रित करती हैं।" },
          { title: "हृदय स्वास्थ्य जांच", desc: "सोरायसिस के मरीजों में हृदय रोगों का खतरा अधिक होता है; नियमित बीपी और कोलेस्ट्रॉल की जांच कराएं।" }
        ],
        triggers_intro: "शरीर में सूजन बढ़ाने वाले इन खाद्य पदार्थों से बचें:",
        triggers: [
          { title: "शराब और नशीले पदार्थ", desc: "लिवर को नुकसान पहुंचाते हैं, दवाओं के असर को रोकते हैं और सोरायसिस बढ़ाते हैं।" },
          { title: "लाल और प्रोसेस्ड मीट", desc: "हानिकारक वसा से भरपूर जो सीधे सोरायसिस की सूजन को बढ़ावा देता है।" },
          { title: "मैदा और रिफाइंड उत्पाद", desc: "पाचन तंत्र को नुकसान पहुंचाकर त्वचा की समस्याओं को बदतर बनाते हैं।" },
          { title: "टमाटर, आलू और बैंगन", desc: "इनमें सोलेनिन होता है, जो कुछ लोगों में जोड़ों के दर्द और अकड़न को बढ़ाता है।" },
          { title: "मीठे पेय और ट्रांस फैट", desc: "मोटापा और दिल की बीमारियों का खतरा बढ़ाते हैं, जिससे सोरायसिस गंभीर होता है।" }
        ],
        beneficial_intro: "भूमध्यसागरीय (Mediterranean) आहार शैली अपनाएं:",
        beneficial: [
          { title: "एक्स्ट्रा वर्जिन जैतून का तेल", desc: "स्वस्थ वसा और एंटीऑक्सीडेंट का बेहतरीन स्रोत जो सूजन कम करता है।" },
          { title: "वसायुक्त मछली (साल्मन, सार्डिन)", desc: "ओमेगा-3 से भरपूर जो त्वचा की जलन और पपड़ी को शांत करती है।" },
          { title: "हरी पत्तेदार सब्जियां और ब्रोकोली", desc: "विटामिन, फोलिक एसिड और फाइबर से भरपूर जो पेट को स्वस्थ रखती हैं।" },
          { title: "एवोकैडो और कच्चे मेवे", desc: "विटामिन ई और स्वस्थ वसा प्रदान करते हैं जो सूखी त्वचा को पोषण देते हैं।" },
          { title: "प्रोबायोटिक खाद्य पदार्थ (किमची/दही)", desc: "पेट के अच्छे बैक्टीरिया को बढ़ाकर प्रतिरक्षा प्रणाली को संतुलित रखते हैं।" }
        ],
        recipes_intro: "वयस्कों के लिए स्वस्थ और सूजन-रोधी रेसिपी:",
        recipes: [
          {
            name: "पैन-सीयर साल्मन और बेक्ड शकरकंद",
            desc: "विटामिन ए, डी और ओमेगा-3 से भरपूर एक आदर्श सूजन-रोधी दोपहर या रात का भोजन।",
            ing: ["120 ग्राम ताजी साल्मन मछली", "1 मध्यम शकरकंद", "1 कप उबली ब्रोकोली", "1.5 बड़े चम्मच जैतून का तेल", "लहसुन, नमक"],
            inst: ["शकरकंद को 200°C पर 45 मिनट बेक करें जब तक नरम न हो जाए।", "साल्मन को जैतून तेल में दोनों तरफ 3-4 मिनट पकाएं।", "ब्रोकोली को जैतून तेल और लहसुन के साथ टॉस करें।"],
            tip: "यह भोजन त्वचा के नवीनीकरण (सेल रिन्यूअल) के लिए सर्वोत्तम है।"
          },
          {
            name: "बेरी पालक क्विनोआ सलाद",
            desc: "फाइबर और एंटीऑक्सीडेंट से भरपूर दोपहर का एक पौष्टिक सलाद।",
            ing: ["1/2 कप उबला क्विनोआ", "2 कप बेबी पालक", "1/2 कप ताजी ब्लूबेरी", "10 कच्चे अखरोट", "जैतून तेल और नींबू ड्रेसिंग"],
            inst: ["पालक और क्विनोआ को एक बाउल में रखें।", "ऊपर से ब्लूबेरी और अखरोट डालें।", "जैतून तेल और नींबू की ड्रेसिंग मिलाकर परोसें।"],
            tip: "क्विनोआ संपूर्ण प्रोटीन प्रदान करता है और अखरोट से ओमेगा-3 मिलता है।"
          },
          {
            name: "एवोकैडो और अंडा टोस्ट",
            desc: "रक्त शर्करा को नियंत्रित रखने और ग्लूटेन से बचने के लिए एक स्वस्थ नाश्ता।",
            ing: ["1 स्लाइस ग्लूटेन-मुक्त ब्रेड", "1/2 पका एवोकैडो", "1 उबला या पोच किया हुआ अंडा", "1 छोटा चम्मच जैतून का तेल"],
            inst: ["ग्लूटेन-मुक्त ब्रेड को टोस्ट करें।", "एवोकैडो को जैतून तेल के साथ मैश कर ब्रेड पर लगाएं।", "ऊपर से अंडा रखकर परोसें।"],
            tip: "स्वस्थ वसा और प्रोटीन का एक बेहतरीन मिश्रण जो ऊर्जा बनाए रखता है।"
          },
          {
            name: "गाजर और जुकिनी की हर्ब स्टीम सब्जी",
            desc: "ताजे हर्ब्स और जैतून के तेल के साथ भाप में पकी साधारण सब्जियां।",
            ing: ["2 गाजर (कटी)", "1 जुकिनी (कटी)", "1 बड़ा चम्मच जैतून का तेल", "ताजा रोजमेरी (मेंहदी के पत्ते)", "नमक"],
            inst: ["गाजर और जुकिनी को 8-10 मिनट भाप में पकाएं।", "जैतून के तेल, रोजमेरी और थोड़े नमक के साथ मिलाएं।", "साइड डिश के रूप में परोसें।"],
            tip: "रोजमेरी में शक्तिशाली प्राकृतिक सूजन-रोधी गुण होते हैं।"
          }
        ],
        research_intro: "वयस्क सोरायसिस पर महत्वपूर्ण वैज्ञानिक निष्कर्ष:",
        research: [
          { title: "सोरायसिस और मेटाबॉलिक सिंड्रोम संबंध", desc: "शोध बताते हैं कि सोरायसिस के कारण वयस्कों में मोटापा, मधुमेह और हृदय रोगों का खतरा काफी बढ़ जाता है।" },
          { title: "बायोलॉजिक्स दवाएं और हृदय स्वास्थ्य", desc: "अध्ययन दिखाते हैं कि सोरायसिस का सफल इलाज शरीर की धमनियों की सूजन को कम कर दिल के दौरे के खतरे को घटाता है।" },
          { title: "वजन कम करने का सोरायसिस पर प्रभाव", desc: "साबित करता है कि केवल 5-10% वजन कम करने से सोरायसिस की गंभीरता में भारी कमी आती है और दवाओं का असर बेहतर होता है।" }
        ]
      },

      senior: {
        intro: "बुजुर्गों (उम्र 65+) में सोरायसिस का प्रबंधन चुनौतीपूर्ण होता है क्योंकि उनकी त्वचा पतली होती है और वे कई अन्य बीमारियों की दवाएं ले रहे होते हैं। त्वचा के फटने और छिलने से बचने के लिए कोमल मॉइस्चराइजेशन आवश्यक है। दवाओं के साइड इफेक्ट्स से बचने के लिए डॉक्टर अक्सर प्रकाश चिकित्सा (phototherapy) को प्राथमिकता देते हैं। आहार में नरम, सुपाच्य और जोड़ों व हड्डियों को मजबूत करने वाले तत्वों को शामिल किया जाना चाहिए।",
        skincare_title: " fragility त्वचा की सुरक्षा और सह-रुग्णता (Comorbidity) प्रबंधन",
        skincare_intro: "बुजुर्गों की त्वचा नाजुक और पतली होती है। रगड़ने और तेज रसायनों से त्वचा को बचाएं।",
        skincare_steps: [
          "त्वचा को फटने से बचाने के लिए दिन में कई बार अत्यंत सौम्य मॉइस्चराइज़र लगाएं।",
          "त्वचा को पतला होने और नीले निशान (bruising) पड़ने से बचाने के लिए तेज स्टेरॉयड क्रीम से बचें।",
          "सर्दियों में कमरे में ह्यूमिडिफायर का उपयोग करें ताकि हवा में नमी बनी रहे।",
          "जोड़ों को लचीला रखने के लिए डॉक्टर की सलाह पर हल्के व्यायाम या टहलना जारी रखें।",
          "अपनी सभी दवाओं (जैसे बीपी की दवाएं) की डॉक्टर से जांच कराएं, क्योंकि कुछ दवाएं सोरायसिस बढ़ा सकती हैं।"
        ],
        treatments: [
          { title: "हल्की स्टेरॉयड क्रीम का सीमित उपयोग", desc: "त्वचा को पतला होने, कटने और नीले निशान पड़ने से बचाने के लिए सावधानी से उपयोग करें।" },
          { title: "नैरोबैंड फोटोथेरेपी (UVB)", desc: "बुजुर्गों के लिए सबसे सुरक्षित विकल्प। इसका शरीर पर कोई दुष्प्रभाव नहीं होता और दवाओं के साथ कोई रिएक्शन नहीं होता।" },
          { title: "लक्षित कम साइड-इफेक्ट वाली बायोलॉजिक्स", desc: "लिवर और किडनी पर बिना दबाव डाले काम करने वाले आधुनिक इंजेक्शन।" },
          { title: "सिरामाइड युक्त गाढ़े क्रीम", desc: "उम्रदराज सूखी त्वचा को गहराई से नमी प्रदान कर फटने से बचाते हैं।" }
        ],
        triggers_intro: "किडनी, दिल और त्वचा की सुरक्षा के लिए इन चीजों को सीमित करें:",
        triggers: [
          { title: "अधिक नमक वाला भोजन", desc: "अचार, पापड़ और डिब्बाबंद सूप बीपी बढ़ाते हैं और त्वचा को सुखाते हैं।" },
          { title: "मीठा और डिब्बाबंद खाद्य पदार्थ", desc: "इंसुलिन प्रतिरोध (diabetes) बढ़ाते हैं और सूजन को बढ़ावा देते हैं।" },
          { title: "अत्यधिक लाल मांस (मटन)", desc: "जोड़ों में अकड़न और त्वचा की लालिमा को बढ़ाने वाले वसा से युक्त।" },
          { title: "टमाटर और मिर्च (नाइटशेड)", desc: "कुछ बुजुर्गों में इनके सेवन से जोड़ों का दर्द और जकड़न बढ़ सकती है।" },
          { title: "मैदा और बेकरी बिस्कुट", desc: "कब्ज और पेट की समस्याओं को बढ़ाते हैं जिससे त्वचा प्रभावित होती है।" }
        ],
        beneficial_intro: "जोड़ों और हड्डियों को मजबूत करने वाले नरम और सुपाच्य खाद्य पदार्थ खाएं:",
        beneficial: [
          { title: "ओमेगा-3 युक्त नरम मछली", desc: "भाप में पकी साल्मन मछली जोड़ों के दर्द और रूखी त्वचा के लिए बेहतरीन है।" },
          { title: "कैल्शियम और विटामिन डी", desc: "अंडे की जर्दी, फोर्टिफाइड खाद्य पदार्थ। हड्डियों को कमजोर होने से बचाते हैं।" },
          { title: "बीटा-कैरोटीन (नरम प्यूरी)", desc: "नरम गाजर और शकरकंद का मैश। पचाने में आसान और त्वचा के लिए गुणकारी।" },
          { title: "जैतून का तेल और एवोकैडो मैश", desc: "हृदय स्वास्थ्य और त्वचा की कोमलता के लिए अच्छे फैट्स।" },
          { title: "अदरक और हल्दी की गुनगुनी चाय", desc: "जोड़ों के दर्द को कम करने वाले प्राकृतिक पेय।" }
        ],
        recipes_intro: "बुजुर्गों के लिए चबाने में आसान और पौष्टिक रेसिपी:",
        recipes: [
          {
            name: "नरम पोच्ड साल्मन और शकरकंद प्यूरी",
            desc: "चबाने में अत्यंत आसान पानी में पकी नरम साल्मन और शकरकंद की प्यूरी।",
            ing: ["100 ग्राम साल्मन मछली (कांटे रहित)", "1 मध्यम शकरकंद (कटा)", "1 बड़ा चम्मच जैतून का तेल"],
            inst: ["साल्मन को उबलते पानी में 8 मिनट तक बहुत नरम होने तक पकाएं।", "शकरकंद को उबालकर जैतून तेल के साथ चिकना होने तक पीस लें।", "साल्मन को तोड़कर प्यूरी के साथ परोसें।"],
            tip: "चबाने की समस्या वाले बुजुर्गों के लिए सर्वोत्तम। पचाने में बहुत आसान।"
          },
          {
            name: "नरम बेरी पालक दलिया (ओट्स)",
            desc: "दूध या पानी में अच्छी तरह पकाया गया नरम दलिया, जिसमें पालक प्यूरी और ब्लूबेरी मिक्स हो।",
            ing: ["1/2 cup ओट्स", "1 कप पानी या बादाम दूध", "1/4 कप ब्लूबेरी", "एक मुट्ठी पालक"],
            inst: ["ओट्स को 10 मिनट तक बहुत नरम होने तक पकाएं।", "पालक प्यूरी और ब्लूबेरी डालें, 2 मिनट और पकाएं जब तक बेरीज गल न जाएं।", "गुनगुना परोसें।"],
            tip: "कब्ज से बचने और पाचन तंत्र को स्वस्थ रखने के लिए फाइबर से भरपूर।"
          },
          {
            name: "एवोकैडो केला कस्टर्ड",
            desc: "पचाने में आसान, पोटेशियम युक्त बिना पकाया हुआ क्रीमी कस्टर्ड।",
            ing: ["1/2 पका एवोकैडो", "1/2 पका केला", "2 बड़े चम्मच नारियल का दूध", "एक चुटकी सोंठ पाउडर (सूखा अदरक)"],
            inst: ["एवोकैडो और केले को एक कटोरी में डालें।", "नारियल दूध और सोंठ पाउडर मिलाएं।", "चम्मच से अच्छी तरह मैश कर कस्टर्ड जैसा बनाएं।"],
            tip: "सोंठ (अदरक) पाचन तंत्र को दुरुस्त रखता है और जोड़ों की सूजन घटाता है।"
          },
          {
            name: "नरम उबली गाजर और जुकिनी सब्जी",
            desc: "गाजर और तोरई (जुकिनी) को बहुत नरम होने तक भाप देकर जैतून तेल में मिलाया गया।",
            ing: ["1 गाजर (कटी)", "1 जुकिनी (कटी)", "1 बड़ा चम्मच जैतून का तेल"],
            inst: ["गाजर और जुकिनी को 12-14 मिनट तक भाप में पकाएं जब तक कि वे आसानी से कांटे से दबने न लगें।", "जैतून का तेल और चुटकी भर नमक डालकर मिलाएं।", "गुनगुना खाएं।"],
            tip: "बुजुर्गों के लिए पचाने में बेहद हल्की और पोषक तत्वों से भरपूर साइड डिश।"
          }
        ],
        research_intro: "बुजुर्गों के सोरायसिस पर महत्वपूर्ण चिकित्सीय शोध:",
        research: [
          { title: "उम्रदराज मरीजों में मेथोट्रेक्सेट के खतरे", desc: "अध्ययन बताते हैं कि किडनी की कार्यक्षमता कम होने के कारण बुजुर्गों में मेथोट्रेक्सेट दवा के दुष्प्रभाव अधिक हो सकते हैं; प्रकाश चिकित्सा सबसे सुरक्षित है।" },
          { title: "बुजुर्गों में सह-रुग्णता (Comorbidity) का प्रभाव", desc: "दिखाता है कि 80% से अधिक बुजुर्ग सोरायसिस मरीजों को बीपी या गठिया जैसी अन्य बीमारियां भी होती हैं, जिससे दवाओं के रिएक्शन का खतरा बढ़ता है।" },
          { title: "स्टेरॉयड क्रीम से त्वचा फटने का खतरा", desc: "शोध चेतावनी देते हैं कि बुजुर्गों में अधिक समय तक तेज स्टेरॉयड लगाने से त्वचा पतली हो जाती है और आसानी से कटने या छिलने लगती है।" }
        ]
      }
    }
  },
  te: {
    title: "పొరసరియాసిస్ కేర్ & డైట్ హబ్",
    subtitle: "వయస్సు ఆధారంగా శాస్త్రీయ చికిత్సలు, ఆహార ప్రణాళికలు మరియు చర్మ సంరక్షణ మార్గదర్శకాలు",
    nav_home: "అవలోకనం",
    nav_skincare: "చర్మ సంరక్షణ & చికిత్స",
    nav_diet: "ఆహార విజ్ఞానం",
    nav_plan: "వారపు ఆహార ప్రణాళిక",
    nav_recipes: "వంటలు & తయారీ",
    nav_research: "ప్రపంచ పరిశోధనలు",
    theme_light: "లైట్ మోడ్",
    theme_dark: "డార్క్ మోడ్",
    disclaimer_text: "గమనిక: ఈ వెబ్సైట్ కేవలం అవగాహన కోసం మాత్రమే. పొరసరియాసిస్ నివారణ ఖచ్చితంగా అర్హులైన వైద్యులు లేదా డెర్మటాలజిస్ట్ పర్యవేక్షణలోనే జరగాలి.",
    copyright_text: "© 2026 పొరసరియాసిస్ కేర్ హబ్. సర్వ హక్కులూ ప్రత్యేకించబడినవి.",
    
    select_age_group: "వయస్సు వర్గాన్ని ఎంచుకోండి:",
    age_0_3: "శిశువు / చిన్నారి (వయస్సు 0 - 3 సంవత్సరాలు)",
    age_4_12: "పిల్లలు (వయస్సు 4 - 12 సంవత్సరాలు)",
    age_13_19: "యువత / టీనేజర్స్ (వయస్సు 13 - 19 సంవత్సరాలు)",
    age_20_64: "వయోజనులు (వయస్సు 20 - 64 సంవత్సరాలు)",
    age_65_plus: "వృద్ధులు (వయస్సు 65+ సంవత్సరాలు)",

    checker_title: "ఆహార భద్రతా తనిఖీ",
    checker_desc: "ఎంచుకున్న వయస్సు వర్గానికి ఏదైనా ఆహార పదార్థం సురక్షితమైనదా లేదా ప్రేరేపించేదా అని శోధించండి.",
    checker_placeholder: "ఆహార పేరు రాయండి (ఉదా: సాల్మన్, చక్కెర, టమోటా)...",
    checker_all: "అన్నీ",
    checker_safe: "సురక్షితం / వాపును తగ్గించేది",
    checker_trigger: "ప్రేరేపించే అవకాశం ఉంది",
    
    recipes_ingredients: "కావలసిన పదార్థాలు",
    recipes_instructions: "తయారుచేసే విధానం",
    recipes_toddler_tip: "వడ్డించే విధానం / పోషక విలువలు",
    
    plan_title: "వారపు యాంటీ-ఇన్ఫ్లమేటరీ ప్రణాళిక",
    plan_intro: "ఎంచుకున్న వయస్సు వర్గం యొక్క పోషకాలు మరియు కెలోరీల అవసరాలకు అనుగుణంగా రూపొందించిన 7 రోజుల సమతుల్య ఆహార పట్టిక.",
    plan_mon: "సోమవారం",
    plan_tue: "మంగళవారం",
    plan_wed: "బుధవారం",
    plan_thu: "గురువారం",
    plan_fri: "శుక్రవారం",
    plan_sat: "శనివారం",
    plan_sun: "ఆదివారం",
    plan_meal_b: "అల్పాహారం",
    plan_meal_l: "మధ్యాహ్న భోజనం",
    plan_meal_d: "రాత్రి భోజనం",
    plan_meal_s: "స్నాక్",

    warning_title: "వైద్యుడిని లేదా డెర్మటాలజిస్ట్ను ఎప్పుడు సంప్రదించాలి?",
    warning_1: "చర్మంపై గాయాలు లేదా మచ్చలలో పసుపు రంగు చీము కారడం, వాపు లేదా వేడిగా అనిపిస్తే (ఇన్ఫెక్షన్ సంకేతం).",
    warning_2: "చిన్నపిల్లల్లో అకస్మాత్తుగా తీవ్రమైన జ్వరం మరియు చర్మంపై ఎర్రటి పొక్కులు వేగంగా వ్యాపిస్తే.",
    warning_3: "కీళ్ల నొప్పులు, కీళ్లు గట్టిపడటం లేదా వాపులు కనిపిస్తే (ఇది సోరియాటిక్ ఆర్థరైటిస్ కావచ్చు).",

    // ======================================================================
    // AGE GROUP SPECIFIC DATA - TELUGU
    // ======================================================================
    age_groups: {
      infant_toddler: {
        intro: "3 సంవత్సరాల లోపు పసిపిల్లలలో పొరసరియాసిస్ ను చాలా సున్నితంగా నిర్వహించాలి. ఈ వయస్సులో ముఖం మరియు డయాపర్ వేసే ప్రాంతాలలో పొరసరియాసిస్ రావడం సాధారణం. చర్మానికి తేమను అందించడం మరియు వైద్యుల పర్యవేక్షణలో తక్కువ మోతాదు క్రీములను వాడడం ముఖ్యం. పిల్లలకు మెత్తటి మరియు తేలికగా జీర్ణమయ్యే ఆహారం ఇవ్వాలి.",
        skincare_title: "సున్నితమైన తేమ & స్నాన విధానం",
        skincare_intro: "చిన్నపిల్లల చర్మం చాలా పల్చగా ఉండి రాసే క్రీములను త్వరగా గ్రహిస్తుంది. చర్మాన్ని ఎల్లప్పుడూ తేమగా ఉంచండి.",
        skincare_steps: [
          "గోరువెచ్చని నీటితో స్నానం చేయించండి మరియు సమయాన్ని 10 నిమిషాలకు పరిమితం చేయండి.",
          "దురదను తగ్గించడానికి నీటిలో కొల్లాయిడల్ ఓట్మీల్ కలపండి; వాసనలు గల సబ్బులను నివారించండి.",
          "మెత్తటి టవల్తో చర్మాన్ని సున్నితంగా అద్దండి; రుద్దకండి.",
          "స్నానం చేసిన 3 నిమిషాల్లోపు మందపాటి క్రీమ్ (పెట్రోలియం జెల్లీ లేదా సిరామైడ్ క్రీమ్) రాయండి.",
          "వైద్యుల సలహా మేరకు మాత్రమే స్టెరాయిడ్ క్రీములను అతి తక్కువ పరిమాణంలో వాడండి."
        ],
        treatments: [
          { title: "వాసన లేని మాయిశ్చరైజర్స్", desc: "రోజుకు 3-4 సార్లు రాయండి. ఇది చర్మ రక్షణ పొరను బలపరిచి దురదను తగ్గిస్తుంది." },
          { title: "తక్కువ మోతాదు స్టెరాయిడ్ క్రీమ్", desc: "తీవ్రమైన మంటను తగ్గించడానికి వైద్యుల సలహాపై మాత్రమే వాడాలి." },
          { title: "విటమిన్ డి అనలాగ్స్", desc: "చర్మ కణాలు అతి త్వరగా పెరగకుండా నెమ్మదింపజేస్తుంది. పిల్లలకు చాలా సురక్షితం." },
          { title: "కొల్లాయిడల్ ఓట్మీల్ బాత్", desc: "చర్మంపై దురదను, ఎరుపుదనాన్ని తగ్గించే సహజ నివారిణి." }
        ],
        triggers_intro: "పిల్లలలో చర్మ మంటను తగ్గించడానికి ఈ ఆహారాలను నివారించండి:",
        triggers: [
          { title: "శుద్ధి చేసిన చక్కెర", desc: "తీపి పదార్థాలు, చాక్లెట్లు మరియు ప్యాక్ చేసిన జ్యూస్లు శరీరంలో వాపును పెంచుతాయి." },
          { title: "ప్యాక్డ్ / జంక్ ఫుడ్స్", desc: "చిప్స్ మరియు నిల్వ ఉంచిన ఆహారాలలో హానికరమైన వసలు, రసాయనాలు ఉంటాయి." },
          { title: "ఆవు పాలు (కేసిన్)", desc: "కొందరు పిల్లలకు ఆవు పాలు పడకపోవడం వల్ల చర్మ సమస్యలు తీవ్రమవుతాయి." },
          { title: "గోధుమలు & గ్లూటెన్", desc: "గోధుమ ఉత్పత్తులు జీర్ణక్రియను దెబ్బతీసి పొరసరియాసిస్ ను పెంచుతాయి." },
          { title: "టమోటా, బంగాళాదుంప (నైట్షేడ్స్)", desc: "వీటిలోని సొలనిన్ పసిపిల్లలలో జీర్ణకోశ సమస్యలకు దారితీయవచ్చు." }
        ],
        beneficial_intro: "చిన్నారి చర్మాన్ని నయం చేయడానికి ఈ క్రింది యాంటీ-ఇన్ఫ్లమేటరీ ఆహారాలను ఇవ్వండి:",
        beneficial: [
          { title: "ఒమేగా-3 ఫ్యాటీ యాసిడ్స్", desc: "సాల్మన్ చేప, చియా విత్తనాలు. శరీరంలో మంటను సహజంగా తగ్గిస్తాయి." },
          { title: "విటమిన్ ఎ (బీటా-కెరోటిన్)", desc: "చిలగడదుంపలు మరియు క్యారెట్ ప్యూరీ. చర్మ కణాల పునరుత్పత్తికి సహాయపడుతుంది." },
          { title: "విటమిన్ డి లభించేవి", desc: "సాల్మన్ చేప, గుడ్డు సొన. రోగనిరోధక శక్తిని పెంచుతాయి." },
          { title: "యాంటీఆక్సిడెంట్ పండ్లు", desc: "బ్లూబెర్రీస్, స్ట్రాబెర్రీస్. చర్మ కణాలను రక్షిస్తాయి." },
          { title: "ఆరోగ్యకరమైన కొవ్వులు", desc: "అవకాడో మరియు ఆలివ్ ఆయిల్. పొడిబారిన చర్మానికి తేమను అందిస్తాయి." }
        ],
        recipes_intro: "0-3 సంవత్సరాల చిన్నపిల్లల కొరకు పోషకాలతో కూడిన మెత్తటి వంటకాలు:",
        recipes: [
          {
            name: "సాల్మన్ మరియు చిలగడదుంప మ్యాష్",
            desc: "ఒమేగా-3లు, విటమిన్ ఎ మరియు డి సమృద్ధిగా లభిస్తాయి. మింగడానికి సులభం మరియు సహజ తీపి కలిగి ఉంటుంది.",
            ing: ["50 గ్రాముల ముళ్లు లేని సాల్మన్ చేప", "1 మధ్యస్థ చిలగడదుంప (తొక్క తీసి ముక్కలు చేసినది)", "1 స్పూన్ ఆలివ్ ఆయిల్"],
            inst: ["చిలగడదుంప ముక్కలను 15 నిమిషాలు ఉడికించండి.", "సాల్మన్ను 8-10 నిమిషాలు ఆవిరిపై ఉడికించి, ముళ్లు లేకుండా తనిఖీ చేయండి.", "రెండింటినీ ఆలివ్ ఆయిల్ వేసి ఫోర్క్తో మెత్తగా మ్యాష్ చేయండి. గోరువెచ్చగా వడ్డించండి."],
            tip: "చేప ముళ్లను జాగ్రత్తగా తీసివేయండి. గది ఉష్ణోగ్రత వద్ద వడ్డించండి."
          },
          {
            name: "బెర్రీ పాలకూర 'గ్రీన్' ఓట్స్",
            desc: "యాంటీఆక్సిడెంట్లు గల బ్లూబెర్రీస్ మరియు ఐరన్ సమృద్ధిగా గల పాలకూరతో కూడిన ఓట్స్.",
            ing: ["1/2 కప్పు ఓట్స్ (గ్లూటెన్ లేనివి)", "1 కప్పు కొబ్బరి పాలు", "1/4 కప్పు బ్లూబెర్రీస్", "ఒక పిడికెడు పాలకూర ఆకులు"],
            inst: ["పాలకూరను కొబ్బరి పాలతో కలిపి మెత్తగా మిక్సీ పట్టండి.", "ఈ ఆకుపచ్చని పాలలో ఓట్స్ను 7 నిమిషాలు ఉడికించండి.", "చివరగా బ్లూబెర్రీస్ వేసి చల్లారిన తర్వాత వడ్డించండి."],
            tip: "పిల్లలను ఆకర్షించడానికి పైభాగంలో అరటి ముక్కలతో స్మైలీ అమర్చండి."
          },
          {
            name: "క్రీమీ అవకాడో అరటిపండు పుడ్డింగ్",
            desc: "ఆరోగ్యకరమైన కొవ్వులు, పొటాషియం గల పాలు వాడకుండా చేసే సహజ తీపి వంటకం.",
            ing: ["1/2 పండిన అవకాడో", "1/2 పండిన అరటిపండు", "2 స్పూన్ల బాదం పాలు"],
            inst: ["అవకాడో మరియు అరటిపండు గుజ్జును బ్లెండర్లో వేయండి.", "బాదం పాలు పోసి మెత్తగా బ్లెండ్ చేయండి.", "తాజాగా వెంటనే వడ్డించండి."],
            tip: "బయటి స్వీట్లకు బదులుగా దీనిని ఒక ఆరోగ్యకరమైన పుడ్డింగ్గా ఇవ్వవచ్చు."
          },
          {
            name: "ఆవిరిపై ఉడికించిన క్యారెట్ & జుకిని ఫింగర్స్",
            desc: "చేత్తో పట్టుకుని తినడానికి వీలుగా ఉండే మెత్తటి ముక్కలు. విటమిన్లు అధికంగా ఉంటాయి.",
            ing: ["1 క్యారెట్ (తొక్క తీసినది)", "1 జుకిని", "1 స్పూన్ ఆలివ్ ఆయిల్"],
            inst: ["కూరగాయలను పొడవుగా ముక్కలు కోయండి.", "క్యారెట్లను 4 నిమిషాలు, ఆపై జుకిని ముక్కలను వేసి మరో 6 నిమిషాలు ఉడికించండి.", "పైనుండి కొద్దిగా ఆలివ్ ఆయిల్ వేయండి."],
            tip: "ముక్కలు చేత్తో నలిపితే నలిగిపోయేంత మెత్తగా ఉడికించండి."
          }
        ],
        research_intro: "0-3 సంవత్సరాల చిన్నపిల్లల పొరసరియాసిస్ పై పరిశోధనలు:",
        research: [
          { title: "నేషనల్ పొరసరియాసిస్ ఫౌండేషన్ (NPF) మార్గదర్శకాలు", desc: "పిల్లల చర్మం పల్చగా ఉండడం వల్ల ముఖం మరియు డయాపర్ ప్రాంతంలో బలమైన స్టెరాయిడ్ క్రీములను వాడరాదని సూచిస్తుంది." },
          { title: "కొల్లాయిడల్ ఓట్మీల్ ప్రయోజనాల పరిశోధన", desc: "ఓట్మీల్ లోని సహజ సమ్మేళనాలు పిల్లల చర్మంపై దురదను మరియు మంటను విజయవంతంగా తగ్గిస్తాయని నిరూపించబడింది." },
          { title: "జీర్ణకోశ బ్యాక్టీరియా మరియు చర్మ సంబంధం", desc: "జీర్ణకోశ ఆరోగ్యానికి మరియు చర్మ వాపుకు గల సంబంధాన్ని వివరిస్తుంది; పీచు పదార్థం గల ఆహారాలు మేలు చేస్తాయి." }
        ]
      },

      child: {
        intro: "4-12 సంవత్సరాల పిల్లలలో, గొంతు ఇన్ఫెక్షన్ల (strep throat) తర్వాత పొరసరియాసిస్ (guttate psoriasis) అకస్మాత్తుగా వ్యాపించడం చాలా సాధారణం. అలాగే తలపై పొలుసులు (scalp psoriasis) కూడా కనిపిస్తాయి. ఇన్ఫెక్షన్లకు తగిన చికిత్స అందించడం, సురక్షితమైన కాంతి చికిత్స (phototherapy) మరియు పీచు పదార్థం గల స్కూల్ డైట్ పై ప్రత్యేక శ్రద్ధ వహించాలి.",
        skincare_title: "తలపై సంరక్షణ & ఇన్ఫెక్షన్ల నివారణ",
        skincare_intro: "స్కూల్ కి వెళ్లే పిల్లలలో చర్మ గాయాలు మరియు తలపై పొలుసులను గమనించండి. గొంతు నొప్పి వస్తే నిర్లక్ష్యం చేయకండి.",
        skincare_steps: [
          "తలపై పొలుసులను తొలగించడానికి మెత్తటి బ్రష్ వాడండి; చేత్తో లాగకండి.",
          "తలపై మచ్చలు ఉంటే వైద్యుల సలహా ప్రకారం మైల్డ్ కోల్ తార్ షాంపూ ఉపయోగించండి.",
          "గాయాలు తగిలిన చోట పొరసరియాసిస్ పెరగకుండా (Koebner phenomenon) వెంటనే చికిత్స చేయండి.",
          "ఆడుకున్న తర్వాత లేదా చేతులు కడిగిన వెంటనే మాయిశ్చరైజర్ రాయండి.",
          "పిల్లలకు గొంతు నొప్పి లేదా జ్వరం వస్తే వెంటనే వైద్యుడిని సంప్రదించండి."
        ],
        treatments: [
          { title: "కాల్సిపోట్రీన్ కాంబినేషన్ క్రీమ్", desc: "పిల్లల చర్మంపై ఏర్పడే పొలుసులను నివారించడానికి వైద్యులు సూచించే ప్రభావవంతమైన క్రీమ్." },
          { title: "న్యారోబాండ్ ఫోటోథెరపీ (UVB)", desc: "మందుల అవసరం లేకుండా కాంతి సహాయంతో పొరసరియాసిస్ ను తగ్గించే సురక్షితమైన విధానం." },
          { title: "స్టెరాయిడ్స్ లేని క్రీములు (టాక్రోలిమస్)", desc: "ముఖం మరియు సున్నితమైన చర్మ భాగాలకు ఎంతో సురక్షితమైన క్రీములు." },
          { title: "గొంతు ఇన్ఫెక్షన్ల చికిత్స", desc: "గొంతు నొప్పి (strep throat) కి వెంటనే యాంటీబయాటిక్స్ వాడడం ద్వారా పొరసరియాసిస్ వ్యాపించకుండా ఆపవచ్చు." }
        ],
        triggers_intro: "స్కూల్ లంచ్ బాక్స్ మరియు స్నాక్స్ నుండి ఈ క్రింది ప్రేరకాలను తొలగించండి:",
        triggers: [
          { title: "అధిక చక్కెర గల పానీయాలు", desc: "కూల్ డ్రింక్స్ మరియు ప్యాకెట్ జ్యూస్లు శరీరంలో వాపును పెంచుతాయి." },
          { title: "మైదా మరియు బేకరీ పిండి పదార్థాలు", desc: "బిస్కెట్లు మరియు కేకులలో ఉండే గ్లూటెన్ జీర్ణవ్యవస్థను ఇబ్బంది పెడుతుంది." },
          { title: "ప్రాసెస్డ్ చీజ్ & ఫాస్ట్ ఫుడ్", desc: "ఉప్పు మరియు హానికరమైన కొవ్వులు ఎక్కువ ఉండడం వల్ల దురదలు, ఎరుపుదనం పెరుగుతాయి." },
          { title: "కృత్రిమ రంగులు & ప్రిజర్వేటివ్స్", desc: "సున్నితమైన రోగనిరోధక శక్తి గల పిల్లలలో అలర్జీని పెంచుతాయి." },
          { title: "టమోటా, వంకాయ (నైట్షేడ్స్)", desc: "ఇవి కొందరు పిల్లలలో కీళ్ల నొప్పులను మరియు చర్మ దురదను ప్రేరేపించవచ్చు." }
        ],
        beneficial_intro: "పిల్లల ఆహారంలో ఈ పోషకాలను చేర్చండి:",
        beneficial: [
          { title: "ఒమేగా-3 అధికంగా ఉండే ఆహారాలు", desc: "సాల్మన్ చేప, మెత్తగా చేసిన अखरोट (వాల్నట్స్). వాపును తగ్గిస్తాయి." },
          { title: "క్యారెట్లు మరియు గుమ్మడికాయ", desc: "విటమిన్ ఎ సమృద్ధిగా లభించడం వల్ల చర్మ కణాల పునరుత్పత్తికి సహాయపడుతుంది." },
          { title: "పీచు పదార్థం గల తృణధాన్యాలు", desc: "ఓట్స్, బ్రౌన్ రైస్ (దంపుడు బియ్యం). జీర్ణక్రియను మెరుగుపరుస్తాయి." },
          { title: "గుడ్డు సొన / ఉదయపు ఎండ", desc: "శరీరానికి రోగనిరోధక శక్తిని అందించే విటమిన్ డి లభిస్తుంది." },
          { title: "తాజా పండ్లు (ఆపిల్స్, బేరి)", desc: "యాంటీఆక్సిడెంట్లు మరియు పీచు పదార్థం జీర్ణకోశ గోడలను ఆరోగ్యంగా ఉంచుతాయి." }
        ],
        recipes_intro: "4-12 సంవత్సరాల పిల్లలకు సరిపోయే రుచికరమైన మరియు ఆరోగ్యకరమైన వంటకాలు:",
        recipes: [
          {
            name: "బేక్డ్ సాల్మన్ మరియు చిలగడదుంప వెజెస్",
            desc: "చిన్న ముక్కలుగా చేసిన సాల్మన్ మరియు రుచికరమైన చిలగడదుంప ముక్కల వంటకం.",
            ing: ["80 గ్రాముల ముళ్లు లేని సాల్మన్", "1 మధ్యస్థ చిలగడదుంప (ముక్కలుగా చేసినది)", "1 స్పూన్ ఆలివ్ ఆయిల్", "ఉప్పు, ఒరేగానో"],
            inst: ["చిలగడదుంప ముక్కలకు ఆలివ్ ఆయిల్ రాసి 200°C వద్ద 20 నిమిషాలు బేక్ చేయండి.", "సాల్మన్ను కూడా ఆలివ్ ఆయిల్ రాసి పక్కనే 10-12 నిమిషాలు బేక్ చేయండి.", "గోరువెచ్చగా వడ్డించండి."],
            tip: "దీనిని మెత్తగా చేసిన తాజా అవకాడో డిప్తో వడ్డించండి."
          },
          {
            name: "బెర్రీ పాలకూర ఓట్స్ స్మూదీ బౌల్",
            desc: "మెత్తటి పాలకూర మరియు పీచు పదార్థం గల ఓట్స్ మిశ్రమ బౌల్ పైన బ్లూబెర్రీస్.",
            ing: ["1/2 కప్పు ఓట్స్", "1 కప్పు బాదం పాలు", "1/2 కప్పు బ్లూబెర్రీస్", "ఒక పిడికెడు పాలకూర", "1 స్పూన్ చీయా విత్తనాలు"],
            inst: ["పాలకూర, బాదం పాలు మరియు ఓట్స్ను మిక్సీ పట్టి బౌల్లో తీసుకోండి.", "పైన తాజా బ్లూబెర్రీస్ మరియు చీయా విత్తనాలతో అలంకరించి చల్లగా ఇవ్వండి."],
            tip: "పిల్లల పొట్టలోకి పాలకూర మరియు పీచును పంపించడానికి ఇది చాలా సులభమైన పద్ధతి."
          },
          {
            name: "అవకాడో చికెన్ / ఎగ్ బోట్స్",
            desc: "ప్రొటీన్లు నిండిన అవకాడో కప్పులలో మెత్తగా చేసిన చికెన్ లేదా గుడ్డు మిశ్రమం.",
            ing: ["1 పండిన అవకాడో (రెండు ముక్కలుగా చేసినది)", "50 గ్రాముల ఉడికించిన చికెన్ లేదా 1 ఉడికించిన గుడ్డు", "1 స్పూన్ ఆలివ్ ఆయిల్", "నిమ్మరసం"],
            inst: ["చికెన్ లేదా ఉడికించిన గుడ్డును ఆలివ్ ఆయిల్, నిమ్మరసం వేసి మెత్తగా కలపండి.", "ఈ మిశ్రమాన్ని అవకాడో మధ్య భాగంలో అమర్చండి.", "గ్లూటెన్ లేని బిస్కెట్లతో వడ్డించండి."],
            tip: "స్కూల్ లంచ్ బాక్స్ కోసం ఎంతో ఉపయోగపడే వంటకం."
          },
          {
            name: "కురకురలాడే బేక్డ్ జుకిని స్టిక్స్",
            desc: "మైదా వాడకుండా చేసిన పచ్చటి జుకిని ముక్కల బేక్డ్ స్నాక్.",
            ing: ["1 జుకిని (పొడవుగా కట్ చేసినది)", "2 స్పూన్ల గ్లూటెన్-ఫ్రీ పిండి", "1 స్పూన్ ఆలివ్ ఆయిల్", "ఉప్పు"],
            inst: ["జుకిని ముక్కలకు ఆలివ్ ఆయిల్ రాయండి.", "పిండితో తేలికగా కోటింగ్ చేయండి.", "200°C వద్ద 15 నిమిషాలు కురకురలాడేంతవరకు బేక్ చేయండి."],
            tip: "ఆలూ ఫ్రైస్ కు బదులుగా పిల్లలకు ఇష్టమైన ఒక ఆరోగ్యకరమైన స్నాక్."
          }
        ],
        research_intro: "పిల్లలలో వచ్చే పొరసరియాసిస్ పై తాజా వైద్య పరిశోధనలు:",
        research: [
          { title: "గొంతు ఇన్ఫెక్షన్ మరియు పొరసరియాసిస్ సంబంధం", desc: "గొంతులో చేరే బ్యాక్టీరియా పిల్లలలో రోగనిరోధక శక్తిని ఇబ్బంది పెట్టి పొరసరియాసిస్ రావడానికి దారితీస్తుందని రుజువైంది." },
          { title: "టాన్సిల్స్ తొలగింపు మరియు నివారణ", desc: "గొంతు ఇన్ఫెక్షన్లు తరచూ వచ్చే పిల్లలలో టాన్సిల్స్ తొలగించడం ద్వారా పొరసరియాసిస్ తీవ్రతను తగ్గించవచ్చని తేలింది." },
          { title: "పిల్లల కోసం సరికొత్త బయోలాజిక్స్ ఆమోదం", desc: "తీవ్రమైన కేసుల కోసం వాడే అధునాతన బయోలాజిక్స్ ఇంజెక్షన్లను 6 సంవత్సరాలు పైబడిన పిల్లలకు కూడా సురక్షితంగా వాడవచ్చని ఆమోదించారు." }
        ]
      },

      teen: {
        intro: "టీనేజర్స్ (వయస్సు 13-19) లో పొరసరియాసిస్ అనేది హార్మోన్ల మార్పులు (యవ్వనదశ) మరియు చదువు/స్నేహితుల ఒత్తిడి వల్ల ఎక్కువగా మారుతుంది. చికిత్సతో పాటు మానసిక ప్రశాంతత, మొటిమలు రాకుండా ఉండే క్రీములు మరియు చురుగ్గా పెరిగే వయస్సుకు సరిపోయే యాంటీ-ఇన్ఫ్లమేటరీ పోషకాలు అవసరం.",
        skincare_title: "మొటిమలు లేని చర్మ సంరక్షణ & ఒత్తిడి నివారణ",
        skincare_intro: "హార్మోన్ల మార్పుల వల్ల చర్మం జిడ్డుగా మారవచ్చు. రోమ రంధ్రాలు మూసుకుపోని క్రీములు వాడండి.",
        skincare_steps: [
          "మొటిమలు పెరగకుండా ఉండడానికి ఆయిల్-ఫ్రీ, నాన్-కోమెడోజెనిక్ మాయిశ్చరైజర్లను వాడండి.",
          "ఆటల తర్వాత వేడి నీటితో ఎక్కువ సేపు స్నానం చేయకండి; గోరువెచ్చని నీరు మేలు చేస్తుంది.",
          "శరీరంలో కార్టిసోల్ హార్మోన్ను నియంత్రించడానికి ధ్యానం లేదా శ్వాస వ్యాయామాలు చేయండి.",
          "చెమట పట్టినప్పుడు చర్మాన్ని గట్టిగా రుద్దకండి; మైల్డ్ క్లెన్సర్ వాడండి.",
          "వైద్యులు రాసిచ్చిన క్రీములను క్రమం తప్పకుండా ఉపయోగించడం అలవాటు చేసుకోండి."
        ],
        treatments: [
          { title: "ఆయిల్-ఫ్రీ మాయిశ్చరైజర్స్", desc: "మొటిమలు రాకుండా చర్మంలోని పొడి మచ్చలను తేమగా ఉంచుతుంది." },
          { title: "న్యారోబాండ్ ఫోటోథెరపీ (UVB)", desc: "శరీరమంతా పొరసరియాసిస్ వ్యాపించినప్పుడు వాడదగిన అత్యంత సురక్షితమైన కాంతి చికిత్స." },
          { title: "బయోలాజిక్స్ ఇంజెక్షన్లు", desc: "తీవ్రమైన మచ్చలను పూర్తిగా తొలగించి, టీనేజర్లలో ఆత్మవిశ్వాసాన్ని పెంచే ఆధునిక చికిత్స." },
          { title: "మానసిక సంరక్షణ / కౌన్సిలింగ్", desc: "చర్మ వ్యాధి వల్ల కలిగే ఆందోళన, న్యూనతాభావం (हीनभावना) మరియు ఒత్తిడిని తగ్గించడానికి ఎంతో ముఖ్యం." }
        ],
        triggers_intro: "పొరసరియాసిస్ మరియు మొటిమలు రెండింటినీ అదుపులో ఉంచడానికి వీటికి దూరంగా ఉండండి:",
        triggers: [
          { title: "ఫాస్ట్ ఫుడ్స్ & నూనె పదార్థాలు", desc: "బర్గర్లు, నూనెలో వేయించిన సమోసాలు శరీరంలో వాపును పెంచుతాయి." },
          { title: "ఎనర్జీ డ్రింక్స్ మరియు సోడాలు", desc: "అధిక కెఫీన్ మరియు చక్కెర చర్మాన్ని పాడుచేసి దురదలను పెంచుతాయి." },
          { title: "డైరీ ఉత్పత్తులు (అధిక పాలు/చీజ్)", desc: "పాలు ఎక్కువగా తీసుకోవడం హార్మోన్ల అసమతుల్యతకు దారితీసి చర్మ సమస్యలు పెంచుతుంది." },
          { title: "మసాలా చిప్స్ & ప్యాకెట్ స్నాక్స్", desc: "ప్రిజర్వేటివ్స్ మరియు కారం చర్మంపై ఎరుపుదనం మరియు పొక్కులను ప్రేరేపిస్తాయి." },
          { title: "మైదా మరియు ఇన్స్టంట్ నూడుల్స్", desc: "జీర్ణవ్యవస్థను దెబ్బతీసి చర్మ వాపులకు కారణమవుతాయి." }
        ],
        beneficial_intro: "చర్మం శుభ్రంగా ఉండడానికి మరియు ఎదుగుదలకు ఈ క్రింది ఆహారాలు తీసుకోండి:",
        beneficial: [
          { title: "ఒమేగా-3 గల చేపలు", desc: "సాల్మన్ చేప చర్మ కణాలను లోపలి నుండి ఆరోగ్యంగా ఉంచుతుంది." },
          { title: "జింక్ అధికంగా ఉండే ఆహారాలు", desc: "కద్దు గింజలు, శనగలు. చర్మ గాయాలు త్వరగా మానడానికి సహాయపడతాయి." },
          { title: "యాంటీఆక్సిడెంట్ బెర్రీలు, ఆకుకూరలు", desc: "పాలకూర, బ్లూబెర్రీస్. మానసిక ఒత్తిడి వల్ల కలిగే నష్టాన్ని నివారిస్తాయి." },
          { title: "మంచి కొవ్వులు (ఆలివ్ ఆయిల్, అవకాడో)", desc: "చర్మం పొడిబారకుండా నిరంతరం తేమగా ఉండేలా చూస్తాయి." },
          { title: "జీర్ణకోశానికి మేలు చేసే ప్రోబయోటిక్స్", desc: "మజ్జిగ, పెరుగు వంటివి పొట్టను చల్లబరిచి చర్మ దురదలను తగ్గిస్తాయి." }
        ],
        recipes_intro: "చురుగ్గా ఉండే టీనేజర్స్ కొరకు ప్రొటీన్ మరియు యాంటీ-ఇన్ఫ్లమేటరీ వంటకాలు:",
        recipes: [
          {
            name: "గ్రిల్డ్ సాల్మన్ & క్వినోఆ బౌల్",
            desc: "క్వినోఆ, అవకాడో మరియు పండిన సాల్మన్ చేపలతో కూడిన ప్రొటీన్ బౌల్.",
            ing: ["100 గ్రాముల సాల్మన్ చేప", "1/2 కప్పు క్వినోఆ (ఉడికించినది)", "1/2 అవకాడో", "1/2 కప్పు పాలకూర", "1 స్పూన్ ఆలివ్ ఆయిల్"],
            inst: ["సాల్మన్ను ఆలివ్ ఆయిల్ రాసి పాన్ లో రెండు వైపులా 4 నిమిషాలు గ్రిల్ చేయండి.", "ఒక గిన్నెలో క్వినోఆ తీసుకోండి.", "పైన సాల్మన్, అవకాడో మరియు పాలకూర అమర్చి కొద్దిగా నిమ్మరసం చల్లండి."],
            tip: "శరీర ఎదుగుదలకు కావలసిన ఒమేగా-3 మరియు ప్రొటీన్లు సమృద్ధిగా లభిస్తాయి."
          },
          {
            name: "బెర్రీ పాలకూర ప్రొటీన్ స్మూదీ",
            desc: "వ్యాయామం తర్వాత లేదా ఉదయం బ్రేక్ఫాస్ట్ కు సరిపోయే పాలు లేని షేక్.",
            ing: ["1 కప్పు బాదం పాలు", "1/2 కప్పు బ్లూబెర్రీస్", "ఒక పిడికెడు పాలకూర", "1 స్కూప్ ప్రొటీన్ పౌడర్", "1 స్పూన్ అవిసె గింజల నూనె"],
            inst: ["అన్ని పదార్థాలను బ్లెండర్లో వేయండి.", "మెత్తగా బ్లెండ్ చేసి వెంటనే తాగండి."],
            tip: "ఈ పాలు లేని ప్రొటీన్ డ్రింక్ మొటిమలు లేదా చర్మ మచ్చలను ప్రేరేపించదు."
          },
          {
            name: "బేక్డ్ చిలగడదుంప ఫ్రైస్ & అవకాడో డిప్",
            desc: "ఫాస్ట్ ఫుడ్ ఫ్రైస్ కు బదులుగా వాడదగిన ఆరోగ్యకరమైన వంటకం.",
            ing: ["1 పెద్ద చిలగడదుంప (పొడవుగా కోసినది)", "1 స్పూన్ ఆలివ్ ఆయిల్", "1 పండిన అవకాడో", "నిమ్మరసం", "ఉప్పు"],
            inst: ["చిలగడదుంప ముక్కలకు నూనె రాసి 200°C వద్ద 25 నిమిషాలు బేక్ చేయండి.", "అవకాడోను నిమ్మరసం, ఉప్పుతో మెత్తగా చేసి డిప్ సిద్ధం చేయండి.", "ఫ్రైస్ తో వడ్డించండి."],
            tip: "బయటి జంక్ ఫుడ్స్ తినకుండా ఆపడానికి ఒక చక్కని ప్రత్యామ్నాయం."
          },
          {
            name: "ట్యూనా అవకాడో లెట్యూస్ రాప్స్",
            desc: "తక్కువ కార్బోహైడ్రేట్లు కలిగి ఉండే ఒక సులభమైన మధ్యాహ్న భోజనం.",
            ing: ["1 డిబ్బా ట్యూనా చేప (నీరు తీసేసినది)", "1/2 అవకాడో (మ్యాష్ చేసినది)", "1 స్పూన్ ఆలివ్ ఆయిల్", "లెట్యూస్ (సలాడ్ ఆకులు)"],
            inst: ["ట్యూనా, అవకాడో మ్యాష్ మరియు ఆలివ్ ఆయిల్ కలిపి ఉంచండి.", "ఈ మిశ్రమాన్ని లెట్యూస్ ఆకులపై పెట్టి రోల్ లాగా చుట్టి తినండి."],
            tip: "లెట్యూస్ ఆకులు చర్మానికి మంచి తేమను మరియు క్రంచ్ ని ఇస్తాయి."
          }
        ],
        research_intro: "టీనేజర్స్ లో పొరసరియాసిస్ పై ముఖ్యమైన వైద్య శోధనలు:",
        research: [
          { title: "మానసిక ఆరోగ్యం పై సోరియాసిస్ ప్రభావం", desc: "చర్మంపై మచ్చలు కనిపించడం వల్ల టీనేజర్లలో సామాజిక భయం పెరుగుతుందని, సరైన చికిత్స వల్ల ఒత్తిడి తగ్గుతుందని రుజువైంది." },
          { title: "హార్మోన్ల మార్పులు మరియు తీవ్రత", desc: "యవ్వనదశలో హార్మోన్ల హెచ్చుతగ్గులు చర్మం పై వాపులను మరియు తీవ్రతను ప్రభావితం చేస్తాయని అధ్యయనాలు చెబుతున్నాయి." },
          { title: "టీనేజర్లలో బయోలాజిక్స్ సురక్షితత్వం", desc: "ఆధునిక ఇంజెక్షన్ మందులు టీనేజర్లలో చర్మాన్ని శుభ్రపరచడానికి ఎంతో సురక్షితమైనవిగా నిరూపించబడ్డాయి." }
        ]
      },

      adult: {
        intro: "వయోజనులలో (వయస్సు 20-64) పలకల పొరసరియాసిస్ (plaque psoriasis) అత్యంత సాధారణం, మరియు దాదాపు 30% మందిలో కీళ్ల నొప్పులు (psoriatic arthritis) కూడా కనిపిస్తాయి. దీని ప్రేరకాలలో ముఖ్యమైనవి పని ఒత్తిడి, మద్యం, ధూమపానం, స్థూలకాయం. నివారణ కొరకు యాంటీ-ఇన్ఫ్లమేటరీ మెడిటరేనియన్ ఆహారం, బరువు నియంత్రణ మరియు వైద్య చికిత్సలు అవసరం.",
        skincare_title: "మందపాటి పొలుసుల తేమ & కీళ్ల రక్షణ",
        skincare_intro: "వయోజనులలో చర్మంపై మందపాటి పొలుసులు మరియు కీళ్ల నొప్పుల ముప్పు ఎక్కువ. చర్మాన్ని, కీళ్లను రక్షించుకోండి.",
        skincare_steps: [
          "రోజుకు కనీసం రెండు సార్లు మందపాటి మాయిశ్చరైజర్ రాయండి, స్నానం చేసిన వెంటనే తప్పనిసరిగా రాయాలి.",
          "కీళ్లను ఆరోగ్యంగా ఉంచడానికి రోజూ తేలికపాటి వ్యాయామం (ఈత, సైక్లింగ్) చేయండి.",
          "ధూమపానం, మద్యం అలవాట్లకు దూరంగా ఉండండి; ఇవి మందుల పనితీరును తగ్గిస్తాయి.",
          "పని ఒత్తిడిని తగ్గించుకోవడానికి సరైన నిద్ర, యోగా లేదా ప్రాణాయామం అలవాటు చేసుకోండి.",
          "కీళ్ల నొప్పులు లేదా ఉదయం పూట కీళ్లు గట్టిపడటం అనిపిస్తే వెంటనే వైద్యుడిని సంప్రదించండి."
        ],
        treatments: [
          { title: "బలమైన స్టెరాయిడ్ ఆయింట్మెంట్లు", desc: "శరీరంపై ఉండే మందపాటి పొలుసులను తొలగించడానికి వైద్యుల సూచన మేరకు తక్కువ కాలం వాడాలి." },
          { title: "ఆధునిక బయోలాజిక్స్ చికిత్స", desc: "రోగనిరోధక కణాలను లక్ష్యంగా చేసుకుని పనిచేసే ఇంజెక్షన్లు, ఇవి చర్మాన్ని త్వరగా సాధారణ స్థితికి తెస్తాయి." },
          { title: "నోటి ద్వారా తీసుకునే మందులు (మెథోట్రెక్సేట్)", desc: "చర్మ మచ్చలు మరియు కీళ్ల నొప్పులు రెండింటినీ ఒకేసారి నియంత్రించే గోళీలు." },
          { title: "గుండె ఆరోగ్య పరీక్షలు", desc: "పొరసరియాసిస్ ఉన్నవారికి గుండె జబ్బుల ముప్పు ఎక్కువ కాబట్టి క్రమం తప్పకుండా బీపీ, కొలెస్ట్రాల్ పరీక్షలు చేయించాలి." }
        ],
        triggers_intro: "శరీరంలో వాపును పెంచే ఈ ఆహారాలకు దూరంగా ఉండండి:",
        triggers: [
          { title: "మద్యపానం మరియు పొగాకు", desc: "కాలేయాన్ని దెబ్బతీసి, మందుల ప్రభావాన్ని తగ్గించి పొరసరియాసిస్ ను తీవ్రం చేస్తుంది." },
          { title: "రెడ్ మీట్ & నిల్వ చేసిన మాంసం", desc: "శరీరంలో ఇన్ఫ్లమేషన్ను నేరుగా పెంచే కొవ్వులు దీనిలో ఎక్కువగా ఉంటాయి." },
          { title: "మైదా మరియు శుద్ధి చేసిన పిండి", desc: "జీర్ణవ్యవస్థను చెడగొట్టి చర్మ సమస్యలు మరింత పెంచుతాయి." },
          { title: "టమోటా, బంగాళాదుంప, వంకాయ", desc: "వీటిలోని సొలనిన్ కొందరిలో కీళ్ల నొప్పులు మరియు జకడన్ ను పెంచుతుంది." },
          { title: "తీపి పానీయాలు & ట్రాన్స్ ఫ్యాట్స్", desc: "స్థూలకాయం, షుగర్ వ్యాధి ముప్పు పెంచి పొరసరియాసిస్ ను కఠినం చేస్తాయి." }
        ],
        beneficial_intro: "మెడిటరేనియన్ ఆహార శైలిని అలవర్చుకోండి:",
        beneficial: [
          { title: "ఎక్స్ట్రా వర్జిన్ ఆలివ్ ఆయిల్", desc: "మంచి కొవ్వులు, యాంటీఆక్సిడెంట్లు పుష్కలంగా ఉండడం వల్ల వాపును తగ్గిస్తుంది." },
          { title: "వసా చేపలు (సాల్మన్, సార్డిన్స్)", desc: "ఒమేగా-3లు చర్మ పొడిబారడాన్ని మరియు మంటను శాంతింపజేస్తాయి." },
          { title: "ఆకుకూరలు మరియు బ్రోకోలి", desc: "విటమిన్లు, ఫోలిక్ యాసిడ్ మరియు పీచు పదార్థం గల ఆరోగ్యకరమైన కూరగాయలు." },
          { title: "అవకాడో మరియు పచ్చి బాదంపప్పు", desc: "విటమిన్ ఇ మరియు చర్మానికి తేమను ఇచ్చే ఫ్యాట్స్ లభిస్తాయి." },
          { title: "ప్రోబయోటిక్ ఆహారాలు (పెరుగు)", desc: "జీర్ణకోశ బ్యాక్టీరియాను సమతుల్యంగా ఉంచి రోగనిరోధక శక్తిని పెంచుతాయి." }
        ],
        recipes_intro: "వయోజనుల కొరకు రుచికరమైన మరియు యాంటీ-ఇన్ఫ్లమేటరీ వంటకాలు:",
        recipes: [
          {
            name: "పాన్-సీర్ సాల్మన్ మరియు బేక్డ్ చిలగడదుంప",
            desc: "విటమిన్ ఎ, డి మరియు ఒమేగా-3లు సమృద్ధిగా గల ఆరోగ్యకరమైన భోజనం.",
            ing: ["120 గ్రాముల తాజా సాల్మన్ చేప", "1 మధ్యస్థ చిలగడదుంప", "1 కప్పు ఉడికించిన బ్రోకోలి", "1.5 స్పూన్ల ఆలివ్ ఆయిల్", "వెల్లుల్లి, ఉప్పు"],
            inst: ["చిలగడదుంపను 200°C వద్ద 45 నిమిషాలు మెత్తబడే వరకు బేక్ చేయండి.", "సాల్మన్ను ఆలివ్ ఆయిల్ వేసి పాన్ లో రెండు వైపులా 3-4 నిమిషాలు వేయించండి.", "బ్రోకోలిని ఆలివ్ ఆయిల్, వెల్లుల్లితో కలిపి వడ్డించండి."],
            tip: "ఈ భోజనం చర్మ కణాల ఎదుగుదలకు ఎంతో మేలు చేస్తుంది."
          },
          {
            name: "బెర్రీ పాలకూర క్వినోఆ సలాడ్",
            desc: "పీచు పదార్థం, యాంటీఆక్సిడెంట్లు నిండిన మధ్యాహ్న సలాడ్.",
            ing: ["1/2 కప్పు ఉడికించిన క్వినోఆ", "2 కప్పుల పాలకూర ఆకులు", "1/2 కప్పు బ్లూబెర్రీస్", "10 పచ్చి వాల్నట్స్", "ఆలివ్ ఆయిల్, నిమ్మరసం డ్రెస్సింగ్"],
            inst: ["పాలకూర మరియు ఉడికించిన క్వినోఆ ఒక గిన్నెలో తీసుకోండి.", "పైన బ్లూబెర్రీస్, వాల్నట్స్ ముక్కలు వేయండి.", "ఆలివ్ ఆయిల్, నిమ్మరసం డ్రెస్సింగ్ చల్లి బాగా కలిపి సర్వ్ చేయండి."],
            tip: "క్వినోఆ పూర్తి ప్రొటీన్ ఇస్తుంది, వాల్నట్స్ నుండి ఒమేగా-3 లభిస్తుంది."
          },
          {
            name: "అవకాడో మరియు గుడ్డు టోస్ట్",
            desc: "రక్తంలో చక్కెరను నియంత్రించి, గ్లూటెన్ దూరం చేసే సులువైన బ్రేక్ఫాస్ట్.",
            ing: ["1 గ్లూటెన్-ఫ్రీ బ్రెడ్ స్లైస్", "1/2 పండిన అవకాడో", "1 ఉడికించిన గుడ్డు", "1 స్పూన్ ఆలివ్ ఆయిల్"],
            inst: ["బ్రెడ్ స్లైస్ ను టోస్ట్ చేయండి.", "అవకాడో గుజ్జును ఆలివ్ ఆయిల్ తో కలిపి టోస్ట్ పై రాయండి.", "పైన ఉడికించిన గుడ్డు ఉంచి వడ్డించండి."],
            tip: "శరీరానికి రోజంతా కావలసిన శక్తిని ఇచ్చే మంచి వంటకం."
          },
          {
            name: "క్యారెట్ & జుకిని ఆవిరి కూర",
            desc: "తాజా హెర్బ్స్ మరియు ఆలివ్ ఆయిల్ తో ఆవిరిపై ఉడికించిన సాధారణ కూరగాయలు.",
            ing: ["2 క్యారెట్లు (ముక్కలు కోసినవి)", "1 జుకిని (ముక్కలు కోసినది)", "1 స్పూన్ ఆలివ్ ఆయిల్", "తాజా రోజ్మేరీ ఆకులు", "ఉప్పు"],
            inst: ["క్యారెట్, జుకిని ముక్కలను 8-10 నిమిషాలు ఆవిరిపై ఉడికించండి.", "ఆలివ్ ఆయిల్, రోజ్మేరీ మరియు ఉప్పు వేసి కలపండి."],
            tip: "రోజ్మేరీ లో వాపులను మరియు చర్మ దురదలను తగ్గించే సహజ గుణాలు ఉన్నాయి."
          }
        ],
        research_intro: "వయోజనుల పొరసరియాసిస్ పై ముఖ్యమైన వైద్య పరిశోధనలు:",
        research: [
          { title: "పొరసరియాసిస్ మరియు మెటబాలిక్ సిండ్రోమ్ లింక్", desc: "పొరసరియాసిస్ ఉన్న వయోజనులలో ఊబకాయం, మధుమేహం మరియు గుండె జబ్బుల ముప్పు ఎక్కువగా ఉంటుందని వైద్య పరిశోధనలు వెల్లడిస్తున్నాయి." },
          { title: "బయోలాజిక్స్ మరియు గుండె ఆరోగ్యం", desc: "బయోలాజిక్స్ మందుల విజయవంతమైన చికిత్స ద్వారా శరీర ధమనులలో వాపులు తగ్గి గుండెపోటు ముప్పు తగ్గుతుందని తేలింది." },
          { title: "బరువు తగ్గడం వల్ల కలిగే ప్రయోజనాలు", desc: "బరువు తగ్గడం వల్ల పొరసరియాసిస్ తీవ్రత చాలా వరకు తగ్గి, వాడుతున్న మందుల ప్రభావం రెట్టింపు అవుతుందని నిరూపించబడింది." }
        ]
      },

      senior: {
        intro: "వృద్ధులలో (వయస్సు 65+) చర్మం చాలా పల్చగా ఉంటుంది, మరియు ఇతర వ్యాధుల మందులు వాడుతుంటారు కాబట్టి పొరసరియాసిస్ చికిత్స జాగ్రత్తగా చేయాలి. చర్మం చిరిగిపోకుండా సున్నితమైన మాయిశ్చరైజర్ అవసరం. దుష్ప్రభావాలు రాకుండా ఉండడానికి డాక్టర్లు ఫోటోథెరపీ (కాంతి చికిత్స) కి ప్రాధాన్యత ఇస్తారు. ఆహారంలో మెత్తటి, సులభంగా జీర్ణమయ్యే కీళ్లు మరియు ఎముకలకు బలమిచ్చే పదార్థాలు చేర్చాలి.",
        skincare_title: "ఫ్రాగిలిటీ చర్మ రక్షణ & సహ-రుగ్ణత (Comorbidity) నిర్వహణ",
        skincare_intro: "వృద్ధుల చర్మం చాలా పల్చగా, సున్నితంగా ఉంటుంది. గట్టిగా రుద్దడం, బలమైన క్రీములు రాయడం నివారించండి.",
        skincare_steps: [
          "చర్మం పొడిబారి పగుళ్లు రాకుండా రోజూ పలుమార్లు తేలికపాటి క్రీమ్ రాయండి.",
          "చర్మం మరింత పల్చబడకుండా మరియు నీలి మచ్చలు (bruising) పడకుండా గట్టి స్టెరాయిడ్స్ దూరం చేయండి.",
          "చలికాలంలో గదిలో హ్యూమిడిఫైయర్ వాడడం ద్వారా గాలిలో తేమను నిలిపి ఉంచవచ్చు.",
          "కీళ్ల నొప్పులు రాకుండా ఉండడానికి రోజూ వైద్యుల సలహాతో నడక లేదా వ్యాయామం చేయండి.",
          "మీరు వాడుతున్న బీపీ మందులను డాక్టర్ కి చూపించండి, కొన్ని రకాల మందులు పొరసరియాసిస్ ను పెంచుతాయి."
        ],
        treatments: [
          { title: "స్టెరాయిడ్ క్రీముల పరిమిత వాడకం", desc: "చర్మం పల్చబడి చిరిగిపోకుండా ఉండేందుకు తక్కువ మోతాదు క్రీములను జాగ్రత్తగా రాయండి." },
          { title: "న్యారోబాండ్ ఫోటోథెరపీ (UVB)", desc: "వృద్ధులకు అత్యంత సురక్షితమైన చికిత్స. దీని వల్ల ఎలాంటి దుష్ప్రభావాలు ఉండవు మరియు ఇతర మందులతో రియాక్షన్ కాదు." },
          { title: "దుష్ప్రభావాలు లేని బయోలాజిక్స్", desc: "కాలేయం మరియు మూత్రపిండాల పై ప్రభావం చూపని ఆధునిక బయోలాజిక్స్ ఇంజెక్షన్లు." },
          { title: "సిరామైడ్ క్రీములు", desc: "వయస్సు పైబడిన పొడి చర్మానికి లోతైన తేమను అందించి పగుళ్లను నివారిస్తుంది." }
        ],
        triggers_intro: "మూత్రపిండాలు, గుండె మరియు చర్మ రక్షణ కొరకు వీటిని పరిమితం చేయండి:",
        triggers: [
          { title: "ఉప్పు ఎక్కువగా ఉండే ఆహారాలు", desc: "ఊరగాయలు, అప్పడాలు మరియు క్యాన్డ్ సూప్స్ బీపీ పెంచి చర్మాన్ని పొడిబారుస్తాయి." },
          { title: "స్వీట్లు & బేకరీ తిండ్లు", desc: "షుగర్ వ్యాధి ముప్పును పెంచి శరీరంలో వాపులను ప్రేరేపిస్తాయి." },
          { title: "అధిక రెడ్ మీట్ (మటన్)", desc: "కీళ్ల నొప్పులు, చర్మ దురదలు పెంచే కొవ్వులు దీనిలో ఎక్కువగా ఉంటాయి." },
          { title: "టమోటా, మిరపకాయ (నైట్షేడ్స్)", desc: "కొందరిలో వీటి వల్ల కీళ్లు గట్టిపడటం మరియు నొప్పులు ఎక్కువ కావడం జరుగుతుంది." },
          { title: "మైదా బిస్కెట్లు & నిల్వ తిండ్లు", desc: "మలబద్ధకం మరియు పొట్ట సమస్యలను పెంచి చర్మాన్ని ఇబ్బంది పెడతాయి." }
        ],
        beneficial_intro: "కీళ్లు మరియు ఎముకలకు మేలు చేసే సులభమైన మెత్తటి ఆహారాలు ఇవ్వండి:",
        beneficial: [
          { title: "ఒమేగా-3 గల మెత్తటి చేప", desc: "ఆవిరిపై వండిన సాల్మన్ చేప కీళ్ల నొప్పులు మరియు చర్మ దురదలను తగ్గిస్తుంది." },
          { title: "క్యాల్షియం మరియు విటమిన్ డి", desc: "గుడ్డు సొన, విటమిన్లు కలిపిన ఆహారాలు ఎముకలు బలహీనపడకుండా కాపాడతాయి." },
          { title: "బీటా-కెరోటిన్ (మెత్తటి మ్యాష్)", desc: "మెత్తటి క్యారెట్ మరియు చిలగడదుంప మ్యాష్. తేలికగా జీర్ణమై చర్మాన్ని రక్షిస్తుంది." },
          { title: "ఆలివ్ ఆయిల్, అవకాడో మ్యాష్", desc: "గుండె ఆరోగ్యానికి, చర్మానికి తేమను ఇవ్వడానికి మేలు చేసే మంచి కొవ్వులు." },
          { title: "అల్లం, పసుపు వేసిన గోరువెచ్చని టీ", desc: "కీళ్ల వాపులను మరియు నొప్పులను తగ్గించే సహజ సిద్ధమైన పానీయాలు." }
        ],
        recipes_intro: "వృద్ధుల కొరకు చబనానికి సులభంగా ఉండే పోషకాల వంటకాలు:",
        recipes: [
          {
            name: "మెత్తటి సాల్మన్ మరియు చిలగడదుంప ప్యూరీ",
            desc: "నమలడానికి అత్యంత సులభమైన మెత్తటి సాల్మన్ చేప మరియు చిలగడదుంప ప్యూరీ.",
            ing: ["100 గ్రాముల సాల్మన్ (ముళ్లు లేనిది)", "1 మధ్యస్థ చిలగడదుంప (ముక్కలు చేసినది)", "1 స్పూన్ ఆలివ్ ఆయిల్"],
            inst: ["సాల్మన్ను నీటిలో 8 నిమిషాలు చాలా మెత్తబడే వరకు ఉడికించండి.", "చిలగడదుంపలను ఉడికించి ఆలివ్ ఆయిల్ తో కలిపి మెత్తటి ప్యూరీలా చేయండి.", "చేప ముక్కలను ప్యూరీతో కలిపి వడ్డించండి."],
            tip: "నమలడం కష్టంగా ఉండే వృద్ధులకు ఇది ఎంతో మేలు చేస్తుంది. సులభంగా జీర్ణమవుతుంది."
          },
          {
            name: "మెత్తటి బెర్రీ పాలకూర ఓట్స్",
            desc: "బాగా ఉడికించిన ఓట్స్ లో పాలకూర ప్యూరీ మరియు బ్లూబెర్రీస్ మిశ్రమం.",
            ing: ["1/2 కప్పు ఓట్స్", "1 కప్పు నీరు లేదా బాదం పాలు", "1/4 కప్పు బ్లూబెర్రీస్", "ఒక పిడికెడు పాలకూర"],
            inst: ["ఓట్స్ను 10 నిమిషాలు మెత్తగా ఉడికించండి.", "పాలకూర ప్యూరీ, బ్లూబెర్రీస్ వేసి బ్లూబెర్రీస్ మెత్తబడేవరకు మరో 2 నిమిషాలు ఉడికించండి."],
            tip: "వయస్సుతో పాటు నెమ్మదించే జీర్ణవ్యవస్థకు మేలు చేసే పీచు పదార్థం లభిస్తుంది."
          },
          {
            name: "అవకాడో బనానా కస్టర్డ్",
            desc: "పొటాషియం గల పొట్టకు మేలు చేసే ఉడికించని క్రీమీ కస్టర్డ్.",
            ing: ["1/2 పండిన అవకాడో", "1/2 పండిన అరటిపండు", "2 స్పూన్ల కొబ్బరి పాలు", "కొద్దిగా శొంఠి పొడి (ఎండిన అల్లం)"],
            inst: ["అవకాడో మరియు అరటిపండును ఒక గిన్నెలో తీసుకోండి.", "కొబ్బరి పాలు మరియు శొంఠి పొడి వేయండి.", "చమత్తో బాగా మెత్తగా కలిపి కస్టర్డ్ లాగా చేసి వడ్డించండి."],
            tip: "శొంఠి పొడి కీళ్ల వాపులను మరియు పొట్ట గ్యాస్ సమస్యలను తగ్గిస్తుంది."
          },
          {
            name: "మెత్తటి క్యారెట్ & జుకిని కూర",
            desc: "క్యారెట్ మరియు జుకిని కూరగాయలను బాగా మెత్తబడేవరకు ఉడికించిన సైడ్ డిష్.",
            ing: ["1 క్యారెట్ (ముక్కలు చేసినది)", "1 జుకిని (ముక్కలు చేసినది)", "1 స్పూన్ ఆలివ్ ఆయిల్"],
            inst: ["ముక్కలను 12-14 నిమిషాల పాటు ఫోర్క్ తో నలిపితే నలిగిపోయేలా ఆవిరిపై ఉడికించండి.", "ఆలివ్ ఆయిల్ మరియు కొద్దిగా ఉప్పు వేసి కలపండి."],
            tip: "తేలికగా జీర్ణమయ్యే విటమిన్ ఎ అధికంగా ఉండే వంటకం."
          }
        ],
        research_intro: "వృద్ధులలో వచ్చే పొరసరియాసిస్ పై శోధనలు:",
        research: [
          { title: "వృద్ధులలో మెథోట్రెక్సేట్ వాడకంలో ప్రమాదాలు", desc: "వృద్ధులలో కిడ్నీల పనితీరు తగ్గడం వల్ల మెథోట్రెక్సేట్ మందుల దుష్ప్రభావాలు ఎక్కువ కావచ్చు; కాంతి చికిత్స అత్యంత సురక్షితం." },
          { title: "ఇతర రోగాలు మరియు గుణాల ప్రభావం", desc: "80% మంది వృద్ధులలో బీపీ లేదా ఆర్థరైటిస్ వంటి ఇతర రోగాలు ఉండడం వల్ల మందుల రియాక్షన్ల ముప్పు పెరుగుతుందని వెల్లడైంది." },
          { title: "స్టెరాయిడ్ క్రీముల వల్ల చర్మ గాయాల ముప్పు", desc: "వృద్ధులలో ఎక్కువ కాలం బలమైన క్రీములు వాడడం వల్ల చర్మం పల్చబడి తేలికగా తెగడం లేదా నీలి మచ్చలు రావడం జరుగుతుందని నిరూపించారు." }
        ]
      }
    }
  }
};

// Export for browser use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = translations;
} else {
  window.translations = translations;
}
