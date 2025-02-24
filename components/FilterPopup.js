import { useState } from "react";

export default function FilterPopup({ isOpen, onClose }) {
  const categories = ["Tours", "Tickets", "Rent", "Transfer"];
  const [selectedCategory, setSelectedCategory] = useState("Tours");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-11/12 max-w-md">
        <h2 className="text-lg font-bold">Filter</h2>
        <button onClick={onClose} className="absolute top-2 right-2">✖</button>

        {/* Kategoriler */}
        <div className="flex gap-2 my-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg ${
                selectedCategory === category ? "bg-primary-500 text-white" : "bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Filtre Seçenekleri */}
        {selectedCategory === "Tours" && (
          <div>
            <h3 className="text-md font-semibold">Theme</h3>
            <div className="flex gap-2 my-2">
              <button className="bg-gray-200 px-3 py-1 rounded">Island Tour</button>
              <button className="bg-primary-500 text-white px-3 py-1 rounded">Land Tour</button>
            </div>

            <h3 className="text-md font-semibold">Activity</h3>
            <div className="flex gap-2 my-2">
              <button className="bg-gray-200 px-3 py-1 rounded">Swimming</button>
              <button className="bg-primary-500 text-white px-3 py-1 rounded">Elephant Care</button>
            </div>

            <button className="w-full bg-primary-600 text-white py-2 rounded mt-4">
              Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
