import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext"; // Adjust the path as necessary

export const useSearch = (): {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
} => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
