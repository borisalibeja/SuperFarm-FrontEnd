import React from "react";
import { useUser } from "../../hooks/useUser";

const Addresses: React.FC = () => {
  const { user } = useUser();

  if (!user) {
    return (
      <p className="text-white text-center">No user information available.</p>
    );
  }
  return <div className="bg-black p-6 flex shadow-md"></div>;
};

export default Addresses;
