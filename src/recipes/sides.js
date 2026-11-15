const N = (el, en) => ({ el, en });

module.exports = [
  {
    id: 'cauliflower_mash', cat: 'sides', time: 20, serv: 4,
    title: N('Πουρές κουνουπιδιού', 'Cauliflower mash'),
    desc: N('Βουτυράτος και αφράτος, στη θέση του πουρέ πατάτας.', 'Buttery and fluffy, in place of mashed potatoes.'),
    ing: [['cauliflower', 1], ['butter', 40], ['cream_cheese', 50], ['parmesan', 30], ['garlic', 1], ['salt', 1], ['pepper', 1], ['nutmeg', 1]],
    steps: {
      el: [
        'Κόψε το κουνουπίδι σε φουντίτσες και βράσ’ το ή αχνίσ’ το 12–15 λεπτά, μέχρι να μαλακώσει πολύ.',
        'Στράγγισέ το καλά και άφησέ το 2 λεπτά στο σουρωτήρι να φύγει ο ατμός, για να μη γίνει νερουλός ο πουρές.',
        'Πολτοποίησέ το με το βούτυρο, το τυρί κρέμα, την παρμεζάνα, τριμμένο σκόρδο, αλάτι, πιπέρι και μοσχοκάρυδο.'
      ],
      en: [
        'Cut the cauliflower into florets and boil or steam for 12–15 minutes, until very soft.',
        'Drain well and let it steam off in the colander for 2 minutes so the mash isn’t watery.',
        'Blend with the butter, cream cheese, parmesan, grated garlic, salt, pepper and nutmeg.'
      ]
    }
  },
  {
    id: 'cauliflower_rice', cat: 'sides', time: 12, serv: 3,
    title: N('Ρύζι κουνουπιδιού', 'Cauliflower rice'),
    desc: N('Σπυρωτό «ρύζι» για κάρι, κιμά και ψητά.', 'Fluffy “rice” for curries, mince and grills.'),
    ing: [['cauliflower', 0.75], ['butter', 20], ['garlic', 1], ['parsley', 0.25], ['lemon', 0.25], ['salt', 0.5]],
    steps: {
      el: [
        'Τρίψε το κουνουπίδι στον χοντρό τρίφτη ή χτύπα το λίγο στο multi, μέχρι να μοιάζει με ρύζι.',
        'Λιώσε το βούτυρο σε μεγάλο τηγάνι και σοτάρισε το σκόρδο 30 δευτερόλεπτα.',
        'Ρίξε το κουνουπίδι και το αλάτι και μαγείρεψε 5–6 λεπτά ανακατεύοντας, χωρίς καπάκι, για να μείνει σπυρωτό.',
        'Τελείωσε με μαϊντανό και λίγο λεμόνι.'
      ],
      en: [
        'Grate the cauliflower on the coarse side of a grater, or pulse briefly in a food processor until it looks like rice.',
        'Melt the butter in a large pan and fry the garlic for 30 seconds.',
        'Add the cauliflower and salt and cook for 5–6 minutes, stirring, uncovered so it stays fluffy.',
        'Finish with parsley and a little lemon.'
      ]
    }
  },
  {
    id: 'brussels_bacon', cat: 'sides', time: 20, serv: 3,
    air: [['airfry', 190, 15]],
    title: N('Λαχανάκια Βρυξελλών με μπέικον', 'Brussels sprouts with bacon'),
    desc: N('Καραμελωμένα στις άκρες, με τραγανό μπέικον.', 'Caramelised edges and crispy bacon.'),
    ing: [['brussels', 400], ['bacon', 80], ['olive_oil', 1], ['salt', 0.5], ['pepper', 1], ['parmesan', 20]],
    steps: {
      el: [
        'Κόψε τα λαχανάκια στη μέση και το μπέικον σε κομματάκια.',
        'Ανακάτεψέ τα με λάδι, αλάτι και πιπέρι.',
        '{{pre:190}}{{spread}} {{airfry:190:15}}, ανακίνηση στα {{t:7}}.',
        'Πασπάλισε παρμεζάνα μόλις βγουν.'
      ],
      en: [
        'Halve the sprouts and cut the bacon into small pieces.',
        'Toss with the oil, salt and pepper.',
        '{{pre:190}}{{spread}} {{airfry:190:15}}, shaking at {{t:7}}.',
        'Sprinkle with parmesan as soon as they come out.'
      ]
    }
  },
  {
    id: 'asparagus_parmesan', cat: 'sides', time: 12, serv: 2,
    air: [['airfry', 200, 7]],
    title: N('Σπαράγγια με παρμεζάνα', 'Parmesan asparagus'),
    desc: N('Έτοιμα σε 7 λεπτά, με ξύσμα λεμονιού.', 'Ready in 7 minutes, with lemon zest.'),
    ing: [['asparagus', 300], ['olive_oil', 1], ['parmesan', 25], ['lemon', 0.25], ['salt', 0.25], ['pepper', 1]],
    steps: {
      el: [
        'Κόψε τις σκληρές άκρες από τα σπαράγγια.',
        'Ανακάτεψέ τα με λάδι, αλάτι και πιπέρι.',
        '{{pre:200}}Βάλ’ τα {{plate}}. {{airfry:200:7}}, ανακίνηση στη μέση. Τα τελευταία 2 λεπτά πασπάλισε την παρμεζάνα.',
        'Σέρβιρε με ξύσμα λεμονιού.'
      ],
      en: [
        'Snap off the woody ends of the asparagus.',
        'Toss with the oil, salt and pepper.',
        '{{pre:200}}Lay them {{plate}}. {{airfry:200:7}}, shaking halfway. Sprinkle on the parmesan for the last 2 minutes.',
        'Serve with lemon zest.'
      ]
    }
  },
  {
    id: 'green_beans_almonds', cat: 'sides', time: 15, serv: 3,
    air: [['airfry', 200, 10]],
    title: N('Φασολάκια με σκόρδο & αμύγδαλα', 'Garlic green beans with almonds'),
    desc: N('Τραγανά φασολάκια με καβουρδισμένα αμύγδαλα.', 'Crisp-tender beans with toasted almonds.'),
    ing: [['green_beans', 350], ['olive_oil', 1.5], ['garlic', 2], ['almonds', 30], ['lemon', 0.25], ['salt', 0.5]],
    steps: {
      el: [
        'Καθάρισε τα φασολάκια, ζεμάτισέ τα 3 λεπτά σε αλατισμένο νερό, στράγγισε και στέγνωσέ τα.',
        'Ανακάτεψέ τα με λάδι, τριμμένο σκόρδο και αλάτι.',
        '{{pre:200}}{{spread}} {{airfry:200:10}}, ανακίνηση στη μέση. Ρίξε τα αμύγδαλα κομμένα για τα τελευταία 3 λεπτά.',
        'Λίγο λεμόνι πριν σερβίρεις.'
      ],
      en: [
        'Trim the beans, blanch them for 3 minutes in salted water, then drain and dry.',
        'Toss with the oil, grated garlic and salt.',
        '{{pre:200}}{{spread}} {{airfry:200:10}}, shaking halfway. Add the chopped almonds for the last 3 minutes.',
        'Squeeze over a little lemon before serving.'
      ]
    }
  },
  {
    id: 'kolokithokeftedes', cat: 'sides', time: 30, serv: 3,
    air: [['airfry', 190, 14]],
    title: N('Κολοκυθοκεφτέδες', 'Courgette & feta fritters'),
    desc: N('Με φέτα και δυόσμο, χωρίς τηγάνι και αλεύρι σίτου.', 'With feta and mint, no frying or wheat flour.'),
    ing: [['zucchini', 2], ['feta', 100], ['eggs', 1], ['almond_flour', 40], ['mint', 0.25], ['spring_onion', 0.25], ['salt', 0.25], ['pepper', 1], ['olive_oil', 1]],
    steps: {
      el: [
        'Τρίψε τα κολοκυθάκια, αλάτισέ τα και άφησέ τα 10 λεπτά. Στύψ’ τα πολύ καλά με τα χέρια ή σε πανί.',
        'Ανακάτεψε με θρυμματισμένη φέτα, αυγό, αλεύρι αμυγδάλου, δυόσμο, κρεμμυδάκι και πιπέρι.',
        'Πλάσε 12 μπιφτεκάκια και άλειψέ τα με λίγο λάδι. Λάδωσε και {{the_plate}}.',
        '{{pre:190}}Βάλ’ τα {{plate}}. {{split}} {{airfry:190:14}}, γύρισμα στα {{t:8}}. Σέρβιρε με γιαούρτι.'
      ],
      en: [
        'Grate the courgettes, salt them and leave for 10 minutes. Squeeze out as much water as you can.',
        'Mix with the crumbled feta, egg, almond flour, mint, spring onion and pepper.',
        'Shape 12 small patties and brush them with a little oil. Oil {{the_plate}} too.',
        '{{pre:190}}Lay them {{plate}}. {{split}} {{airfry:190:14}}, turning at {{t:8}}. Serve with yogurt.'
      ]
    }
  },
  {
    id: 'eggplant_feta', cat: 'sides', time: 25, serv: 3,
    air: [['airfry', 200, 12], ['airfry', 180, 5]],
    title: N('Μελιτζάνες ψητές με φέτα', 'Roasted aubergine with feta'),
    desc: N('Ροδέλες μελιτζάνας με ντοματίνια και λιωμένη φέτα.', 'Aubergine rounds with cherry tomatoes and melting feta.'),
    ing: [['eggplant', 1], ['cherry_tomatoes', 120], ['feta', 100], ['olive_oil', 2], ['oregano', 1], ['basil', 0.25], ['salt', 0.5]],
    steps: {
      el: [
        'Κόψε τη μελιτζάνα σε ροδέλες 1,5 cm, άλειψε με λάδι και αλάτισε.',
        '{{pre:200}}{{spread}} {{airfry:200:12}}, γύρισμα στα {{t:6}}.',
        'Βάλε από πάνω τα ντοματίνια κομμένα, τη φέτα και ρίγανη. {{airfry:180:5}}, μέχρι να μαλακώσει η φέτα.',
        'Σέρβιρε με λίγο ελαιόλαδο και βασιλικό.'
      ],
      en: [
        'Slice the aubergine into 1.5 cm rounds, brush with oil and salt.',
        '{{pre:200}}{{spread}} {{airfry:200:12}}, turning at {{t:6}}.',
        'Top with the halved tomatoes, the feta and oregano. {{airfry:180:5}}, until the feta softens.',
        'Serve with a drizzle of olive oil and basil.'
      ]
    }
  },
  {
    id: 'garlic_mushrooms', cat: 'sides', time: 15, serv: 2,
    air: [['airfry', 190, 12]],
    title: N('Μανιτάρια σκορδάτα', 'Garlic butter mushrooms'),
    desc: N('Ζουμερά μανιτάρια με βούτυρο, σκόρδο και θυμάρι.', 'Juicy mushrooms with butter, garlic and thyme.'),
    ing: [['mushrooms', 400], ['butter', 20], ['olive_oil', 1], ['garlic', 2], ['thyme', 0.5], ['parsley', 0.25], ['lemon', 0.25], ['salt', 0.5]],
    steps: {
      el: [
        'Κόψε τα μανιτάρια στη μέση ή στα τέσσερα.',
        'Ανακάτεψέ τα με λιωμένο βούτυρο, λάδι, θυμάρι και αλάτι.',
        '{{pre:190}}{{spread}} {{airfry:190:12}}, ανακίνηση στη μέση. Ρίξε το σκόρδο ψιλοκομμένο τα τελευταία 4 λεπτά για να μην καεί.',
        'Πασπάλισε μαϊντανό και στύψε λεμόνι.'
      ],
      en: [
        'Halve or quarter the mushrooms.',
        'Toss with the melted butter, oil, thyme and salt.',
        '{{pre:190}}{{spread}} {{airfry:190:12}}, shaking halfway. Add the chopped garlic for the last 4 minutes so it doesn’t burn.',
        'Sprinkle with parsley and squeeze over some lemon.'
      ]
    }
  },
  {
    id: 'horta', cat: 'sides', time: 20, serv: 3,
    title: N('Χόρτα βραστά λαδολέμονο', 'Boiled greens with lemon & oil'),
    desc: N('Ραδίκια ή βλίτα, το πιο ελληνικό συνοδευτικό.', 'Chicory or amaranth, the most Greek of side dishes.'),
    ing: [['greens', 800], ['olive_oil', 3], ['lemon', 1], ['salt', 1]],
    steps: {
      el: [
        'Καθάρισε τα χόρτα από τις σκληρές ρίζες και πλύνε τα σε πολλά νερά.',
        'Βράσε τα σε μπόλικο αλατισμένο νερό 10–15 λεπτά, μέχρι να μαλακώσουν τα κοτσάνια.',
        'Στράγγισέ τα και σέρβιρε χλιαρά με μπόλικο ελαιόλαδο και λεμόνι.'
      ],
      en: [
        'Trim the tough roots from the greens and wash them in several changes of water.',
        'Boil in plenty of salted water for 10–15 minutes, until the stems are tender.',
        'Drain and serve warm with plenty of olive oil and lemon.'
      ]
    }
  },
  {
    id: 'tzatziki', cat: 'sides', time: 10, serv: 6,
    title: N('Τζατζίκι', 'Tzatziki'),
    desc: N('Το απαραίτητο συνοδευτικό για σουβλάκια και ψητά.', 'The must-have dip for souvlaki and grills.'),
    ing: [['yogurt', 400], ['cucumber', 0.5], ['garlic', 2], ['olive_oil', 2], ['vinegar', 1], ['dill', 0.25], ['salt', 0.5]],
    steps: {
      el: [
        'Τρίψε το αγγούρι, αλάτισέ το και στύψ’ το πολύ καλά να φύγουν τα υγρά.',
        'Ανακάτεψε το γιαούρτι με το αγγούρι, το τριμμένο σκόρδο, το λάδι, το ξίδι και τον ψιλοκομμένο άνηθο.',
        'Άφησέ το 30 λεπτά στο ψυγείο να δέσουν οι γεύσεις. Κρατάει 3 μέρες.'
      ],
      en: [
        'Grate the cucumber, salt it and squeeze out the liquid well.',
        'Mix the yogurt with the cucumber, grated garlic, oil, vinegar and chopped dill.',
        'Chill for 30 minutes to let the flavours blend. It keeps for 3 days.'
      ]
    }
  },
  {
    id: 'tirokafteri', cat: 'sides', time: 15, serv: 6,
    air: [['airfry', 200, 10]],
    title: N('Τυροκαυτερή', 'Spicy feta dip (tirokafteri)'),
    desc: N('Καυτερή κρέμα φέτας με ψητή πιπεριά.', 'A fiery feta dip with roasted pepper.'),
    ing: [['feta', 250], ['yogurt', 100], ['red_pepper', 0.5], ['chili_flakes', 2], ['olive_oil', 2], ['lemon', 0.25]],
    steps: {
      el: [
        '{{pre:200}}Ψήσε την πιπεριά ολόκληρη {{plate}}: {{airfry:200:10}}, μέχρι να μαυρίσει η φλούδα. Άφησέ τη να κρυώσει και καθάρισέ τη.',
        'Χτύπα στο multi τη φέτα, το γιαούρτι, την πιπεριά, το τσίλι, το λάδι και λίγο λεμόνι.',
        'Δοκίμασε και πρόσθεσε τσίλι αν τη θες πιο καυτερή. Σέρβιρε με λαχανικά ή κράκερ σπόρων.'
      ],
      en: [
        '{{pre:200}}Roast the whole pepper {{plate}}: {{airfry:200:10}}, until the skin blackens. Let it cool and peel it.',
        'Blitz the feta, yogurt, pepper, chili, oil and a little lemon in a food processor.',
        'Taste and add more chili if you like it hotter. Serve with vegetables or seed crackers.'
      ]
    }
  },
  {
    id: 'melitzanosalata', cat: 'sides', time: 40, serv: 6,
    air: [['airfry', 200, '25–30']],
    title: N('Μελιτζανοσαλάτα', 'Greek aubergine dip'),
    desc: N('Καπνιστή μελιτζάνα με σκόρδο, ξίδι και καρύδια.', 'Smoky aubergine with garlic, vinegar and walnuts.'),
    ing: [['eggplant', 2], ['garlic', 1], ['olive_oil', 4], ['vinegar', 1], ['parsley', 0.25], ['walnuts', 20], ['salt', 0.5]],
    steps: {
      el: [
        'Τρύπησε τις μελιτζάνες με πιρούνι σε 4–5 σημεία.',
        '{{pre:200}}Βάλ’ τες ολόκληρες {{plate}}. {{airfry:200:25–30}}, γύρισμα στη μέση, μέχρι να ζαρώσει η φλούδα και να μαλακώσουν εντελώς.',
        'Άνοιξέ τες, βγάλε τη σάρκα με κουτάλι και άφησέ τη σε σουρωτήρι 10 λεπτά να φύγουν τα πικρά ζουμιά.',
        'Χτύπησέ τη με πιρούνι μαζί με σκόρδο, λάδι, ξίδι, αλάτι και μαϊντανό. Πασπάλισε κομμένα καρύδια.'
      ],
      en: [
        'Prick the aubergines with a fork in 4–5 places.',
        '{{pre:200}}Put them in whole {{plate}}. {{airfry:200:25–30}}, turning halfway, until the skin wrinkles and they are completely soft.',
        'Split them, scoop out the flesh and leave it in a sieve for 10 minutes to drain the bitter juices.',
        'Mash with a fork together with the garlic, oil, vinegar, salt and parsley. Top with chopped walnuts.'
      ]
    }
  }
];
