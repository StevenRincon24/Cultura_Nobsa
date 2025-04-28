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
    { label: "HOTELES", icon: <FaHotel />, link: "/hoteles" },
    { label: "ARTESANIAS", icon: <FaLandmark />, link: "/artesanias" },
    {
      label: "TURISMO",
      icon: <FaPlane />,
      link: "/turismo",
      submenu: [
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

  const handleMouseEnter = (label) => {
    if (window.innerWidth >= 768) {
      setOpenSubmenu(label);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setOpenSubmenu(null);
    }
  };

  const handleSubmenuClick = (label) => {
    if (window.innerWidth < 768) {
      setOpenSubmenu(openSubmenu === label ? null : label);
    }
  };

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-white shadow-md text-gray-900"
          : "bg-white md:bg-transparent md:text-white md:shadow-none text-gray-900"
      }`}
    >
      <div className="relative flex justify-between items-center px-4 py-3 md:px-8">
        {/* Logo */}
        <Link to="/">
          <img
            src="https://i.postimg.cc/fbMZCBs1/logo-alcaldia-horizontal-nuevo.png"
            alt="Logo"
            className="h-16 md:h-20 object-contain"
          />
        </Link>

        {/* Botón hamburguesa */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-4 top-5 md:hidden text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menú principal */}
        <div
          className={`fixed md:static top-20 inset-x-0 bg-white md:bg-transparent md:flex md:items-center transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0">
            {menuItems.map((item, index) => {
              const hasSubmenu = !!item.submenu;
              const isActive =
                (item.link === "/" && location.pathname === "/") ||
                (item.link !== "/" && location.pathname.startsWith(item.link));

              return (
                <li
                  key={index}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    className={`flex justify-between items-center gap-2 cursor-pointer px-4 py-2 rounded-md transition-all ${
                      isActive
                        ? "text-blue-600 font-bold"
                        : "text-gray-900 md:text-white md:hover:text-blue-300"
                    } hover:bg-gray-100 md:hover:bg-transparent`}
                  >
                    <Link
                      to={item.link}
                      className="flex items-center gap-2"
                      onClick={() => {
                        if (window.innerWidth < 768 && hasSubmenu) {
                          // Si es mobile y tiene submenu, primero abre el submenu en vez de navegar inmediatamente
                          handleSubmenuClick(item.label);
                        } else {
                          // Si no, sigue el link normal
                          setIsOpen(false);
                        }
                      }}
                    >
                      {item.icon}
                      {item.label}
                    </Link>
                    {hasSubmenu && (
                      <FaChevronDown
                        onClick={() => handleSubmenuClick(item.label)}
                        className={`transition-transform ${
                          openSubmenu === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </div>

                  {/* Submenú */}
                  {hasSubmenu && openSubmenu === item.label && (
                    <ul className="md:absolute bg-white md:border rounded-md shadow-lg w-56 mt-2 md:mt-0 text-gray-900">
                      {item.submenu.map((subItem, idx) => (
                        <li key={idx}>
                          <Link
                            to={subItem.link}
                            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                            onClick={() => {
                              setIsOpen(false);
                              setOpenSubmenu(null);
                            }}
                          >
                            {subItem.icon}
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}

            {/* Usuario */}
            {isAuthenticated ? (
              <li className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  {user.username}
                  <FaChevronDown
                    className={`transition-transform ${
                      userMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {userMenuOpen && (
                  <ul className="absolute right-0 bg-white border rounded-md shadow-lg mt-2 w-44 text-gray-900">
                    <li>
                      <Link
                        to="/perfil"
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        Perfil
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/registro"
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        Crear usuario
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          logOut(navigate);
                          setUserMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                      >
                        <div className="flex items-center gap-2">
                          <RiLogoutCircleLine />
                          Cerrar sesión
                        </div>
                      </button>
                    </li>
                  </ul>
                )}
              </li>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="flex items-center gap-2 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
                  onClick={() => setIsOpen(false)}
                >
                  <RiLoginCircleLine />
                  Iniciar sesión
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
