export type Product = {
  id: string;
  handle: string;
  title: string;
  description: string | null;
  vendor: string | null;
  category: string;
  type: string | null;
  tags: string[];
  price: number;
  compare_at_price: number | null;
  image_url: string | null;
  images: string[];
  rating: number;
  stock: number;
  in_stock: boolean;
  featured: boolean;
  created_at: string;
  updated_at: string;
};

export type CartItem = {
  id: string;
  handle: string;
  title: string;
  price: number;
  image_url: string | null;
  quantity: number;
  stock: number;
};

export const CATEGORIES = [
  { label: 'All', value: 'all' },
  { label: 'Home', value: 'Home' },
  { label: 'Tech', value: 'Tech' },
  { label: 'Kitchen', value: 'Kitchen' },
  { label: 'Personal Care', value: 'Personal Care' },
] as const;

export function categoryFromDb(category: string): string {
  if (category === 'Home') return 'Home';
  if (category === 'Tech') return 'Tech';
  if (category === 'Kitchen') return 'Kitchen';
  if (category === 'Personal Care') return 'Personal Care';
  return 'Home';
}
