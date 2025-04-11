import React from "react";
import { FaUserCircle } from "react-icons/fa";

interface Props {
  onLogoutClick: () => void;
}

const ProfileDropdown: React.FC<Props> = ({ onLogoutClick }) => {
  return (
    <div className="relative group">
      {/* Profile Icon */}
      <button className="focus:outline-none">
        <FaUserCircle size={28} className="cursor-pointer" />
      </button>

      {/* Dropdown */}
      <div className="absolute right-0 mt-2 hidden group-hover:block group-focus-within:block">
        <div className="bg-white border rounded shadow-lg">
          <ul className="text-sm text-gray-700">
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={onLogoutClick}
            >
              Logout
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Profile
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;