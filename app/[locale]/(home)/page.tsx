import SearchContainer from "@/app/shared/search/SearchContainer";
import BestSellings from "./components/BestSellings/BestSellings";
import Categories from "./components/categories/Categories";
import CategoriesModal from "./components/categories/CategoriesModal";
import ProductsList from "./components/featuredProducts/ProductsList";
import Hero from "./components/hero/Hero";
import SellYourProducts from "./components/SellYourProducts/SellYourProducts";
import VIPListing from "./components/VIPLiisting/VIPListing";
import Disclaimer from "./components/Disclaimer";
import LuxeraAI from "@/app/shared/luxeraAI/LuxeraAI";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center">
        <Disclaimer />
      </div>
      <div>
        <div>
          <SearchContainer />
          <LuxeraAI />
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
    </>
  );
}
