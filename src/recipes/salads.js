const N = (el, en) => ({ el, en });

module.exports = [
  {
    id: 'cobb_salad', cat: 'salads', time: 25, serv: 2,
    air: [['airfry', 190, 14]],
    title: N('Σαλάτα Cobb', 'Cobb salad'),
    desc: N('Πλήρες γεύμα: κοτόπουλο, αυγό, αβοκάντο και μπέικον.', 'A full meal: chicken, egg, avocado and bacon.'),
    ing: [['chicken_breast', 250], ['eggs', 2], ['bacon', 60], ['avocado', 1], ['cherry_tomatoes', 100], ['lettuce', 0.5], ['feta', 40], ['olive_oil', 3], ['vinegar', 1], ['mustard', 1], ['salt', 0.5]],
    steps: {
      el: [
        'Αλάτισε το κοτόπουλο και ψήσ’ το: {{airfry:190:14}} ή στο τηγάνι. Βράσε τα αυγά 10 λεπτά.',
        'Τσιγάρισε το μπέικον μέχρι να τραγανίσει και θρυμμάτισέ το.',
        'Για τη σως, χτύπα λάδι, ξίδι, μουστάρδα και αλάτι.',
        'Στρώσε το μαρούλι και βάλε από πάνω σε σειρές κοτόπουλο, αυγά, αβοκάντο, ντοματίνια, μπέικον και φέτα. Περίχυσε τη σως.'
      ],
      en: [
        'Salt the chicken and cook it: {{airfry:190:14}}, or in a pan. Boil the eggs for 10 minutes.',
        'Fry the bacon until crisp and crumble it.',
        'For the dressing, whisk the oil, vinegar, mustard and salt.',
        'Spread out the lettuce and arrange rows of chicken, egg, avocado, tomatoes, bacon and feta on top. Pour over the dressing.'
      ]
    }
  },
  {
    id: 'tuna_avocado_salad', cat: 'salads', time: 5, serv: 1,
    title: N('Σαλάτα τόνου με αβοκάντο', 'Tuna & avocado salad'),
    desc: N('Πεντάλεπτο γεύμα από το ντουλάπι.', 'A five-minute meal from the cupboard.'),
    ing: [['tuna_can', 1], ['avocado', 0.5], ['mayo', 1], ['lemon', 0.25], ['cucumber', 0.25], ['rocket', 30], ['salt', 0.25], ['pepper', 1]],
    steps: {
      el: [
        'Στράγγισε τον τόνο και ανακάτεψέ τον με τη μαγιονέζα, λίγο χυμό λεμονιού και πιπέρι.',
        'Κόψε το αβοκάντο και το αγγούρι σε κύβους.',
        'Στρώσε τη ρόκα, βάλε από πάνω τον τόνο, το αβοκάντο και το αγγούρι και αλάτισε ελαφρά.'
      ],
      en: [
        'Drain the tuna and mix it with the mayonnaise, a little lemon juice and pepper.',
        'Dice the avocado and cucumber.',
        'Spread the rocket on a plate, top with the tuna, avocado and cucumber and season lightly with salt.'
      ]
    }
  },
  {
    id: 'cabbage_salad', cat: 'salads', time: 10, serv: 3,
    title: N('Λαχανοσαλάτα λαδολέμονο', 'Greek cabbage salad'),
    desc: N('Τραγανή και δροσερή, η χειμωνιάτικη σαλάτα της γιαγιάς.', 'Crunchy and fresh, grandma’s winter salad.'),
    ing: [['cabbage', 400], ['olive_oil', 3], ['lemon', 1], ['dill', 0.25], ['salt', 0.5]],
    steps: {
      el: [
        'Κόψε το λάχανο σε πολύ λεπτές λωρίδες με κοφτερό μαχαίρι.',
        'Αλάτισέ το και τρίψ’ το με τα χέρια 1 λεπτό για να μαλακώσει.',
        'Ρίξε λάδι, χυμό λεμονιού και ψιλοκομμένο άνηθο, ανακάτεψε και άφησέ το 10 λεπτά πριν το σερβίρεις.'
      ],
      en: [
        'Slice the cabbage very thinly with a sharp knife.',
        'Salt it and massage it with your hands for 1 minute to soften.',
        'Add the oil, lemon juice and chopped dill, toss and leave for 10 minutes before serving.'
      ]
    }
  },
  {
    id: 'egg_salad', cat: 'salads', time: 15, serv: 2,
    title: N('Αυγοσαλάτα', 'Egg salad'),
    desc: N('Κρεμώδης, για μαρούλι, αγγούρι ή ψωμί κούπας.', 'Creamy, for lettuce cups, cucumber or mug bread.'),
    ing: [['eggs', 6], ['mayo', 3], ['mustard', 1], ['spring_onion', 0.25], ['paprika', 0.25], ['salt', 0.25], ['pepper', 1], ['lettuce', 0.25]],
    steps: {
      el: [
        'Βράσε τα αυγά 10 λεπτά, κρύωσέ τα σε κρύο νερό και καθάρισέ τα.',
        'Κόψ’ τα σε κομματάκια και ανακάτεψε με μαγιονέζα, μουστάρδα, ψιλοκομμένο κρεμμυδάκι, αλάτι και πιπέρι.',
        'Σέρβιρε σε φύλλα μαρουλιού, πασπαλισμένη με πάπρικα.'
      ],
      en: [
        'Boil the eggs for 10 minutes, cool them in cold water and peel.',
        'Chop them and mix with the mayonnaise, mustard, chopped spring onion, salt and pepper.',
        'Serve in lettuce leaves, dusted with paprika.'
      ]
    }
  },
  {
    id: 'broccoli_cheddar_soup', cat: 'salads', time: 30, serv: 4,
    title: N('Σούπα μπρόκολο-τσένταρ', 'Broccoli cheddar soup'),
    desc: N('Βελούδινη και τυρένια, για κρύες μέρες.', 'Velvety and cheesy, for cold days.'),
    ing: [['broccoli', 1], ['onion', 0.25], ['garlic', 2], ['butter', 30], ['stock', 600], ['cream', 150], ['cheddar', 150], ['salt', 0.5], ['pepper', 1], ['nutmeg', 1]],
    steps: {
      el: [
        'Λιώσε το βούτυρο σε κατσαρόλα και σοτάρισε το κρεμμύδι 4 λεπτά. Ρίξε το σκόρδο για 1 λεπτό.',
        'Πρόσθεσε το μπρόκολο σε φουντίτσες και τον ζωμό. Βράσε 12–15 λεπτά μέχρι να μαλακώσει.',
        'Κράτα λίγες φουντίτσες στην άκρη και πολτοποίησε τα υπόλοιπα με ραβδομπλέντερ.',
        'Ρίξε την κρέμα και, σε χαμηλή φωτιά, το τσένταρ λίγο λίγο, ανακατεύοντας μέχρι να λιώσει. Αλάτι, πιπέρι, μοσχοκάρυδο και οι φουντίτσες από πάνω.'
      ],
      en: [
        'Melt the butter in a pot and soften the onion for 4 minutes. Add the garlic for 1 minute.',
        'Add the broccoli florets and stock. Simmer for 12–15 minutes until tender.',
        'Set a few florets aside and blend the rest with a stick blender.',
        'Stir in the cream, then, on low heat, the cheddar a little at a time until melted. Season with salt, pepper and nutmeg and top with the florets.'
      ]
    }
  },
  {
    id: 'cauliflower_soup', cat: 'salads', time: 35, serv: 4,
    air: [['airfry', 200, 15]],
    title: N('Βελουτέ ψητού κουνουπιδιού', 'Roasted cauliflower soup'),
    desc: N('Το ψήσιμο δίνει γλυκιά, καβουρδισμένη γεύση.', 'Roasting gives it a sweet, toasty flavour.'),
    ing: [['cauliflower', 0.75], ['olive_oil', 1], ['thyme', 0.5], ['onion', 0.25], ['garlic', 2], ['butter', 30], ['stock', 700], ['cream', 100], ['parmesan', 30], ['salt', 1], ['pepper', 1]],
    steps: {
      el: [
        'Κόψε το κουνουπίδι σε φουντίτσες και ανακάτεψε με λάδι και θυμάρι.',
        '{{pre:200}}{{spread}} {{airfry:200:15}}, ανακίνηση στη μέση, μέχρι να ροδίσουν οι άκρες.',
        'Σε κατσαρόλα λιώσε το βούτυρο και σοτάρισε κρεμμύδι και σκόρδο 4 λεπτά. Ρίξε το κουνουπίδι και τον ζωμό και βράσε 10 λεπτά.',
        'Πολτοποίησε με ραβδομπλέντερ, ρίξε κρέμα, παρμεζάνα, αλάτι και πιπέρι. Αν είναι πολύ πηχτή, αραίωσε με λίγο ζεστό νερό.'
      ],
      en: [
        'Cut the cauliflower into florets and toss with the oil and thyme.',
        '{{pre:200}}{{spread}} {{airfry:200:15}}, shaking halfway, until browned at the edges.',
        'Melt the butter in a pot and soften the onion and garlic for 4 minutes. Add the cauliflower and stock and simmer for 10 minutes.',
        'Blend with a stick blender and stir in the cream, parmesan, salt and pepper. If it is too thick, thin with a little hot water.'
      ]
    }
  },
  {
    id: 'mushroom_soup', cat: 'salads', time: 30, serv: 4,
    title: N('Κρεμώδης μανιταρόσουπα', 'Creamy mushroom soup'),
    desc: N('Πλούσια, με θυμάρι και πολύ λίγους υδατάνθρακες.', 'Rich, with thyme and very few carbs.'),
    ing: [['mushrooms', 500], ['onion', 0.25], ['garlic', 2], ['butter', 30], ['thyme', 1], ['stock', 600], ['cream', 200], ['parsley', 0.25], ['salt', 1], ['pepper', 1]],
    steps: {
      el: [
        'Λιώσε το βούτυρο σε κατσαρόλα και σοτάρισε τα μανιτάρια σε φέτες σε δυνατή φωτιά 6–8 λεπτά, μέχρι να ροδίσουν.',
        'Ρίξε κρεμμύδι, σκόρδο και θυμάρι και μαγείρεψε 3 λεπτά.',
        'Πρόσθεσε τον ζωμό και βράσε 10 λεπτά. Κράτα μερικά μανιτάρια για το σερβίρισμα και πολτοποίησε τα υπόλοιπα.',
        'Ρίξε την κρέμα, αλάτι και πιπέρι και ζέστανε χωρίς να βράσει. Σέρβιρε με μαϊντανό.'
      ],
      en: [
        'Melt the butter in a pot and fry the sliced mushrooms on high heat for 6–8 minutes, until browned.',
        'Add the onion, garlic and thyme and cook for 3 minutes.',
        'Pour in the stock and simmer for 10 minutes. Keep a few mushrooms aside for serving and blend the rest.',
        'Stir in the cream, salt and pepper and heat without boiling. Serve with parsley.'
      ]
    }
  },
  {
    id: 'caprese', cat: 'salads', time: 5, serv: 2,
    title: N('Σαλάτα caprese', 'Caprese salad'),
    desc: N('Μοτσαρέλα, ντομάτα και βασιλικός με καλό ελαιόλαδο.', 'Mozzarella, tomato and basil with good olive oil.'),
    ing: [['mozzarella_ball', 250], ['tomato', 2], ['basil', 0.5], ['olive_oil', 2], ['salt', 0.25], ['pepper', 1]],
    steps: {
      el: [
        'Κόψε τη μοτσαρέλα και τις ντομάτες σε φέτες.',
        'Στρώσε τες εναλλάξ σε πιατέλα με φύλλα βασιλικού ανάμεσα.',
        'Αλάτι, φρεσκοτριμμένο πιπέρι και μπόλικο ελαιόλαδο. Μην βάλεις βαλσάμικο κρέμα: έχει ζάχαρη.'
      ],
      en: [
        'Slice the mozzarella and tomatoes.',
        'Arrange them alternately on a platter with basil leaves in between.',
        'Season with salt, fresh pepper and plenty of olive oil. Skip balsamic glaze: it is full of sugar.'
      ]
    }
  }
];
