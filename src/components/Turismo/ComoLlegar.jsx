import React, { useState, useEffect } from "react";
import { Map, Navigation, Bus, MapPin, CloudSun } from "lucide-react";
import {
  FaSun,
  FaCloud,
  FaCloudShowersHeavy,
  FaSnowflake,
  FaSmog,
  FaMoon,
  FaCloudSun,
  FaCloudMoon,
  FaQuestionCircle,
} from "react-icons/fa";

import Hero from "@/section/Hero";
import axios from "axios";

const TripPlanner = () => {
  const [weather, setWeather] = useState(null);
  const weatherTranslations = {
    clearsky_day: "Despejado",
    clearsky_night: "Despejado",
    partlycloudy_day: "Parcialmente nublado",
    partlycloudy_night: "Parcialmente nublado",
    cloudy: "Nublado",
    lightrain: "Lluvia ligera",
    rain: "Lluvia",
    heavyrain: "Lluvia fuerte",
    lightsnow: "Nieve ligera",
    snow: "Nieve",
    fog: "Niebla",
    fair_day: "Mayormente despejado",
    fair_night: "Mayormente despejado",
  };

  const weatherIcons = {
    clearsky_day: <FaSun size={24} />,
    clearsky_night: <FaMoon size={24} />,
    partlycloudy_day: <FaCloudSun size={24} />,
    partlycloudy_night: <FaCloudMoon size={24} />,
    cloudy: <FaCloud size={24} />,
    lightrain: <FaCloudShowersHeavy size={24} />,
    rain: <FaCloudShowersHeavy size={24} />,
    heavyrain: <FaCloudShowersHeavy size={24} />,
    lightsnow: <FaSnowflake size={24} />,
    snow: <FaSnowflake size={24} />,
    fog: <FaSmog size={24} />,
    fair_day: <FaSun size={24} />,
    fair_night: <FaMoon size={24} />,
  };

  useEffect(() => {
    fetch(
      "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=5.77&lon=-72.95",
      {
        headers: {
          "User-Agent": "TuAppClima/1.0 (stevenrincon60@gmail.com)", // Reemplaza por tu email real
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const current = data.properties.timeseries[0];
        const temperature = current.data.instant.details.air_temperature;
        const condition =
          current.data.next_1_hours?.summary?.symbol_code || "desconocido";
        setWeather({ temperature, condition });
      })
      .catch((err) => console.error("Error al obtener el clima:", err));
  }, []);

  return (
    <div className="min-h-screen">
      <Hero
        title="¿Cómo Llegar a Nobsa?"
        subtitle="Descubre todo lo que nuestro municipio tiene para ofrecer"
        imageUrl="https://images.pexels.com/photos/2437291/pexels-photo-2437291.jpeg"
      />
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Planea tu Viaje
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre cómo llegar a Nobsa y los mejores lugares para visitar
              durante tu estancia.
            </p>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
          </div>

          {/* Clima */}
          {weather && (
            <div className="bg-white rounded-lg shadow-md p-6 mb-8 mx-auto max-w-md">
              <h4 className="text-xl font-semibold mb-4 text-center">
                Clima actual en Nobsa
              </h4>
              <div className="flex items-center justify-center">
                {/* Renderiza el ícono directamente */}
                <div className="text-red-600">
                  {weatherIcons[weather.condition] || (
                    <FaQuestionCircle size={24} />
                  )}
                </div>
                <div className="ml-4">
                  <p className="text-gray-700">
                    Temperatura: {weather.temperature}°C
                  </p>
                  <p className="text-gray-700">
                    Condición:{" "}
                    {weatherTranslations[weather.condition] || "Desconocida"}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Navigation className="mr-2 text-red-600" size={24} />
                Cómo Llegar
              </h3>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h4 className="text-xl font-semibold mb-4">Desde Bogotá</h4>
                <div className="space-y-4">
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <Bus className="text-red-600 mr-3" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">En autobús:</p>
                      <p className="text-gray-700">
                        Toma un autobús desde el Terminal de Transportes de
                        Bogotá hacia Sogamoso (3 horas). Desde allí, hay
                        servicios frecuentes de buses locales hacia Nobsa (20
                        minutos).
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <Map className="text-red-600 mr-3" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">En automóvil:</p>
                      <p className="text-gray-700">
                        Toma la ruta Bogotá - Tunja - Sogamoso - Nobsa
                        (aproximadamente 3.5 horas). La carretera está en buenas
                        condiciones y ofrece hermosos paisajes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-xl font-semibold mb-4">Desde Tunja</h4>
                <div className="space-y-4">
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <Bus className="text-red-600 mr-3" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">En autobús:</p>
                      <p className="text-gray-700">
                        Hay servicios regulares desde el Terminal de Tunja hacia
                        Sogamoso (1.5 horas). Desde Sogamoso, toma un bus local
                        a Nobsa (20 minutos).
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <Map className="text-red-600 mr-3" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">En automóvil:</p>
                      <p className="text-gray-700">
                        Sigue la ruta Tunja - Sogamoso - Nobsa (aproximadamente
                        1.5 horas). El trayecto es muy pintoresco y atraviesa
                        varios municipios tradicionales de Boyacá.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <MapPin className="mr-2 text-red-600" size={24} />
                Nuestra Ubicación
              </h3>

              <div className="bg-white rounded-lg shadow-md overflow-hidden h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31811.59343248611!2d-72.94443971543091!3d5.771071895562567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6a445ec4a65fd1%3A0x9e100ed64eea875d!2sNobsa%2C%20Boyac%C3%A1!5e0!3m2!1ses!2sco!4v1686774156186!5m2!1ses!2sco"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de Nobsa"
                ></iframe>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Festividades Locales
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="rounded-full overflow-hidden h-32 w-32 mx-auto mb-3 border-4 border-red-600">
                      <img
                        src="https://images.pexels.com/photos/6177607/pexels-photo-6177607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Festival de la Ruana"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-semibold mb-1">Festival de la Ruana</h4>
                    <p className="text-sm text-gray-600">Julio</p>
                  </div>

                  <div className="text-center">
                    <div className="rounded-full overflow-hidden h-32 w-32 mx-auto mb-3 border-4 border-red-600">
                      <img
                        src="https://images.pexels.com/photos/2253851/pexels-photo-2253851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Feria Artesanal"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-semibold mb-1">Feria Artesanal</h4>
                    <p className="text-sm text-gray-600">Agosto</p>
                  </div>

                  <div className="text-center">
                    <div className="rounded-full overflow-hidden h-32 w-32 mx-auto mb-3 border-4 border-red-600">
                      <img
                        src="https://images.pexels.com/photos/13080076/pexels-photo-13080076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Virgen del Carmen"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-semibold mb-1">Virgen del Carmen</h4>
                    <p className="text-sm text-gray-600">16 de Julio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TripPlanner;
