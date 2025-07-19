import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Products from "./pages/MainHomePages/Products";
import Farms from "./pages/MainHomePages/Farms";
import Map from "./pages/MainHomePages/Map";
import PersonalInfo from "./pages/UserProfilePages/PersonalInfo";
import Settings from "./pages/UserProfilePages/Settings";
import Addresses from "./pages/UserProfilePages/Addresses";
import ProfileLayout from "./layouts/UserProfileLayout";
import Help from "./pages/UserProfilePages/Help";
import FarmProfileLayout from "./layouts/FarmProfileLayout";
import FarmInfo from "./pages/FarmProfilePages/FarmInfo";
import FarmAddresses from "./pages/FarmProfilePages/FarmAddresses";
import FarmSettings from "./pages/FarmProfilePages/FarmSettings";

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
        {/* Profile Pages */}
        <Route path="/user-profile" element={<ProfileLayout />}>
          <Route path="personal-info" element={<PersonalInfo />} />
          <Route path="address" element={<Addresses />} />
          <Route path="settings" element={<Settings />} />
          <Route path="help" element={<Help />} />
        </Route>

        <Route path="/farm-profile" element={<FarmProfileLayout />}>
          <Route path="farm-info" element={<FarmInfo />} />
          <Route path="farm-address" element={<FarmAddresses />} />
          <Route path="farm-settings" element={<FarmSettings />} />

          <Route path="personal-info" element={<PersonalInfo />} />
          <Route path="address" element={<Addresses />} />
          <Route path="settings" element={<Settings />} />
          <Route path="help" element={<Help />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
