import RecommendedProducts from "./components/RecommendedProducts";
import BestSellerProducts from "./components/BestSellerProducts";
import AllProducts from "./components/AllProducts";
import ProductFilter from "./components/productFilter/ProductFilter";
import Categories from "../(home)/components/categories/Categories";
import CategoriesModal from "../(home)/components/categories/CategoriesModal";

const Products = () => {
  return (
    <div>
      <div>
        <Categories />
        <CategoriesModal />
      </div>
      <div className="mt-12">
        <ProductFilter />
      </div>
      <div className="container mt-[50px]  px-5">
        <RecommendedProducts />
      </div>
      <div className="container mt-[50px] px-5">
        <BestSellerProducts />
      </div>
      <div className="mt-[50px] px-5 container">
        <AllProducts />
      </div>
    </div>
  );
};

export default Products;
