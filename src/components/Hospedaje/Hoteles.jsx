import { useState, useEffect } from "react";
import { BedDouble } from "lucide-react";

export default function Hoteles() {
  const [modalOpen, setModalOpen] = useState(false);
  const [nuevoElemento, setNuevoElemento] = useState({
    name: "",
    contact: "",
    address: "",
    imageUrl: "",
  });
  const [elementos, setElementos] = useState([]);

  const obtenerHoteles = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/hotels");
      if (response.ok) {
        const data = await response.json();
        setElementos(data.data);
      } else {
        console.error("Error al obtener los hoteles");
      }
    } catch (error) {
      console.error("Error de conexión:", error);
    }
  };

  useEffect(() => {
    obtenerHoteles();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoElemento({ ...nuevoElemento, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNuevoElemento({ ...nuevoElemento, imageUrl: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const guardarElemento = async () => {
    const payload = { ...nuevoElemento };

    if (!payload.imageUrl) {
      delete payload.imageUrl;
    }

    try {
      const response = await fetch("http://localhost:3000/api/hotels", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const nuevoHotel = await response.json();
        setElementos([...elementos, nuevoHotel.data]);
        setModalOpen(false);
      } else {
        console.error("Error al guardar en la API");
      }
    } catch (error) {
      console.error("Error de conexión:", error);
    }
  };

  return (
    <div className="mt-10 p-6 transition-colors text-white min-h-screen">
      <div className="text-center mb-12">
        <BedDouble className="mx-auto h-12 w-12 text-emerald-600 dark:text-emerald-400" />
        <h1 className="mt-4 text-4xl font-bold text-gray-900 ">
          Alojamientos y Lugares Especiales
        </h1>
        <p className="mt-2 text-lg text-gray-800 ">
          Descubre lugares únicos rodeados de paisajes impresionantes. <br />
          Recárgate de energía, disfruta el confort y la tranquilidad que
          mereces. <br />
          <span className="font-semibold">
            "Tú descanso es nuestra prioridad".
          </span>{" "}
        </p>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-lg transition-all"
        >
          Agregar Nuevo
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mb-16 p-5">
        {elementos.map((item) => (
          <div className="bg-white  rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.nombre}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-emerald-600 dark:text-emerald-400 text-xl font-bold mb-2">
                {item.name}
              </h3>
              <p className="text-gray-900  mb-4">📍 {item.address}</p>
              <p className="text-gray-900  mb-4">📞 {item.contact}</p>
            </div>
          </div>
        ))}
      </div>
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-md">
          <div className="bg-white p-6 rounded-lg shadow-lg text-black w-96">
            <h2 className="text-xl font-bold mb-4">Agregar Nuevo</h2>
            <input
              name="name"
              placeholder="Nombre"
              onChange={handleInputChange}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              name="contact"
              placeholder="Contacto"
              onChange={handleInputChange}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              name="address"
              placeholder="Dirección"
              onChange={handleInputChange}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full mb-4 p-2 border rounded"
            />
            {nuevoElemento.imageUrl && (
              <img
                src={nuevoElemento.imageUrl}
                alt="Vista previa"
                className="w-full h-32 object-cover rounded mb-2"
              />
            )}
            <div className="flex justify-between">
              <button
                onClick={() => setModalOpen(false)}
                className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
              >
                Cancelar
              </button>
              <button
                onClick={guardarElemento}
                className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
