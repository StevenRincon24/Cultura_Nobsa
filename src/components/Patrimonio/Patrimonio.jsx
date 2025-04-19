import React, { useState } from "react";
import Hero from "@/section/Hero";
import SectionTitle from "../ui/SectionTitle";
import { heritageItems } from "@/data/heritage";
import { motion } from "framer-motion";
import { Church, TreePine, Landmark } from "lucide-react";

const PatrimonioPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredItems =
    activeTab === "all"
      ? heritageItems
      : heritageItems.filter((item) => item.type === activeTab);

  const getIcon = (type) => {
    switch (type) {
      case "iglesia":
        return <Church size={24} className="text-secondary" />;
      case "parque":
        return <Landmark size={24} className="text-secondary" />;
      case "sendero":
        return <TreePine size={24} className="text-secondary" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <Hero
        title="Patrimonio de Nobsa"
        subtitle="Iglesias, parques y senderos que cuentan nuestra historia"
        imageUrl="https://images.pexels.com/photos/158732/pexels-photo-158732.jpeg"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nuestro Patrimonio"
            subtitle="Descubre la riqueza histórica y natural de Nobsa"
            align="center"
          />

          <div className="flex justify-center mb-12">
            <div className="flex space-x-2 bg-gray-100 p-1 rounded-lg">
              {["all", "iglesia", "parque", "sendero"].map((tab) => (
                <button
                  key={tab}
                  className={`px-6 py-2 rounded-md font-medium transition-colors ${
                    activeTab === tab
                      ? "bg-white shadow-sm text-primary"
                      : "text-gray-600 hover:text-primary"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === "all"
                    ? "Todos"
                    : tab.charAt(0).toUpperCase() +
                      tab.slice(1) +
                      (tab === "iglesia" ? "s" : "es")}
                </button>
              ))}
            </div>
          </div>

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
                      <span className="ml-2 uppercase tracking-wide text-sm text-secondary font-semibold">
                        {item.type === "iglesia"
                          ? "Iglesia"
                          : item.type === "parque"
                          ? "Parque"
                          : "Sendero Ecológico"}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold font-heading text-primary mb-4">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>

                    <div className="bg-gray-50 p-4 rounded-md mb-4">
                      <h4 className="font-medium text-gray-800 mb-1">
                        Valor histórico:
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {item.historicalValue}
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-md">
                      <h4 className="font-medium text-gray-800 mb-1">
                        Ubicación:
                      </h4>
                      <p className="text-gray-600 text-sm">{item.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Historia de Nobsa"
            subtitle="Conoce cómo nuestro patrimonio ha sido formado a través de los siglos"
          />

          <div className="bg-white rounded-lg shadow-md overflow-hidden mt-8">
            <div className="md:flex">
              <div className="md:w-2/5">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/031/399/179/large_2x/beautiful-central-square-and-the-san-jeronimo-parish-temple-of-the-small-town-of-nobsa-well-known-for-the-traditional-handmade-ruanas-in-the-region-of-boyaca-in-colombia-photo.jpg"
                  alt="Historia de Nobsa"
                  className="h-full w-120 object-cover md:h-full"
                />
              </div>
              <div className="md:w-3/5 p-8">
                <h3 className="text-2xl font-semibold font-heading text-primary mb-4">
                  De asentamiento indígena a municipio turístico
                </h3>
                <p className="text-gray-600 mb-4">
                  Nobsa, cuyo nombre en lengua muisca significa "Llamas de
                  color" o "Vapor que ondula", fue inicialmente un asentamiento
                  indígena de la cultura muisca. Con la llegada de los españoles
                  en el siglo XVI, se fundó oficialmente el poblado que hoy
                  conocemos.
                </p>
                <p className="text-gray-600 mb-4">
                  A lo largo de los siglos, Nobsa ha sido testigo de importantes
                  acontecimientos históricos, como el paso del ejército
                  libertador durante las guerras de independencia. Su ubicación
                  estratégica y la riqueza de sus tierras la convirtieron en un
                  importante centro agrícola y, posteriormente, industrial con
                  el establecimiento de empresas como Acerías Paz del Río.
                </p>
                <p className="text-gray-600">
                  Hoy en día, Nobsa destaca por su compromiso con la
                  preservación de sus tradiciones artesanales, especialmente los
                  tejidos en lana virgen, y por convertirse en un destino
                  turístico que ofrece a sus visitantes la oportunidad de
                  conocer el auténtico patrimonio cultural boyacense.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PatrimonioPage;
