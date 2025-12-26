import SearchContainer from "@/app/shared/search/SearchContainer";
import { fetchAllProducts } from "./services/allProducts";
import SubCategories from "@/app/shared/categories/SubCategories";
import AllProducts from "./components/AllProducts";
import ProductFilterMobile from "./components/productFilter/ProductFilterMobile";

export default async function Products({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string;
    subcategory?: string;
    priceFrom?: string;
    priceTo?: string;
    search?: string;
  }>;
}) {
  const resolvedParams = await searchParams;

  const pageParam = Number(resolvedParams.page) || 1;
  const subcategoryParam = resolvedParams.subcategory || "";
  const priceFrom = resolvedParams.priceFrom || "";
  const priceTo = resolvedParams.priceTo || "";
  const searchParam = resolvedParams.search || "";

  const allProductsData = await fetchAllProducts(
    pageParam,
    subcategoryParam,
    priceFrom,
    priceTo,
    searchParam
  );

  return (
    <div>
      <div className="md:hidden">
        <SearchContainer />
      </div>
      <SubCategories />
      <div className="mt-4">
        <ProductFilterMobile />
      </div>
      <div className="mt-2 md:mt-[50px] px-5">
        <AllProducts
          key={`${subcategoryParam}-${priceFrom}-${priceTo}`}
          initialProducts={allProductsData.data}
          initialHasMore={allProductsData.hasMore}
          pageParam={pageParam}
          subcategoryParam={subcategoryParam}
          priceFromParam={priceFrom}
          priceToParam={priceTo}
          searchParam={searchParam}
        />
      </div>
    </div>
  );
}
