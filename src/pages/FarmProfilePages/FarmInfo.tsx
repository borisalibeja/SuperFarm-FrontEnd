import { useFarm } from "../../hooks/useFarm";

const FarmInfo: React.FC = () => {
  const { farm } = useFarm();

  if (!farm) {
    return (
      <p className="text-white text-center">No Farm information available.</p>
    );
  }
  return (
    <div className="bg-black p-6 flex shadow-md">
      {/* Profile Picture */}
      <div className="flex flex-col items-center p-8 ">
        <img
          src="" // Replace this with the actual profile picture URL
          alt="Profile"
          className="w-30 h-30 rounded-full border-4 border-gray-300 shadow-md"
        />
        <div className="flex flex-row p-4 gap-5 ">
          <button className="text-blue-900 font-semibold cursor-pointer">
            Edit
          </button>
          <button className="text-red-900 font-semibold cursor-pointer">
            Delete
          </button>
        </div>
      </div>
      <div className="text-white flex flex-col justify-end p-8 pl-10 mb-15">
        <h1 className="flex pb-5 font-bold text-xl">{farm?.farmName}</h1>
        <p className="font-semibold">Email</p>
        <p>{farm?.farmEmail}</p>
      </div>
      <div className="text-white flex flex-col justify-end p-8 pl-10 mb-15">
        <p className=" font-semibold">Phone</p>
        <p className="">{farm?.farmPhoneNr}</p>
      </div>
    </div>
  );
};

export default FarmInfo;
