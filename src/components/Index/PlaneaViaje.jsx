import React from "react";
import { Link } from "react-router-dom";
import Button from "../ui/button";

export default function PlaneaViaje() {
  return (
    <section
      className="py-24 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/5409022/pexels-photo-5409022.jpeg)",
      }}
    >
      <div className="absolute inset-0 bg-[#1E3A8A] opacity-80"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            Planifica tu visita a Nobsa
          </h2>
          <p className="text-lg mb-8">
            Descubre todo lo que Nobsa tiene para ofrecer. Desde su rica
            gastronomía hasta su hermoso patrimonio cultural y natural.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link to="/gastronomia">
              <Button variant="secondary" size="lg">
                Gastronomía
              </Button>
            </Link>
            <Link to="/patrimonio">
              <Button variant="secondary" size="lg">
                Patrimonio
              </Button>
            </Link>
            <Link to="/turismo">
              <Button variant="secondary" size="lg">
                Turismo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
