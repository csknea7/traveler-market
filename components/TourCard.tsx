import React from 'react';

export default function TourCard({ tour }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      {/* Tour Image */}
      <div className="w-full h-48 bg-gray-200 rounded-md overflow-hidden mb-4">
        <img
          src={tour.image}  // Use the dynamic image path from the 'tour' object
          alt={tour.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Tour Title */}
      <h2 className="text-xl font-bold">{tour.title}</h2>
      <p className="text-gray-600">{tour.description}</p>
      <div className="mt-2">
        <span className="text-primary-500 font-bold">${tour.price}</span>
      </div>
    </div>
  );
}
