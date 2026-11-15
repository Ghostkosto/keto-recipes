const N = (el, en) => ({ el, en });

module.exports = [
  {
    id: 'paprika_drumsticks', cat: 'chicken', time: 25, serv: 2,
    air: [['airfry', 200, 22]],
    title: N('Κοπανάκια με πάπρικα & σκόρδο', 'Paprika garlic drumsticks'),
    desc: N('Οικονομικό, τραγανό και έτοιμο σε 25 λεπτά.', 'Budget-friendly, crispy and ready in 25 minutes.'),
    ing: [['drumsticks', 800, N('~6 τεμάχια', '~6 pieces')], ['olive_oil', 1], ['paprika', 1.5], ['garlic_powder', 0.5], ['oregano', 1], ['salt', 1], ['pepper', 1], ['lemon', 0.5]],
    steps: {
      el: [
        'Στέγνωσε καλά τα κοπανάκια και ανακάτεψέ τα με λάδι, πάπρικα, σκόρδο σε σκόνη, ρίγανη, αλάτι και πιπέρι.',
        '{{pre:200}}Βάλ’ τα {{plate}} σε ένα στρώμα. {{split}}',
        '{{airfry:200:22}}, γύρισμα στα {{t:11}}.',
        'Έτοιμα στους 75°C κοντά στο κόκαλο. Στύψε λεμόνι από πάνω.'
      ],
      en: [
        'Pat the drumsticks dry and toss them with the oil, paprika, garlic powder, oregano, salt and pepper.',
        '{{pre:200}}Lay them {{plate}} in a single layer. {{split}}',
        '{{airfry:200:22}}, turning at {{t:11}}.',
        'Done at 75°C near the bone. Squeeze lemon over them.'
      ]
    }
  },
  {
    id: 'chicken_gyros', cat: 'chicken', time: 25, rest: N('+ 2 ώρες μαρινάρισμα', '+ 2 h marinating'), serv: 3,
    air: [['airfry', 200, 18], ['crisp', 3]],
    title: N('Γύρος κοτόπουλο χωρίς πίτα', 'Chicken gyros, no pitta'),
    desc: N('Ο γύρος του σουβλατζίδικου, σε φύλλα μαρουλιού με τζατζίκι.', 'Souvlaki-shop gyros, wrapped in lettuce with tzatziki.'),
    ing: [['chicken_fillet', 700], ['yogurt', 60], ['olive_oil', 2], ['lemon', 0.5], ['garlic', 2], ['paprika', 1], ['cumin', 0.5], ['oregano', 1], ['salt', 1], ['pepper', 1], ['lettuce', 0.5], ['tomato', 1], ['onion', 0.25]],
    steps: {
      el: [
        'Κόψε το κοτόπουλο σε λωρίδες. Ανακάτεψε με γιαούρτι, λάδι, χυμό λεμονιού, τριμμένο σκόρδο, πάπρικα, κύμινο, ρίγανη, αλάτι και πιπέρι. Άφησέ το 2 ώρες στο ψυγείο.',
        '{{pre:200}}{{spread}} {{airfry:200:18}}, ανακάτεμα στα {{t:6}} και στα {{t:12}} λεπτά.',
        'Για τραγανές άκρες σαν του σουβλατζίδικου, δώσε στο τέλος {{crisp2:3}}.',
        'Σέρβιρε σε φύλλα μαρουλιού με ντομάτα, λίγο κρεμμύδι και τζατζίκι.'
      ],
      en: [
        'Cut the chicken into strips. Mix with the yogurt, oil, lemon juice, grated garlic, paprika, cumin, oregano, salt and pepper. Chill for 2 hours.',
        '{{pre:200}}{{spread}} {{airfry:200:18}}, stirring at {{t:6}} and {{t:12}} minutes.',
        'For crispy souvlaki-shop edges, finish with {{crisp2:3}}.',
        'Serve in lettuce leaves with tomato, a little onion and tzatziki.'
      ]
    }
  },
  {
    id: 'stuffed_chicken', cat: 'chicken', time: 30, serv: 2,
    air: [['airfry', 190, 20]],
    title: N('Στήθος γεμιστό με σπανάκι & φέτα', 'Spinach & feta stuffed chicken'),
    desc: N('Ζουμερό στήθος με κρεμώδη γέμιση.', 'Juicy chicken breast with a creamy filling.'),
    ing: [['chicken_breast', 500, N('2 κομμάτια', '2 pieces')], ['spinach', 50], ['feta', 60], ['cream_cheese', 40], ['garlic', 1], ['olive_oil', 1], ['paprika', 1], ['salt', 0.5], ['pepper', 1], ['skewers', 4, N('ή οδοντογλυφίδες', 'or toothpicks')]],
    steps: {
      el: [
        'Ανακάτεψε το ψιλοκομμένο σπανάκι με φέτα, τυρί κρέμα και τριμμένο σκόρδο.',
        'Άνοιξε κάθε στήθος σαν πορτοφόλι με κοφτερό μαχαίρι, γέμισέ το και κλείσε με ξυλάκια.',
        'Άλειψε απ’ έξω με λάδι, πάπρικα, αλάτι και πιπέρι.',
        '{{pre:190}}Βάλ’ τα {{plate}}. {{airfry:190:20}}, γύρισμα στα {{t:10}}.',
        'Έτοιμα στους 74°C στο κέντρο του κρέατος. Άφησέ τα 5 λεπτά πριν τα κόψεις.'
      ],
      en: [
        'Mix the chopped spinach with the feta, cream cheese and grated garlic.',
        'Cut a deep pocket in each breast with a sharp knife, fill it and close with skewers.',
        'Rub the outside with oil, paprika, salt and pepper.',
        '{{pre:190}}Lay them {{plate}}. {{airfry:190:20}}, turning at {{t:10}}.',
        'Done at 74°C in the thickest part of the meat. Rest for 5 minutes before slicing.'
      ]
    }
  },
  {
    id: 'coconut_curry', cat: 'chicken', time: 30, serv: 3,
    title: N('Κοτόπουλο κάρι με γάλα καρύδας', 'Coconut chicken curry'),
    desc: N('Κρεμώδες, αρωματικό και ζεστό, με ρύζι κουνουπιδιού.', 'Creamy, fragrant and warming, with cauliflower rice.'),
    ing: [['chicken_fillet', 600], ['coconut_milk', 300], ['curry', 2], ['ginger', 10], ['garlic', 2], ['onion', 0.25], ['spinach', 80], ['coconut_oil', 15], ['lemon', 0.5], ['salt', 1]],
    steps: {
      el: [
        'Κόψε το κοτόπουλο σε κύβους και ρόδισέ το στο λάδι καρύδας 5–6 λεπτά. Βγάλ’ το στην άκρη.',
        'Στο ίδιο σκεύος σοτάρισε το ψιλοκομμένο κρεμμύδι 3 λεπτά και μετά σκόρδο, τριμμένο τζίντζερ και κάρι για 1 λεπτό.',
        'Ρίξε το γάλα καρύδας, αλάτι και το κοτόπουλο. Σιγόβρασε 12–15 λεπτά μέχρι να δέσει η σάλτσα.',
        'Ανακάτεψε το σπανάκι να μαραθεί και στύψε λίγο λεμόνι. Σέρβιρε με ρύζι κουνουπιδιού.'
      ],
      en: [
        'Cut the chicken into cubes and brown it in the coconut oil for 5–6 minutes. Set aside.',
        'In the same pan, soften the chopped onion for 3 minutes, then add the garlic, grated ginger and curry powder for 1 minute.',
        'Pour in the coconut milk, add salt and return the chicken. Simmer for 12–15 minutes until the sauce thickens.',
        'Stir in the spinach to wilt and add a squeeze of lemon. Serve with cauliflower rice.'
      ]
    }
  },
  {
    id: 'bacon_chicken_bites', cat: 'chicken', time: 20, serv: 3,
    air: [['airfry', 200, 12]],
    title: N('Μπουκιές κοτόπουλο με μπέικον', 'Bacon-wrapped chicken bites'),
    desc: N('Για τραπέζι με φίλους ή για γρήγορο βραδινό.', 'For a night with friends or a quick dinner.'),
    ing: [['chicken_breast', 400], ['bacon', 150, N('~10 φέτες', '~10 slices')], ['paprika', 0.5], ['garlic_powder', 0.5], ['pepper', 1], ['skewers', 20, N('οδοντογλυφίδες', 'toothpicks')]],
    steps: {
      el: [
        'Κόψε το στήθος σε κύβους 3 cm και πασπάλισε πάπρικα, σκόρδο σε σκόνη και πιπέρι. Αλάτι δεν χρειάζεται, το δίνει το μπέικον.',
        'Τύλιξε κάθε κύβο με μισή φέτα μπέικον και στερέωσε με οδοντογλυφίδα.',
        '{{pre:200}}Βάλ’ τα {{plate}} με τη ραφή προς τα κάτω. {{split}}',
        '{{airfry:200:12}}, γύρισμα στα {{t:6}}. Έτοιμα όταν τραγανίσει το μπέικον και το κοτόπουλο φτάσει τους 74°C.'
      ],
      en: [
        'Cut the chicken into 3 cm cubes and season with paprika, garlic powder and pepper. No salt needed; the bacon brings it.',
        'Wrap each cube in half a slice of bacon and secure with a toothpick.',
        '{{pre:200}}Lay them {{plate}} seam-side down. {{split}}',
        '{{airfry:200:12}}, turning at {{t:6}}. Done when the bacon is crisp and the chicken reaches 74°C.'
      ]
    }
  },
  {
    id: 'parmesan_nuggets', cat: 'chicken', time: 20, serv: 2,
    air: [['airfry', 200, 10]],
    title: N('Κοτομπουκιές με παρμεζάνα', 'Parmesan chicken nuggets'),
    desc: N('Τραγανές κοτομπουκιές χωρίς ψίχα, με ντιπ μουστάρδας.', 'Crispy breadcrumb-free nuggets with a mustard dip.'),
    ing: [['chicken_breast', 400], ['eggs', 1], ['almond_flour', 40], ['parmesan', 40], ['paprika', 0.5], ['garlic_powder', 0.5], ['salt', 0.5], ['olive_oil', 1, N('σε ψεκαστήρα', 'in a spray bottle')], ['mayo', 2], ['mustard', 1]],
    steps: {
      el: [
        'Κόψε το στήθος σε μπουκιές και αλάτισέ τες.',
        'Ανακάτεψε σε πιάτο αλεύρι αμυγδάλου, παρμεζάνα, πάπρικα και σκόρδο σε σκόνη. Βούτα κάθε κομμάτι σε χτυπημένο αυγό και μετά στο μείγμα.',
        '{{pre:200}}Βάλε τις κοτομπουκιές σε ένα στρώμα {{plate}} και ψέκασε λίγο λάδι. {{airfry:200:10}}, γύρισμα στα {{t:5}}.',
        'Για ντιπ ανακάτεψε τη μαγιονέζα με τη μουστάρδα.'
      ],
      en: [
        'Cut the chicken into bite-size pieces and salt them.',
        'On a plate, mix the almond flour, parmesan, paprika and garlic powder. Dip each piece in beaten egg, then in the coating.',
        '{{pre:200}}Lay the nuggets in a single layer {{plate}} and spray with a little oil. {{airfry:200:10}}, turning at {{t:5}}.',
        'For the dip, mix the mayonnaise with the mustard.'
      ]
    }
  },
  {
    id: 'lemon_pepper_wings', cat: 'chicken', time: 30, serv: 2,
    air: [['airfry', 200, 24], ['crisp', 3]],
    title: N('Φτερούγες λεμόνι-πιπέρι', 'Lemon pepper wings'),
    desc: N('Τραγανές, λεμονάτες, με μπόλικο φρεσκοτριμμένο πιπέρι.', 'Crispy and zesty, with plenty of fresh black pepper.'),
    ing: [['chicken_wings', 900], ['baking_powder', 1], ['salt', 1], ['garlic_powder', 0.5], ['pepper', 3], ['lemon', 1], ['butter', 20]],
    steps: {
      el: [
        'Στέγνωσε καλά τις φτερούγες και ανακάτεψέ τες με baking powder, αλάτι, σκόρδο σε σκόνη και μπόλικο πιπέρι.',
        '{{pre:200}}{{spread}} {{airfry:200:24}}, ανακίνηση στα {{t:12}}.',
        'Στο τέλος δώσε {{crisp2:3}}.',
        'Λιώσε το βούτυρο με το ξύσμα και τον χυμό του λεμονιού και ανακάτεψε μέσα τις ζεστές φτερούγες. Πιπέρι ξανά από πάνω.'
      ],
      en: [
        'Pat the wings dry and toss with the baking powder, salt, garlic powder and plenty of pepper.',
        '{{pre:200}}{{spread}} {{airfry:200:24}}, shaking at {{t:12}}.',
        'Finish with {{crisp2:3}}.',
        'Melt the butter with the lemon zest and juice and toss the hot wings in it. Add more pepper on top.'
      ]
    }
  }
];
