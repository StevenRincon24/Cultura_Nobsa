import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaUtensils,
  FaLandmark,
  FaCalendarAlt,
  FaHotel,
  FaHome,
  FaChevronDown,
  FaMapMarkedAlt,
  FaPlane,
  FaRoute,
} from "react-icons/fa";
import { RiLoginCircleLine, RiLogoutCircleLine } from "react-icons/ri";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [isGastronomiaOpen, setIsGastronomiaOpen] = useState(false);
  const [isTurismoOpen, setIsTurismoOpen] = useState(false);

  const { isAuthenticated, logOut, user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { label: "Inicio", icon: <FaHome />, link: "/" },
    {
      label: "GASTRONOMÍA",
      icon: <FaUtensils />,
      link: "/gastronomia",
      submenu: [
        {
          label: "Platos típicos",
          icon: <FaUtensils />,
          link: "/gastronomia/platos-tipicos",
        },
        {
          label: "Restaurantes",
          icon: <FaHotel />,
          link: "/gastronomia/restaurantes",
        },
      ],
    },
    { label: "PATRIMONIO", icon: <FaLandmark />, link: "/patrimonio" },
    { label: "EVENTOS", icon: <FaCalendarAlt />, link: "/eventos" },
    {
      label: "TURISMO",
      icon: <FaPlane />,
      link: "/turismo",
      submenu: [
        {
          label: "Hoteles",
          icon: <FaHotel />,
          link: "/hoteles",
        },
        {
          label: "Atractivos turísticos",
          icon: <FaMapMarkedAlt />,
          link: "/turismo/atractivos",
        },
        {
          label: "¿Cómo llegar?",
          icon: <FaRoute />,
          link: "/como-llegar",
        },
      ],
    },
  ];

  useEffect(() => {
    setIsOpen(false);
    setUserMenuOpen(false);
    setIsGastronomiaOpen(false);
    setIsTurismoOpen(false);
  }, [location]);

  return (
    <nav className="shadow-md bg-white w-full fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center p-4 md:px-8">
        <div className="flex items-center space-x-4">
          <img
            src="https://i.postimg.cc/fbMZCBs1/logo-alcaldia-horizontal-nuevo.png"
            alt="Logo"
            className="h-20"
          />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div
          className={`md:flex md:items-center md:ml-auto bg-white md:static absolute top-16 right-0 w-full md:w-auto transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4 p-4 md:p-0">
            {menuItems.map((item, index) => {
              const hasSubmenu = item.submenu;

              return (
                <li
                  key={index}
                  className="relative w-full md:w-auto"
                  onMouseEnter={() =>
                    item.label === "GASTRONOMÍA"
                      ? setIsGastronomiaOpen(true)
                      : item.label === "TURISMO"
                      ? setIsTurismoOpen(true)
                      : null
                  }
                  onMouseLeave={() =>
                    item.label === "GASTRONOMÍA"
                      ? setIsGastronomiaOpen(false)
                      : item.label === "TURISMO"
                      ? setIsTurismoOpen(false)
                      : null
                  }
                >
                  {hasSubmenu ? (
                    <>
                      <Link
                        to={item.link}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-2 px-4 py-2 font-semibold rounded transition-all duration-300 w-full ${
                          location.pathname.includes(item.link)
                            ? "text-blue-500"
                            : "text-gray-900"
                        } hover:bg-gray-200`}
                      >
                        {item.icon}
                        {item.label}
                        <FaChevronDown
                          className={`ml-1 transform transition-transform duration-200 ${
                            (item.label === "GASTRONOMÍA" &&
                              isGastronomiaOpen) ||
                            (item.label === "TURISMO" && isTurismoOpen)
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </Link>
                      {(item.label === "GASTRONOMÍA" && isGastronomiaOpen) ||
                      (item.label === "TURISMO" && isTurismoOpen) ? (
                        <ul className="absolute bg-white border border-gray-200 rounded shadow-md mt-2 w-56 z-50">
                          {item.submenu.map((sub, idx) => (
                            <li key={idx}>
                              <Link
                                to={sub.link}
                                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                                onClick={() => setIsOpen(false)}
                              >
                                {sub.icon}
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </>
                  ) : (
                    <Link
                      to={item.link}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-2 px-4 py-2 font-semibold rounded transition-all duration-300 ${
                        location.pathname === item.link
                          ? "text-blue-500"
                          : "text-gray-900"
                      } hover:bg-gray-200`}
                    >
                      {item.icon}
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}

            {isAuthenticated ? (
              <li className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 px-4 py-2 font-semibold rounded bg-blue-500 text-white transition-all"
                >
                  {user.username}
                  <FaChevronDown
                    className={`transform transition-transform duration-200 ${
                      userMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-md z-50">
                    <Link
                      to="/perfil"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      Perfil
                    </Link>
                    <Link
                      to="/registro"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      Crear usuario
                    </Link>
                    <button
                      onClick={() => {
                        logOut(navigate);
                        setUserMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                    >
                      <div className="flex items-center gap-2">
                        <RiLogoutCircleLine />
                        Cerrar sesión
                      </div>
                    </button>
                  </div>
                )}
              </li>
            ) : (
              <li>
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-4 py-2 font-semibold rounded bg-blue-500 text-white hover:bg-blue-700 transition-all"
                >
                  <RiLoginCircleLine />
                  Iniciar Sesión
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
