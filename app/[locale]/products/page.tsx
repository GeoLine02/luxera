import RecommendedProducts from "./components/RecommendedProducts";
import BestSellerProducts from "./components/BestSellerProducts";
import AllProducts, { type AllProductItem } from "./components/AllProducts";
import ProductFilter from "./components/productFilter/ProductFilter";
import Categories from "../(home)/components/categories/Categories";
import SearchContainer from "@/app/shared/search/SearchContainer";
import { getAllProducts } from "@/app/services/products";
import { imageUrlFromStorage } from "@/app/services/homepage";

export default async function Products({
  params,
}: {
  params: Promise<{ locale: string }> | { locale: string };
}) {
  const resolvedParams =
    typeof (params as any)?.then === "function"
      ? await (params as Promise<{ locale: string }>)
      : (params as { locale: string });
  const locale = resolvedParams?.locale || "en";

  // Fetch all products from backend
  let allProducts: any[] = [];
  try {
    const json = await getAllProducts(locale);
    // Some APIs wrap data; support both shapes
    allProducts = Array.isArray(json) ? json : (json?.data ?? json?.products ?? []);
  } catch (e) {
    console.error("Failed to load all products", e);
  }

  const mappedAll: AllProductItem[] = Array.isArray(allProducts)
    ? allProducts.map((p: any) => ({
        id: Number(p.id),
        image: imageUrlFromStorage(p?.images?.[0]?.image_name) || undefined,
        price: p.price,
        title: (p.translations?.[0]?.title || p.title || "").toString(),
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
