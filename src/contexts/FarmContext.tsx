import { createContext } from "react";
import { Farm } from "../types/Farm";

interface FarmContextType {
  farm: Farm | null;
  setFarm: React.Dispatch<React.SetStateAction<Farm | null>>;
}

// Export the FarmContext
export const FarmContext = createContext<FarmContextType | undefined>(
  undefined
);
