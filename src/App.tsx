import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Products";
import React from "react";
import Products from "./pages/Products";
import Farms from "./pages/Farms";
import Map from "./pages/Map";
import PersonalInfo from "./pages/PersonalInfo";
import Settings from "./pages/Settings";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/farms" element={<Farms />} />
        <Route path="/map" element={<Map />} />
        <Route path="/profile" element={<PersonalInfo />} />
        <Route path="/profile/settings" element={<Settings />} />

      </Routes>
    </Router>
  );
};

export default App;