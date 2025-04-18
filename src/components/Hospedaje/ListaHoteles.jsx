import { FaEdit, FaTrash } from "react-icons/fa";
import React, { useState } from "react";
import { useHotel } from "@/context/HotelContext";
import AgregarHotel from "./AgregarHotel"; // Asegúrate de importar el modal correctamente
import { useAuth } from "@/context/AuthContext";

export default function ListaHoteles() {
  const { hotels, deleteHotel, getHotel } = useHotel();
  const [showModal, setShowModal] = useState(false);
  const [hotelSeleccionado, setHotelSeleccionado] = useState(null);
  const { isAuthenticated } = useAuth();

  const handleEditarClick = (hotel) => {
    setHotelSeleccionado(hotel); // Guardar info del hotel seleccionado
    setShowModal(true); // Mostrar modal
  };

  return (
    <div className="grid md:grid-cols-3 gap-8 mb-16 p-5">
      {hotels.map((hotel) => (
        <div
          key={hotel._id}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="h-48 overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaVnTP9eLj9UwFGzZzwRmEGOHLR6oGHeRvGA&s"
              alt={hotel.nombre}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6">
            <h3 className="text-emerald-600 dark:text-emerald-400 text-xl font-bold mb-2">
              {hotel.name}
            </h3>
            <p className="text-gray-900 mb-4"> {hotel.description}</p>
            <p className="text-gray-900 mb-4">📍 {hotel.location}</p>
            <p className="text-gray-900 mb-4">📞 {hotel.contact}</p>
          </div>
          {isAuthenticated && (
            <div className="flex justify-center p-3 gap-5">
              <button
                className="flex items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                onClick={() => handleEditarClick(hotel)}
              >
                <FaEdit />
                Modificar
              </button>

              <button
                className="flex items-center gap-2 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
                onClick={() => {
                  deleteHotel(hotel._id);
                }}
              >
                <FaTrash />
                Eliminar
              </button>
            </div>
          )}
        </div>
      ))}

      {showModal && (
        <AgregarHotel
          onClose={() => {
            setShowModal(false);
            setHotelSeleccionado(null);
          }}
          hotelData={hotelSeleccionado} // enviar info del hotel al modal
        />
      )}
    </div>
  );
}
