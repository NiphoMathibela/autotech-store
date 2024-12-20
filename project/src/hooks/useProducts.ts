import { useState, useEffect } from 'react';
import { products as mockProducts } from '@/data/products';
import type { Product } from '@/types';

interface UseProductsOptions {
  limit?: number;
  categoryId?: string;
}

export function useProducts(options: UseProductsOptions = {}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 500));
        
        let filteredProducts = [...mockProducts];
        
        if (options.categoryId) {
          filteredProducts = filteredProducts.filter(p => p.categoryId === options.categoryId);
        }
        
        if (options.limit) {
          filteredProducts = filteredProducts.slice(0, options.limit);
        }
        
        setProducts(filteredProducts);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, [options.categoryId, options.limit]);

  return { products, isLoading };
}