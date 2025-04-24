import React, { useState } from "react";

interface DeletePopupProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: (reason: string) => void;
}

const DeletePopup: React.FC<DeletePopupProps> = ({
  isOpen,
  onClose,
  onDelete,
}) => {
  const [selectedReason, setSelectedReason] = useState("");

  const handleDelete = () => {
    if (selectedReason) {
      onDelete(selectedReason);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-700 w-96 p-6 rounded-lg shadow-lg text-black flex flex-col justify-between">
        {/* Header */}
        <div className="flex justify-center text-white items-center mb-4">
          <h2 className="text-2xl font-bold">Delete Account</h2>
        </div>

        {/* Dropdown for Reasons */}
        <div className="flex flex-col justify-between">
          <label htmlFor="deleteReason" className="text-white mb-2">
            Please select a reason for deleting your account:
          </label>
          <select
            id="deleteReason"
            value={selectedReason}
            onChange={(e) => setSelectedReason(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 text-white mb-4"
          >
            <option value="">Select a reason</option>
            <option value="Privacy concerns">Privacy concerns</option>
            <option value="Not satisfied with the service">
              Not satisfied with the service
            </option>
            <option value="Found a better alternative">
              Found a better alternative
            </option>
            <option value="Other">Other</option>
          </select>

          {/* Buttons */}
          <div className="flex flex-row justify-between items-center mt-4">
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-600"
              onClick={onClose}
            >
              Close
            </button>
            <button
              className={`px-4 py-2 rounded cursor-pointer ${
                selectedReason
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-gray-500 text-gray-300 cursor-not-allowed"
              }`}
              onClick={handleDelete}
              disabled={!selectedReason}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
