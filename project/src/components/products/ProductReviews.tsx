import React from 'react';
import { Star } from 'lucide-react';

interface ProductReviewsProps {
  productId: string;
}

export function ProductReviews({ productId }: ProductReviewsProps) {
  // Mock reviews data - replace with actual data fetching
  const reviews = [
    {
      id: 1,
      author: 'John Doe',
      rating: 5,
      date: '2024-02-15',
      content: 'Excellent product, perfect fit for my vehicle.',
    },
  ];

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6">
      <h2 className="mb-4 text-xl font-bold text-primary">Customer Reviews</h2>
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-medium">{review.author}</span>
              <span className="text-sm text-gray-600">{review.date}</span>
            </div>
            <div className="mb-2 flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <p className="text-gray-600">{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}