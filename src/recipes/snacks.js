const N = (el, en) => ({ el, en });

module.exports = [
  {
    id: 'stuffed_mini_peppers', cat: 'snacks', time: 20, serv: 4,
    air: [['airfry', 190, 8]],
    title: N('Πιπεράκια γεμιστά με τυρί', 'Cheese-stuffed mini peppers'),
    desc: N('Γλυκά πιπεράκια με κρεμώδη γέμιση και μπέικον.', 'Sweet mini peppers with a creamy bacon filling.'),
    ing: [['mini_peppers', 300], ['cream_cheese', 120], ['feta', 50], ['bacon', 40], ['garlic_powder', 0.25], ['parsley', 0.25]],
    steps: {
      el: [
        'Κόψε τα πιπεράκια κατά μήκος στη μέση και καθάρισε τους σπόρους.',
        'Ανακάτεψε τυρί κρέμα, φέτα, ψιλοκομμένο μπέικον, σκόρδο σε σκόνη και μαϊντανό και γέμισε τα πιπεράκια.',
        '{{pre:190}}Βάλ’ τα {{plate}}. {{split}} {{airfry:190:8}}, μέχρι να ροδίσει η γέμιση.'
      ],
      en: [
        'Halve the peppers lengthways and remove the seeds.',
        'Mix the cream cheese, feta, chopped bacon, garlic powder and parsley and fill the peppers.',
        '{{pre:190}}Lay them {{plate}}. {{split}} {{airfry:190:8}}, until the filling is golden.'
      ]
    }
  },
  {
    id: 'halloumi_fries', cat: 'snacks', time: 15, serv: 3,
    air: [['airfry', 200, 8]],
    title: N('Χαλούμι fries με ντιπ δυόσμου', 'Halloumi fries with mint dip'),
    desc: N('Τραγανά στικ χαλουμιού που τρίζουν στο δάγκωμα.', 'Crispy halloumi sticks that squeak when you bite.'),
    ing: [['halloumi', 250], ['almond_flour', 15], ['paprika', 0.5], ['oregano', 0.5], ['olive_oil', 0.5, N('σε ψεκαστήρα', 'in a spray bottle')], ['yogurt', 100], ['mint', 0.25]],
    steps: {
      el: [
        'Κόψε το χαλούμι σε στικ πάχους 1,5 cm.',
        'Πασπάλισέ τα με αλεύρι αμυγδάλου, πάπρικα και ρίγανη και ψέκασε λίγο λάδι.',
        '{{pre:200}}Βάλ’ τα σε ένα στρώμα {{plate}}. {{airfry:200:8}}, γύρισμα στα {{t:4}}.',
        'Για το ντιπ, ανακάτεψε το γιαούρτι με ψιλοκομμένο δυόσμο.'
      ],
      en: [
        'Cut the halloumi into 1.5 cm sticks.',
        'Dust them with the almond flour, paprika and oregano and spray with a little oil.',
        '{{pre:200}}Lay them in a single layer {{plate}}. {{airfry:200:8}}, turning at {{t:4}}.',
        'For the dip, mix the yogurt with chopped mint.'
      ]
    }
  },
  {
    id: 'spiced_nuts', cat: 'snacks', time: 10, serv: 8,
    air: [['airfry', 160, '6–8']],
    title: N('Ξηροί καρποί με μπαχαρικά', 'Spiced roasted nuts'),
    desc: N('Τραγανό σνακ για τη βάρδια ή το γραφείο.', 'A crunchy snack for your shift or the office.'),
    ing: [['almonds', 100], ['walnuts', 100], ['pumpkin_seeds', 50], ['butter', 15], ['paprika', 0.5], ['cumin', 0.5], ['rosemary', 0.5], ['salt', 0.5]],
    steps: {
      el: [
        'Ανακάτεψε τους ξηρούς καρπούς με λιωμένο βούτυρο, πάπρικα, κύμινο, δεντρολίβανο και αλάτι.',
        '{{pre:160}}{{spread}} {{airfry:160:6–8}}, ανακίνηση κάθε 2 λεπτά, γιατί καίγονται εύκολα.',
        'Άφησέ τους να κρυώσουν: τραγανίζουν καθώς κρυώνουν. Κρατάνε 1 εβδομάδα σε βάζο. Μερίδα: μια μικρή χούφτα (~30 g).'
      ],
      en: [
        'Toss the nuts with the melted butter, paprika, cumin, rosemary and salt.',
        '{{pre:160}}{{spread}} {{airfry:160:6–8}}, shaking every 2 minutes because they burn easily.',
        'Let them cool: they crisp up as they cool. They keep for a week in a jar. One serving is a small handful (~30 g).'
      ]
    }
  },
  {
    id: 'deviled_eggs', cat: 'snacks', time: 20, serv: 12, yield: 'pcs',
    title: N('Αυγά γεμιστά', 'Deviled eggs'),
    desc: N('Κλασικός μεζές με κρεμώδη γέμιση.', 'A classic party bite with a creamy filling.'),
    ing: [['eggs', 6], ['mayo', 3], ['mustard', 1], ['paprika', 0.25], ['spring_onion', 0.1], ['salt', 0.25], ['pepper', 1]],
    steps: {
      el: [
        'Βράσε τα αυγά 10 λεπτά, κρύωσέ τα σε κρύο νερό και καθάρισέ τα.',
        'Κόψ’ τα στη μέση κατά μήκος και βγάλε τους κρόκους.',
        'Λιώσε τους κρόκους με μαγιονέζα, μουστάρδα, αλάτι και πιπέρι μέχρι να γίνουν κρέμα.',
        'Γέμισε τα ασπράδια με κουτάλι ή κορνέ και πασπάλισε πάπρικα και ψιλοκομμένο κρεμμυδάκι.'
      ],
      en: [
        'Boil the eggs for 10 minutes, cool them in cold water and peel.',
        'Halve them lengthways and scoop out the yolks.',
        'Mash the yolks with the mayonnaise, mustard, salt and pepper until creamy.',
        'Fill the whites with a spoon or piping bag and sprinkle with paprika and chopped spring onion.'
      ]
    }
  },
  {
    id: 'zucchini_chips', cat: 'snacks', time: 25, serv: 2,
    air: [['airfry', 180, '12–15']],
    title: N('Τσιπς κολοκυθιού με παρμεζάνα', 'Parmesan courgette chips'),
    desc: N('Λεπτές ροδέλες που γίνονται τραγανά τσιπς.', 'Thin slices that turn into crispy chips.'),
    ing: [['zucchini', 1], ['parmesan', 30], ['olive_oil', 1], ['paprika', 0.25], ['salt', 0.25]],
    steps: {
      el: [
        'Κόψε το κολοκυθάκι σε πολύ λεπτές ροδέλες, 2–3 mm, ιδανικά με μαντολίνο.',
        'Στέγνωσέ τες καλά με χαρτί κουζίνας και ανακάτεψε με λάδι, αλάτι και πάπρικα.',
        '{{pre:180}}{{spread}} {{airfry:180:12–15}}, ανακίνηση κάθε 4 λεπτά. Πασπάλισε την παρμεζάνα τα τελευταία 3 λεπτά.',
        'Άφησέ τα λίγο να κρυώσουν για να τραγανίσουν.'
      ],
      en: [
        'Slice the courgette very thinly, 2–3 mm, ideally on a mandoline.',
        'Pat the slices dry with kitchen paper and toss with the oil, salt and paprika.',
        '{{pre:180}}{{spread}} {{airfry:180:12–15}}, shaking every 4 minutes. Sprinkle on the parmesan for the last 3 minutes.',
        'Let them cool a little to crisp up.'
      ]
    }
  },
  {
    id: 'fathead_pizza', cat: 'snacks', time: 30, serv: 2,
    air: [['bake', 180, '6–8'], ['bake', 180, '5–6']],
    title: N('Κετο πίτσα με ζύμη τυριού', 'Keto fathead pizza'),
    desc: N('Ζύμη από μοτσαρέλα και αλεύρι αμυγδάλου που πετυχαίνει πάντα.', 'A mozzarella and almond flour dough that always works.'),
    ing: [['mozzarella', 210, N('150 g για τη ζύμη, 60 g από πάνω', '150 g for the dough, 60 g on top')], ['cream_cheese', 30], ['almond_flour', 60], ['eggs', 1], ['salt', 0.25], ['passata', 60], ['oregano', 1], ['salami', 60], ['olives', 20]],
    steps: {
      el: [
        'Λιώσε 150 g μοτσαρέλα με το τυρί κρέμα στα μικροκύματα για 1 λεπτό, ανακατεύοντας στη μέση.',
        'Πρόσθεσε αλεύρι αμυγδάλου, αυγό και αλάτι και ζύμωσε μέχρι να γίνει λεία ζύμη. Αν κολλάει, βρέξε τα χέρια.',
        'Χώρισέ τη στα δύο και άνοιξε δύο βάσεις ανάμεσα σε λαδόχαρτα, σε μέγεθος που χωράει {{in_zone}}. Τρύπησέ τες με πιρούνι.',
        '{{pre:180:bake}}Βάλε τις βάσεις με το κάτω λαδόχαρτο {{plate}}. {{bake:180:6–8}}, μέχρι να ροδίσουν ελαφρά.',
        'Άλειψε πασάτα με ρίγανη και βάλε την υπόλοιπη μοτσαρέλα, σαλάμι και ελιές. {{bake:180:5–6}}, μέχρι να λιώσει το τυρί.'
      ],
      en: [
        'Melt 150 g mozzarella with the cream cheese in the microwave for 1 minute, stirring halfway.',
        'Add the almond flour, egg and salt and knead into a smooth dough. If it sticks, wet your hands.',
        'Divide it in two and roll out two bases between sheets of baking paper, sized to fit {{in_zone}}. Prick with a fork.',
        '{{pre:180:bake}}Put the bases on their bottom sheet of paper {{plate}}. {{bake:180:6–8}}, until lightly golden.',
        'Spread with passata and oregano and top with the rest of the mozzarella, salami and olives. {{bake:180:5–6}}, until the cheese melts.'
      ]
    }
  },
  {
    id: 'cucumber_salmon_bites', cat: 'snacks', time: 10, serv: 4,
    title: N('Μπουκιές αγγουριού με καπνιστό σολομό', 'Cucumber & smoked salmon bites'),
    desc: N('Δροσερός μεζές χωρίς μαγείρεμα.', 'A fresh, no-cook party bite.'),
    ing: [['cucumber', 1], ['cream_cheese', 100], ['smoked_salmon', 100], ['dill', 0.25], ['lemon', 0.25]],
    steps: {
      el: [
        'Κόψε το αγγούρι σε ροδέλες 1 cm.',
        'Ανακάτεψε το τυρί κρέμα με ψιλοκομμένο άνηθο και λίγο ξύσμα λεμονιού.',
        'Βάλε λίγο τυρί σε κάθε ροδέλα και από πάνω ένα κομμάτι σολομό. Γαρνίρισε με άνηθο.'
      ],
      en: [
        'Slice the cucumber into 1 cm rounds.',
        'Mix the cream cheese with chopped dill and a little lemon zest.',
        'Top each round with a little cheese and a piece of salmon. Garnish with dill.'
      ]
    }
  },
  {
    id: 'seed_crackers', cat: 'snacks', time: 40, serv: 6,
    air: [['bake', 150, '15–18']],
    title: N('Κράκερ σπόρων', 'Seed crackers'),
    desc: N('Τραγανά κράκερ για ντιπ, τυριά και τυροκαυτερή.', 'Crunchy crackers for dips, cheese and tirokafteri.'),
    ing: [['sunflower_seeds', 60], ['pumpkin_seeds', 60], ['flaxseed', 40], ['chia', 3], ['sesame', 2], ['parmesan', 30], ['eggs', 1], ['salt', 0.5], ['rosemary', 0.5]],
    steps: {
      el: [
        'Ανακάτεψε όλους τους σπόρους με την παρμεζάνα, το αλάτι και το δεντρολίβανο.',
        'Ρίξε το αυγό και 80 ml νερό και άφησε 10 λεπτά να δέσει το μείγμα.',
        'Άπλωσε λεπτό στρώμα ανάμεσα σε δύο λαδόχαρτα, σε μέγεθος που χωράει {{in_zone}}, και χάραξε σε τετράγωνα.',
        '{{pre:150:bake}}Βάλε το φύλλο με το κάτω λαδόχαρτο {{plate}}. {{bake:150:15–18}}, μέχρι να ροδίσει και να ξεραθεί. Άφησέ το να κρυώσει και σπάσε στα χαραγμένα σημεία.'
      ],
      en: [
        'Mix all the seeds with the parmesan, salt and rosemary.',
        'Add the egg and 80 ml water and leave for 10 minutes to bind.',
        'Spread thinly between two sheets of baking paper, sized to fit {{in_zone}}, and score into squares.',
        '{{pre:150:bake}}Put the sheet on its bottom paper {{plate}}. {{bake:150:15–18}}, until golden and dry. Let it cool and break along the lines.'
      ]
    }
  },
  {
    id: 'cheese_crisps', cat: 'snacks', time: 10, serv: 2,
    air: [['airfry', 180, 6]],
    title: N('Τσιπς τυριού', 'Cheese crisps'),
    desc: N('Τραγανό σνακ με ένα βασικό υλικό.', 'A crunchy snack from one main ingredient.'),
    ing: [['parmesan', 80, N('ή κεφαλοτύρι', 'or kefalotyri')], ['oregano', 0.5], ['paprika', 0.25]],
    steps: {
      el: [
        'Κόψε λαδόχαρτο λίγο μικρότερο από {{the_plate}}: οι άκρες που περισσεύουν πιάνουν αέρα και ο ανεμιστήρας σηκώνει το χαρτί. Ακόμα καλύτερα, χρησιμοποίησε σιλικονένιο ταψάκι αντί για χαρτί.',
        'Βάλε πάνω στο χαρτί μικρούς σωρούς τριμμένο τυρί με απόσταση μεταξύ τους, και οπωσδήποτε έναν σε κάθε γωνία, για να μένει το χαρτί κάτω. Πασπάλισε ρίγανη ή πάπρικα.',
        '{{pre:180}}Βάλε το χαρτί μέσα μόνο φορτωμένο με το τυρί, ποτέ άδειο: αν σηκωθεί, μπορεί να ακουμπήσει την αντίσταση. {{airfry:180:6}}.',
        'Άφησέ τα 2–3 λεπτά να κρυώσουν: τότε τραγανίζουν.'
      ],
      en: [
        'Cut baking paper slightly smaller than {{the_plate}}: overhanging edges catch the air and the fan lifts the paper. Better still, use a silicone tray instead of paper.',
        'Make small piles of grated cheese on the paper, spaced apart, with one in each corner so the paper stays down. Sprinkle with oregano or paprika.',
        '{{pre:180}}Only put the paper in once it is loaded with cheese, never empty: if it lifts, it can touch the heating element. {{airfry:180:6}}.',
        'Let them cool for 2–3 minutes; that is when they turn crunchy.'
      ]
    }
  }
];
