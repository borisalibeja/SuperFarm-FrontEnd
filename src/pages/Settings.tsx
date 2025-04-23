import React, { useState } from "react";
import ProfileLayout from "../layouts/ProfileLayouts";
import EmailPopup from "../components/settingsComponents/EmailPopup";
import PhoneNrPopup from "../components/settingsComponents/PhoneNrPopUp";

const Settings: React.FC = () => {
  const [isEmailPopupOpen, setIsEmailPopupOpen] = useState(false);
  const [isNumberPopupOpen, setIsNumberPopupOpen] = useState(false);
  const toggleEmailPopup = () => {
    setIsEmailPopupOpen(!isEmailPopupOpen);
  };

  const toggleNumberPopup = () => {
    setIsNumberPopupOpen(!isNumberPopupOpen);
  };
  const [email, setEmail] = useState("borissalibeja@gmail.com");
  const [number, setNumber] = useState("+355686719295");

  const handleSaveEmail = (newEmail: string) => {
    setEmail(newEmail);
  };
  const handleSaveNumber = (newNumber: string) => {
    setNumber(newNumber);
  };

  return (
    <ProfileLayout>
      <div className="bg-black min-h-screen text-white py-10 px-6">
        {/* Settings List */}
        <ul className="space-y-8 items-center">
          {/* Country Selector */}
          <li className="flex justify-between items-center border-b border-gray-700 pb-4 ">
            <div>
              <p className="font-bold ">Country</p>
              <p className="text-sm text-gray-400">
                The selected country determines the currency of your referral
                code
              </p>
            </div>
            <select className="bg-gray-800 text-white p-2 rounded ">
              <option>Albania</option>
              <option>USA</option>
              <option>Canada</option>
            </select>
          </li>

          {/* Email */}
          <li className="flex justify-between items-center border-b border-gray-700 pb-4">
            <p className="font-bold">Email</p>
            <button
              className="text-blue-400 cursor-pointer"
              onClick={toggleEmailPopup}
            >
              borissalibeja@gmail.com
            </button>
          </li>

          {/* Mobile Number */}
          <li className="flex justify-between items-center border-b border-gray-700 pb-4">
            <p className="font-bold">Mobile number</p>
            <button
              className="text-blue-400 cursor-pointer"
              onClick={toggleNumberPopup}
            >
              +355686719295
            </button>
          </li>

          {/* Name */}
          <li className="flex justify-between items-center border-b border-gray-700 pb-4">
            <p className="font-bold">Name</p>
            <button className="text-blue-400 cursor-pointer">
              Boris Alibeja
            </button>
          </li>

          {/* Delete Account */}
          <li className="flex justify-between items-center border-b border-gray-700 pb-4">
            <p className="font-bold">Delete account</p>
            <button className="text-red-500 cursor-pointer">Delete</button>
          </li>

          {/* Send Receipts */}
          <li className="flex justify-between items-center border-b border-gray-700 pb-4">
            <p className="font-bold">Send receipts to email</p>
            <input
              type="checkbox"
              className="w-6 h-6 accent-green-500"
              defaultChecked
            />
          </li>
        </ul>
        {/* Email Popup */}
        <EmailPopup
          isOpen={isEmailPopupOpen}
          onClose={toggleEmailPopup}
          email={email}
          onSave={handleSaveEmail}
        />
        <PhoneNrPopup
          isOpen={isNumberPopupOpen}
          onClose={toggleNumberPopup}
          number={number}
          onSave={handleSaveNumber}
        />
      </div>
    </ProfileLayout>
  );
};

export default Settings;
