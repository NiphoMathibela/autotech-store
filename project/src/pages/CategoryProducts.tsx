import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../components/products/ProductCard';
import { useProducts } from '../hooks/useProducts';
import { categories } from '../data/categories';

export function CategoryProducts() {
  const { categoryId } = useParams();
  const { products, isLoading } = useProducts({ categoryId });
  const category = categories.find(c => c.id === categoryId);

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-red-600">Category not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#0a3042]">{category.name}</h1>
        <p className="mt-2 text-gray-600">{category.description}</p>
      </div>

      {isLoading ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-[300px] animate-pulse rounded-lg bg-gray-200" />
          ))}
        </div>
      ) : (
        <>
          {products.length === 0 ? (
            <p className="text-gray-500">No products found in this category.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
