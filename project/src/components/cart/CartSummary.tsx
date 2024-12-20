import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/Button';
import { formatPrice } from '@/lib/format';

export function CartSummary() {
  const { items } = useCart();

  const subtotal = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  // For South Africa, VAT is 15%
  const vat = subtotal * 0.15;
  const total = subtotal + vat;

  return (
    <div className="rounded-lg border bg-white p-6">
      <h2 className="mb-4 text-lg font-semibold">Order Summary</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>VAT (15%)</span>
          <span>{formatPrice(vat)}</span>
        </div>
        <div className="border-t pt-2 mt-2">
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
        </div>
      </div>
      <Button
        asChild
        className="mt-6 w-full"
        disabled={items.length === 0}
      >
        <Link to="/checkout">
          Proceed to Checkout
        </Link>
      </Button>
    </div>
  );
}
