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
  }
];
