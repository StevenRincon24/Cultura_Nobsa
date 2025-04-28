import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

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
        {
          label: "Rutas gastronómicas",
          icon: <FaRoute />,
          link: "/gastronomia/rutas-gastronomicas",
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
        { label: "Hoteles", icon: <FaHotel />, link: "/hoteles" },
        {
          label: "Atractivos turísticos",
          icon: <FaMapMarkedAlt />,
          link: "/turismo/atractivos",
        },
        { label: "¿Cómo llegar?", icon: <FaRoute />, link: "/como-llegar" },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setUserMenuOpen(false);
    setOpenSubmenu(null);
  }, [location]);

  const toggleSubmenu = (label) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-white text-gray-900 shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="flex justify-between items-center p-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="https://i.postimg.cc/fbMZCBs1/logo-alcaldia-horizontal-nuevo.png"
            alt="Logo"
            className="h-16 md:h-20"
          />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu */}
        <div
          className={`absolute top-full left-0 w-full bg-white md:relative md:bg-transparent md:flex md:items-center md:w-auto transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0">
            {menuItems.map((item, index) => {
              const hasSubmenu = !!item.submenu;
              const isActive = location.pathname.includes(item.link);

              return (
                <li key={index} className="relative w-full md:w-auto">
                  <div className="flex flex-col md:flex-row">
                    <Link
                      to={item.link}
                      onClick={() => {
                        setIsOpen(false);
                        setOpenSubmenu(null);
                      }}
                      className={`flex items-center justify-between gap-2 px-4 py-3 font-semibold rounded transition-all duration-300 w-full ${
                        isActive
                          ? isScrolled
                            ? "text-blue-500"
                            : "text-blue-300"
                          : isScrolled
                          ? "text-gray-900"
                          : "text-white"
                      } hover:${isScrolled ? "bg-gray-100" : "bg-white/10"}`}
                    >
                      <span className="flex items-center gap-2">
                        {item.icon}
                        {item.label}
                      </span>
                      {hasSubmenu && (
                        <FaChevronDown
                          className={`transform transition-transform duration-200 ${
                            openSubmenu === item.label ? "rotate-180" : ""
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            toggleSubmenu(item.label);
                          }}
                        />
                      )}
                    </Link>

                    {/* Submenu for Mobile */}
                    {hasSubmenu && openSubmenu === item.label && (
                      <ul className="flex flex-col bg-gray-100 md:absolute md:bg-white md:shadow-lg md:border md:rounded-md md:mt-2 md:w-56 z-50">
                        {item.submenu.map((sub, idx) => (
                          <li key={idx}>
                            <Link
                              to={sub.link}
                              onClick={() => {
                                setIsOpen(false);
                                setOpenSubmenu(null);
                              }}
                              className="flex items-center gap-2 px-6 py-3 hover:bg-gray-200 text-gray-800"
                            >
                              {sub.icon}
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              );
            })}

            {/* Usuario */}
            {isAuthenticated ? (
              <li className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 px-4 py-3 mt-2 md:mt-0 font-semibold rounded bg-blue-500 text-white transition-all"
                >
                  {user.username}
                  <FaChevronDown
                    className={`transform transition-transform duration-200 ${
                      userMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {userMenuOpen && (
                  <div className="flex flex-col md:absolute right-0 mt-2 w-full md:w-40 bg-white border border-gray-200 rounded shadow-md z-50">
                    <Link
                      to="/perfil"
                      className="block px-4 py-3 hover:bg-gray-100 text-gray-800"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      Perfil
                    </Link>
                    <Link
                      to="/registro"
                      className="block px-4 py-3 hover:bg-gray-100 text-gray-800"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      Crear usuario
                    </Link>
                    <button
                      onClick={() => {
                        logOut(navigate);
                        setUserMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-gray-100 text-red-500"
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
                  className="flex items-center justify-center gap-2 px-4 py-3 font-semibold rounded bg-blue-500 text-white hover:bg-blue-700 transition-all mt-2 md:mt-0"
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
