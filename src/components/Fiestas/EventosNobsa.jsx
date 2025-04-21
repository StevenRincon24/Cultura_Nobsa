import React from "react";
import { upcomingEvents } from "@/data/data";
import { Calendar, Clock } from "lucide-react";
import Hero from "@/section/Hero";

const Events = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="Eventos y Festividades"
        subtitle="Celebraciones que mantienen viva nuestra tradición"
        imageUrl="https://images.pexels.com/photos/6177607/pexels-photo-6177607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <section id="eventos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Eventos y Festividades
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre los próximos eventos culturales y festividades que podrás
              disfrutar en tu visita a Nobsa.
            </p>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
          </div>

          <div className="bg-red-50 rounded-lg p-8 mb-12">
            <div className="flex items-center justify-center mb-6">
              <Calendar className="text-red-600 mr-2" size={28} />
              <h3 className="text-2xl font-bold text-gray-800">
                Calendario de Eventos {new Date().getFullYear()}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {monthNames.map((month, index) => (
                <div
                  key={month}
                  className={`p-4 rounded-lg ${
                    index === currentMonth
                      ? "bg-red-600 text-white"
                      : "bg-white text-gray-800"
                  }`}
                >
                  <h4
                    className={`font-bold text-lg mb-2 ${
                      index === currentMonth ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {month}
                  </h4>
                  <ul className="space-y-2">
                    {index === 6 && (
                      <>
                        <li
                          className={`text-sm ${
                            index === currentMonth
                              ? "text-white"
                              : "text-gray-700"
                          }`}
                        >
                          15: Festival de la Ruana y el Pañolón
                        </li>
                        <li
                          className={`text-sm ${
                            index === currentMonth
                              ? "text-white"
                              : "text-gray-700"
                          }`}
                        >
                          16: Día de la Virgen del Carmen
                        </li>
                      </>
                    )}
                    {index === 7 && (
                      <li
                        className={`text-sm ${
                          index === currentMonth
                            ? "text-white"
                            : "text-gray-700"
                        }`}
                      >
                        22: Feria Artesanal de Nobsa
                      </li>
                    )}
                    {index === 8 && (
                      <li
                        className={`text-sm ${
                          index === currentMonth
                            ? "text-white"
                            : "text-gray-700"
                        }`}
                      >
                        5: Festival Gastronómico de Boyacá
                      </li>
                    )}
                    {index === 11 && (
                      <li
                        className={`text-sm ${
                          index === currentMonth
                            ? "text-white"
                            : "text-gray-700"
                        }`}
                      >
                        8: Fiesta de la Inmaculada Concepción
                      </li>
                    )}
                    {index !== 6 &&
                      index !== 7 &&
                      index !== 8 &&
                      index !== 11 && (
                        <li
                          className={`text-sm italic ${
                            index === currentMonth
                              ? "text-white"
                              : "text-gray-500"
                          }`}
                        >
                          No hay eventos programados
                        </li>
                      )}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Próximos Eventos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-200"
              >
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="md:col-span-1">
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:col-span-2">
                    <div className="flex items-center mb-3 text-red-600">
                      <Clock size={18} className="mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      {event.title}
                    </h4>
                    <p className="text-gray-700 mb-4">{event.description}</p>
                    <button className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition-colors">
                      Más Información
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="inline-block border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">
              Ver Todos los Eventos
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
