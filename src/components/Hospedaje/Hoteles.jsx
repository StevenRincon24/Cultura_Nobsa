import { useState, useEffect } from "react";
import { BedDouble } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useHotel } from "@/context/HotelContext";
import ListaHoteles from "./ListaHoteles";
import AgregarHotel from "./AgregarHotel";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SectionTitle from "../ui/SectionTitle";
import { accommodations } from "@/data/hotels";
import { motion } from "framer-motion";
import DirectionsSection from "../Turismo/DireccionNobsa";
import Hero from "@/section/Hero";

export default function Hoteles() {
  const [modalOpen, setModalOpen] = useState(false);

  const { isAuthenticated } = useAuth();
  const { getHotels } = useHotel();

  useEffect(() => {
    getHotels();
  }, []);

  return (
    <div className="min-h-screen">
      <Hero
        title="Hoteles de Nobsa"
        subtitle="Descubre los mejores hoteles de Nobsa"
        imageUrl="https://images.pexels.com/photos/5677781/pexels-photo-5677781.jpeg"
        
        
      />
      <div className="mt-10 transition-colors text-white min-h-screen">
        <div className="text-center mb-12">
          <SectionTitle
            title="Dónde puedes hospedarte"
            subtitle="Opciones de alojamiento para hacer tu estancia más confortable"
          />
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

        <div className="mt-10"></div>
        <ToastContainer />
      </div>
    </div>
  );
}
