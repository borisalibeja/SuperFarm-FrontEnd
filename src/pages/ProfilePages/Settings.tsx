import React, { useState } from "react";
import ProfileLayout from "../../layouts/ProfileLayouts";
import EmailPopup from "../../components/settingsComponents/EmailPopup";
import PhoneNrPopup from "../../components/settingsComponents/PhoneNrPopUp";
import NamePopUp from "../../components/settingsComponents/NamePopUp";
import DeletePopup from "../../components/settingsComponents/DeletePopUp";

const Settings: React.FC = () => {
  const [isEmailPopupOpen, setIsEmailPopupOpen] = useState(false);
  const [isNumberPopupOpen, setIsNumberPopupOpen] = useState(false);
  const [isNamePopupOpen, setIsNamePopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [isReceiptsEnabled, setIsReceiptsEnabled] = useState(true);

  const toggleDeletePopup = () => {
    setIsDeletePopupOpen(!isDeletePopupOpen);
  };

  const handleDeleteAccount = (reason: string) => {
    console.log("Account deleted for reason:", reason);
    // Add account deletion logic here
  };

  const toggleNamePopup = () => {
    setIsNamePopupOpen(!isNamePopupOpen);
  };
  const toggleEmailPopup = () => {
    setIsEmailPopupOpen(!isEmailPopupOpen);
  };

  const toggleNumberPopup = () => {
    setIsNumberPopupOpen(!isNumberPopupOpen);
  };
  const [email, setEmail] = useState("borissalibeja@gmail.com");
  const [number, setNumber] = useState("+355686719295");
  const [firstName, setFirstName] = useState("Boris");
  const [lastName, setLastName] = useState("Alibeja");

  const handleSaveEmail = (newEmail: string) => {
    setEmail(newEmail);
  };
  const handleSaveNumber = (newNumber: string) => {
    setNumber(newNumber);
  };

  const handleSaveName = (newFirsName: string, newLastName: string) => {
    setFirstName(newFirsName);
    setLastName(newLastName);
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
            <button
              className="text-blue-400 cursor-pointer"
              onClick={toggleNamePopup}
            >
              Boris Alibeja
            </button>
          </li>

          {/* Delete Account */}
          <li className="flex justify-between items-center border-b border-gray-700 pb-4">
            <p className="font-bold">Delete account</p>
            <button
              className="text-red-500 cursor-pointer"
              onClick={toggleDeletePopup}
            >
              Delete
            </button>
          </li>

          {/* Send Receipts */}
          <li className="flex justify-between items-center border-b border-gray-700 pb-4">
            <p className="font-bold">Send receipts to email</p>
            <div
              className={`relative w-12 h-6 rounded-full cursor-pointer transition-colors ${
                isReceiptsEnabled ? "bg-green-500" : "bg-gray-500"
              }`}
              onClick={() => setIsReceiptsEnabled(!isReceiptsEnabled)}
            >
              <div
                className={`absolute w-6 h-6 bg-white rounded-full shadow transform transition-transform ${
                  isReceiptsEnabled ? "translate-x-6" : "translate-x-0"
                }`}
              ></div>
            </div>
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
        <NamePopUp
          isOpen={isNamePopupOpen}
          onClose={toggleNamePopup}
          firstName={firstName}
          lastName={lastName}
          onSave={handleSaveName}
        />
        <DeletePopup
          isOpen={isDeletePopupOpen}
          onClose={toggleDeletePopup}
          onDelete={handleDeleteAccount}
        />
      </div>
    </ProfileLayout>
  );
};

export default Settings;
