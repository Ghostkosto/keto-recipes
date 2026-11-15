const N = (el, en) => ({ el, en });

module.exports = [
  {
    id: 'cheesecake_jars', cat: 'desserts', time: 15, rest: N('+ 2 ώρες ψυγείο', '+ 2 h in the fridge'), serv: 4,
    title: N('Cheesecake σε βαζάκια', 'No-bake cheesecake jars'),
    desc: N('Χωρίς ψήσιμο, με βάση αμυγδάλου και βατόμουρα.', 'No baking, with an almond base and raspberries.'),
    ing: [['cream_cheese', 200], ['cream', 150], ['erythritol', 40], ['vanilla', 1], ['lemon', 0.25, N('ξύσμα', 'zest')], ['almond_flour', 40], ['butter', 20], ['cinnamon', 0.25], ['raspberries', 80]],
    steps: {
      el: [
        'Για τη βάση, ανακάτεψε αλεύρι αμυγδάλου, λιωμένο βούτυρο, κανέλα και 10 g ερυθριτόλη. Μοίρασε σε 4 βαζάκια και πάτησε με κουτάλι.',
        'Χτύπα την κρύα κρέμα γάλακτος σε σαντιγί.',
        'Σε άλλο μπολ, χτύπα το τυρί κρέμα με την υπόλοιπη ερυθριτόλη, τη βανίλια και το ξύσμα λεμονιού και ενσωμάτωσε απαλά τη σαντιγί.',
        'Μοίρασε την κρέμα στα βαζάκια, βάλε από πάνω βατόμουρα και ψυγείο για 2 ώρες.'
      ],
      en: [
        'For the base, mix the almond flour, melted butter, cinnamon and 10 g erythritol. Divide between 4 jars and press down with a spoon.',
        'Whip the cold cream to soft peaks.',
        'In another bowl, beat the cream cheese with the rest of the erythritol, the vanilla and lemon zest, then gently fold in the whipped cream.',
        'Spoon the cream into the jars, top with raspberries and chill for 2 hours.'
      ]
    }
  },
  {
    id: 'chocolate_mousse', cat: 'desserts', time: 10, rest: N('+ 1 ώρα ψυγείο', '+ 1 h in the fridge'), serv: 4,
    title: N('Μους σοκολάτας', 'Chocolate mousse'),
    desc: N('Αέρινη μους με τρία βασικά υλικά, σε 10 λεπτά.', 'An airy mousse from three main ingredients, in 10 minutes.'),
    ing: [['cream', 300], ['cocoa', 20], ['erythritol', 40, N('κατά προτίμηση άχνη', 'powdered if possible')], ['vanilla', 1], ['dark_chocolate', 20], ['salt', 0.1]],
    steps: {
      el: [
        'Βάλε σε μπολ την κρύα κρέμα γάλακτος με το κακάο, την ερυθριτόλη, τη βανίλια και μια πρέζα αλάτι.',
        'Χτύπα με μίξερ μέχρι να γίνει σφιχτή σαντιγί που κρατάει σχήμα.',
        'Μοίρασε σε ποτήρια, τρίψε από πάνω τη σοκολάτα και βάλε στο ψυγείο για 1 ώρα.'
      ],
      en: [
        'Put the cold cream in a bowl with the cocoa, erythritol, vanilla and a pinch of salt.',
        'Whisk with a mixer until it holds firm peaks.',
        'Spoon into glasses, grate the chocolate on top and chill for 1 hour.'
      ]
    }
  },
  {
    id: 'coconut_macaroons', cat: 'desserts', time: 25, serv: 12, yield: 'pcs',
    air: [['bake', 150, '10–12']],
    title: N('Μπισκότα καρύδας με σοκολάτα', 'Chocolate-dipped coconut macaroons'),
    desc: N('Τραγανά απ’ έξω, μαλακά μέσα, με βάση σοκολάτας.', 'Crisp outside, chewy inside, with a chocolate base.'),
    ing: [['coconut_flakes', 120], ['eggs', 2, N('μόνο τα ασπράδια', 'whites only')], ['erythritol', 50], ['vanilla', 1], ['salt', 0.1], ['dark_chocolate', 30]],
    steps: {
      el: [
        'Χτύπα τα ασπράδια με την ερυθριτόλη και το αλάτι μέχρι να αφρίσουν.',
        'Ανακάτεψε την καρύδα και τη βανίλια.',
        'Πλάσε 12 μικρές πυραμίδες με βρεγμένα χέρια πάνω σε λαδόχαρτο.',
        '{{pre:150:bake}}{{spread}} {{bake:150:10–12}}, μέχρι να ροδίσουν οι κορυφές.',
        'Όταν κρυώσουν, βούτηξε τη βάση τους σε λιωμένη σοκολάτα και άφησέ τα να σφίξουν.'
      ],
      en: [
        'Whisk the egg whites with the erythritol and salt until foamy.',
        'Stir in the coconut and vanilla.',
        'With wet hands, shape 12 small pyramids on baking paper.',
        '{{pre:150:bake}}{{spread}} {{bake:150:10–12}}, until the tips are golden.',
        'Once cool, dip their bases in melted chocolate and let them set.'
      ]
    }
  },
  {
    id: 'chocolate_mug_cake', cat: 'desserts', time: 5, serv: 1,
    title: N('Κέικ κούπας σοκολάτας', 'Chocolate mug cake'),
    desc: N('Ζεστό γλυκό σε 2 λεπτά, με καρδιά που λιώνει.', 'A warm dessert in 2 minutes, with a molten centre.'),
    ing: [['almond_flour', 25], ['cocoa', 10], ['erythritol', 20], ['baking_powder', 0.25], ['eggs', 1], ['butter', 15], ['vanilla', 0.25], ['dark_chocolate', 10]],
    steps: {
      el: [
        'Λιώσε το βούτυρο σε κούπα στα μικροκύματα.',
        'Ρίξε αλεύρι αμυγδάλου, κακάο, ερυθριτόλη, baking powder, αυγό και βανίλια και ανακάτεψε καλά. Χώσε στο κέντρο τη σοκολάτα.',
        'Μικροκύματα στα 800 W για 70–80 δευτερόλεπτα: το κέντρο μένει λίγο υγρό.',
        '{{in_dev}}, σε κεραμικό ραμεκίν: {{bake:160:10–12}}.'
      ],
      en: [
        'Melt the butter in a mug in the microwave.',
        'Add the almond flour, cocoa, erythritol, baking powder, egg and vanilla and mix well. Push the chocolate into the centre.',
        'Microwave at 800 W for 70–80 seconds: the centre stays slightly gooey.',
        '{{in_dev}}, in a ceramic ramekin: {{bake:160:10–12}}.'
      ]
    }
  },
  {
    id: 'panna_cotta', cat: 'desserts', time: 15, rest: N('+ 4 ώρες ψυγείο', '+ 4 h in the fridge'), serv: 4,
    title: N('Πανακότα βανίλια με φράουλες', 'Vanilla panna cotta with strawberries'),
    desc: N('Βελούδινη πανακότα χωρίς ζάχαρη.', 'Silky, sugar-free panna cotta.'),
    ing: [['cream', 400], ['erythritol', 40], ['vanilla', 1.5], ['gelatin', 6], ['strawberries', 120]],
    steps: {
      el: [
        'Μούλιασε τα φύλλα ζελατίνης σε κρύο νερό 5 λεπτά, ή τη σκόνη σε 2 κ.σ. νερό.',
        'Ζέστανε την κρέμα με την ερυθριτόλη και τη βανίλια μέχρι να αχνίσει, χωρίς να βράσει.',
        'Κατέβασε από τη φωτιά, πρόσθεσε τη στυμμένη ζελατίνη και ανακάτεψε μέχρι να διαλυθεί.',
        'Μοίρασε σε 4 ποτήρια και βάλε στο ψυγείο για 4 ώρες. Σέρβιρε με φράουλες λιωμένες με πιρούνι.'
      ],
      en: [
        'Soak the gelatine sheets in cold water for 5 minutes, or the powder in 2 tbsp water.',
        'Heat the cream with the erythritol and vanilla until steaming, without boiling.',
        'Take off the heat, add the squeezed gelatine and stir until dissolved.',
        'Divide between 4 glasses and chill for 4 hours. Serve with strawberries crushed with a fork.'
      ]
    }
  },
  {
    id: 'almond_cookies', cat: 'desserts', time: 25, serv: 12, yield: 'pcs',
    air: [['bake', 150, '10–12']],
    title: N('Αμυγδαλωτά κετο', 'Keto almond cookies'),
    desc: N('Μαλακά αμυγδαλωτά με ξύσμα λεμονιού.', 'Soft almond cookies with lemon zest.'),
    ing: [['almond_flour', 150], ['erythritol', 60], ['eggs', 1, N('μόνο το ασπράδι', 'white only')], ['vanilla', 0.5], ['lemon', 0.25, N('ξύσμα', 'zest')], ['almonds', 20, N('φιλέ', 'flaked')]],
    steps: {
      el: [
        'Ανακάτεψε αλεύρι αμυγδάλου, ερυθριτόλη και ξύσμα λεμονιού.',
        'Πρόσθεσε το ασπράδι και τη βανίλια και ζύμωσε μέχρι να γίνει κολλώδης ζύμη.',
        'Πλάσε 12 μπαλίτσες με βρεγμένα χέρια, βάλ’ τες σε λαδόχαρτο και πάτησε από πάνω φιλέ αμυγδάλου.',
        '{{pre:150:bake}}{{spread}} {{bake:150:10–12}}, μέχρι να ροδίσουν ελαφρά. Βγαίνουν μαλακά και σφίγγουν καθώς κρυώνουν.'
      ],
      en: [
        'Mix the almond flour, erythritol and lemon zest.',
        'Add the egg white and vanilla and knead into a sticky dough.',
        'Roll 12 balls with wet hands, set them on baking paper and press flaked almonds on top.',
        '{{pre:150:bake}}{{spread}} {{bake:150:10–12}}, until lightly golden. They come out soft and firm up as they cool.'
      ]
    }
  },
  {
    id: 'berries_mascarpone', cat: 'desserts', time: 5, serv: 2,
    title: N('Μούρα με κρέμα μασκαρπόνε', 'Berries with mascarpone cream'),
    desc: N('Γρήγορο γλυκό για όταν σου έρχεται κάτι γλυκό.', 'A quick fix for a sweet craving.'),
    ing: [['mascarpone', 100], ['cream', 100], ['erythritol', 15], ['vanilla', 0.5], ['raspberries', 60], ['strawberries', 60]],
    steps: {
      el: [
        'Χτύπα τη μασκαρπόνε με την κρέμα γάλακτος, την ερυθριτόλη και τη βανίλια μέχρι να σφίξει.',
        'Κόψε τις φράουλες και μοίρασε τα μούρα σε δύο ποτήρια.',
        'Βάλε από πάνω την κρέμα και σέρβιρε αμέσως ή κράτα στο ψυγείο έως 1 μέρα.'
      ],
      en: [
        'Whisk the mascarpone with the cream, erythritol and vanilla until thick.',
        'Slice the strawberries and divide the berries between two glasses.',
        'Top with the cream and serve straight away, or chill for up to a day.'
      ]
    }
  }
];
