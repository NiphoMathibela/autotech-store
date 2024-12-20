import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

export function Header() {
  const { items } = useCart();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-[#0a3042]">
            AutoTech Spares
          </Link>
          
          <div className="hidden flex-1 items-center justify-center px-8 lg:flex">
            <form onSubmit={handleSearch} className="relative w-full max-w-lg">
              <input
                type="text"
                placeholder="Search for parts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-md border border-gray-200 py-2 pl-4 pr-10 focus:border-[#64ee85] focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-3 top-2.5 text-gray-400 hover:text-[#64ee85]"
              >
                <Search className="h-5 w-5" />
              </button>
            </form>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/categories" className="font-medium text-gray-600 hover:text-[#64ee85]">
              Categories
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#64ee85] text-xs font-bold text-[#0a3042]">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}