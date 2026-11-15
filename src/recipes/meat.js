const N = (el, en) => ({ el, en });

module.exports = [
  {
    id: 'soutzoukakia', cat: 'meat', time: 45, serv: 4,
    air: [['airfry', 200, 10]],
    title: N('Σουτζουκάκια σμυρναίικα', 'Smyrna-style meatballs in tomato sauce'),
    desc: N('Με κύμινο και σάλτσα ντομάτας, χωρίς ψωμί στη ζύμη.', 'Cumin-spiced, in tomato sauce, with no bread in the mix.'),
    ing: [['minced_mix', 600], ['eggs', 1], ['garlic', 3], ['cumin', 1.5], ['parsley', 0.25], ['almond_flour', 20], ['salt', 1], ['pepper', 1], ['passata', 300], ['olive_oil', 2], ['bay_leaf', 1], ['cinnamon', 0.25]],
    steps: {
      el: [
        'Ζύμωσε τον κιμά με το αυγό, 2 σκελίδες τριμμένο σκόρδο, κύμινο, μαϊντανό, αλεύρι αμυγδάλου, αλάτι και πιπέρι. Πλάσε μακρόστενα σουτζουκάκια.',
        '{{pre:200}}Βάλ’ τα {{plate}}. {{split}} {{airfry:200:10}}, γύρισμα στα {{t:5}}.',
        'Στο μεταξύ, σε κατσαρόλα ζέστανε το λάδι με την υπόλοιπη σκελίδα σκόρδο. Ρίξε πασάτα, δάφνη, κανέλα, αλάτι και πιπέρι και σιγόβρασε 10 λεπτά.',
        'Βάλε τα σουτζουκάκια στη σάλτσα και σιγόβρασε άλλα 10 λεπτά. Σέρβιρε με πουρέ κουνουπιδιού.'
      ],
      en: [
        'Knead the mince with the egg, 2 grated garlic cloves, cumin, parsley, almond flour, salt and pepper. Shape into oval meatballs.',
        '{{pre:200}}Lay them {{plate}}. {{split}} {{airfry:200:10}}, turning at {{t:5}}.',
        'Meanwhile, heat the oil in a pot with the remaining garlic. Add the passata, bay leaf, cinnamon, salt and pepper and simmer for 10 minutes.',
        'Add the meatballs to the sauce and simmer for 10 more minutes. Serve with cauliflower mash.'
      ]
    }
  },
  {
    id: 'keftedakia', cat: 'meat', time: 25, rest: N('+ 15\' ψυγείο', '+ 15 min chilling'), serv: 4,
    air: [['airfry', 200, 10]],
    title: N('Κεφτεδάκια χωρίς ψωμί', 'Greek meatballs, no bread'),
    desc: N('Μυρωδάτα κεφτεδάκια με δυόσμο, χωρίς τηγάνισμα.', 'Fragrant mint meatballs, no frying.'),
    ing: [['minced_mix', 500], ['eggs', 1], ['onion', 0.25, N('τριμμένο', 'grated')], ['parmesan', 30], ['mint', 0.25], ['oregano', 1], ['salt', 1], ['pepper', 1], ['olive_oil', 1]],
    steps: {
      el: [
        'Ζύμωσε όλα τα υλικά εκτός από το λάδι και άφησε τη ζύμη 15 λεπτά στο ψυγείο.',
        'Πλάσε μικρά κεφτεδάκια με βρεγμένα χέρια και άλειψέ τα με λίγο λάδι.',
        '{{pre:200}}Βάλ’ τα {{plate}}. {{split}}',
        '{{airfry:200:10}}, ανακίνηση στα {{t:5}}. Σέρβιρε με τζατζίκι ή γιαούρτι.'
      ],
      en: [
        'Knead everything except the oil and chill the mixture for 15 minutes.',
        'Roll small meatballs with wet hands and brush them with a little oil.',
        '{{pre:200}}Lay them {{plate}}. {{split}}',
        '{{airfry:200:10}}, shaking at {{t:5}}. Serve with tzatziki or yogurt.'
      ]
    }
  },
  {
    id: 'pork_souvlaki', cat: 'meat', time: 15, rest: N('+ 1 ώρα μαρινάρισμα', '+ 1 h marinating'), serv: 3,
    air: [['airfry', 200, 12]],
    title: N('Σουβλάκια χοιρινά', 'Pork souvlaki'),
    desc: N('Το κλασικό καλαμάκι με λεμόνι και ρίγανη.', 'The classic Greek skewer with lemon and oregano.'),
    ing: [['pork_neck', 600], ['olive_oil', 2], ['lemon', 0.5], ['oregano', 1], ['garlic', 1], ['salt', 1], ['pepper', 1], ['skewers', 6]],
    steps: {
      el: [
        'Κόψε τη σπάλα σε κύβους 3 cm και μαρίναρέ τη με λάδι, χυμό λεμονιού, ρίγανη, σκόρδο, αλάτι και πιπέρι για 1 ώρα.',
        'Πέρασε τους κύβους στα ξυλάκια, κομμένα ώστε να χωράνε {{in_zone}}.',
        '{{pre:200}}{{airfry:200:12}}. Γύρνα τα στα {{t:6}}.',
        'Έτοιμα όταν ροδίσουν απ’ έξω και μείνουν ζουμερά μέσα (63–70°C). Λεμόνι και ρίγανη στο τέλος.'
      ],
      en: [
        'Cut the pork into 3 cm cubes and marinate with the oil, lemon juice, oregano, garlic, salt and pepper for 1 hour.',
        'Thread onto the skewers, trimmed to fit {{in_zone}}.',
        '{{pre:200}}{{airfry:200:12}}, turning at {{t:6}}.',
        'Done when browned outside and still juicy inside (63–70°C). Finish with lemon and oregano.'
      ]
    }
  },
  {
    id: 'ribeye_garlic_butter', cat: 'meat', time: 20, serv: 2,
    air: [['airfry', 200, '10–12']],
    title: N('Ribeye με βούτυρο σκόρδου', 'Ribeye with garlic butter'),
    desc: N('Μπριζόλα στο σημείο που σου αρέσει, με βούτυρο που λιώνει από πάνω.', 'Steak cooked just how you like it, topped with melting butter.'),
    ing: [['ribeye', 600, N('2 μπριζόλες 2,5 cm', '2 steaks, 2.5 cm thick')], ['olive_oil', 1], ['salt', 1], ['pepper', 2], ['butter', 30], ['garlic', 2], ['parsley', 0.25], ['rosemary', 0.25]],
    steps: {
      el: [
        'Βγάλε τις μπριζόλες από το ψυγείο 30 λεπτά νωρίτερα, στέγνωσέ τες και άλειψε με λάδι, αλάτι και πιπέρι.',
        'Για το βούτυρο σκόρδου, ανακάτεψε μαλακό βούτυρο με τριμμένο σκόρδο, ψιλοκομμένο μαϊντανό και δεντρολίβανο.',
        '{{pre:200}}{{airfry:200:10–12}}, γύρισμα στη μέση. Μέτρια στους 57°C, καλοψημένη στους 65°C.',
        'Βάλε από πάνω το βούτυρο σκόρδου και άφησέ τες 5 λεπτά να ξεκουραστούν πριν τις κόψεις.'
      ],
      en: [
        'Take the steaks out of the fridge 30 minutes ahead, pat dry and rub with oil, salt and pepper.',
        'For the garlic butter, mix soft butter with grated garlic, chopped parsley and rosemary.',
        '{{pre:200}}{{airfry:200:10–12}}, turning halfway. Medium at 57°C, well done at 65°C.',
        'Top with the garlic butter and rest for 5 minutes before slicing.'
      ]
    }
  },
  {
    id: 'crispy_pork_belly', cat: 'meat', time: 45, serv: 3,
    air: [['airfry', 180, 30], ['airfry', 200, 10]],
    title: N('Τραγανή πανσέτα', 'Crispy pork belly'),
    desc: N('Τραγανή πέτσα που σκάει, ζουμερό κρέας από κάτω.', 'Crackling skin on top, juicy meat underneath.'),
    ing: [['pork_belly', 700, N('σε ένα κομμάτι', 'in one piece')], ['salt', 1.5], ['pepper', 1], ['paprika', 0.5], ['oregano', 1], ['lemon', 0.5]],
    steps: {
      el: [
        'Στέγνωσε πολύ καλά την πανσέτα και χάραξε την πέτσα σε ρόμβους χωρίς να κόψεις το κρέας.',
        'Τρίψε με αλάτι, πιπέρι, πάπρικα και ρίγανη, βάζοντας περισσότερο αλάτι στην πέτσα.',
        '{{pre:180}}Βάλε την πανσέτα με την πέτσα πάνω {{plate}}. {{airfry:180:30}}.',
        'Για τραγανή πέτσα συνέχισε με {{airfry:200:10}}, μέχρι να φουσκώσει. Κόψε σε κομμάτια και σέρβιρε με λεμόνι.'
      ],
      en: [
        'Pat the pork belly very dry and score the skin in a diamond pattern without cutting into the meat.',
        'Rub with salt, pepper, paprika and oregano, using more salt on the skin.',
        '{{pre:180}}Put the pork skin-side up {{plate}}. {{airfry:180:30}}.',
        'For crackling, continue with {{airfry:200:10}}, until the skin puffs up. Cut into pieces and serve with lemon.'
      ]
    }
  },
  {
    id: 'sausages_peppers', cat: 'meat', time: 20, serv: 2,
    air: [['airfry', 190, 15]],
    title: N('Λουκάνικα με πιπεριές', 'Sausages with peppers'),
    desc: N('Χωριάτικα λουκάνικα και πιπεριές στο ίδιο καλάθι.', 'Country sausages and peppers cooked together.'),
    ing: [['sausages', 400], ['red_pepper', 0.5], ['green_pepper', 0.5], ['olive_oil', 1], ['oregano', 0.5], ['salt', 0.25], ['mustard', 2]],
    steps: {
      el: [
        'Κόψε τις πιπεριές σε λωρίδες και ανακάτεψέ τες με λάδι, ρίγανη και αλάτι.',
        'Τρύπησε τα λουκάνικα 2–3 φορές με πιρούνι.',
        '{{pre:190}}{{spread}} {{airfry:190:15}}, ανακίνηση στα {{t:8}}.',
        'Σέρβιρε με μουστάρδα. Τα λουκάνικα του εμπορίου έχουν συχνά ζάχαρη ή ψίχα: διάλεξε με λίγους υδατάνθρακες στην ετικέτα.'
      ],
      en: [
        'Cut the peppers into strips and toss with the oil, oregano and salt.',
        'Prick the sausages 2–3 times with a fork.',
        '{{pre:190}}{{spread}} {{airfry:190:15}}, shaking at {{t:8}}.',
        'Serve with mustard. Shop-bought sausages often contain sugar or breadcrumbs, so pick ones with few carbs on the label.'
      ]
    }
  },
  {
    id: 'papoutsakia', cat: 'meat', time: 60, serv: 4,
    air: [['airfry', 190, 15], ['bake', 170, 15]],
    title: N('Παπουτσάκια κετο', 'Keto stuffed aubergines (papoutsakia)'),
    desc: N('Μελιτζάνες γεμιστές με κιμά και τυρένια κρέμα από πάνω.', 'Aubergines stuffed with mince under a creamy cheese topping.'),
    ing: [['eggplant', 2], ['minced_beef', 400], ['onion', 0.25], ['garlic', 2], ['passata', 100], ['cinnamon', 0.25], ['olive_oil', 3], ['salt', 1], ['pepper', 1], ['cream', 150], ['eggs', 1], ['graviera', 80], ['nutmeg', 1]],
    steps: {
      el: [
        'Κόψε τις μελιτζάνες κατά μήκος στη μέση, χάραξε τη σάρκα σταυρωτά, άλειψε με 1 κ.σ. λάδι και αλάτισε.',
        '{{pre:190}}Βάλε τις μισές μελιτζάνες {{plate}} με την κομμένη πλευρά πάνω: {{airfry:190:15}}, μέχρι να μαλακώσουν.',
        'Στο μεταξύ σοτάρισε κρεμμύδι και σκόρδο στο υπόλοιπο λάδι, ρίξε τον κιμά και ψήσ’ τον να ροδίσει. Πρόσθεσε πασάτα, κανέλα, αλάτι και πιπέρι και σιγόβρασε 10 λεπτά.',
        'Πάτησε τη σάρκα των μελιτζανών με κουτάλι για να ανοίξει θέση και γέμισε με τον κιμά.',
        'Χτύπα την κρέμα γάλακτος με το αυγό, τη μισή γραβιέρα και μοσχοκάρυδο. Μοίρασέ τη από πάνω και πασπάλισε την υπόλοιπη γραβιέρα.',
        '{{bake:170:15}}, μέχρι να ροδίσει η κρέμα.'
      ],
      en: [
        'Halve the aubergines lengthways, score the flesh in a criss-cross, brush with 1 tbsp oil and salt.',
        '{{pre:190}}Lay the halves {{plate}} cut-side up: {{airfry:190:15}}, until soft.',
        'Meanwhile, soften the onion and garlic in the rest of the oil, add the mince and brown it. Stir in the passata, cinnamon, salt and pepper and simmer for 10 minutes.',
        'Press the aubergine flesh down with a spoon to make room and fill with the mince.',
        'Whisk the cream with the egg, half the graviera and the nutmeg. Spoon it over and sprinkle with the rest of the cheese.',
        '{{bake:170:15}}, until the topping is golden.'
      ]
    }
  },
  {
    id: 'pork_tenderloin_mustard', cat: 'meat', time: 30, serv: 3,
    air: [['airfry', 190, 20]],
    title: N('Χοιρινό φιλέτο με μουστάρδα', 'Mustard pork tenderloin'),
    desc: N('Τρυφερό φιλέτο με κρεμώδη σάλτσα μουστάρδας.', 'Tender pork with a creamy mustard sauce.'),
    ing: [['pork_tenderloin', 600], ['mustard', 3], ['olive_oil', 1], ['rosemary', 0.5], ['garlic', 1], ['salt', 1], ['pepper', 1], ['cream', 100]],
    steps: {
      el: [
        'Ανακάτεψε 2 κ.γ. μουστάρδα με λάδι, δεντρολίβανο, τριμμένο σκόρδο, αλάτι και πιπέρι και άλειψε το φιλέτο.',
        '{{pre:190}}Βάλ’ το {{plate}}. Αν δεν χωράει, κόψ’ το στη μέση. {{airfry:190:20}}, γύρισμα στη μέση.',
        'Έτοιμο στους 63°C στο κέντρο. Άφησέ το 5 λεπτά σκεπασμένο.',
        'Για τη σάλτσα, ζέστανε την κρέμα με την υπόλοιπη μουστάρδα και τα ζουμιά του ψησίματος μέχρι να δέσει. Κόψε το φιλέτο σε μενταγιόν και περίχυσε.'
      ],
      en: [
        'Mix 2 tsp mustard with the oil, rosemary, grated garlic, salt and pepper and rub it over the pork.',
        '{{pre:190}}Lay it {{plate}}. If it doesn’t fit, cut it in half. {{airfry:190:20}}, turning halfway.',
        'Done at 63°C in the centre. Rest for 5 minutes, covered.',
        'For the sauce, heat the cream with the remaining mustard and the cooking juices until it thickens. Slice the pork and pour the sauce over.'
      ]
    }
  },
  {
    id: 'burger_bowl', cat: 'meat', time: 20, serv: 2,
    air: [['airfry', 190, 10]],
    title: N('Burger bowl χωρίς ψωμί', 'Bunless burger bowl'),
    desc: N('Όλο το burger σε μπολ, με τσένταρ, μπέικον και σως.', 'The whole burger in a bowl, with cheddar, bacon and sauce.'),
    ing: [['minced_beef', 400], ['salt', 0.75], ['pepper', 1], ['cheddar', 60], ['bacon', 40], ['lettuce', 0.5], ['tomato', 1], ['cucumber', 0.25], ['mayo', 2], ['mustard', 2]],
    steps: {
      el: [
        'Πλάσε 2 μπιφτέκια πάχους 2 cm από τον κιμά, το αλάτι και το πιπέρι.',
        '{{pre:190}}Βάλε τα μπιφτέκια και το μπέικον {{plate}}. {{airfry:190:10}}, γύρισμα στα {{t:5}}. Το τελευταίο λεπτό βάλε από πάνω το τσένταρ να λιώσει.',
        'Για τη σως, ανακάτεψε μαγιονέζα και μουστάρδα.',
        'Στρώσε σε μπολ μαρούλι, ντομάτα και αγγούρι. Βάλε από πάνω το μπιφτέκι κομμένο, το μπέικον θρυμματισμένο και τη σως.'
      ],
      en: [
        'Shape 2 patties, 2 cm thick, from the mince, salt and pepper.',
        '{{pre:190}}Lay the patties and bacon {{plate}}. {{airfry:190:10}}, turning at {{t:5}}. Add the cheddar for the last minute to melt.',
        'For the sauce, mix the mayonnaise and mustard.',
        'Fill bowls with lettuce, tomato and cucumber. Top with the sliced patty, crumbled bacon and the sauce.'
      ]
    }
  }
];
