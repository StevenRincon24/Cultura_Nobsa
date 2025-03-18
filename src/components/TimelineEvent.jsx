import React from "react";
import { Calendar } from "lucide-react";

export function TimelineEvent({ date, title, image, description, onClick }) {
  return (
    <div
      className="flex flex-col items-center cursor-pointer transform transition-transform hover:scale-105"
      onClick={onClick}
    >
      <div className="relative w-48 h-48 rounded-lg overflow-hidden shadow-lg mb-2">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2">
          <div className="flex items-center text-white">
            <Calendar className="w-4 h-4 mr-1" />
            <span className="text-sm">{date}</span>
          </div>
          <h3 className="text-white text-sm font-semibold truncate">{title}</h3>
        </div>
      </div>
    </div>
  );
}
