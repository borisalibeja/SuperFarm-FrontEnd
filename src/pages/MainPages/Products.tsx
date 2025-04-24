import MainLayout from "../../layouts/MainLayout";
import ProductCatalog from "../../components/homeComponents/ProductCatalog";

const Products: React.FC = () => {
  return (
    <>
      <MainLayout>
        {/* Page-specific content goes here */}
        <div className="w-full flex h-[20vh] bg-black  flex-wrap items-center justify-center">
          <div className="flex flex-col p-2 items-center cursor-pointer">
            <div className="w-33 h-22 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1"></div>
            <p className=" text-gray-200">Fruits</p>
          </div>
          <div className="flex flex-col p-2 items-center cursor-pointer">
            <div className="w-33 h-22 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1"></div>
            <p className=" text-gray-200">Vegetables</p>
          </div>
          <div className="flex flex-col p-2 items-center cursor-pointer">
            <div className="w-33 h-22 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1"></div>
            <p className=" text-gray-200">Grains</p>
          </div>
          <div className="flex flex-col p-2 items-center cursor-pointer">
            <div className="w-33 h-22 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1"></div>
            <p className=" text-gray-200">Dairy</p>
          </div>
          <div className="flex flex-col p-2 items-center cursor-pointer">
            <div className="w-33 h-22 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1"></div>
            <p className=" text-gray-200">Meat</p>
          </div>
          <div className="flex flex-col p-2 items-center cursor-pointer">
            <div className="w-33 h-22 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1"></div>
            <p className=" text-gray-200">Sea Food</p>
          </div>
          <div className="flex flex-col p-2 items-center cursor-pointer">
            <div className="w-33 h-22 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1"></div>
            <p className=" text-gray-200">Plants</p>
          </div>
          <div className="flex flex-col p-2 items-center cursor-pointer">
            <div className="w-33 h-22 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1"></div>
            <p className=" text-gray-200">Other</p>
          </div>
        </div>
        {/* Product Catalog */}
        <ProductCatalog />
      </MainLayout>
    </>
  );
};

export default Products;
