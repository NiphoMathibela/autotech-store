import React, { useState } from 'react';

interface ProductImageGalleryProps {
  images: string[];
}

export function ProductImageGallery({ images }: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div>
      <div className="mb-4 aspect-square overflow-hidden rounded-lg">
        <img
          src={selectedImage}
          alt="Product"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            className={`aspect-square overflow-hidden rounded-lg border-2 ${
              selectedImage === image ? 'border-primary' : 'border-transparent'
            }`}
            onClick={() => setSelectedImage(image)}
          >
            <img src={image} alt={`Product ${index + 1}`} className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}