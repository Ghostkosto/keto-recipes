#!/usr/bin/env node
/* Builds feed/recipes.json, the file the Keto Kitchen app downloads.

   - checks every recipe (ingredients, units, step tokens, both languages)
   - works out net carbs and macros (kcal, protein, fat) per serving from the
     ingredient table; kcal = 4 × protein + 9 × fat + 4 × net carbs
   - adds the photo path (with a version hash) and the photo credits

   Usage: node scripts/build.js            (writes feed/recipes.json)
          node scripts/build.js --check    (only checks, prints carbs and macros)
          node scripts/build.js --macros FILE.js  (prints macros for the app's
                                                   built-in recipes, as JSON)  */
'use strict';
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.join(__dirname, '..');
const ING = require(path.join(ROOT, 'src', 'ingredients.js'));
const CATS = ['breakfast', 'chicken', 'meat', 'fish', 'salads', 'sides', 'snacks', 'desserts'];
const UNITS = ['g', 'ml', 'pcs', 'tbsp', 'tsp', 'clove', 'bunch', 'pinch', 'stalk', 'cup', 'can'];
const AISLES = ['meat', 'fish', 'deli', 'dairy', 'produce', 'pantry', 'baking', 'spices'];
/* Recipes that ship inside the app; an online recipe with the same id would replace it. */
const BUILT_IN = ['omelette', 'kagianas', 'egg_muffins', 'eggs_bacon_avocado', 'chia_pudding', 'keto_pancakes', 'keto_coffee',
  'lemon_chicken', 'parmesan_wings', 'chicken_schnitzel', 'chicken_souvlaki', 'feta_burgers', 'pork_chops', 'lamb_chops',
  'moussaka', 'parmesan_salmon', 'garlic_shrimp', 'mackerel', 'shrimp_saganaki', 'greek_salad', 'caesar_salad', 'avgolemono',
  'roasted_cauliflower', 'crispy_broccoli', 'zucchini_fries', 'stuffed_mushrooms', 'halloumi', 'cheese_crisps', 'brownies',
  'pb_cookies', 'fat_bombs'];
const COOK = ['airfry', 'roast', 'bake', 'reheat'];
const TOKENS = {
  airfry: 2, roast: 2, bake: 2, reheat: 2, crisp: 1, crisp2: 1, pre: [1, 2], t: 1, alt_bake: 2,
  split: 0, spread: 0, plate: 0, the_plate: 0, of_plate: 0, rack: 0, in_zone: 0, fits: 0, in_dev: 0
};
const TIME = /^\d{1,3}(–\d{1,3})?$/;

const errors = [];
const warn = [];
const err = (id, msg) => errors.push(`${id}: ${msg}`);

function loadRecipes() {
  const dir = path.join(ROOT, 'src', 'recipes');
  const files = CATS.map(c => path.join(dir, (c === 'salads' ? 'salads' : c) + '.js')).filter(f => fs.existsSync(f));
  fs.readdirSync(dir).filter(f => f.endsWith('.js')).forEach(f => {
    const full = path.join(dir, f);
    if (!files.includes(full)) files.push(full);
  });
  return files.flatMap(f => require(f));
}

function text(o) { return o && typeof o.el === 'string' && typeof o.en === 'string' && o.el.trim() && o.en.trim(); }

function checkTokens(id, s) {
  const used = [];
  const re = /\{\{(\w+)(?::([^}]*))?\}\}/g;
  let m;
  while ((m = re.exec(s))) {
    const name = m[1], args = m[2] ? m[2].split(':') : [];
    const want = TOKENS[name];
    if (want === undefined) { err(id, `unknown token {{${name}}}`); continue; }
    const ok = Array.isArray(want) ? args.length >= want[0] && args.length <= want[1] : args.length === want;
    if (!ok) err(id, `token {{${m[0].slice(2, -2)}}} has ${args.length} arguments`);
    if (COOK.includes(name) || name === 'alt_bake') {
      if (!/^\d{2,3}$/.test(args[0] || '')) err(id, `bad temperature in ${m[0]}`);
      if (!TIME.test(args[1] || '')) err(id, `bad time in ${m[0]}`);
    }
    if ((name === 'crisp' || name === 'crisp2' || name === 't') && !TIME.test(args[0] || '')) err(id, `bad time in ${m[0]}`);
    if (name === 'pre' && args[1] && !COOK.includes(args[1])) err(id, `bad program in ${m[0]}`);
    used.push(name);
  }
  if (/\{\{|\}\}/.test(s.replace(re, ''))) err(id, 'unbalanced braces in a step');
  return used;
}

