import React from "react";
import ProfileLayout from "../layouts/ProfileLayouts";

const PersonalInfo: React.FC = () => {
  return (
    <ProfileLayout>
        <div className="bg-black p-6  flex shadow-md">
                    {/* Profile Picture */}
            <div className="flex flex-col items-center p-8 ">
                <img
                    src="https://via.placeholder.com/150" // Replace this with the actual profile picture URL
                    alt="Profile"
                    className="w-30 h-30 rounded-full border-4 border-gray-300 shadow-md"
                />
                <div className="flex flex-row p-4 gap-5 ">
                    <button className="text-blue-900 font-semibold cursor-pointer">Edit</button>
                    <button className="text-red-900 font-semibold cursor-pointer">Delete</button>
                </div>
            </div>
            <div className="text-white flex flex-col justify-end p-8 pl-10 mb-15">
                <h1 className="flex pb-5 font-bold text-xl"> John Doe</h1>
                <p className="font-semibold">Email</p>
                <p>johndoe@example.com</p>
            </div>
            <div className="text-white flex flex-col justify-end p-8 pl-10 mb-15">
                <p className=" font-semibold">Phone</p>
                <p className="">+1 (123) 456-7890</p>
            </div>
        </div>
    </ProfileLayout>
  );
};

export default PersonalInfo;