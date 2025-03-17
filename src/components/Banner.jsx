import { useState, useEffect } from "react";

const images = [
  "../src/imagenes/banner/iglesia.jpg",
  "../src/imagenes/banner/nobsa1.jpg",
  "../src/imagenes/banner/nobsa2.jpeg",
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
    <div className=" flex-wrap items-center  max-w-screen-2xl ">
      {/* Carousel Wrapper */}
      <div className="overflow-hidden relative h-56 sm:h-64 xl:h-100 2xl:h-96">
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

      {/* Slider Controls */}
      <button
        className="absolute top-0 left-0 z-30 px-4 h-full flex items-center group"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 rounded-full">
          <svg
            className="w-5 h-5 text-white sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </span>
      </button>
      <button
        className="absolute top-0 right-0 z-30 px-4 h-full flex items-center group"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 rounded-full">
          <svg
            className="w-5 h-5 text-white sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </button>

      <section className="bg-white ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Información sobre Nobsa
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-gray-800  sm:text-xl text-justify">
            <b className="extrabold">Nobsa</b> es un municipio del
            departamento de Boyacá, situado en el centro-oriente de Colombia, en
            la región del Alto Chicamocha. El censo de 2005 contabilizó una
            población de 14 946 habitantes. Pertenece a la provincia del
            Sugamuxi. Fundada en 1593 y declarada municipio en 1811. Limita al
            norte con los municipios de Santa Rosa de Viterbo y Floresta, al
            oriente con Corrales y Tópaga, al occidente con Tibasosa y Santa
            Rosa de Viterbo y al sur con Sogamoso y Tibasosa.
          </p>
        </div>
      </section>
    </div>
  );
}
