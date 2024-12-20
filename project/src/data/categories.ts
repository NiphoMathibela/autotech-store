export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: 'engine-parts',
    name: 'Engine Parts',
    description: 'Essential components for your engine including pistons, valves, and gaskets',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'brakes',
    name: 'Brakes',
    description: 'Complete brake systems, pads, rotors, and hydraulic components',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'suspension',
    name: 'Suspension',
    description: 'Shocks, struts, and complete suspension systems',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'electrical',
    name: 'Electrical',
    description: 'Batteries, alternators, and electrical system components',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'transmission',
    name: 'Transmission',
    description: 'Manual and automatic transmission parts and fluids',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'exhaust',
    name: 'Exhaust',
    description: 'Complete exhaust systems, mufflers, and catalytic converters',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cooling',
    name: 'Cooling System',
    description: 'Radiators, water pumps, and cooling system components',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Interior and exterior accessories for your vehicle',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80',
  },
];
