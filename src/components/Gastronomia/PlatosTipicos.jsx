import React, { useState } from "react";
import AnimatedSection from "../ui/AnimatedSection";
import SectionTitle from "../ui/SectionTitle";
import { cuisineContent } from "@/data/content";
import Hero from "@/section/Hero";

const PlatosTipicos = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen">
      <Hero
        title="Platos Típicos de Nobsa"
        subtitle="Sabores auténticos que cuentan nuestra historia"
        imageUrl="https://images.pexels.com/photos/5409009/pexels-photo-5409009.jpeg"
      />
      <section id="cuisine" className="bg-white py-16 md:py-24">
        <div className="container-custom">
          <AnimatedSection>
            <SectionTitle
              title={cuisineContent.title}
              subtitle={cuisineContent.subtitle}
            />
          </AnimatedSection>

          <AnimatedSection className="mb-12">
            <p className="text-lg text-center max-w-4xl mx-auto">
              {cuisineContent.description}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-10">
            <AnimatedSection animation="slide-in-left">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                {cuisineContent.dishes.map((dish, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === activeIndex
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{dish.name}</h3>
                      <p className="text-gray-200">{dish.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Platos Típicos
                </h3>
                <div className="space-y-4">
                  {cuisineContent.dishes.map((dish, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-full text-left p-4 rounded-lg transition-all ${
                        index === activeIndex
                          ? "bg-blue-900 text-white"
                          : "bg-white hover:bg-red-100"
                      }`}
                    >
                      <h4 className="font-semibold text-lg">{dish.name}</h4>
                      {index === activeIndex && (
                        <p
                          className={`mt-2 ${
                            index === activeIndex
                              ? "text-gray-200"
                              : "text-gray-600"
                          }`}
                        >
                          {dish.description}
                        </p>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#4338CA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-heading">
            ¿Quieres probar estos deliciosos platos típicos?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Visita nuestros restaurantes locales y descubre el auténtico sabor
            de Nobsa
          </p>
          <a
            href="/gastronomia/restaurantes"
            className="bg-white text-primary hover:bg-gray-100 py-3 px-8 rounded-md font-medium transition-colors inline-flex items-center"
          >
            Ver Restaurantes
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
          </a>
        </div>
      </section>
    </div>
  );
};

export default PlatosTipicos;
