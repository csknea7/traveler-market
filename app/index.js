import { useState } from "react";
import Navbar from "../components/Navbar";
import FilterPopup from "../components/FilterPopup";

export default function Home() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div>
      <Navbar onMenuClick={() => setIsFilterOpen(true)} />
      <FilterPopup isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />

      {/* Tur Kartları */}
      <div className="p-4">
        <h1 className="text-xl font-bold">Available Tours</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {/* Örnek Kart */}
          <div className="border p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Phi Phi Island Tour</h2>
            <p>Explore the beauty of Phi Phi Islands.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
