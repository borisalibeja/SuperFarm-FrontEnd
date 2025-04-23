import React from "react";

interface Product {
  id: number;
  title: string;
  description: string;
}

const products: Product[] = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  title: `Product ${i + 1}`,
  description: `This is the description of Product ${i + 1}`,
}));

const ProductCatalog: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-md rounded-lg p-4  flex flex-col justify-between cursor-pointer hover:scale-102 transition-transform duration-300"
        >
          <div className="h-32 bg-gray-200 rounded-lg flex items-center justify-center">
            {/* Placeholder for product image */}
            <p className="text-gray-500">Product Image</p>
          </div>
          <div className="mt-4 text-center">
            <p className="text-lg font-semibold">{product.title}</p>
            <p className="text-sm text-gray-500">{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCatalog;