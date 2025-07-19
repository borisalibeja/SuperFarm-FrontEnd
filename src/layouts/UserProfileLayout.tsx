import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProfileDropdown from "../components/homeComponents/ProfileDropdown";
import AuthPopup from "../components/homeComponents/AuthPopup";
import { useNavigate } from "react-router-dom";
import UserProvider from "../providers/UserProvider";

const ProfileLayout: React.FC = () => {
  const [authMode, setAuthMode] = useState<"login" | "signup" | null>(null);
  const [, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsAuthenticated(false);
    navigate("/products");
  };

  return (
    <UserProvider>
      <div className="bg-black">
        <div className="flex flex-col min-h-screen w-4/5 mx-auto bg-black">
          {/* Header */}
          <header className="h-[10vh] bg-black flex items-center justify-between px-10 shadow ">
            <div className="text-2xl text-white cursor-pointer font-serif">
              <Link to="/products">Local Farm</Link>
            </div>
            <div className="flex gap-4 items-center">
              <ProfileDropdown onLogoutClick={handleLogout} />
              <FaShoppingCart
                size={42}
                className="cursor-pointer focus:outline-none bg-gray-400 rounded-full p-2 hover:bg-gray-100 transition duration-200 ease-in-out"
              />
            </div>
          </header>

          {/* Main Content Area */}
          <main className="flex-1 flex flex-col bg-black">
            <div className="h-[11vh] bg-black text-white ">
              <div className="flex justify-between items-center h-full px-11">
                <div className="text-3xl cursor-pointer">Profile</div>
                <div className="text-2xl cursor-pointer">Contact Support</div>
              </div>
            </div>
            <div className="flex flex-1 flex-col">
              <nav className="w-full bg-black border-b-[0.5px] border-gray-600 text-white">
                <div className="flex text-xl justify-center gap-x-15 py-4 px-10">
                  <Link
                    to="/user-profile/personal-info"
                    className="font-semibold  hover:underline"
                  >
                    Personal Info
                  </Link>
                  <Link
                    to="/user-profile/address"
                    className="font-semibold  hover:underline"
                  >
                    Addresses
                  </Link>
                  <Link
                    to="/user-profile/settings"
                    className="font-semibold  hover:underline"
                  >
                    Settings
                  </Link>
                  <Link
                    to="/user-profile/help"
                    className="font-semibold  hover:underline"
                  >
                    Help
                  </Link>
                </div>
              </nav>
              <div className="flex-grow bg-gray-500 w-4/6 mx-auto overflow-y-auto">
                <Outlet />
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="h-[10vh] bg-black text-center text-sm p-4 text-white">
            <p>© 2025 Local Farm. All rights reserved.</p>
            <p>Contact: localfarm@example.com</p>
          </footer>

          {/* Auth Popup */}
          {authMode && (
            <AuthPopup
              mode={authMode}
              onClose={() => setAuthMode(null)}
              onSuccess={() => setIsAuthenticated(true)}
            />
          )}
        </div>
      </div>
    </UserProvider>
  );
};

export default ProfileLayout;
