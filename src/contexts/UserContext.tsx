import { createContext } from "react";
import { User } from "../types/User";

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

// Export the UserContext
export const UserContext = createContext<UserContextType | undefined>(
  undefined
);
