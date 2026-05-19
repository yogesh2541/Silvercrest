export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'Sofas' | 'Chairs' | 'Beds' | 'Dining' | 'Wardrobes' | 'Office' | 'Decor';
  tags?: string[];
  imageBadges?: string[];
  description: string;
  deliveryTime: string;
  rating: number;
  reviews: number;
  featured?: boolean;
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}
