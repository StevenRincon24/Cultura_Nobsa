import React from "react";
import { X } from "lucide-react";
import { Slideshow } from "./Slideshow";

export function Modal({ festival, onClose }) {
  if (!festival) return null;

  return (
    <div className="fixed inset-0 bg-opacity-10 backdrop-blur-md bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{festival.name}</h2>
          <p className="text-gray-600 mb-6">{festival.description}</p>
          <Slideshow images={festival.images} />
        </div>
      </div>
    </div>
  );
}
