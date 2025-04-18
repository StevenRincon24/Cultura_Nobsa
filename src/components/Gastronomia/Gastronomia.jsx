import React, { useState } from "react";
import AnimatedSection from "../ui/AnimatedSection";
import SectionTitle from "../ui/SectionTitle";
import { cuisineContent } from "@/data/content";

const Cuisine = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
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
  );
};

export default Cuisine;
