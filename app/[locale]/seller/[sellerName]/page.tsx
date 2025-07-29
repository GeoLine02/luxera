import AllProducts from "./components/AllProducts";
import SellerHero from "./components/sellerHero/SellerHero";

const SellerPage = () => {
  return (
    <div className="px-4 container">
      <SellerHero />

      <section className="space-y-2 mt-9">
        <h1 className="text-xl font-bold">All Products</h1>

        <AllProducts />
      </section>
    </div>
  );
};

export default SellerPage;
