import SearchContainer from "@/app/shared/search/SearchContainer";
import BestSellings, {
  BestSellingItem,
} from "./components/BestSellings/BestSellings";
import Categories from "./components/categories/Categories";
import ProductsList from "./components/featuredProducts/ProductsList";
import Hero from "./components/hero/Hero";
import SellYourProducts from "./components/SellYourProducts/SellYourProducts";
import VIPListing from "./components/VIPLiisting/VIPListing";
import Button from "@/app/ui/Button";
import Link from "next/link";
// import { getHomepageData, imageUrlFromStorage } from "@/app/services/homepage";
import { HomepageData } from "@/app/types/homepage";
import { fetchFeaturedProducts, fetchVipProducts } from "./services/products";
import { ProductType } from "@/app/types/product";
import { fetchSubCategories } from "./services/categoires";
import { SubCategoryType } from "@/app/types/categories";

export default async function Home(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const locale = params.locale || "en";

  // let homepageData: HomepageData | null = null;
  // try {
  //   homepageData = await getHomepageData(locale);
  // } catch (e) {
  //   console.error("Failed to load homepage data", e);
  // }

  // const mapBestSelling = (arr: unknown[] | undefined): BestSellingItem[] =>
  //   Array.isArray(arr)
  //     ? arr.map((p: unknown) => ({
  //         id: Number((p as { id?: unknown })?.id || 0),
  //         image: imageUrlFromStorage(
  //           (
  //             (p as { images?: unknown[] })?.images?.[0] as {
  //               image_name?: string;
  //             }
  //           )?.image_name
  //         ),
  //         price: (p as { price?: unknown })?.price as number | string,
  //         title:
  //           (
  //             (p as { translations?: unknown[] })?.translations?.[0] as {
  //               title?: string;
  //             }
  //           )?.title ||
  //           (p as { title?: string })?.title ||
  //           "",
  //       }))
  //     : [];

  const subCategoriesData: SubCategoryType[] = await fetchSubCategories();
  const vipProductsData: ProductType[] = await fetchVipProducts();
  const feturedProductsData: ProductType[] = await fetchFeaturedProducts();
  // const bestSellingProducts: BestSellingItem[] = mapBestSelling(
  //   homepageData?.bestSellingProducts
  // );

  return (
    <div>
      <div className="w-full md:hidden">
        <SearchContainer />
      </div>

      <Categories subCategories={subCategoriesData} />

      <div className="mt-[50px]">
        <Hero
          title={"Sell Your Products"}
          desc={"Join our marketplace and showcase your unique gifts"}
        />
      </div>
      <div className="mt-[50px] px-5 lg:px-11">
        <ProductsList
          products={feturedProductsData}
          title="Featured products"
        />
      </div>
      <div className="mt-[54px]">
        <SellYourProducts
          title={"Sell Your Products"}
          desc={"Join our marketplace and showcase your unique gifts"}
        />
      </div>
      <div className="mt-[30px] lg:mt-[54px] px-5 lg:px-11">
        <VIPListing products={vipProductsData} />
      </div>
      <div className="mt-[100px] px-5 lg:px-11">
        {/* <BestSellings products={bestSellingProducts} /> */}
      </div>
      <div className="flex items-center justify-center mt-11">
        <Link className="max-[322px]" href={`/${locale}/products`}>
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
