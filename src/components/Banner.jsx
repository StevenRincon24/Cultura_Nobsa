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

const SLIDE_DURATION = 25000;

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="transition-colors text-white">
      {/* Carousel Wrapper */}
      <div className="overflow-hidden relative flex sm:h-64 xl:h-[500px] 2xl:h-[600px]">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className={`absolute w-full h-full object-cover top-0 left-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex
                ? "opacity-100 scale-125 animate-zoom"
                : "opacity-0 scale-100"
            }`}
            alt={`Slide ${index + 1}`}
          />
        ))}

        {/* Texto superpuesto sobre el carrusel */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/40">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            Bienvenidos a Nobsa
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Un tesoro cultural en el corazón de Boyacá
          </h2>
          <p className="text-lg md:text-xl max-w-2xl">
            Descubre la magia de nuestras tradiciones, la belleza de nuestros
            paisajes y la calidez de nuestra gente.
          </p>
        </div>
      </div>

      {/* Información de Nobsa */}
      <div className="flex justify-center items-center py-8 w-full">
        <InformacionNobsa />
      </div>

      {/* Tarjetas sobre información de escudos */}
      <div className="flex justify-center items-center w-full">
        <NobsaInfoSection />
      </div>

      {/* Tarjetas de información */}
      <div className="flex justify-center items-center w-full">
        <DescrubreNobsa />
      </div>

      {/* Turismo */}
    </div>
  );
}
