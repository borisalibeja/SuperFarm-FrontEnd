import React, { useState } from "react";
import EmailPopup from "../../components/settingsComponents/EmailPopup";
import PhoneNrPopup from "../../components/settingsComponents/PhoneNrPopUp";
import NamePopUp from "../../components/settingsComponents/NamePopUp";
import DeletePopup from "../../components/settingsComponents/DeletePopUp";
import { useUser } from "../../hooks/useUser";
import axios from "axios";
import { User } from "../../types/User";
import { useNavigate } from "react-router-dom";

const Settings: React.FC = () => {
  const [isEmailPopupOpen, setIsEmailPopupOpen] = useState(false);
  const [isNumberPopupOpen, setIsNumberPopupOpen] = useState(false);
  const [isNamePopupOpen, setIsNamePopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [isReceiptsEnabled, setIsReceiptsEnabled] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();
  const { user, setUser } = useUser();

  const toggleDeletePopup = () => {
    setIsDeletePopupOpen(!isDeletePopupOpen);
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

  const handleSaveEmail = async (newEmail: string) => {
    if (!user || !user.userId) {
      console.error("User or userId is undefined");
      return;
    }

    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.patch(
        `http://localhost:5035/UpdateMyUser`,
        { email: newEmail }, // Request body
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Explicitly type the updated user object
      const updatedUser: User = {
        ...user,
        email: response.data.email || newEmail, // Fallback to newEmail if response.data.email is undefined
      };

      setUser(updatedUser);
    } catch (error) {
      console.error("Error updating email:", error);
    }
  };

  const handleSaveNumber = async (newNumber: string) => {
    if (!user || !user.userId) {
      console.error("User or userId is undefined");
      return;
    }
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.patch(
        `http://localhost:5035/UpdateMyUser`,
        { phoneNr: newNumber }, // Request body
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const updatedUser: User = {
        ...user,
        userPhoneNr: response.data.phoneNr || newNumber,
      };

      setUser(updatedUser);
    } catch (error) {
      console.error("Error updating phone number:", error);
    }
  };

  const handleSaveName = async (newFirstName: string, newLastName: string) => {
    if (!user || !user.userId) {
      console.error("User or userId is undefined");
      return;
    }
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.patch(
        `http://localhost:5035/UpdateMyUser`,
        {
          firstName: newFirstName,
          lastName: newLastName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const updatedUser: User = {
        ...user,
        firstName: response.data.firstName || newFirstName,
        lastName: response.data.lastName || newLastName,
      };

      setUser(updatedUser);
    } catch (error) {
      console.error("Error updating name:", error);
    }
  };

  const handleDeleteMyAccount = async () => {
    if (!user || !user.userId) {
      console.error("User or userId is undefined");
      return;
    }
    if (isDeleting) {
      return; // Prevent duplicate requests
    }
    setIsDeleting(true);
    try {
      const token = localStorage.getItem("accessToken");
      await axios.delete(`http://localhost:5035/delete-my-user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.removeItem("accessToken");
      setUser(null);
      navigate("/");
    } catch (error) {
      console.error("Error deleting account:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  if (!user) {
    return (
      <p className="text-white text-center">No user information available.</p>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white py-10 px-6">
      {/* Settings List */}
      <ul className="space-y-8 items-center">
        {/* Name */}
        <li className="flex justify-between items-center border-b border-gray-700 pb-4">
          <p className="font-bold">Name</p>
          <button
            className="text-blue-400 cursor-pointer"
            onClick={toggleNamePopup}
          >
            {user?.firstName} {user?.lastName}
          </button>
        </li>

        {/* Email */}
        <li className="flex justify-between items-center border-b border-gray-700 pb-4">
          <p className="font-bold">Email</p>
          <button
            className="text-blue-400 cursor-pointer"
            onClick={toggleEmailPopup}
          >
            {user?.email}
          </button>
        </li>

        {/* Mobile Number */}
        <li className="flex justify-between items-center border-b border-gray-700 pb-4">
          <p className="font-bold">Mobile number</p>
          <button
            className="text-blue-400 cursor-pointer"
            onClick={toggleNumberPopup}
          >
            {user?.userPhoneNr}
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
        email={user?.email ?? ""}
        onSave={handleSaveEmail}
      />
      <PhoneNrPopup
        isOpen={isNumberPopupOpen}
        onClose={toggleNumberPopup}
        number={user?.userPhoneNr ?? ""}
        onSave={handleSaveNumber}
      />
      <NamePopUp
        isOpen={isNamePopupOpen}
        onClose={toggleNamePopup}
        firstName={user?.firstName ?? ""}
        lastName={user?.lastName ?? ""}
        onSave={handleSaveName}
      />
      <DeletePopup
        isOpen={isDeletePopupOpen}
        onClose={toggleDeletePopup}
        onDelete={handleDeleteMyAccount}
      />
    </div>
  );
};

export default Settings;
