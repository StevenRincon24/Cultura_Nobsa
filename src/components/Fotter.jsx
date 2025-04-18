import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 text-center">
        {/* Sección Izquierda */}
        <div className="flex flex-col items-center justify-center h-full text-center md:text-left">
          <h2 className="text-xl font-bold">NOBSA, CULTURA Y TURISMO</h2>
          <div className="flex gap-4 mt-4">
            <FaFacebook className="text-2xl cursor-pointer hover:text-blue-500 transition duration-300" />
            <FaTwitter className="text-2xl cursor-pointer hover:text-blue-400 transition duration-300" />
            <FaYoutube className="text-2xl cursor-pointer hover:text-red-500 transition duration-300" />
          </div>
          <Link
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg font-bold hover:bg-red-600 transition duration-300"
            to="/login"
          >
            USUARIO ADMINISTRADOR
          </Link>
        </div>

        {/* Sección Derecha */}
        <div className="flex flex-col items-center justify-center h-full text-center md:text-left space-y-2">
          <img
            src="https://i.postimg.cc/fbMZCBs1/logo-alcaldia-horizontal-nuevo.png"
            alt="Logo"
            className="h-20 hover:scale-105 transition duration-300"
          />
          <p className="hover:text-red-400 transition duration-300">
            &copy; 2025 Alcaldía de Nobsa. &copy; 2025 Nobsa, Cultura y Turismo.
          </p>

          <p className="hover:text-gray-300 transition duration-300">
            Secretaría de Cultura y Turismo - Horario de 7:30 a.m. a 12:00 m y
            de 2:00 p.m. a 6:00 p.m.
          </p>
          <p className="hover:text-gray-300 transition duration-300">
            Dirección: Cl 6 9-01, Parque Principal, Nobsa - Boyacá.
          </p>
          <p className="hover:text-gray-300 transition duration-300">
            Email: cultura@nobsa-boyaca.gov.co | turismo@nobsa-boyaca.gov.co
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
