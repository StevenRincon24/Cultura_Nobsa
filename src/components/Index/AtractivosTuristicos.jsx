import { useNavigate } from "react-router-dom";

export default function Turismo() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-gray-100 p-6">
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
        <button
          onClick={() => navigate("/ruta-turistica")}
          className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition"
        >
          Explorar más
        </button>
      </div>
    </div>
  );
}
