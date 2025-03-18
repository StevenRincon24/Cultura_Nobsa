import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const postres = [
  {
    src: "https://peopleenespanol.com/thmb/8_0BHEJkXcIbYVOu9r2Z1ntoonc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/3a23ae4b-48b7-44eb-96a7-0e8e755683b6-2000-c618f18c242d47ca89eaddea62579593.jpg",
    name: "Pastel de Chocolate",
    desc: "Delicioso pastel con crema y fresas.",
  },
  {
    src: "https://i.ytimg.com/vi/IRBCpfWEdfI/maxresdefault.jpg",
    name: "Tarta de Frutas",
    desc: "Tarta con frutos del bosque y crema.",
  },
  {
    src: "https://directoriohoreca.com/sites/default/files/%C2%BFQu%C3%A9%20es%20un%20helado%20artesanal%20y%20que%20diferencia%20existen%20con%20uno%20industrial%20%281%29.jpg",
    name: "Helado Artesanal",
    desc: "Helado casero con sabores naturales.",
  }
  
];

const restaurantes = [
  {
    src: "https://via.placeholder.com/300",
    name: "La Granja de Nobsa",
    info: "Platos típicos de la región con gallina.",
  },
  {
    src: "https://via.placeholder.com/300",
    name: "Sabores Campestres",
    info: "Menú variado con ingredientes locales.",
  },
  
  {
    src: "https://directoriohoreca.com/sites/default/files/%C2%BFQu%C3%A9%20es%20un%20helado%20artesanal%20y%20que%20diferencia%20existen%20con%20uno%20industrial%20%281%29.jpg",
    name: "Helado Artesanal",
    desc: "Helado casero con sabores naturales.",
  },
  ,
  {
    src: "https://directoriohoreca.com/sites/default/files/%C2%BFQu%C3%A9%20es%20un%20helado%20artesanal%20y%20que%20diferencia%20existen%20con%20uno%20industrial%20%281%29.jpg",
    name: "Helado Artesanal",
    desc: "Helado casero con sabores naturales.",
  },
  ,
  {
    src: "https://directoriohoreca.com/sites/default/files/%C2%BFQu%C3%A9%20es%20un%20helado%20artesanal%20y%20que%20diferencia%20existen%20con%20uno%20industrial%20%281%29.jpg",
    name: "Helado Artesanal",
    desc: "Helado casero con sabores naturales.",
  },
  ,
  {
    src: "https://directoriohoreca.com/sites/default/files/%C2%BFQu%C3%A9%20es%20un%20helado%20artesanal%20y%20que%20diferencia%20existen%20con%20uno%20industrial%20%281%29.jpg",
    name: "Helado Artesanal",
    desc: "Helado casero con sabores naturales.",
  },
];

function Modal({ open, onClose, children }) {
  if (!open) return null;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-md z-50"
    >
      <motion.div
        className="bg-white p-6 rounded-xl shadow-xl max-w-lg w-full relative"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        exit={{ y: -50 }}
      >
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
          onClick={onClose}
        >
          ×
        </button>
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function RutaGastronomica() {
  const [selectedRestaurante, setSelectedRestaurante] = useState(null);
  const [open, setOpen] = useState(false);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 p-8 mt-10">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Postres Deliciosos
        </h2>
        <Slider
          {...sliderSettings}
          className="rounded-lg overflow-hidden shadow-lg"
        >
          {postres.map((postre, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-4"
            >
              <img
                src={postre.src}
                alt={postre.name}
                className="w-full h-64 object-cover rounded-xl shadow-md"
              />
              <p className="mt-3 font-semibold text-lg text-gray-800">
                {postre.name}
              </p>
              <p className="text-sm text-gray-600">{postre.desc}</p>
            </motion.div>
          ))}
        </Slider>
      </div>

      {/* Sección de Restaurantes */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-800 mt-20">
          Conoce la ruta de la gallina 🐔
        </h2>
        <p>¡Buen provecho! 🍽️</p>

        <div className="grid sm:grid-cols-2 gap-6">
          {restaurantes.map((rest, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer transition-all"
              onClick={() => {
                setSelectedRestaurante(rest);
                setOpen(true);
              }}
            >
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-4 text-center">
                  <img
                    src={rest.src}
                    alt={rest.name}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <p className="mt-3 font-semibold text-lg text-gray-800">
                    {rest.name}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal de Restaurantes */}
      <Modal open={open} onClose={() => setOpen(false)}>
        {selectedRestaurante && (
          <div className="text-center">
            <img
              src={selectedRestaurante.src}
              alt={selectedRestaurante.name}
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <h2 className="text-xl font-bold mt-4">
              {selectedRestaurante.name}
            </h2>
            <p className="text-gray-600 mt-2">{selectedRestaurante.info}</p>
            <Button
              className="mt-4 w-full bg-blue-600 text-white hover:bg-blue-700 transition"
              onClick={() => setOpen(false)}
            >
              Cerrar
            </Button>
          </div>
        )}
      </Modal>
    </div>
  );
}
