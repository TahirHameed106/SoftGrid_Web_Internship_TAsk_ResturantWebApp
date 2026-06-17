
const BASE = import.meta.env.BASE_URL;

export const dishImages = {
  "Smoked Brisket Platter": `${BASE}/images/Smoked Brisket Platter.jpg`,
  "Wood-Fired Margherita": `${BASE}/images/Wood-Fired Margherita.jpg`,
  "Charred Korean BBQ Wings": `${BASE}/images/Charred Korean BBQ Wings.jpg`,
  "Truffle Mushroom Burger": `${BASE}/images/Truffle Mushroom Burger.jpg`,
  "Citrus Glazed Salmon": `${BASE}/images/Citrus Glazed Salmon.jpg`,
  "Salted Caramel Tart": `${BASE}/images/Salted Caramel Tart.jpg`
};

const fallbackImage = (name) => {
  const seed = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return `https://picsum.photos/seed/${seed}/500/400`;
};

export const featuredDishes = [
  {
    id: 1,
    name: "Smoked Brisket Platter",
    description: "12-hour smoked brisket, charred onions, house BBQ glaze",
    price: "14.50",
    category: "BBQ",
    image: dishImages["Smoked Brisket Platter"] ?? fallbackImage("Smoked Brisket Platter")
  },
  {
    id: 2,
    name: "Wood-Fired Margherita",
    description: "San Marzano tomatoes, fresh mozzarella, basil, olive oil",
    price: "11.00",
    category: "Pizza",
    image: dishImages["Wood-Fired Margherita"] ?? fallbackImage("Wood-Fired Margherita")
  },
  {
    id: 3,
    name: "Charred Korean BBQ Wings",
    description: "Sticky gochujang glaze, sesame seeds, spring onion",
    price: "9.50",
    category: "BBQ",
    image: dishImages["Charred Korean BBQ Wings"] ?? fallbackImage("Charred Korean BBQ Wings")
  },
  {
    id: 4,
    name: "Truffle Mushroom Burger",
    description: "Beef patty, truffle aioli, wild mushrooms, aged cheddar",
    price: "12.75",
    category: "Burgers",
    image: dishImages["Truffle Mushroom Burger"] ?? fallbackImage("Truffle Mushroom Burger")
  },
  {
    id: 5,
    name: "Citrus Glazed Salmon",
    description: "Pan-seared salmon, orange-ginger glaze, charred greens",
    price: "16.00",
    category: "Fast Food",
    image: dishImages["Citrus Glazed Salmon"] ?? fallbackImage("Citrus Glazed Salmon")
  },
  {
    id: 6,
    name: "Salted Caramel Tart",
    description: "Dark chocolate shell, salted caramel, sea salt flakes",
    price: "7.25",
    category: "Desserts",
    image: dishImages["Salted Caramel Tart"] ?? fallbackImage("Salted Caramel Tart")
  }
];