import React from "react";
import { Link } from "react-router-dom";
import Hero from "@/section/Hero";
import SectionTitle from "../ui/SectionTitle";
import { typicalDishes } from "@/data/typicalDishes";
import { restaurants } from "@/data/restaurants";
import { motion } from "framer-motion";
import  Card  from "../ui/Card2";

const GastronomyPage = () => {
  const featuredDishes = typicalDishes.slice(0, 3);
  const featuredRestaurants = restaurants.slice(0, 3);

  return (
    <div className="min-h-screen">
      <Hero
        title="Gastronomía de Nobsa"
        subtitle="Descubre los sabores auténticos de nuestra tierra"
        imageUrl="https://images.pexels.com/photos/5677781/pexels-photo-5677781.jpeg"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nuestra Gastronomía"
            subtitle="La cocina de Nobsa es el reflejo de nuestras tradiciones y la riqueza de nuestra tierra"
            align="center"
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <p className="text-gray-600 mb-6">
              La gastronomía de Nobsa, como parte de la tradición boyacense, se
              caracteriza por platos contundentes y llenos de sabor, que
              utilizan ingredientes locales como maíz, papa, habas y carnes.
              Nuestras recetas han pasado de generación en generación,
              conservando la esencia de la cocina tradicional colombiana.
            </p>
            <p className="text-gray-600">
              Te invitamos a explorar nuestros platos típicos y a visitar los
              restaurantes que mantienen viva esta herencia culinaria.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <Link to="/gastronomia/platos-tipicos" className="block">
              <motion.div
                className="rounded-lg overflow-hidden shadow-md relative h-64"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.pexels.com/photos/5409009/pexels-photo-5409009.jpeg"
                  alt="Platos Típicos"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white font-heading">
                    Platos Típicos
                  </h3>
                </div>
              </motion.div>
            </Link>

            <Link to="/gastronomia/restaurantes" className="block">
              <motion.div
                className="rounded-lg overflow-hidden shadow-md relative h-64"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg"
                  alt="Restaurantes"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white font-heading">
                    Restaurantes
                  </h3>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Platos Destacados"
            subtitle="Una muestra de nuestra rica tradición culinaria"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish) => (
              <Card
                key={dish.id}
                title={dish.name}
                description={dish.description.substring(0, 100) + "..."}
                imageUrl={dish.imageUrl}
                link="/gastronomia/platos-tipicos"
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/gastronomia/platos-tipicos"
              className="btn-primary inline-flex items-center"
            >
              Ver Todos los Platos
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
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Restaurantes Recomendados"
            subtitle="Lugares donde puedes disfrutar de la auténtica gastronomía de Nobsa"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredRestaurants.map((restaurant) => (
              <Card
                key={restaurant.id}
                title={restaurant.name}
                description={`Especialidad: ${
                  restaurant.specialty
                }. ${restaurant.description.substring(0, 80)}...`}
                imageUrl={restaurant.imageUrl}
                link="/gastronomia/restaurantes"
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/gastronomia/restaurantes"
              className="btn-primary inline-flex items-center"
            >
              Ver Todos los Restaurantes
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
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GastronomyPage;