function totals(r) {
  const t = { nc: 0, p: 0, f: 0 };
  r.ing.forEach(([iid, q]) => {
    const g = ING[iid];
    if (!g) return;
    const k = (g.unit === 'g' || g.unit === 'ml') ? q / 100 : q;
    ['nc', 'p', 'f'].forEach(m => { if (typeof g[m] === 'number') t[m] += k * g[m]; });
  });
  return t;
}

function netCarbs(r) {
  const per = totals(r).nc / r.serv;
  return per < 2 ? Math.round(per * 10) / 10 : Math.round(per * 2) / 2;
}

/* per serving (or per piece): kcal rounded to 5, grams to 1 (or 0.1 under 2 g) */
function macros(r) {
  const t = totals(r), n = r.serv;
  const g = x => (x < 2 ? Math.round(x * 10) / 10 : Math.round(x));
  const p = t.p / n, f = t.f / n, nc = t.nc / n;
  return { kcal: Math.round((4 * p + 9 * f + 4 * nc) / 5) * 5, p: g(p), f: g(f) };
}

function photo(id) {
  const f = path.join(ROOT, 'feed', 'img', id + '.jpg');
  if (!fs.existsSync(f)) return '';
  const h = crypto.createHash('sha1').update(fs.readFileSync(f)).digest('hex').slice(0, 10);
  return `img/${id}.jpg?v=${h}`;
}

