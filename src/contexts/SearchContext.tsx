import { createContext } from "react";

interface SearchContextProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

// Export the SearchContext
export const SearchContext = createContext<SearchContextProps | undefined>(
  undefined
);
