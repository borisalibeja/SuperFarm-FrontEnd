import axios from "axios";
import React, { useEffect, useState } from "react";

interface Product {
  productId: string;
  productName: string;
  productPrice: number;
  productCategory: string;
}

interface ProductCatalogProps {
  searchQuery: string;
  selectedCategory: string;
}

const ProductCatalog: React.FC<ProductCatalogProps> = ({
  searchQuery,
  selectedCategory,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setErrorMessage(null);
      try {
        const url = `http://localhost:5035/queryProducts`;
        const params: { [key: string]: string } = {};

        // Add category filter if selected
        if (selectedCategory && selectedCategory !== "All") {
          params.ProductCategory = selectedCategory;
        }

        // Add search query if provided
        if (searchQuery) {
          params.ProductName = searchQuery;
        }

        const response = await axios.get(url, { params });
        setProducts(response.data);
      } catch {
        setErrorMessage("Failed to fetch products. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [searchQuery, selectedCategory]);

  return (
    <div className="p-6">
      {isLoading ? (
        <p className="text-white text-center">Loading products...</p>
      ) : errorMessage ? (
        <p className="text-red-500 text-center">{errorMessage}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.productId}
              className="bg-gray-700 shadow-md rounded-lg flex flex-col justify-between cursor-pointer hover:scale-102 transition-transform duration-300"
            >
              <div className="h-32 bg-gray-500 rounded-t-lg flex items-center justify-center">
                <p className="text-white">Product Image</p>
              </div>
              <div className="mt-2 pb-2 text-center">
                <p className="text-lg text-white font-semibold">
                  {product.productName}
                </p>
                <p className="text-sm text-white">${product.productPrice}</p>
                <p className="text-sm text-gray-400">
                  {product.productCategory}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCatalog;
