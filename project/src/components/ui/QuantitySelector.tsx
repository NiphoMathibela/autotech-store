import React from 'react';
import { Minus, Plus } from 'lucide-react';
import { Button } from './Button';

interface QuantitySelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
  max?: number;
}

export function QuantitySelector({ quantity, onChange, max }: QuantitySelectorProps) {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onChange(Math.max(1, quantity - 1))}
        disabled={quantity <= 1}
      >
        <Minus className="h-4 w-4" />
      </Button>
      <input
        type="number"
        value={quantity}
        onChange={(e) => {
          const value = parseInt(e.target.value);
          if (!isNaN(value) && value >= 1 && (!max || value <= max)) {
            onChange(value);
          }
        }}
        className="w-16 rounded-md border border-gray-300 px-3 py-1 text-center"
      />
      <Button
        variant="outline"
        size="sm"
        onClick={() => onChange(Math.min(max || Infinity, quantity + 1))}
        disabled={max ? quantity >= max : false}
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}