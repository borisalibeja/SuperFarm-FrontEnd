import MainLayout from "../../layouts/MainLayout";
import ProductCatalog from "../../components/homeComponents/ProductCatalog";
import { useState } from "react";

interface ProductsProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}
const Products: React.FC<ProductsProps> = ({ searchQuery, setSearchQuery }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const clearCategoryFilter = () => {
    setSelectedCategory("All"); // Reset the category filter
    setSearchQuery(""); // Optionally clear the search query
  };
  return (
    <MainLayout
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      clearCategoryFilter={clearCategoryFilter}
    >
      <>
        {/* Page-specific content goes here */}
        <div className="w-full flex h-[20vh] bg-black flex-wrap items-center justify-center">
          {[
            "Fruits",
            "Vegetables",
            "Grains",
            "Dairy",
            "Meat",
            "Sea Food",
            "Plants",
            "Other",
          ].map((category) => (
            <div
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex flex-col p-2 items-center cursor-pointer ${
                selectedCategory === category ? "bg-gray-600" : ""
              }`}
            >
              <div className="w-33 h-22 bg-gray-500 flex items-center justify-center rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1"></div>
              <p className="text-gray-200">{category}</p>
            </div>
          ))}
        </div>

        {/* Product Catalog */}
        <ProductCatalog
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
        />
      </>
    </MainLayout>
  );
};

export default Products;
