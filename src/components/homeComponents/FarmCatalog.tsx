import axios from "axios";
import React, { useEffect, useState } from "react";

interface Farm {
  farmId: string;
  farmName: string;
  farmAddress: string;
}

interface FarmCatalogProps {
  searchQuery: string;
}

const FarmCatalog: React.FC<FarmCatalogProps> = ({ searchQuery }) => {
  const [farms, setFarms] = useState<Farm[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Fetch products from the backend
  useEffect(() => {
    const fetchFarms = async () => {
      setIsLoading(true);
      setErrorMessage(null);
      try {
        const url = searchQuery
          ? `http://localhost:5035/queryFarm-by-name/${searchQuery}`
          : `http://localhost:5035/Farm`;
        const params = searchQuery ? { FarmName: searchQuery } : undefined;
        const response = await axios.get(url, { params });
        setFarms(response.data);
      } catch {
        setErrorMessage("Failed to fetch farms. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchFarms();
  }, [searchQuery]);

  return (
    <div className="p-6">
      {isLoading ? (
        <p className="text-white text-center">Loading farms...</p>
      ) : errorMessage ? (
        <p className="text-red-500 text-center">{errorMessage}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {farms.map((farm) => (
            <div
              key={farm.farmId}
              className="bg-gray-700 shadow-md rounded-lg flex flex-col justify-between cursor-pointer hover:scale-102 transition-transform duration-300"
            >
              <div className="h-32 bg-gray-500 rounded-t-lg flex items-center justify-center">
                <p className="text-white">Product Image</p>
              </div>
              <div className="mt-4 pb-2 text-center">
                <p className="text-lg text-white font-semibold">
                  {farm.farmName}
                </p>
                <p className="text-sm text-white">${farm.farmAddress}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FarmCatalog;
