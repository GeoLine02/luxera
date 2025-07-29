import SearchContainer from "@/app/shared/search/SearchContainer";
import BestSellings from "./components/BestSellings/BestSellings";
import Categories from "./components/categories/Categories";
import CategoriesModal from "./components/categories/CategoriesModal";
import ProductsList from "./components/featuredProducts/ProductsList";
import Hero from "./components/hero/Hero";
import SellYourProducts from "./components/SellYourProducts/SellYourProducts";
import VIPListing from "./components/VIPLiisting/VIPListing";
import Button from "@/app/ui/Button";
import Link from "next/link";

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
      <div className="flex items-center justify-center mt-11">
        <Link className="max-[322px]" href={"/products"}>
          <Button
            rounded="full"
            title="Load more 100+"
            type="button"
            className="py-2 px-24 max-w-[322px] w-full border border-black transition-all duration-300 hover:bg-black hover:text-white"
          />
        </Link>
      </div>
    </div>
  );
}
