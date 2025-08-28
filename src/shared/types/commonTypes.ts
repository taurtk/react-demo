export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  colors: string[];
  rating: number;
  reviewCount: number;
  isNew?: boolean;
}