import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import InformacionNobsa from "./components/InformacionNobsa";
import Hoteles from "./components/Hoteles";
import Footer from "./components/Fotter";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/hoteles" element={<Hoteles />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
