import React, { ReactNode } from "react";
import { FaShoppingCart } from "react-icons/fa";
import ProfileDropdown from "../components/ProfileDropdown";

interface Props {
  children: ReactNode;
  onLoginClick: () => void;
  onSignupClick: () => void;
  isAuthenticated: boolean;
  onLogoutClick: () => void;
}

const MainLayout: React.FC<Props> = ({   children,
  isAuthenticated,
  onLoginClick,
  onSignupClick,
  onLogoutClick, }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="h-[10vh] bg-gray-300 flex items-center justify-between px-6 shadow">
        {/* Left: App Name */}
        <div className="text-xl font-bold">Local Farm</div>

        {/* Middle: Search Bar */}
        <div className="flex-1 flex justify-center">
          <input
            type="text"
            placeholder="Search products..."
            className="w-1/2 p-2 rounded border"
          />
        </div>

        {/* Right: Auth/Profile and Cart */}
        <div className="flex gap-4 items-center">
          {isAuthenticated ? (
            <>
              {/* Profile Icon with Dropdown */}
              <ProfileDropdown onLogoutClick={onLogoutClick} />

              {/* Shopping Cart Icon */}
              <FaShoppingCart size={24} className="cursor-pointer" />
            </>
          ) : (
            <>
              {/* Log In and Sign Up Buttons */}
              <button
                className="text-black px-4 py-1 rounded cursor-pointer hover:underline"
                onClick={onLoginClick}
              >
                Log In
              </button>
              <button
                className="text-black px-4 py-1 rounded cursor-pointer hover:underline"
                onClick={onSignupClick}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">{children}</main>

      {/* Footer */}
      <footer className="h-[10vh] bg-gray-200 text-center text-sm p-4 text-gray-600">
        <p>© 2025 Local Farm. All rights reserved.</p>
        <p>Contact: localfarm@example.com</p>
      </footer>
    </div>
  );
};

export default MainLayout;
