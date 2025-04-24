import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/MainPages/Products";
import React from "react";
import Products from "./pages/MainPages/Products";
import Farms from "./pages/MainPages/Farms";
import Map from "./pages/MainPages/Map";
import PersonalInfo from "./pages/ProfilePages/PersonalInfo";
import Settings from "./pages/ProfilePages/Settings";
import Addresses from "./pages/ProfilePages/Addresses";
import Help from "./pages/ProfilePages/Help";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/farms" element={<Farms />} />
        <Route path="/map" element={<Map />} />
        <Route path="/profile" element={<PersonalInfo />} />
        <Route path="/profile/addresses" element={<Addresses />} />
        <Route path="/profile/help" element={<Help />} />
        <Route path="/profile/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default App;
