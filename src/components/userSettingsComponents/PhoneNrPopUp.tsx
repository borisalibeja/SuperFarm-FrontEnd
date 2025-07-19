import React, { useState } from "react";

interface NumberPopupProps {
  isOpen: boolean;
  onClose: () => void;
  number: string;
  onSave: (newNumber: string) => void;
}

const PhoneNrPopUp: React.FC<NumberPopupProps> = ({
  isOpen,
  onClose,
  number,
  onSave,
}) => {
  const [newNumber, setNewNumber] = useState(number);

  const handleSave = () => {
    onSave(newNumber);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-700 w-96 h-70  p-6 rounded-lg shadow-lg text-black flex flex-col justify-between">
        <div className="flex justify-center text-white items-center mb-4">
          <h2 className="text-2xl font-bold">Mobile Number</h2>
        </div>
        <div className="flex flex-col ">
          <input
            type="mobile number"
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 text-white mb-4"
            placeholder="Enter your mobile number"
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

export default PhoneNrPopUp;
