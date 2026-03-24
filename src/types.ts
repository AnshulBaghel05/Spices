export type SpiceLevel = 0 | 1 | 2 | 3 | 4; // 0: Mild, 1: Medium, 2: Hot, 3: Extreme, 4: Fire

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'starters' | 'main' | 'desserts' | 'drinks';
  spiceLevel: SpiceLevel;
  isVeg: boolean;
  isChefSpecial?: boolean;
  isMostLoved?: boolean;
  ingredients: string[];
  allergens: string[];
  coolingSides?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}
