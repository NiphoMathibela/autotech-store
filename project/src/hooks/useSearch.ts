import { useState, useCallback } from 'react';
import { products } from '../data/products';
import { categories } from '../data/categories';
import type { Product } from '../types';

export function useSearch() {
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const searchProducts = useCallback((query: string) => {
    setIsSearching(true);
    const searchTerm = query.toLowerCase().trim();

    if (!searchTerm) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    const results = products.filter(product => {
      const category = categories.find(c => c.id === product.categoryId);
      const searchableText = `
        ${product.name.toLowerCase()}
        ${product.description.toLowerCase()}
        ${category?.name.toLowerCase() || ''}
        ${product.brand?.toLowerCase() || ''}
        ${product.partNumber?.toLowerCase() || ''}
      `;

      return searchableText.includes(searchTerm);
    });

    setSearchResults(results);
    setIsSearching(false);
  }, []);

  return {
    searchProducts,
    searchResults,
    isSearching,
  };
}
