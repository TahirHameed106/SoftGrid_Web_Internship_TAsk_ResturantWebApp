// src/data/menuItems.js
const BASE = import.meta.env.BASE_URL;

export const Dishesimages = {
  'Crispy Chicken Strips': `${BASE}/images/Crispy Chicken Strips.jpg`,
  'Loaded Fries': `${BASE}/images/Loaded Fries.jpg`,
  'Spicy Fish Wrap': `${BASE}/images/Spicy Fish Wrap.jpg`,
  'Smoked Brisket Platter': `${BASE}/images/Smoked Brisket Platter.jpg`,
  'BBQ Ribs Half Rack': `${BASE}/images/BBQ Ribs Half Rack.jpg`,
  'Charred Korean Wings': `${BASE}/images/Charred Korean Wings.jpg`,
    'Wood-Fired Margherita': `${BASE}/images/Wood-Fired Margherita.jpg`,
    'Ember Pepperoni': `${BASE}/images/Ember Pepperoni.jpg`,
    'Truffle Bianca': `${BASE}/images/Truffle Bianca.jpg`,
    'The Oak Classic': `${BASE}/images/The Oak Classic.jpg`,
    'Truffle Mushroom Burger': `${BASE}/images/Truffle Mushroom Burger.jpg`,
    'Crispy Chicken Burger': `${BASE}/images/Crispy Chicken Burger.jpg`,
    'Ember Lemonade': `${BASE}/images/Ember Lemonade.jpg`,
    'Mango Chili Cooler': `${BASE}/images/Mango Chili Cooler.jpg`,
    'Cold Brew Oak Blend': `${BASE}/images/Cold Brew Oak Blend.jpg`,
    'Salted Caramel Tart': `${BASE}/images/Salted Caramel Tart.jpg`,
    'Smoked Vanilla Panna Cotta': `${BASE}/images/Smoked Vanilla Panna Cotta.jpg`,
    'Warm Brownie Stack': `${BASE}/images/Warm Brownie Stack.jpg`
};

export const categories = ['All', 'Fast Food', 'BBQ', 'Pizza', 'Burgers', 'Drinks', 'Desserts'];

