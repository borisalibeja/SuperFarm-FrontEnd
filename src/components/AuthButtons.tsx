import React from "react";

interface Props {
  onClick: () => void;
}

const AuthButtons: React.FC<Props> = ({ onClick }) => {
  return (
    <div className="absolute flex top-6 right-4 gap-2">
      <button
        className="text-black text-[15px] px-4 rounded cursor-pointer"
        onClick={onClick}
      >
        Log In
      </button>
      <button
        className="text-black text-[15px] px-4 rounded cursor-pointer"
        onClick={onClick}
      >
        Sign Up 
      </button>
    </div>
  );
};

export default AuthButtons;
