import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, Clock } from 'lucide-react';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#0a3042] to-[#0d4359]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      {/* Hero Content */}
      <div className="container relative mx-auto px-4 py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm text-[#64ee85]">
              <ShieldCheck className="mr-2 h-4 w-4" />
              Premium Quality Parts
            </div>
            
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Your One-Stop Shop for
              <span className="relative whitespace-nowrap">
                <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute left-0 top-full h-[0.4em] w-full fill-[#64ee85]/40" preserveAspectRatio="none">
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                </svg>
                <span className="relative"> Auto Parts</span>
              </span>
            </h1>

            <p className="text-lg text-gray-300 lg:text-xl">
              Discover our extensive collection of premium auto spares. 
              We offer quality parts, competitive prices, and expert support 
              to keep your vehicle running at its best.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-[#64ee85] text-[#0a3042] hover:bg-[#64ee85]/90">
                <Link to="/products">
                  Browse Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/categories">
                  View Categories
                </Link>
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 pt-8 sm:grid-cols-3">
              <div className="flex items-center gap-2 text-gray-300">
                <ShieldCheck className="h-5 w-5 text-[#64ee85]" />
                <span>Quality Guaranteed</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Truck className="h-5 w-5 text-[#64ee85]" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="h-5 w-5 text-[#64ee85]" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative lg:ml-auto">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-900/5 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=80"
                alt="Auto parts showcase"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0a3042]/40 to-transparent" />
            </div>
            
            {/* Stats Card */}
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-4 shadow-lg">
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-500">Trusted by</p>
                <p className="text-2xl font-bold text-[#0a3042]">10,000+</p>
                <p className="text-sm text-gray-500">Satisfied Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}