import SearchContainer from "@/app/shared/search/SearchContainer";
import { fetchAllProducts } from "./services/allProducts";
import SubCategories from "@/app/shared/categories/SubCategories";
import ProductFilter from "./components/productFilter/ProductFilter";
import AllProducts from "./components/AllProducts";

export default async function Products({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string;
    subcategory?: string;
    priceFrom?: string;
    priceTo?: string;
  }>;
}) {
  const resolvedParams = await searchParams;

  const pageParam = Number(resolvedParams.page) || 1;
  const subcategoryParam = resolvedParams.subcategory || "";
  const priceFrom = resolvedParams.priceFrom || "";
  const priceTo = resolvedParams.priceTo || "";

  const allProductsData = await fetchAllProducts(
    pageParam,
    subcategoryParam,
    priceFrom,
    priceTo
  );

  return (
    <div>
      <div className="md:hidden">
        <SearchContainer />
      </div>
      <SubCategories />
      <div className="mt-12">
        <ProductFilter />
      </div>
      <div className="mt-[50px] px-5">
        <AllProducts
          key={`${subcategoryParam}-${priceFrom}-${priceTo}`}
          initialProducts={allProductsData.data}
          initialHasMore={allProductsData.hasMore}
          pageParam={pageParam}
          subcategoryParam={subcategoryParam}
          priceFromParam={priceFrom}
          priceToParam={priceTo}
        />
      </div>
    </div>
  );
}
