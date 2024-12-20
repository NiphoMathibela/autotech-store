import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Disc, Wrench, Battery, Settings, Flame, Fan, Package } from 'lucide-react';
import { categories } from '../data/categories';

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

export function Categories() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold text-[#0a3042]">Browse Categories</h1>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
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
  );
}
