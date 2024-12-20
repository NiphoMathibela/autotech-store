import { useState, useEffect } from 'react';
import { products } from '@/data/products';
import type { Product } from '@/types';

export function useProduct(id: string | undefined) {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500));
        const foundProduct = products.find(p => p.id === id) || null;
        setProduct(foundProduct);
      } finally {
        setIsLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  return { product, isLoading };
}