import MainLayout from "../../layouts/MainLayout";

interface MapProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}
const Map: React.FC<MapProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <>
      <MainLayout searchQuery={searchQuery} setSearchQuery={setSearchQuery}>
        {/* Page-specific content goes here */}
        <div className="w-full flex h-[20vh] bg-black  flex-wrap items-center justify-center"></div>
        {/* Product Catalog */}
      </MainLayout>
    </>
  );
};

export default Map;
