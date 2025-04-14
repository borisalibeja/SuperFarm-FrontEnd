import React, { ReactNode } from "react";
import { Link } from "react-router-dom"; // Import Link
import { FaShoppingCart } from "react-icons/fa";
import ProfileDropdown from "../components/ProfileDropdown";

interface Props {
  children: ReactNode;
  onLoginClick: () => void;
  onSignupClick: () => void;
  isAuthenticated: boolean;
  onLogoutClick: () => void;
  isPopupActive?: boolean;
}

const MainLayout: React.FC<Props> = ({children,
  isAuthenticated,
  onLoginClick,
  onSignupClick,
  onLogoutClick,
  isPopupActive = false }) => {
  return (
    <div className={`flex flex-col flex-wrap min-h-screen ${isPopupActive ? "filter blur-sm" : ""}`}>
      {/* Header */}
      <header className="h-[10vh] bg-black flex-wrap  flex items-center justify-between px-6 shadow  border-b-[0.5px] border-gray-500">
        {/* Left: App Name */}
        <div className="text-xl text-white font-bold">Local Farm</div>

        {/* Middle: Search Bar */}
        <div className="flex-1 flex justify-center pl-22 text-white ">
          <input
            type="text"
            placeholder="Search products..."
            className="w-1/4 p-2 rounded-full bg-gray-700 flex-wrap "
          />
        </div>

        {/* Right: Auth/Profile and Cart */}
        <div className="flex gap-4 flex-wrap items-center">
          {isAuthenticated ? (
            <>
              {/* Profile Icon with Dropdown */}
              <ProfileDropdown onLogoutClick={onLogoutClick} />

              {/* Shopping Cart Icon */}
              <FaShoppingCart size={24} className="cursor-pointer bg-white" />
            </>
          ) : (
            <>
              {/* Log In and Sign Up Buttons */}
              <button
                className="text-white px-4 py-1 rounded-full cursor-pointer hover:bg-gray-700"
                onClick={onLoginClick}
              >
                Log In
              </button>
              <button
                className="text-white px-4 py-1 rounded-full cursor-pointer hover:bg-gray-700"
                onClick={onSignupClick}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex-wrap bg-black">
        <div className="w-full flex h-[10vh] bg-black  flex-wrap items-center justify-center">
          <div className="px-4 py-2 flex bg-black  text-white rounded-full mx-2 cursor-pointer hover:bg-gray-700">
            <Link to="/products">Products </Link>
          </div>
          <div className="px-4 py-2 flex bg-black text-white rounded-full mx-2 cursor-pointer hover:bg-gray-700">
            <Link to="/farms">Farms </Link>
          </div>
          <div className="px-4 py-2 flex bg-black text-white rounded-full mx-2 cursor-pointer hover:bg-gray-700">
            <Link to="/map">Map </Link>
          </div>
        </div>
        {children}
      </main>

      {/* Footer */}
      <footer className="h-[10vh] bg-gray-800 text-center text-sm p-4 text-white">
        <p>© 2025 Local Farm. All rights reserved.</p>
        <p>Contact: localfarm@example.com</p>
      </footer>
    </div>
  );
};

export default MainLayout;
