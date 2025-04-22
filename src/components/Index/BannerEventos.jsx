import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { upcomingEvents } from "@/data/data";

const EventBanner = () => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const currentEvent = upcomingEvents[currentEventIndex];

  const nextEvent = () => {
    setCurrentEventIndex((prevIndex) =>
      prevIndex === upcomingEvents.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevEvent = () => {
    setCurrentEventIndex((prevIndex) =>
      prevIndex === 0 ? upcomingEvents.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-red-500">
      <div className="container mx-auto sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Festividades y Eventos
          </h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="h-64 md:h-96 overflow-hidden">
                <img
                  src={currentEvent.imageUrl}
                  alt={currentEvent.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6 md:p-8">
                <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm mb-4">
                  {currentEvent.date}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  {currentEvent.title}
                </h3>
                <p className="text-white/90 mb-6">{currentEvent.description}</p>
                <a
                  href="#eventos"
                  className="inline-block bg-white text-red-600 font-bold py-2 px-4 rounded-full hover:bg-red-100 transition-colors"
                >
                  Ver más eventos
                </a>
              </div>
            </div>
          </div>

          <button
            onClick={prevEvent}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-2 rounded-full transition-colors"
            aria-label="Evento anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextEvent}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-2 rounded-full transition-colors"
            aria-label="Evento siguiente"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-4 space-x-2">
            {upcomingEvents.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentEventIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentEventIndex
                    ? "bg-white"
                    : "bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Ir al evento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventBanner;
