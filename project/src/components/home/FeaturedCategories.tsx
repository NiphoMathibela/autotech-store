import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Disc, Wrench, Battery, Settings, Flame, Fan, Package, ArrowRight } from 'lucide-react';
import { categories } from '@/data/categories';

// Map category IDs to icons
const categoryIcons = {
  'engine-parts': Car,
  'brakes': Disc,
  'suspension': Wrench,
  'electrical': Battery,
  'transmission': Settings,
  'exhaust': Flame,
  'cooling': Fan,
  'accessories': Package,
};

export function FeaturedCategories() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-[#0a3042]">Shop by Category</h2>
          <Link 
            to="/categories" 
            className="flex items-center text-[#64ee85] hover:underline"
          >
            View all categories
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.slice(0, 6).map((category) => {
            const Icon = categoryIcons[category.id] || Package;
            return (
              <Link
                key={category.id}
                to={`/categories/${category.id}`}
                className="group rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#64ee85]/10 text-[#64ee85] group-hover:bg-[#64ee85] group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#0a3042]">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}