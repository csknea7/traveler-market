'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import TourCard from '../components/TourCard';

const initialTours = [
  {
    id: 1,
    title: 'Island Tour',
    description: 'Explore the beautiful islands with our guided tour.',
    price: 12500,
    location: 'Hawaii',
    theme: 'Island',
    activity: 'Swimming',
    startTime: 540, // 09:00 (dakika cinsinden)
    groupSize: 10,
    image: '/images/islandd.jpg',
    feature: 'Transfer'
  },
  {
    id: 2,
    title: 'Safari',
    description: 'Experience the thrill of a safari adventure.',
    price: 15000,
    location: 'Africa',
    theme: 'Safari',
    activity:'Elephantcare',
    startTime: 600, // 10:00 (dakika cinsinden)
    groupSize: 15,
    image: '/images/safari.jpg',
    feature: 'Vegetarian Food'
  },
  // Diğer tur kartları...
];

export default function Home() {
  const [tours, setTours] = useState(initialTours);
  const [filteredTours, setFilteredTours] = useState(initialTours);

  const handleSearch = (filters) => {
    const filtered = initialTours.filter((tour) => {
      return (
        (filters.Location === '' || tour.location.toLowerCase().includes(filters.Location.toLowerCase())) &&
        (filters.Theme === '' || tour.theme.toLowerCase().includes(filters.Theme.toLowerCase())) &&
        (filters.Activity === '' || tour.activity.toLowerCase().includes(filters.Activity.toLowerCase())) &&
        (filters.Price === 0 || tour.price <= filters.Price) &&
        (filters.StartTime === 0 || tour.startTime <= filters.StartTime) && // StartTime filtresi
        (filters.GroupSize === 1 || tour.groupSize <= filters.GroupSize) // GroupSize filtresi
      );
    });
    setFilteredTours(filtered);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Trawberry Local Market</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {filteredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </div>
  );
}