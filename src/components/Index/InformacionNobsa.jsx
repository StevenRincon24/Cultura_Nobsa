import React from "react";
import AnimatedSection from "../ui/AnimatedSection";
import SectionTitle from "../ui/SectionTitle";
import { aboutContent } from "@/data/content";

const About = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-custom">
        <AnimatedSection>
          <SectionTitle
            title={aboutContent.title}
            subtitle={aboutContent.subtitle}
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-justify">
          <AnimatedSection animation="slide-in-left">
            <div className="space-y-6">
              <p className="text-lg text-gray-600">
                {aboutContent.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {aboutContent.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-red-700 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                {aboutContent.features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-gray-300 p-4 rounded-lg shadow-sm"
                  >
                    <h3 className="text-lg font-semibold mb-2 text-red-600">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-in-right">
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
              <img
                src={aboutContent.image}
                alt="Vista de Nobsa"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
