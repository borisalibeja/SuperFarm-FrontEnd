import React, { useState } from "react";
import FarmEmailPopup from "../../components/farmSettingsComponents/FarmEmailPopup";
import FarmPhoneNrPopup from "../../components/farmSettingsComponents/FarmPhoneNrPopUp";
import FarmNamePopUp from "../../components/farmSettingsComponents/FarmNamePopUp";
import FarmDeletePopup from "../../components/farmSettingsComponents/FarmDeletePopUp";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFarm } from "../../hooks/useFarm";
import { Farm } from "../../types/Farm";
import { useUser } from "../../hooks/useUser";

const FarmSettings: React.FC = () => {
  const [isEmailPopupOpen, setIsEmailPopupOpen] = useState(false);
  const [isNumberPopupOpen, setIsNumberPopupOpen] = useState(false);
  const [isNamePopupOpen, setIsNamePopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();
  const { farm, setFarm } = useFarm();
  const { user } = useUser();

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

  const handleSaveFarmEmail = async (newFarmEmail: string) => {
    if (!farm || !farm.farmId) {
      console.error("Farm or farmId is undefined");
      return;
    }

    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.patch(
        `http://localhost:5035/UpdateMyFarm`,
        { farmEmail: newFarmEmail }, // Request body
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Explicitly type the updated user object
      const updatedFarm: Farm = {
        ...farm,
        farmEmail: response.data.farmEmail || newFarmEmail, // Fallback to newEmail if response.data.email is undefined
      };

      setFarm(updatedFarm);
    } catch (error) {
      console.error("Error updating email:", error);
    }
  };

  const handleSaveFarmNumber = async (newFarmNumber: string) => {
    if (!farm || !farm.farmId) {
      console.error("Farm or farmId is undefined");
      return;
    }
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.patch(
        `http://localhost:5035/UpdateMyFarm`,
        { farmPhoneNr: newFarmNumber }, // Request body
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const updatedFarm: Farm = {
        ...farm,
        farmPhoneNr: response.data.farmPhoneNr || newFarmNumber,
      };

      setFarm(updatedFarm);
    } catch (error) {
      console.error("Error updating phone number:", error);
    }
  };

  const handleSaveFarmName = async (newFarmName: string) => {
    if (!farm || !farm.farmId) {
      console.error("User or userId is undefined");
      return;
    }
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.patch(
        `http://localhost:5035/UpdateMyFarm`,
        {
          farmName: newFarmName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const updatedFarm: Farm = {
        ...farm,
        farmName: response.data.farmName || newFarmName,
      };

      setFarm(updatedFarm);
    } catch (error) {
      console.error("Error updating name:", error);
    }
  };

  const handleDeleteMyFarmAccount = async () => {
    if (!farm || !farm.farmId) {
      console.error("User or userId is undefined");
      return;
    }
    if (isDeleting) {
      return; // Prevent duplicate requests
    }
    setIsDeleting(true);
    try {
      const token = localStorage.getItem("accessToken");
      await axios.delete(`http://localhost:5035/delete-my-farm`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFarm(null);
      navigate("/user-profile/personal-profile");
    } catch (error) {
      console.error("Error deleting account:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  if (!farm) {
    return (
      <p className="text-white text-center">No Farm information available.</p>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white py-10 px-6">
      {/* Settings List */}
      <ul className="space-y-8 items-center">
        {/* Name */}
        <li className="flex justify-between items-center border-b border-gray-700 pb-4">
          <p className="font-bold">Full Name</p>
          <button
            className="text-blue-400 cursor-pointer"
            onClick={toggleNamePopup}
          >
            {user?.firstName || "John"} {user?.lastName || "Wick"}
          </button>
        </li>
        {/*User Email */}
        <li className="flex justify-between items-center border-b border-gray-700 pb-4">
          <p className="font-bold">User Email</p>
          <button
            className="text-blue-400 cursor-pointer"
            onClick={toggleEmailPopup}
          >
            {user?.email || "User Email"}
          </button>
        </li>

        {/* User Mobile Number */}
        <li className="flex justify-between items-center border-b border-gray-700 pb-4">
          <p className="font-bold">User Mobile number</p>
          <button
            className="text-blue-400 cursor-pointer"
            onClick={toggleNumberPopup}
          >
            {user?.userPhoneNr || "123456789"}
          </button>
        </li>
        {/* Farm Name */}
        <li className="flex justify-between items-center border-b border-gray-700 pb-4">
          <p className="font-bold">Farm Name</p>
          <button
            className="text-blue-400 cursor-pointer"
            onClick={toggleNamePopup}
          >
            {farm?.farmName || "Farm Name"}
          </button>
        </li>

        {/*Farm Email */}
        <li className="flex justify-between items-center border-b border-gray-700 pb-4">
          <p className="font-bold">Farm Email</p>
          <button
            className="text-blue-400 cursor-pointer"
            onClick={toggleEmailPopup}
          >
            {farm?.farmEmail || "Farm Email"}
          </button>
        </li>

        {/* Farm Mobile Number */}
        <li className="flex justify-between items-center border-b border-gray-700 pb-4">
          <p className="font-bold">Farm Mobile number</p>
          <button
            className="text-blue-400 cursor-pointer"
            onClick={toggleNumberPopup}
          >
            {farm?.farmPhoneNr || "123456789"}
          </button>
        </li>

        {/* Delete Account */}
        <li className="flex justify-between items-center border-b border-gray-700 pb-4">
          <p className="font-bold">Delete Farm account</p>
          <button
            className="text-red-500 cursor-pointer"
            onClick={toggleDeletePopup}
          >
            Delete
          </button>
        </li>
      </ul>
      {/* Email Popup */}
      <FarmEmailPopup
        isOpen={isEmailPopupOpen}
        onClose={toggleEmailPopup}
        farmEmail={farm?.farmEmail ?? ""}
        onSave={handleSaveFarmEmail}
      />
      <FarmPhoneNrPopup
        isOpen={isNumberPopupOpen}
        onClose={toggleNumberPopup}
        farmPhoneNumber={farm?.farmPhoneNr ?? ""}
        onSave={handleSaveFarmNumber}
      />
      <FarmNamePopUp
        isOpen={isNamePopupOpen}
        onClose={toggleNamePopup}
        farmName={farm?.farmName ?? ""}
        onSave={handleSaveFarmName}
      />
      <FarmDeletePopup
        isOpen={isDeletePopupOpen}
        onClose={toggleDeletePopup}
        onDelete={handleDeleteMyFarmAccount}
      />
    </div>
  );
};

export default FarmSettings;
