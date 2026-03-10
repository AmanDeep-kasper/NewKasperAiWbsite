import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";

import AboutUs from "./component2/AboutUs.jsx";
import Solutionspopup from "./Soutionpopup/Solutionspopup.jsx";

import Footer from "./components/Footer.jsx";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AboutUs/>} />

      </Routes>
<Footer/>
    </BrowserRouter>
  );
}

export default App;