import React, { useEffect, useState } from "react";
import { useUser } from "../../hooks/useUser";
import { User } from "../../types/User";
import axios from "axios";
type Address = Pick<
  User,
  | "streetName"
  | "city"
  | "country"
  | "county"
  | "postCode"
  | "buildingNr"
  | "floorNr"
>;
const Addresses: React.FC = () => {
  const { user, setUser } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [address, setAddress] = useState<Address>({
    streetName: user?.streetName || "",
    city: user?.city || "",
    country: user?.country || "",
    county: user?.county || "",
    postCode: user?.postCode || "",
    buildingNr: user?.buildingNr || "",
    floorNr: user?.floorNr || "",
  });

  useEffect(() => {
    setAddress({
      streetName: user?.streetName || "",
      city: user?.city || "",
      country: user?.country || "",
      county: user?.county || "",
      postCode: user?.postCode || "",
      buildingNr: user?.buildingNr || "",
      floorNr: user?.floorNr || "",
    });
  }, [user]);

  const handleInputChange = (field: keyof typeof address, value: string) => {
    setAddress((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.patch(
        `http://localhost:5035/UpdateMyUser`,
        address,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Update the user state with the new address
      const updatedUser: User = {
        ...user,
        ...response.data,
      };

      setUser(updatedUser);
      setIsEditing(false); // Exit editing mode
    } catch (error) {
      console.error("Error updating address:", error);
    }
  };

  const handleClose = () => {
    // Reset the address fields and exit editing mode
    setAddress({
      streetName: user?.streetName || "",
      city: user?.city || "",
      country: user?.country || "",
      county: user?.county || "",
      postCode: user?.postCode || "",
      buildingNr: user?.buildingNr || "",
      floorNr: user?.floorNr || "",
    });
    setIsEditing(false);
  };

  const isAddressChanged =
    JSON.stringify(address) !==
    JSON.stringify({
      streetName: user?.streetName || "",
      city: user?.city || "",
      country: user?.country || "",
      county: user?.county || "",
      postCode: user?.postCode || "",
      buildingNr: user?.buildingNr || "",
      floorNr: user?.floorNr || "",
    });

  return (
    <div className="bg-black min-h-screen text-white py-10 px-6">
      <ul className="space-y-8">
        {/* Street Name */}
        <li className="flex flex-col">
          <label className="font-bold mb-2">Street Name</label>
          <input
            type="text"
            value={address.streetName}
            onChange={(e) => handleInputChange("streetName", e.target.value)}
            className={`p-2 rounded bg-gray-800 text-white w-[400px] ${
              isEditing ? "border border-gray-400" : ""
            }`}
            disabled={!isEditing}
          />
        </li>

        {/* City */}
        <li className="flex flex-col">
          <label className="font-bold mb-2">City</label>
          <input
            type="text"
            value={address.city}
            onChange={(e) => handleInputChange("city", e.target.value)}
            className={`p-2 rounded bg-gray-800 text-white w-[250px] ${
              isEditing ? "border border-gray-400" : ""
            }`}
            disabled={!isEditing}
          />
        </li>

        {/* Country */}
        <li className="flex flex-col">
          <label className="font-bold mb-2">Country</label>
          <input
            type="text"
            value={address.country}
            onChange={(e) => handleInputChange("country", e.target.value)}
            className={`p-2 rounded bg-gray-800 text-white w-[250px] ${
              isEditing ? "border border-gray-400" : ""
            }`}
            disabled={!isEditing}
          />
        </li>

        {/* County */}
        <li className="flex flex-col">
          <label className="font-bold mb-2">County</label>
          <input
            type="text"
            value={address.county}
            onChange={(e) => handleInputChange("county", e.target.value)}
            className={`p-2 rounded bg-gray-800 text-white w-[250px] ${
              isEditing ? "border border-gray-400" : ""
            }`}
            disabled={!isEditing}
          />
        </li>

        {/* Postcode */}
        <li className="flex flex-col">
          <label className="font-bold mb-2">Postcode</label>
          <input
            type="text"
            value={address.postCode}
            onChange={(e) => handleInputChange("postCode", e.target.value)}
            className={`p-2 rounded bg-gray-800 text-white w-[200px]${
              isEditing ? "border border-gray-400" : ""
            }`}
            disabled={!isEditing}
          />
        </li>

        {/* Building Number */}
        <li className="flex flex-col">
          <label className="font-bold mb-2">Building Number</label>
          <input
            type="text"
            value={address.buildingNr}
            onChange={(e) => handleInputChange("buildingNr", e.target.value)}
            className={`p-2 rounded bg-gray-800 text-white w-[200px]${
              isEditing ? "border border-gray-400" : ""
            }`}
            disabled={!isEditing}
          />
        </li>

        {/* Floor Number */}
        <li className="flex flex-col">
          <label className="font-bold mb-2">Floor Number</label>
          <input
            type="text"
            value={address.floorNr}
            onChange={(e) => handleInputChange("floorNr", e.target.value)}
            className={`p-2 rounded bg-gray-800 text-white w-[200px]${
              isEditing ? "border border-gray-400" : ""
            }`}
            disabled={!isEditing}
          />
        </li>
      </ul>

      {/* Buttons */}
      <div className="flex justify-end mt-8 space-x-4">
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          onClick={handleClose}
          disabled={!isEditing}
        >
          Close
        </button>
        <button
          className={`px-4 py-2 rounded ${
            isEditing
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-500 text-gray-300 cursor-not-allowed"
          }`}
          onClick={handleSave}
          disabled={!isEditing || !isAddressChanged}
        >
          Save
        </button>
      </div>

      {/* Edit Button */}
      {!isEditing && (
        <div className="flex justify-end mt-4">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={() => setIsEditing(true)}
          >
            Edit Address
          </button>
        </div>
      )}
    </div>
  );
};

export default Addresses;
