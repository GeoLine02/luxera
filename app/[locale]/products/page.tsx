import RecommendedProducts from "./components/RecommendedProducts";
import BestSellerProducts from "./components/BestSellerProducts";
import AllProducts from "./components/AllProducts";
import ProductFilter from "./components/productFilter/ProductFilter";
import Categories from "../(home)/components/categories/Categories";
import SearchContainer from "@/app/shared/search/SearchContainer";

const Products = () => {
  return (
    <div>
      <div className="md:hidden">
        <SearchContainer />
      </div>

      <Categories />

      <div className="mt-12">
        <ProductFilter />
      </div>
      <div className="mt-[50px] px-5">
        <RecommendedProducts />
      </div>
      <div className="mt-[50px] px-5">
        <BestSellerProducts />
      </div>
      <div className="mt-[50px] px-5">
        <AllProducts />
      </div>
    </div>
  );
};

export default Products;
