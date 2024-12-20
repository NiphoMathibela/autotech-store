import React from 'react';

interface ProductSpecificationsProps {
  specifications: Record<string, string>;
}

export function ProductSpecifications({ specifications }: ProductSpecificationsProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6">
      <h2 className="mb-4 text-xl font-bold text-primary">Specifications</h2>
      <dl className="space-y-4">
        {Object.entries(specifications).map(([key, value]) => (
          <div key={key}>
            <dt className="font-medium text-gray-600">{key}</dt>
            <dd className="mt-1">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}