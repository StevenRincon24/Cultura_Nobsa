import { useState, useEffect } from "react";
import NobsaInfoSection from "./Index/NobsaInfoSection";
import InformacionNobsa from "./Index/InformacionNobsa";
import DescrubreNobsa from "./Index/DescubreNobsa";
import Turismo from "./Index/AtractivosTuristicos";
const images = [
  "https://i.postimg.cc/prJqP7Px/iglesia.jpg",
  "https://i.postimg.cc/Wzv5LjLX/nobsa1.jpg",
  "https://i.postimg.cc/yd9Lbx5D/nobsa2.jpg",
];

const SLIDE_DURATION = 6000; // Duración en milisegundos

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-10 p-6 transition-colors text-white w-screen">
      {/* Carousel Wrapper */}
      <div className="overflow-hidden relative flex sm:h-64 xl:h-100 2xl:h-96">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className={`absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Información de Nobsa */}
      <div className="flex justify-center items-center py-8 w-full">
        <InformacionNobsa />
      </div>

      {/* TARJETAS SOBRE INFORMACION DE ESCUDOS DE NOBSA */}
      <div className="flex justify-center items-center w-full">
        <NobsaInfoSection />
      </div>

      {/* Tarjetas de información */}
      <div className="flex justify-center items-center w-full">
        <DescrubreNobsa />
      </div>

      {/* Turismo */}
      <div className="flex justify-center items-center w-full">
        <Turismo />
      </div>
    </div>
  );
}
