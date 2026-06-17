// src/data/aboutData.js
const BASE = import.meta.env.BASE_URL;

export const stats = [
  { id: 1, value: 12,   suffix: '+', label: 'Years of Service' },
  { id: 2, value: 84000, suffix: '+', label: 'Guests Served' },
  { id: 3, value: 6,   suffix: '',  label: 'Awards Won' },
  { id: 4, value: 40,  suffix: '+', label: 'Menu Items' },
];

export const team = [
  {
    id: 1,
    name: 'Tahir Hameed',
    role: 'Executive Chef & Co-Founder',
    bio: 'Trained in Lyon, Tahir brings two Michelin-star experience back home to fire-cooked comfort food.',
    avatar: `${BASE}images/teams/tahir.jpg`,
  },
  {
    id: 2,
    name: 'Sarah Syed',
    role: 'Head Pastry Chef',
    bio: 'Sarah\'s desserts are edible art.',
    avatar: `${BASE}images/teams/sarah.jpg`,
  },
  {
    id: 3,
    name: 'Hamzi Khan',
    role: 'Pit Master & BBQ Lead',
    bio: 'Hamzi has been smoking meats for 15 years.',
    avatar: `${BASE}images/teams/hamzi.jpg`,
  },
  {
    id: 4,
    name: 'Javaria Khan',
    role: 'Restaurant Manager',
    bio: 'Javaria shapes the guest experience.',
    avatar: `${BASE}images/teams/javaria.jpg`,
  },
];



export const galleryImages = [
  {
    id: 1,
    src: `${BASE}images/Resturent/dining-room.jpg`,
    alt: 'Dining room interior',
  },
  {
    id: 2,
    src: `${BASE}images/Resturent/kitchen-fire.jpg`,
    alt: 'Open kitchen with live fire',
  },
  {
    id: 3,
    src: `${BASE}images/Resturent/brisket-platter.jpg`,
    alt: 'Signature brisket platter',
  },
  {
    id: 4,
    src: `${BASE}images/Resturent/terrace.jpg`,
    alt: 'Outdoor terrace seating',
  },
  {
    id: 5,
    src: `${BASE}images/Resturent/pizza.jpg`,
    alt: 'Wood-fired pizza',
  },
  {
    id: 6,
    src: `${BASE}images/Resturent/chef-oven.jpg`,
    alt: 'Chef at the wood oven',
  },
];