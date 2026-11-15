const N = (el, en) => ({ el, en });

module.exports = [
  {
    id: 'shakshuka', cat: 'breakfast', time: 20, serv: 2,
    title: N('Σακσούκα με φέτα', 'Shakshuka with feta'),
    desc: N('Αυγά ποσέ σε πικάντικη σάλτσα ντομάτας με πιπεριά.', 'Eggs poached in a spiced tomato and pepper sauce.'),
    ing: [['eggs', 4], ['passata', 150], ['red_pepper', 0.5], ['garlic', 2], ['cumin', 0.5], ['paprika', 1], ['feta', 60], ['olive_oil', 2], ['parsley', 0.25], ['salt', 0.5], ['pepper', 1]],
    steps: {
      el: [
        'Ζέστανε το ελαιόλαδο σε τηγάνι και σοτάρισε την πιπεριά σε λωρίδες για 4–5 λεπτά.',
        'Ρίξε το σκόρδο, το κύμινο και την πάπρικα για 30 δευτερόλεπτα και μετά την πασάτα, αλάτι και πιπέρι. Σιγόβρασε 6–8 λεπτά να δέσει.',
        'Άνοιξε 4 λακκούβες με το κουτάλι και σπάσε μέσα τα αυγά. Σκέπασε και μαγείρεψε σε χαμηλή φωτιά 5–7 λεπτά, μέχρι να πήξουν τα ασπράδια.',
        'Θρυμμάτισε από πάνω τη φέτα, πασπάλισε μαϊντανό και σέρβιρε από το τηγάνι.'
      ],
      en: [
        'Heat the olive oil in a pan and cook the sliced pepper for 4–5 minutes.',
        'Add the garlic, cumin and paprika for 30 seconds, then the passata, salt and pepper. Simmer for 6–8 minutes to thicken.',
        'Make 4 wells with a spoon and crack in the eggs. Cover and cook on low heat for 5–7 minutes, until the whites set.',
        'Crumble the feta on top, sprinkle with parsley and serve from the pan.'
      ]
    }
  },
  {
    id: 'veggie_frittata', cat: 'breakfast', time: 25, serv: 2,
    air: [['bake', 160, 18]],
    title: N('Φριτάτα με σπανάκι & φέτα', 'Spinach & feta frittata'),
    desc: N('Αφράτη ομελέτα φούρνου, ζεστή ή κρύα για το κουτί του φαγητού.', 'A fluffy baked omelette, good hot or cold in a lunchbox.'),
    ing: [['eggs', 5], ['cream', 50], ['spinach', 60], ['feta', 60], ['cherry_tomatoes', 60], ['spring_onion', 0.25], ['butter', 10], ['salt', 0.25], ['pepper', 1]],
    steps: {
      el: [
        'Χτύπα τα αυγά με την κρέμα γάλακτος, αλάτι και πιπέρι.',
        'Άλειψε με βούτυρο ένα ταψάκι ή φόρμα σιλικόνης{{fits}} και στρώσε το σπανάκι ψιλοκομμένο, το κρεμμυδάκι και τα ντοματίνια κομμένα στη μέση.',
        'Ρίξε από πάνω το αυγό και θρυμμάτισε τη φέτα.',
        '{{pre:160:bake}}Βάλε τη φόρμα {{rack}}. {{bake:160:18}}, μέχρι να φουσκώσει και να μην τρέμει στο κέντρο.',
        'Άφησέ τη 5 λεπτά, κόψ’ τη σε κομμάτια και σέρβιρε.'
      ],
      en: [
        'Whisk the eggs with the cream, salt and pepper.',
        'Butter a small tin or silicone mould{{fits}} and add the chopped spinach, spring onion and halved cherry tomatoes.',
        'Pour the egg over and crumble in the feta.',
        '{{pre:160:bake}}Set the tin {{rack}}. {{bake:160:18}}, until puffed and no longer wobbly in the centre.',
        'Rest for 5 minutes, cut into wedges and serve.'
      ]
    }
  },
  {
    id: 'bacon_egg_cups', cat: 'breakfast', time: 15, serv: 4, yield: 'pcs',
    air: [['airfry', 180, 5], ['airfry', 170, '8–10']],
    title: N('Αυγά σε φωλιές μπέικον', 'Bacon & egg cups'),
    desc: N('Πρωινό στο χέρι, έτοιμο σε 15 λεπτά.', 'A handheld breakfast, ready in 15 minutes.'),
    ing: [['bacon', 80, N('~6 φέτες', '~6 slices')], ['eggs', 4], ['cheddar', 30], ['spring_onion', 0.25], ['pepper', 1]],
    steps: {
      el: [
        'Στρώσε τις φέτες μπέικον γύρω γύρω σε 4 φορμάκια σιλικόνης, σαν φωλιά.',
        '{{pre:180}}Βάλε τα φορμάκια {{plate}} και ψήσε πρώτα το μπέικον μόνο του: {{airfry:180:5}}.',
        'Ρίξε λίγο τσένταρ στον πάτο και σπάσε ένα αυγό σε κάθε φωλιά. Πιπέρι από πάνω.',
        '{{airfry:170:8–10}}: τα 8 λεπτά δίνουν ρευστό κρόκο, τα 10 σφιχτό. Πασπάλισε ψιλοκομμένο κρεμμυδάκι.'
      ],
      en: [
        'Line 4 silicone cups with the bacon slices, like little nests.',
        '{{pre:180}}Put the cups {{plate}} and cook the bacon on its own first: {{airfry:180:5}}.',
        'Add a little cheddar to each, then crack in an egg. Season with pepper.',
        '{{airfry:170:8–10}}: 8 minutes for runny yolks, 10 for firm. Sprinkle with chopped spring onion.'
      ]
    }
  },
  {
    id: 'crustless_tiropita', cat: 'breakfast', time: 40, serv: 4,
    air: [['bake', 160, 25]],
    title: N('Τυρόπιτα χωρίς φύλλο', 'Crustless Greek cheese pie'),
    desc: N('Όλη η γεύση της τυρόπιτας, χωρίς φύλλο και αλεύρι σίτου.', 'All the flavour of tiropita, without the pastry or wheat flour.'),
    ing: [['feta', 200], ['eggs', 3], ['yogurt', 100], ['cream', 50], ['almond_flour', 30], ['baking_powder', 0.5], ['butter', 15], ['sesame', 1], ['pepper', 1]],
    steps: {
      el: [
        'Θρυμμάτισε τη φέτα σε μπολ και ανακάτεψε με τα αυγά, το γιαούρτι και την κρέμα γάλακτος.',
        'Πρόσθεσε το αλεύρι αμυγδάλου, το baking powder και πιπέρι και ανακάτεψε να ενωθούν.',
        'Άλειψε με βούτυρο μια φόρμα{{fits}}, άδειασε μέσα το μείγμα και πασπάλισε σουσάμι.',
        '{{pre:160:bake}}Βάλε τη φόρμα {{rack}}. {{bake:160:25}}, μέχρι να ροδίσει και να σφίξει. Αν ροδίζει πολύ νωρίς, χαμήλωσε 10°C.',
        'Άφησέ τη 10 λεπτά πριν την κόψεις.'
      ],
      en: [
        'Crumble the feta into a bowl and mix with the eggs, yogurt and cream.',
        'Add the almond flour, baking powder and pepper and stir until combined.',
        'Butter a tin{{fits}}, pour in the mixture and sprinkle with sesame seeds.',
        '{{pre:160:bake}}Set the tin {{rack}}. {{bake:160:25}}, until golden and set. If it browns too early, lower the heat by 10°C.',
        'Let it rest for 10 minutes before cutting.'
      ]
    }
  },
  {
    id: 'yogurt_walnuts', cat: 'breakfast', time: 3, serv: 1,
    title: N('Γιαούρτι με καρύδια & βατόμουρα', 'Yogurt with walnuts & raspberries'),
    desc: N('Το πιο γρήγορο πρωινό, χωρίς μαγείρεμα.', 'The quickest breakfast, no cooking needed.'),
    ing: [['yogurt', 150], ['walnuts', 25], ['raspberries', 30], ['cinnamon', 0.5]],
    steps: {
      el: [
        'Βάλε το γιαούρτι σε μπολ.',
        'Σπάσε από πάνω τα καρύδια με τα χέρια και πρόσθεσε τα βατόμουρα.',
        'Πασπάλισε κανέλα. Αν θέλεις γλυκό, βάλε λίγη ερυθριτόλη, όχι μέλι.'
      ],
      en: [
        'Spoon the yogurt into a bowl.',
        'Break the walnuts over it by hand and add the raspberries.',
        'Dust with cinnamon. For sweetness, use a little erythritol rather than honey.'
      ]
    }
  },
  {
    id: 'mushroom_omelette', cat: 'breakfast', time: 10, serv: 1,
    title: N('Ομελέτα με μανιτάρια & γραβιέρα', 'Mushroom & graviera omelette'),
    desc: N('Βουτυράτη ομελέτα με θυμάρι και λιωμένο τυρί.', 'A buttery omelette with thyme and melted cheese.'),
    ing: [['eggs', 3], ['mushrooms', 80], ['graviera', 30], ['butter', 15], ['thyme', 0.25], ['salt', 0.25], ['pepper', 1]],
    steps: {
      el: [
        'Λιώσε το μισό βούτυρο σε τηγάνι και σοτάρισε τα μανιτάρια σε φέτες με το θυμάρι 4–5 λεπτά. Βγάλ’ τα στην άκρη.',
        'Χτύπα τα αυγά με αλάτι και πιπέρι.',
        'Λιώσε το υπόλοιπο βούτυρο, ρίξε τα αυγά και ανακάτευε απαλά τα πρώτα δευτερόλεπτα.',
        'Όταν πήξουν οι άκρες, βάλε στη μία πλευρά τα μανιτάρια και τη γραβιέρα, δίπλωσε και σέρβιρε.'
      ],
      en: [
        'Melt half the butter in a pan and cook the sliced mushrooms with the thyme for 4–5 minutes. Set aside.',
        'Beat the eggs with salt and pepper.',
        'Melt the rest of the butter, pour in the eggs and stir gently for the first few seconds.',
        'When the edges set, put the mushrooms and graviera on one side, fold and serve.'
      ]
    }
  },
  {
    id: 'smoked_salmon_eggs', cat: 'breakfast', time: 8, serv: 1,
    title: N('Scrambled αυγά με καπνιστό σολομό', 'Scrambled eggs with smoked salmon'),
    desc: N('Κρεμώδη αυγά, σολομός και αβοκάντο για ένα πρωινό γιορτής.', 'Creamy eggs, salmon and avocado for a weekend breakfast.'),
    ing: [['eggs', 3], ['cream', 20], ['butter', 10], ['smoked_salmon', 50], ['avocado', 0.5], ['dill', 0.1], ['pepper', 1]],
    steps: {
      el: [
        'Χτύπα ελαφρά τα αυγά με την κρέμα και λίγο πιπέρι. Αλάτι δεν χρειάζεται, το δίνει ο σολομός.',
        'Λιώσε το βούτυρο σε χαμηλή φωτιά, ρίξε τα αυγά και ανακάτευε αργά με σπάτουλα σιλικόνης.',
        'Κατέβασέ τα από τη φωτιά όσο είναι ακόμα λίγο υγρά: συνεχίζουν να ψήνονται.',
        'Σέρβιρε με τον σολομό, το αβοκάντο σε φέτες και άνηθο.'
      ],
      en: [
        'Lightly beat the eggs with the cream and a little pepper. No salt needed; the salmon brings it.',
        'Melt the butter over low heat, add the eggs and stir slowly with a silicone spatula.',
        'Take them off the heat while still slightly wet: they keep cooking.',
        'Serve with the salmon, sliced avocado and dill.'
      ]
    }
  },
  {
    id: 'mug_bread', cat: 'breakfast', time: 5, serv: 1, yield: 'pcs',
    title: N('Ψωμί κούπας σε 90 δευτερόλεπτα', '90-second mug bread'),
    desc: N('Ένα μικρό ψωμάκι για τοστ ή αυγά, στα μικροκύματα.', 'A small bread roll for toast or eggs, made in the microwave.'),
    ing: [['almond_flour', 30], ['eggs', 1], ['butter', 10], ['baking_powder', 0.5], ['salt', 0.1]],
    steps: {
      el: [
        'Λιώσε το βούτυρο σε φαρδιά κούπα στα μικροκύματα, 15–20 δευτερόλεπτα.',
        'Ρίξε το αλεύρι αμυγδάλου, το αυγό, το baking powder και το αλάτι και ανακάτεψε καλά με πιρούνι, χωρίς σβόλους.',
        'Μικροκύματα στα 800–900 W για 90 δευτερόλεπτα, μέχρι να φουσκώσει και να σφίξει.',
        'Ξεκόλλησέ το με μαχαίρι, κόψ’ το στη μέση και φρυγάνισέ το σε τηγάνι ή τοστιέρα.'
      ],
      en: [
        'Melt the butter in a wide mug in the microwave, 15–20 seconds.',
        'Add the almond flour, egg, baking powder and salt and mix well with a fork until smooth.',
        'Microwave at 800–900 W for 90 seconds, until risen and firm.',
        'Loosen it with a knife, slice in half and toast in a pan or sandwich maker.'
      ]
    }
  },
  {
    id: 'avocado_cocoa_smoothie', cat: 'breakfast', time: 5, serv: 1,
    title: N('Smoothie σοκολάτας με αβοκάντο', 'Chocolate avocado smoothie'),
    desc: N('Πηχτό και σοκολατένιο, σαν milkshake χωρίς ζάχαρη.', 'Thick and chocolatey, like a sugar-free milkshake.'),
    ing: [['avocado', 0.5], ['almond_milk', 250], ['cocoa', 10], ['peanut_butter', 15], ['erythritol', 10], ['vanilla', 0.5]],
    steps: {
      el: [
        'Βάλε όλα τα υλικά στο μπλέντερ με 3–4 παγάκια.',
        'Χτύπα 40–60 δευτερόλεπτα μέχρι να γίνει βελούδινο.',
        'Δοκίμασε και πρόσθεσε ερυθριτόλη ή λίγο γάλα αν το θες πιο αραιό.'
      ],
      en: [
        'Put everything in the blender with 3–4 ice cubes.',
        'Blend for 40–60 seconds until velvety.',
        'Taste and add erythritol, or a little more milk if you want it thinner.'
      ]
    }
  },
  {
    id: 'avocado_egg_boats', cat: 'breakfast', time: 15, serv: 2,
    air: [['airfry', 180, '10–12']],
    title: N('Αβοκάντο με αυγό στη φριτέζα', 'Baked avocado eggs'),
    desc: N('Αυγό ψημένο μέσα στο αβοκάντο, με τραγανό μπέικον.', 'Eggs baked inside avocado halves, with crispy bacon.'),
    ing: [['avocado', 2], ['eggs', 4, N('μικρά', 'small')], ['bacon', 40], ['spring_onion', 0.1], ['chili_flakes', 1], ['salt', 0.25], ['pepper', 1]],
    steps: {
      el: [
        'Κόψε τα αβοκάντο στη μέση, βγάλε το κουκούτσι και μεγάλωσε λίγο τη θέση με κουτάλι, ώστε να χωράει ένα αυγό.',
        'Κόψε μια λεπτή φέτα από την κάτω πλευρά για να στέκονται ίσια και σπάσε μέσα από ένα αυγό. Αλάτι και πιπέρι.',
        '{{pre:180}}Βάλ’ τα {{plate}}. {{airfry:180:10–12}}, μέχρι να πήξει το ασπράδι.',
        'Στο μεταξύ τσιγάρισε το μπέικον. Θρυμμάτισέ το από πάνω και πασπάλισε κρεμμυδάκι και τσίλι.'
      ],
      en: [
        'Halve the avocados, remove the stones and scoop out a little flesh so an egg fits.',
        'Slice a thin piece off the bottom so they sit flat, then crack an egg into each. Season with salt and pepper.',
        '{{pre:180}}Set them {{plate}}. {{airfry:180:10–12}}, until the whites are set.',
        'Meanwhile, fry the bacon. Crumble it on top and sprinkle with spring onion and chili.'
      ]
    }
  },
  {
    id: 'cloud_bread', cat: 'breakfast', time: 25, serv: 6, yield: 'pcs',
    air: [['bake', 150, '12–15']],
    title: N('Ψωμάκια «σύννεφο»', 'Cloud bread'),
    desc: N('Αφράτα ψωμάκια από αυγό και τυρί κρέμα, για σάντουιτς και τοστ.', 'Fluffy egg and cream cheese rolls for sandwiches and toast.'),
    ing: [['eggs', 3], ['cream_cheese', 60], ['baking_powder', 0.25], ['salt', 0.1], ['sesame', 1]],
    steps: {
      el: [
        'Χώρισε τα αυγά. Χτύπα τα ασπράδια με το baking powder σε σφιχτή μαρέγκα.',
        'Σε άλλο μπολ ανακάτεψε τους κρόκους με το τυρί κρέμα και το αλάτι μέχρι να γίνουν λεία κρέμα.',
        'Ενσωμάτωσε απαλά τη μαρέγκα στην κρέμα, σε 2–3 δόσεις, για να μην ξεφουσκώσει.',
        'Κάνε 6 στρογγυλά ψωμάκια πάνω σε λαδόχαρτο και πασπάλισε σουσάμι.',
        '{{pre:150:bake}}{{spread}} {{bake:150:12–15}}, μέχρι να ροδίσουν. Άφησέ τα να κρυώσουν πάνω στο χαρτί.'
      ],
      en: [
        'Separate the eggs. Whisk the whites with the baking powder to stiff peaks.',
        'In another bowl, mix the yolks with the cream cheese and salt until smooth.',
        'Gently fold the whites into the yolk mixture in 2–3 additions so it stays airy.',
        'Spoon 6 rounds onto baking paper and sprinkle with sesame seeds.',
        '{{pre:150:bake}}{{spread}} {{bake:150:12–15}}, until golden. Let them cool on the paper.'
      ]
    }
  },
  {
    id: 'eggs_benedict', cat: 'breakfast', time: 25, serv: 2,
    air: [['airfry', 190, 10]],
    title: N('Αυγά μπενέντικτ σε μανιτάρια', 'Eggs Benedict on mushrooms'),
    desc: N('Αυγά ποσέ με σως ολαντέζ, πάνω σε μανιτάρια αντί για ψωμί.', 'Poached eggs and hollandaise on mushrooms instead of muffins.'),
    ing: [['big_mushrooms', 4, N('πορτομπέλο ή τα πιο μεγάλα που θα βρεις', 'portobello or the largest you can find')], ['eggs', 6, N('4 για ποσέ και 2 κρόκοι για τη σως', '4 to poach, 2 yolks for the sauce')], ['butter', 90], ['lemon', 0.5], ['vinegar', 1], ['prosciutto', 60], ['olive_oil', 1], ['salt', 0.5], ['pepper', 1]],
    steps: {
      el: [
        'Βγάλε τα κοτσάνια από τα μανιτάρια, άλειψέ τα με λάδι και αλάτισε. {{pre:190}}Βάλ’ τα {{plate}} με την ανοιχτή πλευρά πάνω: {{airfry:190:10}}.',
        'Για τη σως ολαντέζ, λιώσε το βούτυρο μέχρι να αφρίσει. Χτύπα στο μπλέντερ τους 2 κρόκους με τον χυμό λεμονιού και λίγο αλάτι και ρίξε σιγά σιγά το καυτό βούτυρο με το μπλέντερ να δουλεύει, μέχρι να πήξει.',
        'Για τα αυγά ποσέ, σε κατσαρόλα με νερό που μόλις σιγοβράζει και το ξίδι, σπάσε ένα ένα τα 4 αυγά και άφησέ τα 3 λεπτά. Βγάλ’ τα με τρυπητή κουτάλα.',
        'Σε κάθε μανιτάρι βάλε μια φέτα προσούτο, ένα αυγό ποσέ και σως από πάνω. Τελείωσε με πιπέρι.'
      ],
      en: [
        'Remove the mushroom stems, brush with oil and salt. {{pre:190}}Set them {{plate}} gill-side up: {{airfry:190:10}}.',
        'For the hollandaise, melt the butter until foaming. Blend the 2 yolks with the lemon juice and a little salt, then pour in the hot butter slowly with the blender running until it thickens.',
        'To poach the eggs, crack the 4 eggs one at a time into barely simmering water with the vinegar and cook for 3 minutes. Lift out with a slotted spoon.',
        'Top each mushroom with a slice of prosciutto, a poached egg and the sauce. Finish with pepper.'
      ]
    }
  },
  {
    id: 'breakfast_skillet', cat: 'breakfast', time: 20, serv: 2,
    title: N('Τηγανιά πρωινού με λουκάνικο & αυγά', 'Sausage & egg breakfast skillet'),
    desc: N('Όλο το πρωινό σε ένα τηγάνι, για μέρες με πολλή πείνα.', 'A whole breakfast in one pan, for hungry mornings.'),
    ing: [['sausages', 200], ['green_pepper', 0.5], ['mushrooms', 80], ['eggs', 4], ['cheddar', 40], ['olive_oil', 1], ['paprika', 0.5], ['parsley', 0.25], ['salt', 0.25], ['pepper', 1]],
    steps: {
      el: [
        'Κόψε τα λουκάνικα σε ροδέλες και τσιγάρισέ τα στο λάδι για 5 λεπτά.',
        'Ρίξε την πιπεριά και τα μανιτάρια σε κομμάτια με την πάπρικα και μαγείρεψε άλλα 5 λεπτά.',
        'Άνοιξε 4 θέσεις, σπάσε μέσα τα αυγά, πασπάλισε το τσένταρ και σκέπασε για 4–5 λεπτά σε χαμηλή φωτιά.',
        'Αλάτι, πιπέρι, μαϊντανός και σερβίρισμα από το τηγάνι.'
      ],
      en: [
        'Slice the sausages and fry them in the oil for 5 minutes.',
        'Add the chopped pepper, mushrooms and paprika and cook for 5 more minutes.',
        'Make 4 wells, crack in the eggs, sprinkle with the cheddar and cover for 4–5 minutes on low heat.',
        'Season with salt, pepper and parsley and serve from the pan.'
      ]
    }
  },
  {
    id: 'keto_granola', cat: 'breakfast', time: 20, serv: 8,
    air: [['bake', 150, '12–15']],
    title: N('Κετο γκρανόλα', 'Keto granola'),
    desc: N('Τραγανή γκρανόλα χωρίς δημητριακά, για γιαούρτι ή γάλα αμυγδάλου.', 'Crunchy grain-free granola for yogurt or almond milk.'),
    ing: [['almonds', 80], ['walnuts', 80], ['pumpkin_seeds', 50], ['sunflower_seeds', 40], ['coconut_flakes', 50], ['flaxseed', 20], ['eggs', 1, N('μόνο το ασπράδι', 'white only')], ['butter', 30], ['erythritol', 30], ['cinnamon', 1.5], ['vanilla', 1], ['salt', 0.1]],
    steps: {
      el: [
        'Κόψε χοντρά τα αμύγδαλα και τα καρύδια.',
        'Ανακάτεψέ τα με τους σπόρους, την καρύδα, τον λιναρόσπορο, την κανέλα και το αλάτι.',
        'Χτύπα το ασπράδι να αφρίσει, ανακάτεψέ το με το λιωμένο βούτυρο, την ερυθριτόλη και τη βανίλια και ρίξ’ το στο μείγμα. Το ασπράδι κολλάει τους καρπούς σε κομμάτια.',
        '{{pre:150:bake}}{{spread}} {{bake:150:12–15}}, ανακάτεμα κάθε 4 λεπτά, μέχρι να ροδίσει.',
        'Άφησέ τη να κρυώσει εντελώς για να τραγανίσει. Κρατάει 2 εβδομάδες σε βάζο. Μερίδα: περίπου 45 g.'
      ],
      en: [
        'Roughly chop the almonds and walnuts.',
        'Mix them with the seeds, coconut, flaxseed, cinnamon and salt.',
        'Whisk the egg white until foamy, mix it with the melted butter, erythritol and vanilla and pour it over. The egg white binds the nuts into clusters.',
        '{{pre:150:bake}}{{spread}} {{bake:150:12–15}}, stirring every 4 minutes, until golden.',
        'Let it cool completely so it crisps up. It keeps for 2 weeks in a jar. One serving is about 45 g.'
      ]
    }
  },
  {
    id: 'flax_porridge', cat: 'breakfast', time: 5, serv: 1,
    title: N('Ζεστός χυλός λιναρόσπορου', 'Warm flaxseed porridge'),
    desc: N('Το κετο «κουάκερ» για κρύα πρωινά.', 'Keto “oatmeal” for cold mornings.'),
    ing: [['flaxseed', 25], ['chia', 1], ['coconut_flakes', 10], ['almond_milk', 200], ['cream', 30], ['cinnamon', 0.5], ['erythritol', 5], ['walnuts', 10], ['raspberries', 20]],
    steps: {
      el: [
        'Βάλε σε κατσαρολάκι τον λιναρόσπορο, τα chia, την καρύδα, την κανέλα και το γάλα αμυγδάλου.',
        'Ζέστανε σε μέτρια φωτιά για 3–4 λεπτά, ανακατεύοντας, μέχρι να πήξει σαν κουάκερ.',
        'Κατέβασε από τη φωτιά, ρίξε την κρέμα και την ερυθριτόλη και σέρβιρε με καρύδια και βατόμουρα.'
      ],
      en: [
        'Put the flaxseed, chia, coconut, cinnamon and almond milk in a small pan.',
        'Heat over medium heat for 3–4 minutes, stirring, until thick like oatmeal.',
        'Take off the heat, stir in the cream and erythritol and serve with walnuts and raspberries.'
      ]
    }
  },
  {
    id: 'egg_wrap', cat: 'breakfast', time: 10, serv: 1,
    title: N('Τορτίγια αυγού με γαλοπούλα & τυρί', 'Egg wrap with turkey & cheese'),
    desc: N('Λεπτή ομελέτα που τυλίγεται σαν πίτα, για πρωινό στο χέρι.', 'A thin omelette rolled like a wrap, to eat on the go.'),
    ing: [['eggs', 2], ['butter', 5], ['cream_cheese', 20], ['turkey_ham', 40], ['graviera', 30], ['rocket', 15], ['salt', 0.1], ['pepper', 1]],
    steps: {
      el: [
        'Χτύπα τα αυγά με λίγο αλάτι και πιπέρι.',
        'Λιώσε το βούτυρο σε μεγάλο αντικολλητικό τηγάνι, ρίξε τα αυγά και γύρνα το τηγάνι για να απλωθούν σε λεπτή κρέπα. Σκέπασε για 1–2 λεπτά σε χαμηλή φωτιά, μέχρι να πήξει.',
        'Γλίστρησέ τη σε πιάτο, άλειψε το τυρί κρέμα και βάλε γαλοπούλα, γραβιέρα και ρόκα.',
        'Τύλιξέ τη σφιχτά σαν τορτίγια. Αν τη θες ζεστή, βάλ’ τη 1 λεπτό στο τηγάνι από κάθε πλευρά.'
      ],
      en: [
        'Beat the eggs with a little salt and pepper.',
        'Melt the butter in a large non-stick pan, pour in the eggs and tilt the pan to spread them into a thin crêpe. Cover for 1–2 minutes on low heat until set.',
        'Slide it onto a plate, spread with the cream cheese and add the turkey, graviera and rocket.',
        'Roll it up tightly like a tortilla. For a warm wrap, give it 1 minute per side in the pan.'
      ]
    }
  },
  {
    id: 'halloumi_eggs', cat: 'breakfast', time: 12, serv: 2,
    title: N('Χαλούμι με αυγά μάτια & ντοματίνια', 'Halloumi with fried eggs & tomatoes'),
    desc: N('Ψητό χαλούμι, αυγά και ζουμερά ντοματίνια σε 12 λεπτά.', 'Golden halloumi, eggs and juicy tomatoes in 12 minutes.'),
    ing: [['halloumi', 150], ['eggs', 4], ['cherry_tomatoes', 100], ['olive_oil', 1.5], ['rocket', 30], ['oregano', 0.5], ['pepper', 1]],
    steps: {
      el: [
        'Κόψε το χαλούμι σε φέτες 1 cm και τα ντοματίνια στη μέση.',
        'Ψήσε το χαλούμι σε αντικολλητικό τηγάνι χωρίς λάδι, 1–2 λεπτά από κάθε πλευρά, μέχρι να ροδίσει. Βγάλ’ το στο πιάτο.',
        'Στο ίδιο τηγάνι ρίξε το λάδι και τα ντοματίνια για 2 λεπτά και μετά σπάσε τα αυγά. Μαγείρεψέ τα μάτια, 3–4 λεπτά.',
        'Σέρβιρε με το χαλούμι, ρόκα, ρίγανη και πιπέρι. Αλάτι δεν χρειάζεται.'
      ],
      en: [
        'Slice the halloumi 1 cm thick and halve the cherry tomatoes.',
        'Cook the halloumi in a dry non-stick pan for 1–2 minutes per side until golden. Move it to a plate.',
        'Add the oil and tomatoes to the same pan for 2 minutes, then crack in the eggs. Fry them sunny side up, 3–4 minutes.',
        'Serve with the halloumi, rocket, oregano and pepper. No salt needed.'
      ]
    }
  },
  {
    id: 'strawberry_smoothie', cat: 'breakfast', time: 5, serv: 1,
    title: N('Smoothie φράουλας', 'Strawberry smoothie'),
    desc: N('Κρεμώδες και δροσερό, με φράουλες και γιαούρτι.', 'Creamy and fresh, with strawberries and yogurt.'),
    ing: [['strawberries', 60], ['yogurt', 50], ['cream', 50], ['almond_milk', 200], ['erythritol', 8], ['vanilla', 0.25]],
    steps: {
      el: [
        'Βάλε όλα τα υλικά στο μπλέντερ με 3–4 παγάκια. Αν οι φράουλες είναι κατεψυγμένες, δεν χρειάζεται πάγος.',
        'Χτύπα για 40–60 δευτερόλεπτα μέχρι να γίνει βελούδινο.',
        'Δοκίμασε και πρόσθεσε ερυθριτόλη αν το θες πιο γλυκό.'
      ],
      en: [
        'Put everything in the blender with 3–4 ice cubes. Skip the ice if the strawberries are frozen.',
        'Blend for 40–60 seconds until velvety.',
        'Taste and add erythritol if you want it sweeter.'
      ]
    }
  },
  {
    id: 'breakfast_sandwich', cat: 'breakfast', time: 10, serv: 1,
    title: N('Σάντουιτς πρωινού με αυγό & μπέικον', 'Egg & bacon breakfast sandwich'),
    desc: N('Ψωμί κούπας, μπέικον, τσένταρ και αυγό μάτι.', 'Mug bread, bacon, cheddar and a fried egg.'),
    ing: [['almond_flour', 30], ['eggs', 2], ['butter', 15], ['baking_powder', 0.5], ['salt', 0.1], ['bacon', 30], ['cheddar', 20], ['tomato', 0.25]],
    steps: {
      el: [
        'Φτιάξε το ψωμί κούπας: λιώσε 10 g βούτυρο σε φαρδιά κούπα, ανακάτεψε μέσα το αλεύρι αμυγδάλου, 1 αυγό, το baking powder και το αλάτι και βάλ’ το στα μικροκύματα για 90 δευτερόλεπτα.',
        'Κόψ’ το οριζόντια στη μέση και φρυγάνισέ το σε τηγάνι με το υπόλοιπο βούτυρο.',
        'Στο ίδιο τηγάνι τσιγάρισε το μπέικον και τηγάνισε το δεύτερο αυγό μάτι.',
        'Γέμισε με μπέικον, τσένταρ, μια φέτα ντομάτα και το αυγό. Πάτησε ελαφρά και σέρβιρε.'
      ],
      en: [
        'Make the mug bread: melt 10 g butter in a wide mug, stir in the almond flour, 1 egg, baking powder and salt and microwave for 90 seconds.',
        'Slice it in half horizontally and toast it in a pan with the rest of the butter.',
        'In the same pan, fry the bacon and then the second egg.',
        'Fill with the bacon, cheddar, a slice of tomato and the egg. Press lightly and serve.'
      ]
    }
  },
  {
    id: 'cream_cheese_crepes', cat: 'breakfast', time: 15, serv: 2,
    title: N('Κρέπες με τυρί κρέμα', 'Cream cheese crêpes'),
    desc: N('Λεπτές κρέπες χωρίς αλεύρι, γλυκές ή αλμυρές.', 'Thin flourless crêpes, sweet or savoury.'),
    ing: [['eggs', 4], ['cream_cheese', 80], ['erythritol', 5], ['cinnamon', 0.5], ['butter', 15], ['cream', 60], ['raspberries', 40]],
    steps: {
      el: [
        'Χτύπα στο μπλέντερ τα αυγά, το τυρί κρέμα, την ερυθριτόλη και την κανέλα μέχρι να γίνει λείος χυλός. Άφησέ τον 2 λεπτά να φύγουν οι φυσαλίδες.',
        'Ζέστανε αντικολλητικό τηγάνι σε μέτρια-χαμηλή φωτιά με λίγο βούτυρο και ρίξε ¼ του χυλού, γυρνώντας το τηγάνι για να απλωθεί.',
        'Ψήσε 2 λεπτά, μέχρι να στεγνώσει η πάνω πλευρά, γύρνα με φαρδιά σπάτουλα και ψήσε άλλα 30 δευτερόλεπτα. Κάνε 4 κρέπες.',
        'Σέρβιρε με σαντιγί από την κρέμα γάλακτος και βατόμουρα, ή αλμυρές με γαλοπούλα και τυρί.'
      ],
      en: [
        'Blend the eggs, cream cheese, erythritol and cinnamon until smooth. Let it rest for 2 minutes so the bubbles settle.',
        'Heat a non-stick pan over medium-low heat with a little butter and pour in a quarter of the batter, tilting the pan to spread it.',
        'Cook for 2 minutes until the top looks dry, flip with a wide spatula and cook for 30 seconds more. Make 4 crêpes.',
        'Serve with the cream whipped and raspberries, or savoury with turkey and cheese.'
      ]
    }
  },
  {
    id: 'air_fryer_eggs', cat: 'breakfast', time: 17, serv: 6, yield: 'pcs',
    air: [['airfry', 140, 14]],
    title: N('Βραστά αυγά στη φριτέζα', 'Air fryer boiled eggs'),
    desc: N('Σφιχτά ή μελάτα αυγά χωρίς νερό, για όλη την εβδομάδα.', 'Hard or soft “boiled” eggs without water, for the whole week.'),
    ing: [['eggs', 6], ['salt', 0.25]],
    steps: {
      el: [
        '{{pre:140}}Βάλε τα αυγά, κατευθείαν από το ψυγείο, {{plate}}, χωρίς να ακουμπάνε μεταξύ τους.',
        '{{airfry:140:14}} για σφιχτά. Για μελάτα βγάλ’ τα στα {{t:9}} λεπτά, για ενδιάμεσα στα {{t:11}}.',
        'Ρίξ’ τα αμέσως σε μπολ με νερό και πάγο για 5 λεπτά: σταματάει το ψήσιμο και ξεφλουδίζονται εύκολα.',
        'Κρατάνε 1 εβδομάδα στο ψυγείο με το τσόφλι. Την πρώτη φορά κάνε δοκιμή με ένα αυγό, γιατί κάθε συσκευή ψήνει λίγο διαφορετικά.'
      ],
      en: [
        '{{pre:140}}Put the eggs, straight from the fridge, {{plate}} without touching each other.',
        '{{airfry:140:14}} for hard. For soft, take them out at {{t:9}} minutes; for jammy, at {{t:11}}.',
        'Drop them straight into iced water for 5 minutes: it stops the cooking and makes them easy to peel.',
        'They keep for a week in the fridge, unpeeled. Test with one egg the first time, as every appliance cooks a little differently.'
      ]
    }
  }
];
