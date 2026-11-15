const N = (el, en) => ({ el, en });

module.exports = [
  {
    id: 'sea_bream_lemon', cat: 'fish', time: 25, serv: 2,
    air: [['airfry', 190, '14–16']],
    title: N('Τσιπούρα με λαδολέμονο', 'Sea bream with lemon & oil'),
    desc: N('Ολόκληρο ψάρι, τραγανό απ’ έξω, ζουμερό μέσα.', 'Whole fish, crisp outside and juicy inside.'),
    ing: [['sea_bream', 2, N('~400 g το καθένα', '~400 g each')], ['olive_oil', 3], ['lemon', 1], ['oregano', 1], ['parsley', 0.25], ['salt', 1]],
    steps: {
      el: [
        'Καθάρισε και στέγνωσε τα ψάρια. Κάνε 2 χαρακιές από κάθε πλευρά και αλάτισε μέσα και έξω.',
        'Άλειψέ τα με 1 κ.σ. λάδι και λάδωσε και {{the_plate}}. Αν δεν χωράει η ουρά, κόψ’ την.',
        '{{pre:190}}Βάλ’ τα {{plate}}. {{split}} {{airfry:190:14–16}}, ανάλογα με το μέγεθος. Γύρνα τα προσεκτικά στη μέση με φαρδιά σπάτουλα.',
        'Χτύπα το υπόλοιπο λάδι με χυμό λεμονιού, ρίγανη και μαϊντανό και περίχυσε τα ψάρια.'
      ],
      en: [
        'Clean and dry the fish. Make 2 cuts on each side and salt them inside and out.',
        'Brush with 1 tbsp oil and oil {{the_plate}} too. Trim the tail if it doesn’t fit.',
        '{{pre:190}}Lay them {{plate}}. {{split}} {{airfry:190:14–16}}, depending on size. Turn carefully halfway with a wide spatula.',
        'Whisk the rest of the oil with lemon juice, oregano and parsley and pour over the fish.'
      ]
    }
  },
  {
    id: 'almond_crust_cod', cat: 'fish', time: 20, serv: 2,
    air: [['airfry', 200, 10]],
    title: N('Μπακαλιάρος με κρούστα αμυγδάλου', 'Almond-crusted cod'),
    desc: N('Λευκό ψάρι με τραγανή κρούστα παρμεζάνας και λεμονιού.', 'White fish with a crisp parmesan and lemon crust.'),
    ing: [['cod', 400, N('2 φιλέτα', '2 fillets')], ['mayo', 1], ['mustard', 1], ['almond_flour', 30], ['parmesan', 20], ['parsley', 0.25], ['lemon', 0.5], ['salt', 0.5], ['pepper', 1]],
    steps: {
      el: [
        'Στέγνωσε πολύ καλά τα φιλέτα και αλάτισέ τα. Λάδωσε {{the_plate}}.',
        'Ανακάτεψε τη μαγιονέζα με τη μουστάρδα και άλειψε την πάνω πλευρά.',
        'Ανακάτεψε αλεύρι αμυγδάλου, παρμεζάνα, μαϊντανό, ξύσμα λεμονιού και πιπέρι και πίεσε την κρούστα πάνω στα φιλέτα.',
        '{{pre:200}}Βάλε τα φιλέτα {{plate}}. {{airfry:200:10}}, χωρίς γύρισμα. Έτοιμος όταν ξεφλουδίζει με το πιρούνι (63°C). Σέρβιρε με λεμόνι.'
      ],
      en: [
        'Pat the fillets very dry and salt them. Oil {{the_plate}}.',
        'Mix the mayonnaise with the mustard and spread it over the top.',
        'Mix the almond flour, parmesan, parsley, lemon zest and pepper and press the crust onto the fillets.',
        '{{pre:200}}Lay the fillets {{plate}}. {{airfry:200:10}}, without turning. Done when it flakes with a fork (63°C). Serve with lemon.'
      ]
    }
  },
  {
    id: 'crispy_calamari', cat: 'fish', time: 20, serv: 2,
    air: [['airfry', 200, 8]],
    title: N('Τραγανά καλαμαράκια', 'Crispy calamari'),
    desc: N('Καλαμαράκια με κρούστα αμυγδάλου, χωρίς τηγάνι.', 'Calamari in an almond crust, no deep-frying.'),
    ing: [['squid', 300], ['eggs', 1], ['almond_flour', 40], ['parmesan', 20], ['paprika', 0.5], ['salt', 0.5], ['olive_oil', 1, N('σε ψεκαστήρα', 'in a spray bottle')], ['lemon', 0.5]],
    steps: {
      el: [
        'Κόψε τα καλαμάρια σε ροδέλες και στέγνωσέ τα πολύ καλά.',
        'Βούτηξέ τα σε χτυπημένο αυγό και μετά σε αλεύρι αμυγδάλου ανακατεμένο με παρμεζάνα, πάπρικα και αλάτι.',
        '{{pre:200}}Βάλ’ τα σε ένα στρώμα {{plate}} και ψέκασε λίγο λάδι. {{split}}',
        '{{airfry:200:8}}, ανακίνηση στα {{t:4}}. Μην τα παραψήσεις, γιατί σφίγγουν. Σέρβιρε με λεμόνι.'
      ],
      en: [
        'Slice the squid into rings and pat them very dry.',
        'Dip in beaten egg, then in the almond flour mixed with parmesan, paprika and salt.',
        '{{pre:200}}Lay them in a single layer {{plate}} and spray with a little oil. {{split}}',
        '{{airfry:200:8}}, shaking at {{t:4}}. Don’t overcook them or they turn rubbery. Serve with lemon.'
      ]
    }
  },
  {
    id: 'bacon_shrimp', cat: 'fish', time: 15, serv: 3,
    air: [['airfry', 200, 8]],
    title: N('Γαρίδες τυλιγμένες σε μπέικον', 'Bacon-wrapped shrimp'),
    desc: N('Αλμυρό, καπνιστό, τραγανό: ιδανικό για μεζέ.', 'Salty, smoky and crisp: a perfect party bite.'),
    ing: [['shrimp', 300, N('~18 μεγάλες', '~18 large')], ['bacon', 150], ['paprika', 0.5], ['garlic_powder', 0.25], ['skewers', 18, N('οδοντογλυφίδες', 'toothpicks')]],
    steps: {
      el: [
        'Στέγνωσε τις γαρίδες και πασπάλισέ τες με πάπρικα και σκόρδο σε σκόνη.',
        'Κόψε τις φέτες μπέικον στη μέση κατά μήκος, τύλιξε κάθε γαρίδα και στερέωσε με οδοντογλυφίδα.',
        '{{pre:200}}Βάλ’ τες σε ένα στρώμα {{plate}}. {{airfry:200:8}}, γύρισμα στα {{t:4}}, μέχρι να τραγανίσει το μπέικον.'
      ],
      en: [
        'Pat the shrimp dry and season with paprika and garlic powder.',
        'Cut the bacon slices in half lengthways, wrap each shrimp and secure with a toothpick.',
        '{{pre:200}}Lay them in a single layer {{plate}}. {{airfry:200:8}}, turning at {{t:4}}, until the bacon is crisp.'
      ]
    }
  },
  {
    id: 'salmon_dill_sauce', cat: 'fish', time: 15, serv: 2,
    air: [['airfry', 200, '8–10']],
    title: N('Σολομός με σάλτσα γιαουρτιού & άνηθου', 'Salmon with yogurt dill sauce'),
    desc: N('Απλός, γρήγορος και δροσερός.', 'Simple, quick and fresh.'),
    ing: [['salmon', 360, N('2 φιλέτα με πέτσα', '2 skin-on fillets')], ['olive_oil', 1], ['salt', 0.5], ['pepper', 1], ['yogurt', 100], ['dill', 0.25], ['garlic', 1], ['lemon', 0.5]],
    steps: {
      el: [
        'Στέγνωσε τον σολομό, άλειψε με λάδι και αλάτισε.',
        '{{pre:200}}Με την πέτσα κάτω {{plate}}: {{airfry:200:8–10}}. Δεν γυρίζει.',
        'Για τη σάλτσα, ανακάτεψε το γιαούρτι με ψιλοκομμένο άνηθο, τριμμένο σκόρδο, λίγο χυμό λεμονιού, αλάτι και πιπέρι.',
        'Σέρβιρε τον σολομό με τη σάλτσα και μια πράσινη σαλάτα.'
      ],
      en: [
        'Pat the salmon dry, brush with oil and salt it.',
        '{{pre:200}}Skin-side down {{plate}}: {{airfry:200:8–10}}. No need to turn.',
        'For the sauce, mix the yogurt with chopped dill, grated garlic, a little lemon juice, salt and pepper.',
        'Serve the salmon with the sauce and a green salad.'
      ]
    }
  },
  {
    id: 'grilled_sardines', cat: 'fish', time: 15, serv: 2,
    air: [['airfry', 200, 8]],
    title: N('Σαρδέλες ψητές με λεμόνι', 'Grilled sardines with lemon'),
    desc: N('Φθηνές, γεμάτες ωμέγα-3 και έτοιμες σε 8 λεπτά.', 'Cheap, rich in omega-3 and ready in 8 minutes.'),
    ing: [['sardines', 500], ['olive_oil', 1], ['salt', 1], ['oregano', 0.5], ['lemon', 1]],
    steps: {
      el: [
        'Καθάρισε τις σαρδέλες από κεφάλι και εντόσθια, ξέπλυνε και στέγνωσέ τες πολύ καλά.',
        'Αλάτισε και άλειψε με λίγο λάδι. Λάδωσε και {{the_plate}}.',
        '{{pre:200}}Βάλ’ τες σε ένα στρώμα {{plate}}. {{airfry:200:8}}, χωρίς γύρισμα.',
        'Σέρβιρε με λεμόνι και ρίγανη.'
      ],
      en: [
        'Remove the heads and guts, rinse the sardines and pat them very dry.',
        'Salt them and brush with a little oil. Oil {{the_plate}} too.',
        '{{pre:200}}Lay them in a single layer {{plate}}. {{airfry:200:8}}, without turning.',
        'Serve with lemon and oregano.'
      ]
    }
  },
  {
    id: 'sesame_tuna', cat: 'fish', time: 15, rest: N('+ 10\' μαρινάρισμα', '+ 10 min marinating'), serv: 2,
    title: N('Τόνος με κρούστα σουσαμιού', 'Sesame-crusted tuna'),
    desc: N('Ροζ στο κέντρο, με αβοκάντο και ρόκα.', 'Pink in the middle, with avocado and rocket.'),
    ing: [['tuna_steak', 400], ['soy_sauce', 1], ['ginger', 5], ['sesame', 3], ['olive_oil', 1], ['avocado', 1], ['rocket', 50], ['lemon', 0.5], ['salt', 0.25]],
    steps: {
      el: [
        'Μαρίναρε τον τόνο 10 λεπτά με τη σόγια και το τριμμένο τζίντζερ.',
        'Πασπάλισε σουσάμι και από τις δύο πλευρές, πιέζοντας να κολλήσει.',
        'Σε πολύ καυτό αντικολλητικό τηγάνι με λίγο λάδι, ψήσε 1–1,5 λεπτό από κάθε πλευρά: μένει ροζ στο κέντρο.',
        'Κόψε σε φέτες και σέρβιρε πάνω σε ρόκα με αβοκάντο, λεμόνι και λίγο αλάτι.'
      ],
      en: [
        'Marinate the tuna for 10 minutes in the soy sauce and grated ginger.',
        'Coat both sides with sesame seeds, pressing them on.',
        'In a very hot non-stick pan with a little oil, sear for 1–1.5 minutes per side: it stays pink in the middle.',
        'Slice and serve on rocket with avocado, lemon and a little salt.'
      ]
    }
  }
];
