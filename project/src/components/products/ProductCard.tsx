import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Button } from '../ui/Button';
import { formatPrice } from '@/lib/format';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group rounded-lg border border-gray-200 bg-white p-4 transition-shadow hover:shadow-lg">
      <Link to={`/products/${product.id}`}>
        <div className="relative mb-4 aspect-square overflow-hidden rounded-md">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <h3 className="mb-2 text-lg font-semibold text-primary">{product.name}</h3>
      </Link>
      <div className="mb-2 flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
        <span className="ml-1 text-sm text-gray-600">({product.rating})</span>
      </div>
      <div className="mb-4 text-xl font-bold text-primary">{formatPrice(product.price)}</div>
      <Button variant="secondary" className="w-full">
        Add to Cart
      </Button>
    </div>
  );
}