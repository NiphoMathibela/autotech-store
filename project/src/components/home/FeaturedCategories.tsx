import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Gauge, Battery, Disc, Settings, Filter } from 'lucide-react';

const categories = [
  { id: 'engine', name: 'Engine Parts', icon: Car, description: 'Complete engine parts and components' },
  { id: 'performance', name: 'Performance', icon: Gauge, description: 'Performance upgrades and tuning parts' },
  { id: 'electrical', name: 'Electrical', icon: Battery, description: 'Batteries, alternators, and electrical components' },
  { id: 'brakes', name: 'Brakes', icon: Disc, description: 'Brake pads, rotors, and brake systems' },
  { id: 'transmission', name: 'Transmission', icon: Settings, description: 'Transmission and drivetrain components' },
  { id: 'filters', name: 'Filters', icon: Filter, description: 'Air, oil, and fuel filters' },
];

export function FeaturedCategories() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="mb-8 text-3xl font-bold text-primary">Shop by Category</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(({ id, name, icon: Icon, description }) => (
            <Link
              key={id}
              to={`/category/${id}`}
              className="group rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-primary">{name}</h3>
              <p className="text-gray-600">{description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}