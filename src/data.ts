import { Dish, Testimonial } from './types';

export const DISHES: Dish[] = [
  {
    id: '1',
    name: 'Fiery Naga Wings',
    description: 'Crispy wings tossed in authentic Naga ghost pepper sauce. Not for the faint-hearted.',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&q=80&w=800',
    category: 'starters',
    spiceLevel: 3,
    isVeg: false,
    isChefSpecial: true,
    ingredients: ['Chicken wings', 'Ghost pepper', 'Garlic', 'Honey'],
    allergens: ['Gluten'],
    coolingSides: ['Ranch dip', 'Celery sticks']
  },
  {
    id: '2',
    name: 'Paneer Tikka Masala',
    description: 'Soft paneer cubes in a rich, creamy tomato gravy with a balanced spice kick.',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=800',
    category: 'main',
    spiceLevel: 1,
    isVeg: true,
    isMostLoved: true,
    ingredients: ['Paneer', 'Tomato', 'Cream', 'Garam Masala'],
    allergens: ['Dairy'],
    coolingSides: ['Butter Naan', 'Sweet Lassi']
  },
  {
    id: '3',
    name: 'Vindaloo Inferno',
    description: 'The ultimate spicy challenge. Tender lamb slow-cooked in a vinegar-based chili paste.',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800',
    category: 'main',
    spiceLevel: 4,
    isVeg: false,
    ingredients: ['Lamb', 'Red chilies', 'Vinegar', 'Ginger'],
    allergens: [],
    coolingSides: ['Cucumber Raita', 'Steamed Rice']
  },
  {
    id: '4',
    name: 'Mango Chili Sorbet',
    description: 'Sweet Alphonso mangoes with a surprising hint of bird\'s eye chili.',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1560508180-03f285f67ded?auto=format&fit=crop&q=80&w=800',
    category: 'desserts',
    spiceLevel: 1,
    isVeg: true,
    ingredients: ['Mango', 'Chili flakes', 'Sugar', 'Lime'],
    allergens: [],
  },
  {
    id: '5',
    name: 'Spiced Guava Cooler',
    description: 'Fresh guava juice with black salt and a rim of red chili powder.',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&q=80&w=800',
    category: 'drinks',
    spiceLevel: 1,
    isVeg: true,
    ingredients: ['Guava', 'Black salt', 'Chili powder', 'Mint'],
    allergens: [],
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Food Critic',
    content: 'The Naga Wings are a revelation. The heat is intense but the flavor profile is incredibly deep. Truly authentic!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: '2',
    name: 'Marcus Chen',
    role: 'Spice Enthusiast',
    content: 'Finally, a place that actually understands what "Extreme" spice means. The Vindaloo Inferno is a masterpiece.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  }
];
