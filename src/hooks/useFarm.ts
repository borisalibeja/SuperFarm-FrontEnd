import { useContext } from "react";
import { FarmContext } from "../contexts/FarmContext";

export const useFarm = () => {
  const context = useContext(FarmContext);
  if (!context) {
    throw new Error("useFarm must be used within a FarmProvider");
  }
  return context;
};