export const menuItems = [
  // ── Fast Food ──────────────────────────────────────────────
  {
    id: 1,
    name: 'Crispy Chicken Strips',
    description: 'Golden-fried chicken tenders with smoky chipotle dip',
    price: '8.50',
    category: 'Fast Food',
    badge: 'Best Seller',
    image: Dishesimages['Crispy Chicken Strips'] ?? fallbackImage('Crispy Chicken Strips'),
  },
  {
    id: 2,
    name: 'Loaded Fries',
    description: 'Thick-cut fries, cheddar sauce, jalapeños, and crispy bacon bits',
    price: '6.75',
    category: 'Fast Food',
    badge: null,
    image: Dishesimages['Loaded Fries'] ?? fallbackImage('Loaded Fries'),
  },
  {
    id: 3,
    name: 'Spicy Fish Wrap',
    description: 'Crispy fish fillet, sriracha slaw, avocado crema in a grilled tortilla',
    price: '9.00',
    category: 'Fast Food',
    badge: 'New',
    image: Dishesimages['Spicy Fish Wrap'] ?? fallbackImage('Spicy Fish Wrap'),
  },

  // ── BBQ ────────────────────────────────────────────────────
  {
    id: 4,
    name: 'Smoked Brisket Platter',
    description: '12-hour smoked brisket, charred onions, house BBQ glaze, coleslaw',
    price: '14.50',
    category: 'BBQ',
    badge: 'Chef\'s Pick',
    image: Dishesimages['Smoked Brisket Platter'] ?? fallbackImage('Smoked Brisket Platter'),
  },
  {
    id: 5,
    name: 'BBQ Ribs Half Rack',
    description: 'Slow-smoked pork ribs, dry-rubbed, finished with sticky glaze',
    price: '17.00',
    category: 'BBQ',
    badge: null,
    image: Dishesimages['BBQ Ribs Half Rack'] ?? fallbackImage('BBQ Ribs Half Rack'),
  },
  {
    id: 6,
    name: 'Charred Korean Wings',
    description: 'Gochujang glaze, sesame seeds, spring onion, pickled daikon',
    price: '9.50',
    category: 'BBQ',
    badge: 'Spicy',
    image: Dishesimages['Charred Korean Wings'] ?? fallbackImage('Charred Korean Wings'),
  },

  // ── Pizza ──────────────────────────────────────────────────
  {
    id: 7,
    name: 'Wood-Fired Margherita',
    description: 'San Marzano tomatoes, fior di latte, fresh basil, cold-press olive oil',
    price: '11.00',
    category: 'Pizza',
    badge: 'Classic',
    image: Dishesimages['Wood-Fired Margherita'] ?? fallbackImage('Wood-Fired Margherita'),
  },
  {
    id: 8,
    name: 'Ember Pepperoni',
    description: 'House tomato, low-moisture mozzarella, cupped pepperoni, honey drizzle',
    price: '12.50',
    category: 'Pizza',
    badge: 'Best Seller',
    image: Dishesimages['Ember Pepperoni'] ?? fallbackImage('Ember Pepperoni'),
  },
  {
    id: 9,
    name: 'Truffle Bianca',
    description: 'White base, truffle oil, wild mushrooms, parmesan, rocket',
    price: '14.00',
    category: 'Pizza',
    badge: 'Premium',
    image: Dishesimages['Truffle Bianca'] ?? fallbackImage('Truffle Bianca'),
  },

  // ── Burgers ────────────────────────────────────────────────
  {
    id: 10,
    name: 'The Oak Classic',
    description: 'Smash-patty beef, cheddar, lettuce, tomato, house burger sauce',
    price: '10.50',
    category: 'Burgers',
    badge: null,
    image: Dishesimages['The Oak Classic'] ?? fallbackImage('The Oak Classic'),
  },
  {
    id: 11,
    name: 'Truffle Mushroom Burger',
    description: 'Beef patty, truffle aioli, wild mushrooms, aged cheddar, brioche bun',
    price: '12.75',
    category: 'Burgers',
    badge: 'Chef\'s Pick',
    image: Dishesimages['Truffle Mushroom Burger'] ?? fallbackImage('Truffle Mushroom Burger'),
  },
  {
    id: 12,
    name: 'Crispy Chicken Burger',
    description: 'Fried chicken thigh, pickles, honey mustard, shredded slaw',
    price: '11.00',
    category: 'Burgers',
    badge: 'New',
    image: Dishesimages['Crispy Chicken Burger'] ?? fallbackImage('Crispy Chicken Burger'),
  },

  // ── Drinks ─────────────────────────────────────────────────
  {
    id: 13,
    name: 'Ember Lemonade',
    description: 'Freshly squeezed lemon, rosemary syrup, sparkling water, ice',
    price: '4.50',
    category: 'Drinks',
    badge: 'Signature',
    image: Dishesimages['Ember Lemonade'] ?? fallbackImage('Ember Lemonade'),
  },
  {
    id: 14,
    name: 'Mango Chili Cooler',
    description: 'Fresh mango, chili salt rim, lime juice, ginger beer',
    price: '5.25',
    category: 'Drinks',
    badge: 'Spicy',
    image: Dishesimages['Mango Chili Cooler'] ?? fallbackImage('Mango Chili Cooler'),
  },
  {
    id: 15,
    name: 'Cold Brew Oak Blend',
    description: 'House cold brew, oat milk, vanilla, a hint of smoked caramel',
    price: '5.50',
    category: 'Drinks',
    badge: null,
    image: Dishesimages['Cold Brew Oak Blend'] ?? fallbackImage('Cold Brew Oak Blend'),
  },

  // ── Desserts ───────────────────────────────────────────────
  {
    id: 16,
    name: 'Salted Caramel Tart',
    description: 'Dark chocolate shell, salted caramel, sea salt flakes, cream',
    price: '7.25',
    category: 'Desserts',
    badge: 'Best Seller',
    image: Dishesimages['Salted Caramel Tart'] ?? fallbackImage('Salted Caramel Tart'),
  },
  {
    id: 17,
    name: 'Smoked Vanilla Panna Cotta',
    description: 'Silky vanilla panna cotta with a smoked berry coulis',
    price: '6.50',
    category: 'Desserts',
    badge: 'New',
    image: Dishesimages['Smoked Vanilla Panna Cotta'] ?? fallbackImage('Smoked Vanilla Panna Cotta'),
  },
  {
    id: 18,
    name: 'Warm Brownie Stack',
    description: 'Fudge brownie, vanilla ice cream, chocolate drizzle, toasted walnuts',
    price: '7.75',
    category: 'Desserts',
    badge: null,
    image: Dishesimages['Warm Brownie Stack'] ?? fallbackImage('Warm Brownie Stack'),
  },
];