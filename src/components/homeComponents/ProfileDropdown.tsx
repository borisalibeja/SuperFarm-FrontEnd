import React, { useEffect, useRef, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Props {
  onLogoutClick: () => void;
}

const ProfileDropdown: React.FC<Props> = ({ onLogoutClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Profile Icon */}
      <button
        onClick={toggleDropdown}
        className="focus:outline-none bg-gray-400 rounded-full p-2 hover:bg-gray-100 transition duration-200 ease-in-out"
      >
        <FaUserCircle size={28} className="cursor-pointer" />
      </button>

      {/* Dropdown */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-[250px] h-[200px]  font-semibold m-2 p-2 bg-gray-700 border rounded shadow-lg">
          <ul className="text-sm text-gray-700">
            <li className="px-4 py-2 text-white rounded-lg hover:bg-gray-500 cursor-pointer">
              <Link to="/profile">Profile </Link>
            </li>
            <li className="px-4 py-2 text-white rounded-lg hover:bg-gray-500 cursor-pointer">
              Start Selling
            </li>
            <li className="px-4 py-2 text-white rounded-lg hover:bg-gray-500 cursor-pointer">
              Language: English
            </li>
            <li className="px-4 py-2 text-white rounded-lg hover:bg-gray-500 cursor-pointer">
              Contact Suppport
            </li>
            <li
              className="px-4 py-2 text-white rounded-lg hover:bg-gray-500 cursor-pointer"
              onClick={onLogoutClick}
            >
              Log out
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;