import React, { useState } from "react";
import Hero from "@/section/Hero";
import SectionTitle from "../ui/SectionTitle";
import { motion } from "framer-motion";
import { Shirt, Hammer, Bell, Users, Scissors } from "lucide-react";

const artesanias = [
  {
    id: 1,
    type: "ruana",
    name: "Ruana Boyacense",
    imageUrl:
      "https://images.pexels.com/photos/6311607/pexels-photo-6311607.jpeg",
    description:
      "La ruana es la prenda más representativa del altiplano boyacense y un símbolo cultural del municipio de Nobsa. Se elabora principalmente con lana virgen de oveja y es reconocida por su forma rectangular con una abertura central que permite llevarla sobre los hombros. Su diseño proporciona abrigo frente al clima frío característico de la región.",
    historicalValue:
      "El origen de la ruana se remonta a las comunidades indígenas del altiplano cundiboyacense. Durante la época colonial evolucionó hasta convertirse en la prenda tradicional del campesino boyacense. Hoy en día es uno de los productos artesanales más representativos de Colombia.",
    location:
      "Se pueden encontrar en tiendas artesanales, talleres textiles y mercados del centro del municipio de Nobsa.",
  },
  {
    id: 2,
    type: "muebles",
    name: "Muebles Artesanales de Nobsa",
    imageUrl:
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
    description:
      "En Nobsa también se elaboran muebles artesanales en madera, conocidos por su durabilidad y diseño tradicional. Estos muebles incluyen mesas, sillas, armarios y elementos decorativos que combinan técnicas modernas con la tradición de la carpintería artesanal.",
    historicalValue:
      "La carpintería ha sido una actividad complementaria dentro de la economía artesanal del municipio. Con el tiempo, los talleres locales han perfeccionado técnicas de trabajo en madera que hoy forman parte de la identidad productiva de la región.",
    location:
      "Talleres de carpintería artesanal ubicados en diferentes sectores del municipio y tiendas especializadas.",
  },
  {
    id: 3,
    type: "campanas",
    name: "Campanas Artesanales",
    imageUrl:
      "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg",
    description:
      "La fabricación de campanas es otra de las actividades artesanales presentes en la región. Estas campanas se elaboran principalmente en metal y son utilizadas en iglesias, instituciones y espacios comunitarios.",
    historicalValue:
      "Tradicionalmente las campanas han sido utilizadas como instrumentos de comunicación en pueblos y templos. Su elaboración artesanal conserva técnicas tradicionales de fundición y moldeado.",
    location:
      "Talleres metalúrgicos y espacios artesanales especializados en la región de Nobsa.",
  },
  {
    id: 4,
    type: "telares",
    name: "Telares Tradicionales",
    imageUrl:
      "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg",
    description:
      "Los telares tradicionales son herramientas fundamentales para la elaboración de ruanas, cobijas y tejidos artesanales. Mediante estos telares se transforman los hilos de lana en prendas textiles de alta calidad.",
    historicalValue:
      "El uso del telar ha sido transmitido de generación en generación entre los artesanos de Nobsa. Esta técnica permite preservar métodos ancestrales de tejido que forman parte del patrimonio cultural del municipio.",
    location:
      "Talleres textiles familiares y centros artesanales donde se elaboran productos en lana.",
  },
  {
    id: 5,
    type: "artesanos",
    name: "Artesanos de Nobsa",
    imageUrl:
      "https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg",
    description:
      "Los artesanos de Nobsa son los principales guardianes de las tradiciones culturales del municipio. Gracias a su conocimiento y experiencia elaboran productos textiles, accesorios y elementos decorativos que reflejan la identidad boyacense.",
    historicalValue:
      "Las familias artesanas han transmitido sus conocimientos durante generaciones, manteniendo vivas las técnicas tradicionales y adaptándolas a nuevas tendencias del mercado.",
    location:
      "Ferias artesanales, talleres familiares y tiendas tradicionales del municipio.",
  },
];

const ArtesaniasPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [expandedItems, setExpandedItems] = useState({});

  // Generar tabs automáticamente
  const tabs = ["all", ...new Set(artesanias.map((item) => item.type))];

  const filteredItems =
    activeTab === "all"
      ? artesanias
      : artesanias.filter((item) => item.type === activeTab);

  const getIcon = (type) => {
    switch (type) {
      case "ruana":
        return <Shirt size={24} className="text-secondary" />;
      case "muebles":
        return <Hammer size={24} className="text-secondary" />;
      case "campanas":
        return <Bell size={24} className="text-secondary" />;
      case "telares":
        return <Scissors size={24} className="text-secondary" />;
      case "artesanos":
        return <Users size={24} className="text-secondary" />;
      default:
        return null;
    }
  };

  const toggleExpand = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="min-h-screen">
      <Hero
        title="Artesanías de Nobsa"
        subtitle="Tradición, cultura y creatividad que representan la identidad del municipio"
        imageUrl="https://images.pexels.com/photos/6311607/pexels-photo-6311607.jpeg"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Tradición Artesanal"
            subtitle="Descubre las principales artesanías que representan la cultura del municipio de Nobsa"
            align="center"
          />

          {/* Tabs */}
          <div className="flex justify-center mb-12 flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${activeTab === tab
                    ? "bg-white shadow-sm text-primary"
                    : "text-gray-600 hover:text-primary"
                    }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "all"
                  ? "Todos"
                  : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-12">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="md:flex">
                  <div className="md:w-2/5 h-64 md:h-auto">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="md:w-3/5 p-8">
                    <div className="flex items-center mb-2">
                      {getIcon(item.type)}
                      <span className="ml-2 uppercase text-sm text-secondary font-semibold">
                        {item.type}
                      </span>
                    </div>

                    <h3 className="text-2xl font-semibold text-primary mb-4">
                      {item.name}
                    </h3>

                    <p className="text-gray-600 mb-2 text-justify">
                      {expandedItems[item.id]
                        ? item.description
                        : item.description.slice(0, 250) + "..."}
                    </p>

                    <button
                      className="text-sm text-red-600 hover:underline mb-4"
                      onClick={() => toggleExpand(item.id)}
                    >
                      {expandedItems[item.id]
                        ? "Mostrar menos"
                        : "Más información"}
                    </button>

                    <div className="bg-gray-50 p-4 rounded-md mb-4">
                      <h4 className="font-medium mb-1">
                        Importancia cultural
                      </h4>
                      <p className="text-sm text-gray-600 text-justify">
                        {item.historicalValue}
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-md">
                      <h4 className="font-medium mb-1">
                        Dónde encontrarlos
                      </h4>
                      <p className="text-sm text-gray-600 text-justify">
                        {item.location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Historia de las Artesanías en Nobsa"
            subtitle="Una tradición que ha pasado de generación en generación"
          />

          <div className="bg-white rounded-lg shadow-md overflow-hidden mt-8">
            <div className="md:flex">
              <div className="md:w-2/5">
                <img
                  src="https://images.pexels.com/photos/6311607/pexels-photo-6311607.jpeg"
                  alt="Artesanías de Nobsa"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="md:w-3/5 p-8">
                <p className="text-gray-600 mb-4 text-justify">
                  Nobsa es reconocido a nivel nacional por su tradición
                  artesanal, especialmente en la elaboración de ruanas y
                  prendas tejidas en lana. Esta actividad se ha convertido
                  en una de las principales expresiones culturales del
                  municipio.
                </p>

                <p className="text-gray-600 mb-4 text-justify">
                  A lo largo de los años, los artesanos han mantenido
                  técnicas tradicionales de tejido utilizando telares
                  manuales, lo que permite conservar un legado cultural
                  transmitido de generación en generación.
                </p>

                <p className="text-gray-600 text-justify">
                  Actualmente, las artesanías de Nobsa no solo representan
                  la identidad cultural del municipio, sino que también
                  constituyen un importante atractivo turístico y una
                  fuente de desarrollo económico para la comunidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtesaniasPage;