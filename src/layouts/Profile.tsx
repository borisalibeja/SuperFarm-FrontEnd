import React, { ReactNode, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import ProfileDropdown from "../components/ProfileDropdown";
import AuthPopup from "../components/AuthPopup";
import { useNavigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}

const Profile: React.FC<Props> = ({children}) => {
    
  const [authMode, setAuthMode] = useState<"login" | "signup" | null>(null);
  const [, setIsAuthenticated] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogout = () => {
    // Clear the authentication tokens and update state
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsAuthenticated(false);

    // Redirect to the main layout page (e.g., "/")
    navigate("/products");
  };


  return (
    <div className={`flex flex-col flex-wrap min-h-screen "filter blur-sm" : ""}`}>
      {/* Header */}
      <header className="h-[10vh] bg-black flex-wrap  flex items-center justify-between px-6 shadow  border-b-[0.5px] border-gray-500">
        {/* Left: App Name */}
        <div className="text-xl text-white font-bold">Local Farm</div>

        {/* Right: Auth/Profile and Cart */}
        <div className="flex gap-4 flex-wrap items-center">
            <>
              {/* Profile Icon with Dropdown */}
              <ProfileDropdown onLogoutClick={handleLogout} />

              {/* Shopping Cart Icon */}
              <FaShoppingCart size={42} className="cursor-pointer focus:outline-none bg-gray-400 rounded-full p-2 hover:bg-gray-100 transition duration-200 ease-in-out " />
            </>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex-wrap bg-black">
        {children}
      </main>

      {/* Footer */}
      <footer className="h-[10vh] bg-gray-800 text-center text-sm p-4 text-white">
        <p>© 2025 Local Farm. All rights reserved.</p>
        <p>Contact: localfarm@example.com</p>
      </footer>
      {authMode && (
        <AuthPopup
          mode={authMode}
          onClose={() => setAuthMode(null)}
          onSuccess={() => {
            setIsAuthenticated(true); // Update authentication state
          }}
        />
      )}
    </div>
  );
};

export default Profile;
