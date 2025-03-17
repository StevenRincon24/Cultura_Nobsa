import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FaLightbulb, FaChurch, FaMusic, FaSun } from "react-icons/fa";

const eventos = [
  {
    fecha: "20",
    mes: "marzo",
    nombre: "Día de la Ruana",
    descripcion:
      "Celebración de la icónica prenda de Nobsa con desfiles y concursos.",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2daKpgljuiCHmns9XBflB-SA7NzpBoqMZqg&s",
  },
  {
    fecha: "22",
    mes: "marzo",
    nombre: "Festival Vallenato",
    descripcion: "Evento musical con los mejores exponentes del vallenato.",
    imagen:
      "https://prd-files.sentirvallenato.com/images/noticias-de-actualidad-codiscos-1730995528742.jpeg",
  },
  {
    fecha: "25",
    mes: "marzo",
    nombre: "Fiestas de la Virgen de Belencito y Jesús Obrero",
    descripcion: "Eventos religiosos y culturales en honor a los patronos.",
    imagen: "/images/virgen.jpg",
  },
  {
    fecha: "10",
    mes: "abril",
    nombre: "Fiestas de San Roque y Efrias Municipales",
    descripcion: "Celebraciones tradicionales con danzas y música en vivo.",
    imagen: "/images/sanroque.jpg",
  },
  {
    fecha: "5",
    mes: "diciembre",
    nombre: "Iluminación Navideña",
    descripcion: "Encendido de luces con decoraciones en todo el municipio.",
    imagen: "/images/iluminacion.jpg",
  },
  {
    fecha: "15",
    mes: "diciembre",
    nombre: "Pesebre y Muestras Culturales",
    descripcion: "Exhibición de pesebres y presentaciones artísticas.",
    imagen: "/images/pesebre.jpg",
  },
];

export default function EventosNobsa() {
  return (
    <div className="container mx-auto p-6 mt-30">
      <h1 className="text-3xl font-bold text-center mb-6">
        Eventos y Fiestas en Nobsa
      </h1>
      <div className="space-y-8">
        {eventos.map((evento, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex border-b border-gray-300 pb-6"
          >
            <div className="w-16 flex flex-col items-center text-gray-700 font-bold">
              <span className="text-3xl">{evento.fecha}</span>
              <span className="uppercase text-sm">{evento.mes}</span>
            </div>
            <Card className="flex-1 flex p-4 bg-white shadow-lg rounded-xl border border-gray-200">
              <div className="w-2/3 pr-4">
                <h2 className="text-xl font-semibold">{evento.nombre}</h2>
                <p className="text-gray-600">{evento.descripcion}</p>
              </div>
              <div className="w-1/3">
                <img src={evento.imagen} alt={evento.nombre} className="rounded-lg" />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
