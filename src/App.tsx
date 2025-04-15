import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Products";
import React from "react";
import Products from "./pages/Products";
import Farms from "./pages/Farms";
import Map from "./pages/Map";
import Profile from "./layouts/Profile";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/farms" element={<Farms />} />
        <Route path="/map" element={<Map />} />
        <Route path="/profile" element={<Profile children={undefined} />}/>

      </Routes>
    </Router>
  );
};

export default App;