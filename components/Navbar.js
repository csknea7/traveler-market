import { useState } from 'react';

export default function Navbar() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Tours');

  const categories = ['Tours', 'Tickets', 'Rent', 'Transfer'];

  const filters = {
    Tours: ['Location', 'Theme', 'Activity', 'Price', 'Start Time'],
    Tickets: ['Location', 'Theme', 'Price', 'Start Time'],
    Rent: ['Location', 'Theme', 'Price', 'Start Time'],
    Transfer: ['Location', 'Theme', 'Price', 'Start Time'],
  };

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Burger Menü */}
        <button onClick={() => setIsPopupOpen(!isPopupOpen)} className="text-primary-500">
          ☰
        </button>

        {/* Sağ Üst Menü (Favorites, Cart, Login) */}
        <div className="flex space-x-4">
          <button className="text-primary-500">Favorites</button>
          <button className="text-primary-500">Cart</button>
          <button className="text-primary-500">Login</button>
        </div>
      </div>

      {/* Filtre Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-start p-4">
          <div className="bg-white w-96 p-4 rounded-lg">
            {/* Kategoriler */}
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

            {/* Filtreler */}
            <div className="mt-4">
              <h3 className="font-bold">Filters</h3>
              {filters[selectedCategory].map((filter) => (
                <div key={filter} className="mt-2">
                  <label className="block text-sm font-medium text-gray-700">{filter}</label>
                  {filter === 'Price' || filter === 'Start Time' ? (
                    <input
                      type="number"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                      placeholder={`Enter ${filter}`}
                    />
                  ) : (
                    <input
                      type="text"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                      placeholder={`Enter ${filter}`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Reset ve Search Butonları */}
            <div className="mt-4 flex space-x-2">
              <button className="bg-gray-200 text-gray-700 p-2 rounded-md flex-1">Reset</button>
              <button className="bg-primary-500 text-white p-2 rounded-md flex-1">Search</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}