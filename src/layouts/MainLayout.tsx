import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import { FaShoppingCart } from "react-icons/fa";
import ProfileDropdown from "../components/homeComponents/ProfileDropdown";
import AuthPopup from "../components/homeComponents/AuthPopup";

interface MainLayoutProps {
  children: React.ReactNode;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  clearCategoryFilter: () => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  searchQuery,
  setSearchQuery,
  clearCategoryFilter,
}) => {
  const [authMode, setAuthMode] = useState<"login" | "signup" | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsAuthenticated(!!token); // Set to true if token exists
  }, []);

  const handleLogin = () => {
    setAuthMode("login");
  };

  const handleSignup = () => {
    setAuthMode("signup");
  };

  const handleLogout = () => {
    // Clear the authentication tokens and update state
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsAuthenticated(false);
  };

  const handleAuthSuccess = () => {
    // Called after login or signup is successful
    setAuthMode(null); // Close the popup
    setIsAuthenticated(true); // Update the authentication state
    // Example: Store tokens in localStorage for session management
    localStorage.setItem("accessToken", "dummyAccessToken");
    localStorage.setItem("refreshToken", "dummyRefreshToken");
  };
  // Fetch products when the component mounts or when the search query changes

  return (
    <div
      className={`flex flex-col flex-wrap min-h-screen "filter blur-sm" : ""}`}
    >
      {/* Header */}
      <header className=" fixed top-0 left-0 w-full h-[10vh] bg-black flex-wrap  flex items-center justify-between px-6 shadow  border-b-[0.5px] border-gray-500 z-50">
        {/* Left: App Name */}
        <div
          className="text-xl text-white curso-pointer font-bold"
          onClick={clearCategoryFilter}
        >
          <Link to={"/products"}>Local Farm</Link>
        </div>
        {/* Search Bar */}
        <div className="flex-1 flex justify-center items-center pl-30 text-white ">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search ..."
            className="w-1/4 p-2 rounded-full bg-gray-700 flex-wrap "
          />
        </div>

        {/* Right: Auth/Profile and Cart */}
        <div className="flex gap-4  items-center min-w-[220px] justify-end">
          {isAuthenticated ? (
            <>
              {/* Profile Icon with Dropdown */}
              <ProfileDropdown onLogoutClick={handleLogout} />

              {/* Shopping Cart Icon */}
              <FaShoppingCart
                size={42}
                className="cursor-pointer focus:outline-none bg-gray-400 rounded-full p-2 hover:bg-gray-100 transition duration-200 ease-in-out "
              />
            </>
          ) : (
            <>
              {/* Log In and Sign Up Buttons */}
              <button
                className="text-white px-4 py-1 rounded-full cursor-pointer hover:bg-gray-700"
                onClick={handleLogin}
              >
                Log In
              </button>
              <button
                className="text-white px-4 py-1 rounded-full cursor-pointer hover:bg-gray-700"
                onClick={handleSignup}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex-wrap pt-[12vh] bg-black">
        <div className="w-full flex h-[10vh] bg-black  flex-wrap items-center justify-center">
          <div
            className="px-4 py-2 flex bg-black  text-white rounded-full mx-2 cursor-pointer hover:bg-gray-700"
            onClick={clearCategoryFilter}
          >
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
      {/* Auth Popup */}
      {authMode && (
        <AuthPopup
          mode={authMode}
          onClose={() => setAuthMode(null)}
          onSuccess={handleAuthSuccess}
        />
      )}
    </div>
  );
};

export default MainLayout;
