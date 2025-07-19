import MainLayout from "../../layouts/MainLayout";
import FarmCatalog from "../../components/homeComponents/FarmCatalog";
interface FarmProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}
const Farms: React.FC<FarmProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <>
      <MainLayout searchQuery={searchQuery} setSearchQuery={setSearchQuery}>
        <FarmCatalog searchQuery={searchQuery} />
      </MainLayout>
    </>
  );
};

export default Farms;
