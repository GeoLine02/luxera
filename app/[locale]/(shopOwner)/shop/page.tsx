import Header from "./components/Header";
import Sections from "./components/sections/Sections";
import SectionSelector from "./components/sections/SectionSelector";

const Shop = () => {
  return (
    <div>
      <Header />
      <div className="px-4 flex">
        <SectionSelector />
        <Sections />
      </div>
    </div>
  );
};

export default Shop;
