import React, { useState } from "react";

interface FarmNamePopupProps {
  isOpen: boolean;
  onClose: () => void;
  farmName: string;
  onSave: (newFarmName: string) => void;
}

const FarmNamePopUp: React.FC<FarmNamePopupProps> = ({
  isOpen,
  onClose,
  farmName,
  onSave,
}) => {
  const [newFarmName, setnewFarmName] = useState(farmName);

  const handleSave = () => {
    onSave(newFarmName);
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
            value={newFarmName}
            onChange={(e) => setnewFarmName(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 text-white mb-4"
            placeholder="Enter your First Name"
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

export default FarmNamePopUp;
