'use client';

import { useState } from 'react';

export default function Navbar({ onSearch }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Tours');
  const [filters, setFilters] = useState({
    Location: '',
    Theme: '',
    Activity: '',
    Vehicle: '',
    Features: '',
    Price: 0,
    StartTime: 0,
    GroupSize: 1,
  });
  const [isLocationSearchVisible, setIsLocationSearchVisible] = useState(false);

  const categories = ['Tours'];
  const maxPrice = 20000;
  const maxStartTime = 1440;
  const maxGroupSize = 50;

  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  const handleSearch = () => {
    onSearch(filters);
    setIsPopupOpen(false);
  };

  const handleReset = () => {
    setFilters({
      Location: '',
      Theme: '',
      Activity: '',
      Vehicle: '',
      Features: '',
      Price: 0,
      StartTime: 0,
      GroupSize: 1,
    });
  };

  const formatStartTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
  };

  // Theme buttons
  const themeButtons = ['Island Tour', 'Land Tour', 'Safari'].map((theme) => (
    <button
      key={theme}
      onClick={() => handleFilterChange('Theme', theme)}
      className={`flex-1 p-2 text-sm ${
        filters.Theme === theme 
        ? 'bg-primary-500 text-white' 
        : 'bg-gray-100 hover:bg-gray-200'
      } rounded-md transition-colors`}
    >
      {theme}
    </button>
  ));

  // Activity buttons
  const activityButtons = ['Swimming', 'Running', 'ElephantCare'].map((activity) => (
    <button
      key={activity}
      onClick={() => handleFilterChange('Activity', activity)}
      className={`flex-1 p-2 text-sm ${
        filters.Activity === activity 
        ? 'bg-primary-500 text-white' 
        : 'bg-gray-100 hover:bg-gray-200'
      } rounded-md transition-colors`}
    >
      {activity}
    </button>
  ));

  // Vehicle buttons
  const vehicleButtons = ['Yacht', 'Speedboat', 'Safari'].map((vehicle) => (
    <button
      key={vehicle}
      onClick={() => handleFilterChange('Vehicle', vehicle)}
      className={`flex-1 p-2 text-sm ${
        filters.Vehicle === vehicle 
        ? 'bg-primary-500 text-white' 
        : 'bg-gray-100 hover:bg-gray-200'
      } rounded-md transition-colors`}
    >
      {vehicle}
    </button>
  ));

  // Features buttons
  const featuresButtons = ['Transfer', 'Halal Food', 'Vegetarian Food'].map((feature) => (
    <button
      key={feature}
      onClick={() => handleFilterChange('Features', feature)}
      className={`flex-1 p-2 text-sm ${
        filters.Features === feature 
        ? 'bg-primary-500 text-white' 
        : 'bg-gray-100 hover:bg-gray-200'
      } rounded-md transition-colors`}
    >
      {feature}
    </button>
  ));

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <button onClick={() => setIsPopupOpen(!isPopupOpen)} className="text-primary-500">
          ☰
        </button>
        <div className="flex space-x-4">
          <button className="text-primary-500">Favorites</button>
          <button className="text-primary-500">Cart</button>
          <button className="text-primary-500">Login</button>
        </div>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-start p-4">
          <div className="bg-white w-96 p-4 rounded-lg relative">
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            <div className="flex flex-col space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`p-2 ${
                    selectedCategory === category ? 'bg-primary-500 text-white' : 'bg-gray-200'
                  } rounded-md`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="mt-4">
              <h3 className="font-bold">Filters</h3>

              <div className="mt-2">
                {!isLocationSearchVisible ? (
                  <button
                    onClick={() => setIsLocationSearchVisible(true)}
                    className="w-full p-2 bg-primary-500 text-white rounded-md text-left"
                  >
                    Where you wanna visit?
                  </button>
                ) : (
                  <input
                    type="text"
                    value={filters.Location}
                    onChange={(e) => handleFilterChange('Location', e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter location"
                    autoFocus
                  />
                )}
              </div>

              {/* Theme Buttons */}
              <div className="mt-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
                <div className="flex gap-2">{themeButtons}</div>
              </div>

              {/* Activity Buttons */}
              <div className="mt-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Activity</label>
                <div className="flex gap-2">{activityButtons}</div>
              </div>

              {/* Vehicle Buttons */}
              <div className="mt-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle</label>
                <div className="flex gap-2">{vehicleButtons}</div>
              </div>

              {/* Features Buttons */}
              <div className="mt-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Features</label>
                <div className="flex gap-2">{featuresButtons}</div>
              </div>

              {/* Other Filters */}
              {['Price', 'StartTime', 'GroupSize'].map((filter) => (
                <div key={filter} className="mt-2">
                  <label className="block text-sm font-medium text-gray-700">
                    {filter}{' '}
                    {filter === 'Price' && `(${filters.Price})`}
                    {filter === 'StartTime' && `(${formatStartTime(filters.StartTime)})`}
                    {filter === 'GroupSize' && `(${filters.GroupSize})`}
                  </label>
                  {filter === 'Price' ? (
                    <input
                      type="range"
                      min="0"
                      max={maxPrice}
                      value={filters.Price}
                      onChange={(e) => handleFilterChange('Price', Number(e.target.value))}
                      className="w-full mt-2"
                    />
                  ) : filter === 'StartTime' ? (
                    <input
                      type="range"
                      min="0"
                      max={maxStartTime}
                      value={filters.StartTime}
                      onChange={(e) => handleFilterChange('StartTime', Number(e.target.value))}
                      className="w-full mt-2"
                    />
                  ) : filter === 'GroupSize' ? (
                    <input
                      type="range"
                      min="1"
                      max={maxGroupSize}
                      value={filters.GroupSize}
                      onChange={(e) => handleFilterChange('GroupSize', Number(e.target.value))}
                      className="w-full mt-2"
                    />
                  ) : (
                    <input
                      type="text"
                      value={filters[filter]}
                      onChange={(e) => handleFilterChange(filter, e.target.value)}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                      placeholder={`Enter ${filter}`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 flex space-x-2">
              <button onClick={handleReset} className="bg-gray-200 text-gray-700 p-2 rounded-md flex-1">
                Reset
              </button>
              <button onClick={handleSearch} className="bg-primary-500 text-white p-2 rounded-md flex-1">
                Search
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
