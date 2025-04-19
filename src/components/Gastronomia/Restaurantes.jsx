import React from "react";

import { restaurants } from "@/data/restaurants";
import { motion } from "framer-motion";
import { Phone, Clock, MapPin } from "lucide-react";
import Hero from "@/section/Hero";
import SectionTitle from "../ui/SectionTitle";
const RestaurantsPage = () => {
  return (
    <div className="min-h-screen">
      <Hero
        title="Restaurantes de Nobsa"
        subtitle="Lugares donde saborear la auténtica gastronomía local"
        imageUrl="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Donde Comer en Nobsa"
            subtitle="Restaurantes que mantienen viva la tradición culinaria de nuestra región"
            align="center"
          />

          <div className="grid grid-cols-1 gap-12 mt-12">
            {restaurants.map((restaurant, index) => (
              <motion.div
                key={restaurant.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="md:flex">
                  <div className="md:w-2/5 h-64 md:h-auto relative">
                    <img
                      src={restaurant.imageUrl}
                      alt={restaurant.name}
                      className="absolute h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="md:w-3/5 p-8">
                    <div className="uppercase tracking-wide text-sm text-secondary font-semibold">
                      Especialidad: {restaurant.specialty}
                    </div>
                    <h3 className="mt-1 text-2xl font-semibold font-heading text-primary">
                      {restaurant.name}
                    </h3>
                    <p className="mt-4 text-gray-600">
                      {restaurant.description}
                    </p>

                    <div className="mt-6 border-t border-gray-200 pt-4">
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center text-gray-600">
                          <MapPin
                            size={18}
                            className="mr-2 text-secondary flex-shrink-0"
                          />
                          <span>{restaurant.address}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Phone
                            size={18}
                            className="mr-2 text-secondary flex-shrink-0"
                          />
                          <a
                            href={`tel:${restaurant.phone}`}
                            className="hover:text-primary transition-colors"
                          >
                            {restaurant.phone}
                          </a>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock
                            size={18}
                            className="mr-2 text-secondary flex-shrink-0"
                          />
                          <span>{restaurant.openingHours}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <button className="bg-primary hover:bg-primary-800 text-white px-6 py-2 rounded-md font-medium transition-colors inline-flex items-center">
                        Cómo Llegar
                        <svg
                          className="w-5 h-5 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Market Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Mercado Local"
            subtitle="Visita nuestro mercado tradicional donde encontrarás productos frescos y artesanales"
          />

          <div className="bg-white rounded-lg shadow-md overflow-hidden mt-8">
            <div className="md:flex">
              <div className="md:w-2/5">
                <img
                  src="https://images.pexels.com/photos/2733918/pexels-photo-2733918.jpeg"
                  alt="Mercado local de Nobsa"
                  className="h-64 w-full object-cover md:h-full"
                />
              </div>
              <div className="md:w-3/5 p-8">
                <h3 className="text-2xl font-semibold font-heading text-primary mb-4">
                  Mercado Campesino de Nobsa
                </h3>
                <p className="text-gray-600 mb-4">
                  Todos los sábados en la Plaza Principal, los agricultores
                  locales y productores artesanales se reúnen para ofrecer lo
                  mejor de sus cosechas y creaciones. Aquí podrás encontrar
                  desde frutas y verduras frescas hasta quesos, miel, conservas
                  y productos artesanales.
                </p>
                <p className="text-gray-600 mb-6">
                  Una visita al mercado campesino te permitirá conocer de
                  primera mano la rica tradición agrícola y gastronómica de
                  Nobsa, además de interactuar con los habitantes locales y
                  conocer sus historias.
                </p>

                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-medium text-gray-800 mb-2">Horario:</h4>
                  <p className="text-gray-600">
                    Sábados de 6:00 AM a 2:00 PM en la Plaza Principal de Nobsa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RestaurantsPage;
