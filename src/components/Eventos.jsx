import React, { useState } from "react";
import { Modal } from "./Modal";
import { festivities } from "@/data/festivities";// Eliminé Festivity ya que no usamos TypeScript
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TimelineEvent } from "./TimelineEvent";
function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleEventClick = (festivity) => {
    setSelectedEvent(festivity);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Colombian Festivities Timeline
        </h1>

        <div className="relative overflow-x-auto">
          <div className="flex space-x-8 p-6 min-w-max">
            {months.map((month, index) => {
              const monthFestivities = festivities.filter(
                (f) => f.month === index + 1
              );

              return (
                <div
                  key={month}
                  className="flex flex-col items-center min-w-[200px]"
                >
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    {month}
                  </h2>
                  <div className="flex flex-col space-y-6">
                    {monthFestivities.map((festivity) => (
                      <TimelineEvent
                        key={festivity.id}
                        date={festivity.date}
                        title={festivity.title}
                        image={festivity.image}
                        description={festivity.description}
                        onClick={() => handleEventClick(festivity)}
                      />
                    ))}
                    {monthFestivities.length === 0 && (
                      <div className="h-48 w-48 flex items-center justify-center text-gray-400 border-2 border-dashed rounded-lg">
                        No tenemos eventos este
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center mt-4 space-x-4">
          <button
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
            onClick={() => {
              const container = document.querySelector(".overflow-x-auto");
              if (container) container.scrollLeft -= 300;
            }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
            onClick={() => {
              const container = document.querySelector(".overflow-x-auto");
              if (container) container.scrollLeft += 300;
            }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {selectedEvent && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={selectedEvent.title}
          date={selectedEvent.date}
          description={selectedEvent.description}
          image={selectedEvent.image}
        />
      )}
    </div>
  );
}

export default App;
