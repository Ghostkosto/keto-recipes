# Keto Kitchen · online συνταγές

Οι συνταγές που κατεβάζει η εφαρμογή **Keto Kitchen** όταν έχει internet. Η εφαρμογή
τις κρατάει στο κινητό, ώστε να δουλεύουν και offline.

- `src/recipes/*.js`: οι συνταγές ανά κατηγορία (ελληνικά και αγγλικά)
- `src/ingredients.js`: τα υλικά, με διάδρομο σούπερ μάρκετ, καθαρούς υδατάνθρακες (`nc`), πρωτεΐνη (`p`) και λιπαρά (`f`)
- `src/photos.json`: ποιες φωτογραφίες του Wikimedia Commons ταιριάζουν σε κάθε συνταγή
- `feed/recipes.json`: το αρχείο που διαβάζει η εφαρμογή (φτιάχνεται αυτόματα)

Μετά από κάθε αλλαγή στο `src/`, το GitHub Actions κατεβάζει τις φωτογραφίες που λείπουν,
ελέγχει τις συνταγές, υπολογίζει υδατάνθρακες, πρωτεΐνη, λιπαρά και θερμίδες ανά μερίδα και ξαναφτιάχνει το `feed/`.

Στα βήματα, τα `{{airfry:200:12}}`, `{{pre:200}}`, `{{plate}}` κ.λπ. μετατρέπονται από
την εφαρμογή σε οδηγίες για τη φριτέζα αέρος που έχει διαλέξει ο χρήστης.

Οι φωτογραφίες είναι από το Wikimedia Commons, με τον δημιουργό και την άδεια κάθε
φωτογραφίας στο `feed/credits.json`. Τα θρεπτικά στοιχεία είναι κατά προσέγγιση (θερμίδες = 4 × πρωτεΐνη + 9 × λιπαρά + 4 × υδατάνθρακες).

---

Recipes downloaded by the **Keto Kitchen** app when it is online, kept on the phone for
offline use. Photos come from Wikimedia Commons; each photo's author and licence are in
`feed/credits.json`. Net carbs are approximate.
