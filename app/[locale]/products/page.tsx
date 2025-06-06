import HeroBannerSlider from "./components/HeroBanner/HeroBannerSlider";
// import Filters from "./components/Filters";
import RecommendedProducts from "./components/RecommendedProducts";
import BestSellerProducts from "./components/BestSellerProducts";
import AllProducts from "./components/AllProducts";

const Products = () => {
  return (
    <div>
      <div className="mt-20">
        <HeroBannerSlider />
      </div>
      {/* <div className="mt-12">
        <Filters />
      </div> */}
      <div className="container mt-[50px] lg:mt-[120px] px-11">
        <RecommendedProducts />
      </div>
      <div className="container  mt-[50px] lg:mt-[120px] px-11">
        <BestSellerProducts />
      </div>
      <div className="mt-[50px] lg:mt-[120px] px-11 container">
        <AllProducts />
      </div>
    </div>
  );
};

export default Products;
