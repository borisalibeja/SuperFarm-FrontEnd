
import AuthPopup from "../components/AuthPopup";
import MainLayout from "../layouts/MainLayout";
import FarmCatalog from "../components/FarmCatalog";
import { useEffect, useState } from "react";

const Farms: React.FC = () => {

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
        onLogoutClick={handleLogout}>
        {/* Product Catalog */}
        <FarmCatalog />
      </MainLayout>
        {authMode && (
        <AuthPopup mode={authMode} onClose={() => setAuthMode(null)} onSuccess={handleAuthSuccess}/>
      )}
    </>
  );
};

export default Farms;
