import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import InformacionNobsa from "./components/Index/InformacionNobsa";
import Hoteles from "./components/Hospedaje/Hoteles";
import Footer from "./components/Fotter";
import RutaGastronomica from "./components/Gastronomia/Gastronomia";
import EventosNobsa from "./components/Fiestas/Eventos";
import ChatBotButton from "./components/Boot/ChatBot";
import IndexFiestas from "./components/Fiestas/IndexFiestas";
import { useEffect, useState } from "react";
import RegisterPage from "./components/RegistroUsuarios/Registro";
import { AuthProvider } from "./context/AuthContext";
import { HotelProvider } from "./context/HotelContext";
import Login from "./components/Login/Login";
import RutasProtegidas from "./components/RutasProtegidas";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PlatosTipicos from "./components/Gastronomia/PlatosTipicos";
import RestaurantsPage from "./components/Gastronomia/Restaurantes";
import PatrimonioPage from "./components/Patrimonio/Patrimonio";
import TourismPage from "./components/Turismo/Turismo";
import DirectionsSection from "./components/Turismo/DireccionNobsa";
// Hook personalizado para detectar si la pantalla es móvil
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}

function App() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <AuthProvider>
      <HotelProvider>
        <ToastContainer />

        <Router>
          <div className="app-container">
            <NavBar className="navbar" />{" "}
            {/* Asegúrate de que la clase sea correcta */}
            <div className="main-content">
              <Routes>
                <Route path="/" element={<Banner />} />
                <Route path="/login" element={<Login />} />

                <Route element={<RutasProtegidas />}>
                  <Route path="/registro" element={<RegisterPage />} />
                </Route>
                <Route path="/gastronomia" element={<RutaGastronomica />} />
                <Route
                  path="/gastronomia/platos-tipicos"
                  element={<PlatosTipicos />}
                />
                <Route
                  path="/gastronomia/restaurantes"
                  element={<RestaurantsPage />}
                />
                <Route path="/patrimonio" element={<PatrimonioPage />} />
                <Route path="/turismo" element={<TourismPage />} />
                <Route path="/como-llegar" element={<DirectionsSection />} />

                <Route
                  path="/eventos"
                  element={isMobile ? <EventosNobsa /> : <IndexFiestas />} // Cambia según el dispositivo
                />
                <Route path="/hoteles" element={<Hoteles />} />
              </Routes>
            </div>
            <ChatBotButton />
            <Footer />
          </div>
        </Router>
      </HotelProvider>
    </AuthProvider>
  );
}

export default App;
