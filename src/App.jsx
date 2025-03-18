import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import InformacionNobsa from "./components/Index/InformacionNobsa";
import Hoteles from "./components/Hoteles";
import Footer from "./components/Fotter";
import RutaGastronomica from "./components/Gastronomia";
import EventosNobsa from "./components/Eventos";
import ChatBotButton from "./components/Boot/ChatBot";
import IndexFiestas from "./components/Fiestas/IndexFiestas";
function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/hoteles" element={<Hoteles />} />
            <Route path="/gastronomia" element={<RutaGastronomica />} />
            <Route path="/eventos" element={<EventosNobsa />} />
          </Routes>
        </div>
        <ChatBotButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
