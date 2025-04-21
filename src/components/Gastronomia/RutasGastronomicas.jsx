import React, { useState } from "react";
import { culinaryRoutes, restaurants } from "@/data/data";
import { Utensils } from "lucide-react";
import Hero from "@/section/Hero";

const Gastronomy = () => {
  const [selectedRoute, setSelectedRoute] = useState(null);

  const filteredRestaurants = selectedRoute
    ? restaurants.filter((restaurant) => restaurant.route === selectedRoute)
    : restaurants;

  return (
    <div className="min-h-screen">
      <Hero
        title="Rutas gastronomicas de Nobsa"
        subtitle="Descubre las diferentes rutas gastronomicas de Nobsa, donde puedes degustar de la mejor comida del municipio."
        imageUrl="https://images.pexels.com/photos/5677781/pexels-photo-5677781.jpeg"
      />
      <section id="gastronomia" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Rutas Gastronomicas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre todo lo que nuestro municipio tiene para ofrecer
            </p>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {culinaryRoutes.map((route) => (
              <div
                key={route.id}
                className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer ${
                  selectedRoute === route.id ? "ring-4 ring-red-600" : ""
                }`}
                onClick={() =>
                  setSelectedRoute(selectedRoute === route.id ? null : route.id)
                }
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={route.imageUrl}
                    alt={route.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                    <Utensils className="mr-2 text-red-600" size={20} />
                    {route.name}
                  </h3>
                  <p className="text-gray-700 mb-4">{route.description}</p>
                  <button
                    className={`w-full py-2 rounded-full transition-colors ${
                      selectedRoute === route.id
                        ? "bg-red-600 text-white"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
                  >
                    {selectedRoute === route.id
                      ? "Ver Todos"
                      : "Ver Restaurantes"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            {selectedRoute
              ? `Restaurantes de la ${
                  culinaryRoutes.find((r) => r.id === selectedRoute)?.name
                }`
              : "Todos los Restaurantes"}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRestaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={restaurant.imageUrl}
                    alt={restaurant.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    {restaurant.name}
                  </h4>
                  <p className="text-gray-700 mb-3">{restaurant.description}</p>
                  <div className="flex items-center text-gray-600 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>{restaurant.address}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm capitalize">
                      {restaurant.route === "gallina" && "Ruta de la Gallina"}
                      {restaurant.route === "carne" && "Ruta de la Carne"}
                      {restaurant.route === "postres" && "Ruta de los Postres"}
                    </span>
                    <button className="text-red-600 hover:text-red-800 transition-colors">
                      Ver Menú
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gastronomy;
