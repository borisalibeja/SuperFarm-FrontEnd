import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Products from "./pages/MainPages/Products";
import Farms from "./pages/MainPages/Farms";
import Map from "./pages/MainPages/Map";
import PersonalInfo from "./pages/ProfilePages/PersonalInfo";
import Settings from "./pages/ProfilePages/Settings";
import Addresses from "./pages/ProfilePages/Addresses";
import Help from "./pages/ProfilePages/Help";

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Products
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          }
        />
        <Route
          path="/products"
          element={
            <Products
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          }
        />
        <Route
          path="/farms"
          element={
            <Farms searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          }
        />
        <Route
          path="/map"
          element={
            <Map searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          }
        />
        <Route path="/profile" element={<PersonalInfo />} />
        <Route path="/profile/addresses" element={<Addresses />} />
        <Route path="/profile/help" element={<Help />} />
        <Route path="/profile/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default App;
