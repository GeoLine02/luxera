import BestSellings from "./components/BestSellings/BestSellings";
import Categories from "./components/categories/Categories";
import CategoriesModal from "./components/categories/CategoriesModal";
import ProductsList from "./components/featuredProducts/ProductsList";
import Hero from "./components/hero/Hero";
import SearchContainer from "./components/search/SearchContainer";
import SellYourProducts from "./components/SellYourProducts/SellYourProducts";
import VIPListing from "./components/VIPLiisting/VIPListing";

export default function Home() {
  return (
    <div>
      <div>
        <SearchContainer />
      </div>
      <div>
        <Categories />
        <CategoriesModal />
      </div>
      <div className="mt-[50px]">
        <Hero />
      </div>
      <div className="mt-[50px] px-5 lg:px-11">
        <ProductsList />
      </div>
      <div className=" mt-[54px]">
        <SellYourProducts />
      </div>
      <div className="mt-[30px] lg:mt-[54px] px-5 lg:px-11">
        <VIPListing />
      </div>
      <div className="mt-[100px] px-5 lg:px-11">
        <BestSellings />
      </div>
    </div>
  );
}
