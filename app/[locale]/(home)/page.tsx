import SearchContainer from "@/app/shared/search/SearchContainer";
import SubCategories from "../../shared/categories/SubCategories";
import ProductsList from "./components/featuredProducts/ProductsList";
import Hero from "./components/hero/Hero";
import SellYourProducts from "./components/SellYourProducts/SellYourProducts";
import VIPListing from "./components/VIPLiisting/VIPListing";
import Button from "@/app/ui/Button";
import Link from "next/link";
import { fetchFeaturedProducts, fetchVipProducts } from "./services/products";

export default async function Home(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const locale = params.locale || "en";

  const vipProducts = await fetchVipProducts();
  const feturedProducts = await fetchFeaturedProducts();

  return (
    <div>
      <div className="w-full md:hidden">
        <SearchContainer />
      </div>

      <SubCategories />

      <div className="mt-[50px]">
        <Hero
          title={"Sell Your Products"}
          desc={"Join our marketplace and showcase your unique gifts"}
        />
      </div>
      <div className="mt-[50px] px-5 lg:px-11">
        <ProductsList
          products={feturedProducts.data}
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
        <VIPListing products={vipProducts.data} />
      </div>
      <div className="mt-[100px] px-5 lg:px-11">
        {/* <BestSellings products={bestSellingProducts} /> */}
      </div>
      <div className="flex items-center justify-center mt-11">
        <Link className="max-[322px]" href={`/${locale}/products?page=1`}>
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
