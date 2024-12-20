import React from 'react';
import { Shield, Users, Target, Award } from 'lucide-react';

export function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold text-[#0a3042]">About AutoTech Spares</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Your trusted partner in automotive excellence. We're committed to providing quality parts
          and exceptional service to keep your vehicle running at its best.
        </p>
      </div>

      {/* Values Section */}
      <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <Shield className="mb-4 h-8 w-8 text-[#64ee85]" />
          <h3 className="mb-2 text-xl font-semibold">Quality Assurance</h3>
          <p className="text-gray-600">
            We source only the highest quality parts from trusted manufacturers and suppliers.
          </p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <Users className="mb-4 h-8 w-8 text-[#64ee85]" />
          <h3 className="mb-2 text-xl font-semibold">Customer First</h3>
          <p className="text-gray-600">
            Our customers are at the heart of everything we do, providing exceptional service.
          </p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <Target className="mb-4 h-8 w-8 text-[#64ee85]" />
          <h3 className="mb-2 text-xl font-semibold">Expertise</h3>
          <p className="text-gray-600">
            Our team of experts is here to help you find the right parts for your vehicle.
          </p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <Award className="mb-4 h-8 w-8 text-[#64ee85]" />
          <h3 className="mb-2 text-xl font-semibold">Reliability</h3>
          <p className="text-gray-600">
            Count on us for reliable parts and timely delivery, every time.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="mb-16 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 text-3xl font-bold text-[#0a3042]">Our Story</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Founded in 2020, AutoTech Spares was born from a passion for automotive excellence
              and a vision to make quality auto parts more accessible to South African vehicle owners.
            </p>
            <p>
              What started as a small local operation has grown into a trusted name in the automotive
              parts industry, serving thousands of satisfied customers across the country.
            </p>
            <p>
              Our commitment to quality, competitive pricing, and exceptional customer service has
              made us a preferred choice for both individual car owners and professional mechanics.
            </p>
          </div>
        </div>
        <div className="relative rounded-lg bg-[#0a3042] p-8 text-white">
          <h2 className="mb-4 text-3xl font-bold">Why Choose Us?</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="mr-2 text-[#64ee85]">•</span>
              Extensive selection of quality auto parts
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-[#64ee85]">•</span>
              Competitive pricing and regular promotions
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-[#64ee85]">•</span>
              Expert technical support and advice
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-[#64ee85]">•</span>
              Fast and reliable nationwide delivery
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-[#64ee85]">•</span>
              Hassle-free returns and warranty
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
