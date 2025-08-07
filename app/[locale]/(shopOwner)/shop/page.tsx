import Header from "./components/Header";
import Sections from "./components/sections/Sections";
import SectionSelector from "./components/sections/SectionSelector";

const Shop = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="md:px-4 flex h-full">
        <SectionSelector />
        <Sections />
      </div>
    </div>
  );
};

export default Shop;
