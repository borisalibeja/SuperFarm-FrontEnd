import { useState, useEffect } from "react";
import AuthPopup from "../components/AuthPopup";
import MainLayout from "../layouts/MainLayout";
import ProductCatalog from "../components/ProductCatalog";

const Products: React.FC = () => {
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

  return (
    <>
      <MainLayout
        isAuthenticated={isAuthenticated}
        onLoginClick={handleLogin}
        onSignupClick={handleSignup}
        onLogoutClick={handleLogout}
        isPopupActive={!!authMode}
      >

        {/* Page-specific content goes here */}
        <div className="w-full flex h-[20vh] bg-black  flex-wrap items-center justify-center">
          <div className="flex flex-col p-2 items-center cursor-pointer">
            <div className="w-33 h-22 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1"></div>
            <p className=" text-gray-200">Fruits</p>
          </div>
          <div className="flex flex-col p-2 items-center cursor-pointer">
            <div className="w-33 h-22 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1"></div>
            <p className=" text-gray-200">Vegetables</p>
          </div>
          <div className="flex flex-col p-2 items-center cursor-pointer">
            <div className="w-33 h-22 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1"></div>
            <p className=" text-gray-200">Grains</p>
          </div>
          <div className="flex flex-col p-2 items-center cursor-pointer">
            <div className="w-33 h-22 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1"></div>
            <p className=" text-gray-200">Dairy</p>
          </div>
          <div className="flex flex-col p-2 items-center cursor-pointer">
            <div className="w-33 h-22 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1"></div>
            <p className=" text-gray-200">Meat</p>
          </div>
          <div className="flex flex-col p-2 items-center cursor-pointer">
            <div className="w-33 h-22 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1"></div>
            <p className=" text-gray-200">Sea Food</p>
          </div>
          <div className="flex flex-col p-2 items-center cursor-pointer">
            <div className="w-33 h-22 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1"></div>
            <p className=" text-gray-200">Plants</p>
          </div>
          <div className="flex flex-col p-2 items-center cursor-pointer">
            <div className="w-33 h-22 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1"></div>
            <p className=" text-gray-200">Other</p>
          </div>
        </div>
        {/* Product Catalog */}
        <ProductCatalog />
      </MainLayout>

      {authMode && (
        <AuthPopup mode={authMode} onClose={() => setAuthMode(null)} onSuccess={handleAuthSuccess}/>
      )}
    </>
  );
};

export default Products;
