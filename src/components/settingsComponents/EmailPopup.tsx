import React, { useState } from "react";

interface EmailPopupProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
  onSave: (newEmail: string) => void;
}

const EmailPopup: React.FC<EmailPopupProps> = ({
  isOpen,
  onClose,
  email,
  onSave,
}) => {
  const [newEmail, setNewEmail] = useState(email);

  const handleSave = () => {
    onSave(newEmail);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-700 w-96 h-70  p-6 rounded-lg shadow-lg text-black flex flex-col justify-between">
        <div className="flex justify-center text-white items-center mb-4">
          <h2 className="text-2xl font-bold">Email</h2>
        </div>
        <div className="flex flex-col ">
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 text-white mb-4"
            placeholder="Enter your email"
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

export default EmailPopup;
