export type CategoryType =
  | 'sneakers'
  | 'running'
  | 'basketball'
  | 'training'
  | 'lifestyle'
  | 'skate'
  | 'hiking'
  | 'formal'
  | 'boots'
  | 'slides'
  | 'women'
  | 'kids';

export type AudienceType = 'men' | 'women' | 'unisex' | 'kids';

export type StockStatus = 'in_stock' | 'low_stock' | 'out_of_stock';

export interface Colorway {
  name: string;
  hex: string;
  imageIndex?: number;
}

export interface ShoeSize {
  size: string; // e.g. "UK 7", "UK 8", "UK 9", "UK 10"
  available: boolean;
  stock?: number;
}

export interface Specification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  brand: string;
  name: string;
  model: string;
  category: CategoryType;
  description: string;
  images: string[];
  price: number; // in INR
  originalPrice?: number; // for demo simulated discount
  colorways: Colorway[];
  sizes: ShoeSize[];
  sku: string;
  stockStatus: StockStatus;
  specifications: Specification[];
  audience: AudienceType;
  tags: string[];
  featured: boolean;
  newArrival: boolean;
  trending?: boolean;
  heroSlide?: boolean;
  heroHeadline?: string;
  relatedProductIds: string[];
}

export interface CartItem {
  id: string; // unique item key: `${productId}-${size}-${color}`
  productId: string;
  name: string;
  brand: string;
  model: string;
  slug: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
}

export interface OrderItem {
  productId: string;
  name: string;
  brand: string;
  size: string;
  color: string;
  price: number;
  quantity: number;
  image: string;
}

export interface DemoOrder {
  orderId: string;
  createdAt: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
  customer: {
    fullName: string;
    email: string;
    phone: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    pincode: string;
  };
  status: 'confirmed' | 'processing' | 'dispatched';
}

export type SortOption =
  | 'featured'
  | 'newest'
  | 'price-asc'
  | 'price-desc'
  | 'name-asc';

export interface FilterState {
  searchQuery: string;
  category?: CategoryType | 'all';
  brands: string[];
  priceRange: [number, number];
  sizes: string[];
  colors: string[];
  audience?: AudienceType | 'all';
  newArrivalsOnly: boolean;
  featuredOnly: boolean;
  sortBy: SortOption;
}
