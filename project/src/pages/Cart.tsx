import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';
import { CartItem } from '@/components/cart/CartItem';
import { CartSummary } from '@/components/cart/CartSummary';
import { ArrowLeft } from 'lucide-react';

export function Cart() {
  const { items } = useCart();

  if (items.length === 0) {
    return (
      <div className="container py-8">
        <div className="rounded-lg border bg-white p-8 text-center">
          <h1 className="mb-4 text-2xl font-bold">Your Cart is Empty</h1>
          <p className="mb-6 text-gray-600">Looks like you haven't added any items to your cart yet.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80"
          >
            <ArrowLeft className="h-4 w-4" />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <h1 className="mb-8 text-2xl font-bold">Shopping Cart</h1>
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {items.map((item) => (
              <CartItem
                key={item.product.id}
                product={item.product}
                quantity={item.quantity}
              />
            ))}
          </div>
        </div>
        <div>
          <CartSummary />
        </div>
      </div>
    </div>
  );
}
