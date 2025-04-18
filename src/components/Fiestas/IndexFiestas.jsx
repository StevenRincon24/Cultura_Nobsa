import React, { useState } from "react";
import { Timeline } from "./Timeline";
import { Modal } from "./Modal";
import { festivals } from "@/data/festivals";
import { ChevronDown } from "lucide-react";

function IndexFiestas() {
  const [selectedFestival, setSelectedFestival] = useState(null);
  const [year, setYear] = useState(2024);
  const [zoom, setZoom] = useState(0);

  const handleSelectFestival = (festivalId) => {
    const festival = festivals.find((f) => f.id === festivalId);
    setSelectedFestival(festival);
  };

  const years = [2024, 2025, 2026];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Nobsa Festivals Timeline
            </h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <select
                  value={year}
                  onChange={(e) => setYear(Number(e.target.value))}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {years.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Zoom:</span>
                <input
                  type="range"
                  min="0"
                  max="2"
                  step="0.1"
                  value={zoom}
                  onChange={(e) => setZoom(Number(e.target.value))}
                  className="w-32"
                />
              </div>
            </div>
          </div>

          <Timeline
            zoom={zoom}
            year={year}
            onSelectFestival={handleSelectFestival}
          />
        </div>
      </div>

      <Modal
        festival={selectedFestival}
        onClose={() => setSelectedFestival(null)}
      />
    </div>
  );
}

export default IndexFiestas;
