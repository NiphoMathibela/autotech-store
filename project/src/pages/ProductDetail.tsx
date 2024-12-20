import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Truck, Shield, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useProduct } from '@/hooks/useProduct';
import { useCart } from '@/hooks/useCart';
import { QuantitySelector } from '@/components/ui/QuantitySelector';
import { formatPrice } from '@/lib/format';
import { categories } from '@/data/categories';

export function ProductDetail() {
  const { id } = useParams();
  const { product, isLoading } = useProduct(id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="mb-8 grid gap-8 lg:grid-cols-2">
            <div className="aspect-square rounded-lg bg-gray-200" />
            <div>
              <div className="mb-4 h-8 w-2/3 rounded bg-gray-200" />
              <div className="mb-4 h-20 rounded bg-gray-200" />
              <div className="mb-6 h-10 w-1/3 rounded bg-gray-200" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="rounded-lg bg-red-50 p-4 text-red-600">
          <h2 className="text-lg font-semibold">Product not found</h2>
          <p className="mt-2">The product you're looking for doesn't exist.</p>
          <Link to="/products" className="mt-4 inline-block text-[#64ee85] hover:underline">
            View all products
          </Link>
        </div>
      </div>
    );
  }

  const category = categories.find(c => c.id === product.categoryId);
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/products" className="mb-6 inline-flex items-center text-gray-600 hover:text-[#64ee85]">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Products
      </Link>

      <div className="mb-8 grid gap-8 lg:grid-cols-2">
        <div className="aspect-square overflow-hidden rounded-lg bg-white">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          {category && (
            <Link 
              to={`/categories/${category.id}`}
              className="mb-2 inline-block text-sm text-[#64ee85] hover:underline"
            >
              {category.name}
            </Link>
          )}
          <h1 className="mb-4 text-3xl font-bold text-[#0a3042]">{product.name}</h1>
          <p className="mb-6 text-gray-600">{product.description}</p>

          <div className="mb-6">
            <p className="mb-2 text-3xl font-bold text-[#0a3042]">{formatPrice(product.price)}</p>
            <p className="text-sm text-gray-500">Includes VAT</p>
          </div>

          {product.brand && (
            <div className="mb-6">
              <p className="text-sm text-gray-500">Brand</p>
              <p className="font-medium">{product.brand}</p>
            </div>
          )}

          {product.partNumber && (
            <div className="mb-6">
              <p className="text-sm text-gray-500">Part Number</p>
              <p className="font-medium">{product.partNumber}</p>
            </div>
          )}

          <div className="mb-6">
            <label className="mb-2 block font-medium">Quantity</label>
            <QuantitySelector
              quantity={quantity}
              onChange={setQuantity}
              min={1}
              max={product.stock}
            />
            <p className="mt-2 text-sm text-gray-500">
              {product.stock} units available
            </p>
          </div>

          <Button
            onClick={handleAddToCart}
            className="w-full bg-[#64ee85] text-white hover:bg-[#50c76d]"
            disabled={product.stock === 0}
          >
            {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
          </Button>

          <div className="mt-6 space-y-4 rounded-lg border bg-white p-4">
            <div className="flex items-center gap-3">
              <Truck className="h-5 w-5 text-gray-400" />
              <div>
                <p className="font-medium">Free Delivery</p>
                <p className="text-sm text-gray-500">For orders over R1,000</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-gray-400" />
              <div>
                <p className="font-medium">1 Year Warranty</p>
                <p className="text-sm text-gray-500">Standard manufacturer warranty</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}