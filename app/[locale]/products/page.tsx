import ProductFilter from "./components/productFilter/ProductFilter";
import SearchContainer from "@/app/shared/search/SearchContainer";
import { fetchAllProducts } from "./services/allProducts";
import AllProducts from "./components/AllProducts";

export default async function Products({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string }>;
}) {
  const params = await paramsPromise;

  const allProductsData = await fetchAllProducts();

  return (
    <div>
      <div className="md:hidden">
        <SearchContainer />
      </div>

      {/* <Categories /> */}

      <div className="mt-12">
        <ProductFilter />
      </div>
      <div className="mt-[50px] px-5">
        <AllProducts products={allProductsData} />
      </div>
    </div>
  );
}