function main() {
  const checkOnly = process.argv.includes('--check');
  Object.entries(ING).forEach(([k, g]) => {
    if (!text(g)) err('ingredient ' + k, 'needs el and en names');
    if (!UNITS.includes(g.unit)) err('ingredient ' + k, 'unknown unit ' + g.unit);
    if (!AISLES.includes(g.aisle)) err('ingredient ' + k, 'unknown aisle ' + g.aisle);
    ['nc', 'p', 'f'].forEach(m => {
      if (typeof g[m] !== 'number' || g[m] < 0) err('ingredient ' + k, 'missing ' + m + ' (net carbs, protein, fat)');
    });
  });

  const recipes = loadRecipes();
  const seen = new Set();
  const usedIng = new Set();
  const out = [];
  recipes.forEach(r => {
    const id = r.id || '(no id)';
    if (!/^[a-z0-9_]{2,40}$/.test(id)) err(id, 'bad id');
    if (seen.has(id)) err(id, 'duplicate id');
    seen.add(id);
    if (BUILT_IN.includes(id)) warn.push(`${id}: replaces the built-in recipe with the same id`);
    if (!CATS.includes(r.cat)) err(id, 'unknown category ' + r.cat);
    if (!text(r.title) || !text(r.desc)) err(id, 'title and desc need el and en');
    if (!(r.time > 0) || !(r.serv > 0)) err(id, 'time and serv must be positive');
    if (r.yield && r.yield !== 'pcs') err(id, 'yield can only be "pcs"');
    if (r.rest && !text(r.rest)) err(id, 'rest needs el and en');
    if (!Array.isArray(r.ing) || !r.ing.length) err(id, 'no ingredients');
    (r.ing || []).forEach(row => {
      if (!ING[row[0]]) err(id, 'unknown ingredient ' + row[0]);
      if (typeof row[1] !== 'number' || !(row[1] > 0)) err(id, 'bad amount for ' + row[0]);
      if (row[2] && !text(row[2])) err(id, 'ingredient note needs el and en: ' + row[0]);
      usedIng.add(row[0]);
    });
    const el = (r.steps && r.steps.el) || [], en = (r.steps && r.steps.en) || [];
    if (!el.length) err(id, 'no steps');
    if (el.length !== en.length) err(id, `steps: ${el.length} in Greek, ${en.length} in English`);
    let cooks = 0;
    el.forEach((s, i) => {
      const a = checkTokens(id, s), b = checkTokens(id, en[i] || '');
      if (a.slice().sort().join() !== b.slice().sort().join()) err(id, `step ${i + 1}: tokens differ between languages`);
      cooks += a.filter(n => COOK.includes(n)).length;
    });
    if (r.air) {
      if (!Array.isArray(r.air) || !r.air.length) err(id, 'air must be a list');
      else r.air.forEach(a => {
        if (a[0] === 'crisp') { if (!TIME.test(String(a[1]))) err(id, 'air: bad crisp time'); return; }
        if (!COOK.includes(a[0]) || !(a[1] >= 40 && a[1] <= 240) || !TIME.test(String(a[2]))) err(id, 'air: bad entry ' + JSON.stringify(a));
        if (a[3] && !text(a[3])) err(id, 'air: note needs el and en');
      });
      if (!cooks) err(id, 'has air settings but no cooking tokens in the steps');
    }
    const carbs = typeof r.carbs === 'number' ? r.carbs : netCarbs(r);
    const rec = Object.assign({}, r, { carbs, mac: macros(r) });
    const img = photo(id);
    if (img) rec.img = img;
    out.push(rec);
  });

  const credits = fs.existsSync(path.join(ROOT, 'feed', 'credits.json'))
    ? JSON.parse(fs.readFileSync(path.join(ROOT, 'feed', 'credits.json'), 'utf8')) : {};
  Object.keys(credits).forEach(k => { if (!seen.has(k)) delete credits[k]; });

  warn.forEach(w => console.log('warning: ' + w));
  if (errors.length) {
    errors.forEach(e => console.error('error: ' + e));
    console.error(`\n${errors.length} error(s)`);
    process.exit(1);
  }

  const byCat = {};
  out.forEach(r => { byCat[r.cat] = (byCat[r.cat] || 0) + 1; });
  console.log(`${out.length} recipes · ` + CATS.map(c => `${c} ${byCat[c] || 0}`).join(' · '));
  console.log(`photos: ${out.filter(r => r.img).length}/${out.length}`);
  if (checkOnly) {
    out.forEach(r => console.log(`  ${String(r.mac.kcal).padStart(4)} kcal  P ${String(r.mac.p).padStart(4)}  F ${String(r.mac.f).padStart(4)}  C ${r.carbs.toString().padStart(4)}  ${r.id}${r.yield ? ' (per piece)' : ''}`));
    return;
  }

  const ing = {};
  [...usedIng].sort().forEach(k => {
    const g = ING[k];
    ing[k] = { el: g.el, en: g.en, aisle: g.aisle, unit: g.unit };
    if (g.staple) ing[k].staple = true;
  });
  const feed = {
    format: 1,
    updated: new Date().toISOString().slice(0, 10),
    count: out.length,
    ing,
    recipes: out,
    credits
  };
  fs.mkdirSync(path.join(ROOT, 'feed'), { recursive: true });
  fs.writeFileSync(path.join(ROOT, 'feed', 'recipes.json'), JSON.stringify(feed));
  console.log(`feed/recipes.json: ${(fs.statSync(path.join(ROOT, 'feed', 'recipes.json')).size / 1024).toFixed(0)} KB`);
}

/* node scripts/build.js --macros path/to/app/recipes.js
   prints {id: {carbs, mac}} for the app's built-in recipes, computed with this
   ingredient table, so the app and the feed use the same numbers. */
function builtInMacros(file) {
  global.window = {};
  require(path.resolve(file));
  const data = global.window.KETO_DATA;
  const res = {};
  data.recipes.forEach(r => {
    const miss = r.ing.map(x => x[0]).filter(i => !ING[i]);
    if (miss.length) { console.error(r.id + ': unknown ingredients ' + miss.join(', ')); process.exitCode = 1; return; }
    res[r.id] = { carbs: netCarbs(r), mac: macros(r) };
  });
  console.log(JSON.stringify(res));
}

const mi = process.argv.indexOf('--macros');
if (mi > 0) builtInMacros(process.argv[mi + 1]);
else main();
