import { useState, useEffect } from "react";
import { BedDouble } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useHotel } from "@/context/HotelContext";
import ListaHoteles from "./ListaHoteles";
import AgregarHotel from "./AgregarHotel";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Hoteles() {
  const [modalOpen, setModalOpen] = useState(false);

  const { isAuthenticated } = useAuth();
  const { getHotels } = useHotel();

  useEffect(() => {
    getHotels();
  }, []);

  return (
    <div className="mt-10 p-6 transition-colors text-white min-h-screen">
      <div className="text-center mb-12">
        <BedDouble className="mx-auto h-12 w-12 text-emerald-600 dark:text-emerald-400" />
        <h1 className="mt-4 text-4xl font-bold text-gray-900 ">
          Alojamientos y Lugares Especiales
        </h1>
        <p className="mt-2 text-lg text-gray-800 ">
          Descubre lugares únicos rodeados de paisajes impresionantes. <br />
          Recárgate de energía, disfruta el confort y la tranquilidad que
          mereces. <br />
          <span className="font-semibold">
            "Tú descanso es nuestra prioridad".
          </span>{" "}
        </p>
      </div>

      <div className="text-center mt-6">
        {isAuthenticated && (
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-lg transition-all"
          >
            Agregar Nuevo
          </button>
        )}
      </div>
      <ListaHoteles />
      {modalOpen && (
        <AgregarHotel className="mt-50" onClose={() => setModalOpen(false)} />
      )}
      <ToastContainer />
    </div>
  );
}
