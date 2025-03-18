import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaUtensils,
  FaLandmark,
  FaCalendarAlt,
  FaHotel,
  FaChartLine,
  FaLeaf,
  FaHome,
} from "react-icons/fa";
import { RiLoginCircleLine } from "react-icons/ri";

const menuItems = [
  {
    label: "Inicio",
    icon: <FaHome />,
    color: "bg-red-400",
    hoverColor: "hover:bg-blue-700",
    textColor: "text-red-900",
    activeTextColor: "text-red-300",
    link: "/",
  },
  {
    label: "GASTRONOMÍA",
    icon: <FaUtensils />,
    color: "bg-blue-500",
    hoverColor: "hover:bg-blue-700",
    textColor: "text-blue-900",
    activeTextColor: "text-blue-300",
    link: "/gastronomia",
  },
  {
    label: "PATRIMONIO",
    icon: <FaLandmark />,
    color: "bg-lime-400",
    hoverColor: "hover:bg-lime-600",
    textColor: "text-lime-900",
    activeTextColor: "text-lime-300",
    link: "/patrimonio",
  },
  {
    label: "EVENTOS",
    icon: <FaCalendarAlt />,
    color: "bg-yellow-400",
    hoverColor: "hover:bg-yellow-600",
    textColor: "text-yellow-900",
    activeTextColor: "text-yellow-300",
    link: "/eventos",
  },
  {
    label: "HOSPEDAJE",
    icon: <FaHotel />,
    color: "bg-orange-500",
    hoverColor: "hover:bg-orange-700",
    textColor: "text-orange-900",
    activeTextColor: "text-orange-900",
    link: "/hoteles",
  },

  {
    label: "INICAR SESIÓN",
    icon: <RiLoginCircleLine />,
    color: "bg-blue-200",
    hoverColor: "hover:bg-gray-700",
    textColor: "text-purple-900",
    activeTextColor: "text-purple-300",
    link: "/login",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div
          className={`md:flex md:items-center md:ml-auto bg-white md:static absolute top-16 right-0 w-full md:w-auto transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-2 p-4 md:p-0">
            {menuItems.map((item, index) => {
              const isActive = location.pathname === item.link;

              return (
                <li key={index} className="w-full md:w-auto">
                  <Link
                    to={item.link}
                    className={`flex items-center gap-2 px-4 py-2 font-semibold rounded transition-all duration-300 w-full md:w-auto ${
                      isActive ? item.activeTextColor : "text-white-900"
                    } ${item.color} ${item.hoverColor} hover:text-gray-200`}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
