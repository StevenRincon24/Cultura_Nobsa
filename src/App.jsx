import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import InformacionNobsa from "./components/InformacionNobsa";
import Hoteles from "./components/Hoteles";
import Footer from "./components/Fotter";
import RutaGastronomica from "./components/Gastronomia";
import EventosNobsa from "./components/Eventos";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/hoteles" element={<Hoteles />} />
        <Route path="/gastronomia" element={<RutaGastronomica />} />
        <Route path="/eventos" element={<EventosNobsa />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
