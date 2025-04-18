import { useNavigate } from "react-router-dom";
{
  /* CATEGORIAS PARA LOS ATRACTIVOS TURISTICOS */
}
const categories = [
  {
    name: "Principales parques",
    color: "text-cyan-500 border-cyan-500",
    icon: "🗺️🏛️",
  },
  {
    name: "Arquitectura Religiosa",
    color: "text-yellow-500 border-yellow-500",
    icon: "⛪",
  },
  { name: "Red de Museos", color: "text-red-500 border-red-500", icon: "🏛️" },
  {
    name: "Realizaciones Contemporáneas",
    color: "text-gray-500 border-gray-500",
    icon: "🏢",
  },
  {
    name: "Campanas de Ucuengá",
    color: "text-green-500 border-green-500",
    icon: " 🔔 ",
  },
  {
    name: "Sector turístico de Puntalarga",
    color: "text-green-500 border-green-500",
    icon: " 🍇🍷 ",
  },
  {
    name: "Muebles y forja artesanal",
    color: "text-green-500 border-green-500",
    icon: "🪑🛠️", // Silla y herramientas
  },
];

export default function Turismo() {
  const navigate = useNavigate();

  return (
    <div className="w-full  p-6">
      <div className="w-full bg-white shadow-lg rounded-2xl p-6 text-center">
        <h1
          className="text-6xl sm:text-5xl font-extralight text-red-700 mb-4"
          style={{ fontFamily: "Avenir" }}
        >
          Atractivos turísticos del municipio
        </h1>
        <p className="text-gray-700 mb-4">
          Nobsa es un encantador municipio en Boyacá, Colombia, famoso por su
          artesanía en lana, su arquitectura colonial y su rica cultura. Visita
          sus plazas, iglesias y disfruta de su ambiente acogedor. Disfruta de
          nuestra increíble selección de fotos de los lugares más emblemáticos
          de la hermosa y turística ciudad de Nobsa.
        </p>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-3 gap-2">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`flex flex-col  border ${category.color} rounded-full px-3 py-2 transition-transform transform hover:scale-105 cursor-pointer w-60`}
              >
                <span className="text-lg">{category.icon}</span>
                <span className="mt-1 text-sm font-medium text-center">
                  {category.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
