import React, { useState } from "react";

interface NamePopupProps {
  isOpen: boolean;
  onClose: () => void;
  firstName: string;
  lastName: string;
  onSave: (newFirstName: string, newLastName: string) => void;
}

const NamePopUp: React.FC<NamePopupProps> = ({
  isOpen,
  onClose,
  firstName,
  lastName,
  onSave,
}) => {
  const [newFirstName, setnewFirstName] = useState(firstName);
  const [newLastName, setnewLastName] = useState(lastName);

  const handleSave = () => {
    onSave(newFirstName, newLastName);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-700 w-96 h-70  p-6 rounded-lg shadow-lg text-black flex flex-col justify-between">
        <div className="flex justify-center text-white items-center mb-4">
          <h2 className="text-2xl font-bold">Name</h2>
        </div>
        <div className="flex flex-col ">
          <input
            type="mobile number"
            value={newFirstName}
            onChange={(e) => setnewFirstName(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 text-white mb-4"
            placeholder="Enter your First Name"
          />
          <input
            type="mobile number"
            value={newLastName}
            onChange={(e) => setnewLastName(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 text-white mb-4"
            placeholder="Enter your Last Name"
          />
          <div className="flex flex-row justify-between items-center">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NamePopUp;
