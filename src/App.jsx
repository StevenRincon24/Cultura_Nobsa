import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import InformacionNobsa from "./components/Index/InformacionNobsa";
import Hoteles from "./components/Hospedaje/Hoteles";
import Footer from "./components/Fotter";
import RutaGastronomica from "./components/Gastronomia/Gastronomia";
import EventosNobsa from "./components/Eventos";
import ChatBotButton from "./components/Boot/ChatBot";
import IndexFiestas from "./components/Fiestas/IndexFiestas";
import { useEffect, useState } from "react";

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
  // Detectar si el dispositivo es móvil (ancho <= 768px)
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/hoteles" element={<Hoteles />} />
            <Route path="/gastronomia" element={<RutaGastronomica />} />
            <Route
              path="/eventos"
              element={
                isMobile ? <EventosNobsa /> : <IndexFiestas />
              } // Cambia según el dispositivo
            />
          </Routes>
        </div>
        <ChatBotButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
