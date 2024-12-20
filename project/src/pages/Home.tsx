import React from 'react';
import { Hero } from '../components/home/Hero';
import { FeaturedCategories } from '../components/home/FeaturedCategories';
import { FeaturedProducts } from '../components/home/FeaturedProducts';

export function Home() {
  return (
    <div className="bg-gray-50">
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
    </div>
  );
}
