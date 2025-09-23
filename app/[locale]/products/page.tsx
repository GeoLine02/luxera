import AllProducts, { type AllProductItem } from "./components/AllProducts";
import ProductFilter from "./components/productFilter/ProductFilter";
import Categories from "../(home)/components/categories/Categories";
import SearchContainer from "@/app/shared/search/SearchContainer";
import { getAllProducts } from "@/app/services/products";
import { imageUrlFromStorage } from "@/app/services/homepage";

export default async function Products({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const paramsResolved = await params;
  const locale = paramsResolved.locale || "en";

  // Fetch all products from backend
  let allProducts: unknown[] = [];
  try {
    const json = await getAllProducts(locale);
    // Some APIs wrap data; support both shapes
    allProducts = Array.isArray(json) ? json : (json as { data?: unknown[] })?.data ?? (json as { products?: unknown[] })?.products ?? [];
  } catch (e) {
    console.error("Failed to load all products", e);
  }

  const mappedAll: AllProductItem[] = Array.isArray(allProducts)
    ? allProducts.map((p: unknown) => ({
        id: Number((p as { id?: unknown })?.id || 0),
        image: imageUrlFromStorage(((p as { images?: unknown[] })?.images?.[0] as { image_name?: string })?.image_name),
        price: (p as { price?: unknown })?.price as number | string,
        title: ((p as { translations?: unknown[] })?.translations?.[0] as { title?: string })?.title ||
               (p as { title?: string })?.title ||
               "",
      }))
    : [];

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
        <AllProducts products={mappedAll} />
      </div>
    </div>
  );
}
