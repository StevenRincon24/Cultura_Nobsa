import { FaEdit, FaTrash } from "react-icons/fa";
import React, { useState } from "react";
import { useHotel } from "@/context/HotelContext";
import AgregarHotel from "./AgregarHotel"; // Asegúrate de importar el modal correctamente
import { useAuth } from "@/context/AuthContext";
import ConfirmModal from "./ConfirmarModal";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, Check } from "lucide-react";

export default function ListaHoteles() {
  const { hotels, deleteHotel, getHotel } = useHotel();
  const [showModal, setShowModal] = useState(false);
  const [hotelSeleccionado, setHotelSeleccionado] = useState(null);
  const { isAuthenticated } = useAuth();
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [hotelAEliminar, setHotelAEliminar] = useState(null);

  const handleEditarClick = (hotel) => {
    setHotelSeleccionado(hotel); // Guardar info del hotel seleccionado
    setShowModal(true); // Mostrar modal
  };

  return (
    <div>
      <section className=" bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {hotels.map((hotel) => (
              <motion.div
                key={hotel._id}
                className="bg-white border border-gray-300 rounded-lg shadow-2xl overflow-hidden h-full"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={
                      hotel.image
                        ? `http://localhost:3001${hotel.image}`
                        : "/images/Hoteles/hotel.jpg"
                    }
                    alt={hotel.name}
                    className="w-full h-full object-cover object-center block"
                  />
                </div>

                <div className="space-y-3 px-6  p-2">
                  <span
                    className={`inline-block text-sm font-medium px-2.5 py-0.5 rounded bg-blue-100 text-blue-800`}
                  >
                    Hotel
                  </span>
                </div>

                <div className="space-y-3 text-gray-700 mb-4 px-6 p-2">
                  {" "}
                  {/* Añadido px-6 para alinear con padding */}
                  <h2 className="text-xl font-semibold">{hotel.name}</h2>
                  <p className="text-gray-600 text-sm text-justify">
                    {hotel.description}
                  </p>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-amber-900 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{hotel.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-amber-900 mr-2 flex-shrink-0" />
                    <span>{hotel.contact}</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-amber-900 mr-2 flex-shrink-0" />
                    <a
                      href={hotel.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#c2522a] hover:underline"
                    >
                      Visita nuestro sitio web
                    </a>
                  </div>
                </div>

                {isAuthenticated && (
                  <div className="flex justify-center py-2 gap-5">
                    <button
                      className="flex items-center gap-2 bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-700"
                      onClick={() => handleEditarClick(hotel)}
                    >
                      <FaEdit />
                      Modificar
                    </button>

                    <button
                      className="flex items-center gap-2 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
                      onClick={() => {
                        setHotelAEliminar(hotel);
                        setShowConfirmModal(true);
                      }}
                    >
                      <FaTrash />
                      Eliminar
                    </button>
                  </div>
                )}
              </motion.div>
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

            {showConfirmModal && (
              <ConfirmModal
                message={`¿Deseas eliminar el hotel "${hotelAEliminar.name}"?`}
                onClose={() => {
                  setShowConfirmModal(false);
                  setHotelAEliminar(null);
                }}
                onConfirm={() => {
                  deleteHotel(hotelAEliminar._id);
                  setShowConfirmModal(false);
                  setHotelAEliminar(null);
                }}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
