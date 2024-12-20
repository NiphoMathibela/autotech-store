import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ProductCard } from '../components/products/ProductCard';
import { useSearch } from '../hooks/useSearch';
import { Search, ChevronRight } from 'lucide-react';

export function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const { searchProducts, searchResults, isSearching } = useSearch();

  React.useEffect(() => {
    searchProducts(query);
  }, [query, searchProducts]);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center text-sm text-gray-600">
        <Link to="/" className="hover:text-[#64ee85]">Home</Link>
        <ChevronRight className="mx-2 h-4 w-4" />
        <span className="text-gray-900">Search Results</span>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#0a3042]">
          Search Results for "{query}"
        </h1>
        <p className="mt-2 text-gray-600">
          Found {searchResults.length} products matching your search
        </p>
      </div>

      {isSearching ? (
        <div className="flex items-center justify-center py-12">
          <Search className="h-6 w-6 animate-spin text-[#64ee85]" />
          <span className="ml-2 text-gray-600">Searching...</span>
        </div>
      ) : searchResults.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {searchResults.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-lg bg-gray-50 p-8 text-center">
          <p className="text-gray-600">No products found matching your search.</p>
          <div className="mt-4 space-x-4">
            <Link to="/products" className="text-[#64ee85] hover:underline">
              View all products
            </Link>
            <Link to="/categories" className="text-[#64ee85] hover:underline">
              Browse categories
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
