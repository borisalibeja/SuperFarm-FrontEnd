import { createContext } from "react";

interface User {
  userId: string;
  username: string;
  firstName?: string;
  lastName?: string;
  age?: number;
  email?: string;
  phoneNr?: string;
  address?: string;
  role: string;
}

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

// Export the UserContext
export const UserContext = createContext<UserContextType | undefined>(
  undefined
);
