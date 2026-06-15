const dishImages = {
  "Smoked Brisket Platter": "/images/Smoked%20Brisket%20Platter.jpg",
  "Wood-Fired Margherita": "/images/Wood-Fired%20Margherita.jpg",
  "Charred Korean BBQ Wings": "/images/Charred%20Korean%20BBQ%20Wings.jpg",
  "Truffle Mushroom Burger": "/images/Truffle%20Mushroom%20Burger.jpg",
  "Citrus Glazed Salmon": "/images/Citrus%20Glazed%20Salmon.jpg",
  "Salted Caramel Tart": "/images/Salted%20Caramel%20Tart.jpg"
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