import React from "react";
import Hero from "@/section/Hero";
import SectionTitle from "../ui/SectionTitle";

import { motion } from "framer-motion";
import { accommodations } from "@/data/hotels";
import { attractions } from "@/data/attractions";
import Map from "./Map";
import AttractionCard from "../ui/AttractionCard";
import DirectionsSection from "./DireccionNobsa";

const TourismPage = () => {
  const mapPoints = attractions.map((attraction) => ({
    id: attraction.id,
    name: attraction.name,
    coords: [attraction.location.lat, attraction.location.lng],
    description: attraction.description.substring(0, 100) + "...",
    type: attraction.type,
  }));

  return (
    <div className="min-h-screen">
      <Hero
        title="Turismo en Nobsa"
        subtitle="Descubre todo lo que nuestro municipio tiene para ofrecer"
        imageUrl="https://images.pexels.com/photos/2437291/pexels-photo-2437291.jpeg"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Principales Atracciones"
            subtitle="Lugares imperdibles durante tu visita a Nobsa"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {attractions.map((attraction) => (
              <AttractionCard
                key={attraction.id}
                title={attraction.name}
                description={attraction.description}
                imageUrl={attraction.imageUrl}
                type={attraction.type}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Mapa Turístico"
            subtitle="Explora interactivamente los puntos de interés en Nobsa"
          />

          <Map points={mapPoints} className="mt-12" />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Cómo Llegar"
            subtitle="Toda la información que necesitas para visitar Nobsa"
          />

          <div className="bg-white rounded-lg shadow-md overflow-hidden mt-8">
            <div className="md:flex">
              <div className="md:w-2/5">
                <img
                  src="https://images.pexels.com/photos/3847386/pexels-photo-3847386.jpeg"
                  alt="Carretera a Nobsa"
                  className="h-64 w-full object-cover md:h-full"
                />
              </div>
              <div className="md:w-3/5 p-8">
                <h3 className="text-2xl font-semibold font-heading text-primary mb-4">
                  Rutas de Acceso
                </h3>
                <p className="text-gray-600 mb-6">
                  Nobsa se encuentra ubicada en el departamento de Boyacá, a
                  aproximadamente 10 kilómetros de Sogamoso y 74 kilómetros de
                  Tunja, la capital del departamento.
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">
                      Desde Bogotá:
                    </h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>
                        Toma la carretera Bogotá-Tunja-Sogamoso (aproximadamente
                        3-4 horas).
                      </li>
                      <li>
                        Desde Sogamoso, sigue las indicaciones hacia Nobsa
                        (15-20 minutos).
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">En bus:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>
                        Desde el Terminal de Transportes de Bogotá, toma un bus
                        hacia Sogamoso.
                      </li>
                      <li>
                        En Sogamoso, puedes tomar un bus local o taxi hacia
                        Nobsa.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">
                      En avión:
                    </h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>
                        El aeropuerto más cercano es el Aeropuerto Alberto
                        Lleras Camargo en Sogamoso.
                      </li>
                      <li>
                        Desde allí, puedes tomar un taxi o transporte local
                        hacia Nobsa.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Qué Traer"
            subtitle="Recomendaciones para que tu visita sea más placentera"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div
              className="bg-white rounded-lg shadow-md overflow-hidden"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold font-heading text-primary mb-4">
                  Para el Clima
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Ropa abrigada para las noches (sweaters, chaquetas).</li>
                  <li>Ropa ligera para el día (camisetas, pantalones).</li>
                  <li>
                    Protector solar (la radiación solar puede ser intensa).
                  </li>
                  <li>Sombrero o gorra para protegerse del sol.</li>
                  <li>
                    Paraguas o impermeable (el clima puede ser cambiante).
                  </li>
                  <li>Calzado cómodo para caminar por el pueblo y senderos.</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-md overflow-hidden"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold font-heading text-primary mb-4">
                  Para el Viaje
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                    Cámara fotográfica (para capturar los hermosos paisajes).
                  </li>
                  <li>
                    Dinero en efectivo (algunos establecimientos pueden no
                    aceptar tarjetas).
                  </li>
                  <li>Documentos de identidad.</li>
                  <li>Botella de agua reutilizable.</li>
                  <li>Mochila pequeña para excursiones.</li>
                  <li>Medicamentos personales si los necesitas.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Dónde Hospedarse"
            subtitle="Opciones de alojamiento para hacer tu estancia más confortable"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {accommodations.map((hotel) => (
              <motion.div
                key={hotel.id}
                className="bg-white rounded-lg shadow-md overflow-hidden h-full"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-48">
                  <img
                    src={hotel.imageUrl}
                    alt={hotel.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <span className="bg-secondary text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {hotel.type === "hotel"
                        ? "Hotel"
                        : hotel.type === "glamping"
                        ? "Glamping"
                        : "Hostal"}
                    </span>
                    <span className="ml-2 text-gray-600 text-sm">
                      {hotel.priceRange}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold font-heading text-primary mb-2">
                    {hotel.name}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {hotel.description}
                  </p>

                  <div className="mt-auto">
                    <h4 className="font-medium text-gray-800 text-sm mb-2">
                      Comodidades:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {hotel.amenities.slice(0, 3).map((amenity, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                        >
                          {amenity}
                        </span>
                      ))}
                      {hotel.amenities.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                          +{hotel.amenities.length - 3} más
                        </span>
                      )}
                    </div>

                    {hotel.website && (
                      <a
                        href={hotel.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 text-primary font-medium hover:text-secondary transition-colors inline-flex items-center text-sm"
                      >
                        Visitar sitio web
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <DirectionsSection />
      </section>
    </div>
  );
};

export default TourismPage;
