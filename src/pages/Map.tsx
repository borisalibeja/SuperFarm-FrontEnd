import { useState, useEffect } from "react";
import AuthPopup from "../components/AuthPopup";
import MainLayout from "../layouts/MainLayout";

const Map: React.FC = () => {
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
      >

        {/* Page-specific content goes here */}
        <div className="w-full flex h-[20vh] bg-black  flex-wrap items-center justify-center">

        </div>
        {/* Product Catalog */}
      </MainLayout>

      {authMode && (
        <AuthPopup mode={authMode} onClose={() => setAuthMode(null)} onSuccess={handleAuthSuccess}/>
      )}
    </>
  );
};

export default Map;
