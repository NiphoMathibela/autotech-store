import React from 'react';
import { Trash2 } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { formatPrice } from '@/lib/format';
import { QuantitySelector } from '@/components/ui/QuantitySelector';
import type { Product } from '@/types';

interface CartItemProps {
  product: Product;
  quantity: number;
}

export function CartItem({ product, quantity }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center gap-4 rounded-lg border bg-white p-4">
      <img
        src={product.image}
        alt={product.name}
        className="h-24 w-24 rounded-md object-cover"
      />
      <div className="flex-grow">
        <h3 className="font-medium">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.description}</p>
        <div className="mt-2 flex items-center gap-4">
          <QuantitySelector
            quantity={quantity}
            onChange={(newQuantity) => updateQuantity(product.id, newQuantity)}
            max={product.stock || 99}
          />
          <button
            onClick={() => removeFromCart(product.id)}
            className="text-red-600 hover:text-red-700"
            aria-label="Remove item"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="text-right">
        <p className="font-medium">{formatPrice(product.price * quantity)}</p>
        <p className="text-sm text-gray-500">
          {quantity} × {formatPrice(product.price)}
        </p>
      </div>
    </div>
  );
}
