import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'High Performance Brake Pads',
    description: 'Premium ceramic brake pads for optimal stopping power',
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80',
    categoryId: 'brakes',
    brand: 'StopTech',
    partNumber: 'BP-1234',
    stock: 50
  },
  {
    id: '2',
    name: 'Engine Oil Filter',
    description: 'High-quality oil filter for maximum engine protection',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80',
    categoryId: 'engine-parts',
    brand: 'Mann-Filter',
    partNumber: 'OF-5678',
    stock: 100
  },
  {
    id: '3',
    name: 'Performance Shock Absorbers',
    description: 'Gas-charged shock absorbers for improved handling',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80',
    categoryId: 'suspension',
    brand: 'Bilstein',
    partNumber: 'SA-9012',
    stock: 30
  },
  {
    id: '4',
    name: 'Premium Car Battery',
    description: 'Maintenance-free battery with extended life',
    price: 1499.99,
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80',
    categoryId: 'electrical',
    brand: 'Bosch',
    partNumber: 'BAT-3456',
    stock: 40
  },
  {
    id: '5',
    name: 'Transmission Fluid',
    description: 'Synthetic automatic transmission fluid',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80',
    categoryId: 'transmission',
    brand: 'Castrol',
    partNumber: 'TF-7890',
    stock: 75
  },
  {
    id: '6',
    name: 'Performance Exhaust System',
    description: 'Stainless steel cat-back exhaust system',
    price: 4999.99,
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80',
    categoryId: 'exhaust',
    brand: 'Borla',
    partNumber: 'EX-1234',
    stock: 15
  },
  {
    id: '7',
    name: 'Aluminum Radiator',
    description: 'High-performance aluminum radiator',
    price: 2499.99,
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cooling',
    brand: 'Mishimoto',
    partNumber: 'RAD-5678',
    stock: 20
  },
  {
    id: '8',
    name: 'LED Light Bar',
    description: 'High-intensity LED light bar for off-road use',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80',
    categoryId: 'accessories',
    brand: 'Rigid Industries',
    partNumber: 'LB-9012',
    stock: 35
  },
];