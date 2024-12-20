export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  specifications?: Record<string, string>;
  features?: string[];
}
