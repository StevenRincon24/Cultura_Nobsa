import React from "react";
import SectionTitle from "../ui/SectionTitle";
import { MapPin, Navigation, Car, Bus } from "lucide-react";

const DirectionsSection = () => {
  return (
    <section className="py-16 bg-gray-50" id="directions">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Conociendo Nobsa"
          subtitle="Find your way to our beautiful municipality with these travel directions"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Navigation className="h-6 w-6 text-primary-600 mr-2" />
              Opciones de viaje
            </h3>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-3">
                  <Car className="h-5 w-5 text-primary-600 mr-2" />
                  <h4 className="text-lg font-medium text-gray-900">By Car</h4>
                </div>
                <p className="ml-7 text-gray-700">
                  Nobsa is located approximately 210 km from Bogotá. Take the
                  route through Tunja and Duitama, which will take about 3.5 to
                  4 hours. The roads are well-maintained, offering beautiful
                  scenic views of the Boyacá countryside.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-3">
                  <Bus className="h-5 w-5 text-primary-600 mr-2" />
                  <h4 className="text-lg font-medium text-gray-900">By Bus</h4>
                </div>
                <p className="ml-7 text-gray-700">
                  Regular bus services run from Bogotá to Sogamoso, with
                  connections to Nobsa. The journey takes approximately 4-5
                  hours. From Tunja, Duitama, or Sogamoso, there are frequent
                  local buses and shared taxis to Nobsa.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-3">
                  <MapPin className="h-5 w-5 text-primary-600 mr-2" />
                  <h4 className="text-lg font-medium text-gray-900">
                    Local Transportation
                  </h4>
                </div>
                <p className="ml-7 text-gray-700">
                  Within Nobsa, you can get around by foot, as the town center
                  is compact and walkable. For visiting surrounding areas, taxis
                  and local buses are available. Some attractions might require
                  hiring a local guide or driver.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <MapPin className="h-6 w-6 text-primary-600 mr-2" />
              Mapa de Nobsa
            </h3>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="aspect-w-16 aspect-h-9 h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.123456789!2d-72.123456789!3d5.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e1a123456789abc%3A0x123456789abcdef!2sNobsa%2C%20Boyac%C3%A1%2C%20Colombia!5e0!3m2!1ses!2sus!4v1612345678901!5m2!1ses!2sus"
                  width="100%"
                  height="100%"
                  className="rounded-lg"
                  loading="lazy"
                  allowFullScreen
                  title="Map of Nobsa"
                ></iframe>
              </div>

              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">
                  Key Locations:
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <MapPin className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-1" />
                    <span>Plaza Mayor de Nobsa - Town Center</span>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-1" />
                    <span>
                      Artisan Market - For traditional textiles and crafts
                    </span>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-1" />
                    <span>Templo de Nobsa - Main Church</span>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-1" />
                    <span>Parque Ecológico José Antonio de Herrera</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectionsSection;
