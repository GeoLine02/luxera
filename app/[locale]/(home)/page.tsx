import SearchContainer from "@/app/shared/search/SearchContainer";
import BestSellings, { BestSellingItem } from "./components/BestSellings/BestSellings";
import Categories from "./components/categories/Categories";
import ProductsList, { FeaturedItem } from "./components/featuredProducts/ProductsList";
import Hero from "./components/hero/Hero";
import SellYourProducts from "./components/SellYourProducts/SellYourProducts";
import VIPListing, { VipItem } from "./components/VIPLiisting/VIPListing";
import Button from "@/app/ui/Button";
import Link from "next/link";
import { getHomepageData, imageUrlFromBanner, imageUrlFromStorage } from "@/app/services/homepage";
import { HomepageData } from "@/app/types/homepage";

// In newer Next.js versions, route params are async and must be awaited
export default async function Home(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const locale = params.locale || "en";
  // Fetch homepage data from Laravel
  let homepageData: HomepageData | null = null;
  try {
    homepageData = await getHomepageData(locale);
  } catch (e) {
    // In production you may want to surface an error UI or log to monitoring
    console.error("Failed to load homepage data", e);
  }

  // Try to extract a banner in a backwards-compatible way.
  // Supports both shapes:
  // 1) Array<Page> with pages[0].banners[0]
  // 2) Object with banner or banners
  let bannerTitle: string | undefined = undefined;
  let bannerDesc: string | undefined = undefined;
  let bannerImageUrl: string | undefined = undefined;
  let bannerHref: string | undefined = undefined;

  if (Array.isArray(homepageData)) {
    const pages = homepageData as unknown[];
    const homepage = pages.find((p) => (p as { type_id?: number })?.type_id === 1) || pages[0];
    const banner = (homepage as { banners?: unknown[] })?.banners?.[0];
    if (banner) {
      const bannerTranslation = Array.isArray((banner as { translations?: unknown[] })?.translations)
        ? (banner as { translations?: unknown[] }).translations?.find((t: unknown) => (t as { locale?: string })?.locale === locale) || (banner as { translations?: unknown[] }).translations?.[0]
        : undefined;
      bannerTitle = (bannerTranslation as { title?: string })?.title || (banner as { title?: string })?.title || bannerTitle;
      bannerDesc = (bannerTranslation as { desc?: string })?.desc || (banner as { desc?: string })?.desc || bannerDesc;
      const bannerImages = (banner as { images?: unknown[] })?.images;
      const bannerImageName = Array.isArray(bannerImages) ? bannerImages[0] as { image_name?: string } | undefined : undefined;
      bannerImageUrl = imageUrlFromBanner(bannerImageName?.image_name) || bannerImageUrl;
      bannerHref = (banner as { slug?: string })?.slug || bannerHref;
    }
  } else if (homepageData && typeof homepageData === "object") {
    const bannerObj = (homepageData as { banner?: unknown })?.banner || (homepageData as { banners?: unknown[] })?.banners?.[0];
    if (bannerObj) {
      const tr = Array.isArray((bannerObj as { translations?: unknown[] })?.translations)
        ? (bannerObj as { translations?: unknown[] }).translations?.find((t: unknown) => (t as { locale?: string })?.locale === locale) || (bannerObj as { translations?: unknown[] }).translations?.[0]
        : undefined;
      bannerTitle = (tr as { title?: string })?.title || (bannerObj as { title?: string })?.title || bannerTitle;
      bannerDesc = (tr as { desc?: string })?.desc || (bannerObj as { desc?: string })?.desc || bannerDesc;
      const bannerObjImages = (bannerObj as { images?: unknown[] })?.images;
      const imgName = Array.isArray(bannerObjImages) ? bannerObjImages[0] as { image_name?: string } | undefined : undefined;
      bannerImageUrl = imageUrlFromBanner(imgName?.image_name) || bannerImageUrl;
      bannerHref = (bannerObj as { slug?: string })?.slug || bannerHref;
    }
    // New backend shape: mainBanners and sellProductBanners
    const mainBanner = (homepageData as { mainBanners?: unknown[] })?.mainBanners?.[0];
    if (mainBanner) {
      const tr = Array.isArray((mainBanner as { translations?: unknown[] })?.translations)
        ? (mainBanner as { translations?: unknown[] }).translations?.find((t: unknown) => (t as { locale?: string })?.locale === locale) || (mainBanner as { translations?: unknown[] }).translations?.[0]
        : undefined;
      bannerTitle = (tr as { title?: string })?.title || (mainBanner as { title?: string })?.title || bannerTitle;
      bannerDesc = (tr as { desc?: string })?.desc || (mainBanner as { desc?: string })?.desc || bannerDesc;
      const mainBannerImages = (mainBanner as { images?: unknown[] })?.images;
      const imgName = Array.isArray(mainBannerImages) ? mainBannerImages[0] as { image_name?: string } | undefined : undefined;
      bannerImageUrl = imageUrlFromBanner(imgName?.image_name) || bannerImageUrl;
      bannerHref = (mainBanner as { slug?: string })?.slug || bannerHref;
    }
  }

  // Map products from API to UI shapes
  const mapFeatured = (arr: unknown[] | undefined): FeaturedItem[] =>
    Array.isArray(arr)
      ? arr.map((p: unknown) => ({
          id: Number((p as { id?: unknown })?.id || 0),
          image: imageUrlFromStorage(((p as { images?: unknown[] })?.images?.[0] as { image_name?: string })?.image_name),
          price: (p as { price?: unknown })?.price as number | string,
          title: ((p as { translations?: unknown[] })?.translations?.[0] as { title?: string })?.title ||
                 (p as { title?: string })?.title ||
                 "",
        }))
      : [];

  const mapBestSelling = (arr: unknown[] | undefined): BestSellingItem[] =>
    Array.isArray(arr)
      ? arr.map((p: unknown) => ({
          id: Number((p as { id?: unknown })?.id || 0),
          image: imageUrlFromStorage(((p as { images?: unknown[] })?.images?.[0] as { image_name?: string })?.image_name),
          price: (p as { price?: unknown })?.price as number | string,
          title: ((p as { translations?: unknown[] })?.translations?.[0] as { title?: string })?.title ||
                 (p as { title?: string })?.title ||
                 "",
        }))
      : [];

  const mapVip = (arr: unknown[] | undefined): VipItem[] =>
    Array.isArray(arr)
      ? arr.map((p: unknown) => ({
          id: Number((p as { id?: unknown })?.id || 0),
          image: imageUrlFromStorage(((p as { images?: unknown[] })?.images?.[0] as { image_name?: string })?.image_name),
          price: (p as { price?: unknown })?.price as number | string,
          title: ((p as { translations?: unknown[] })?.translations?.[0] as { title?: string })?.title ||
                 (p as { title?: string })?.title ||
                 "",
        }))
      : [];

  const featuredProducts: FeaturedItem[] = mapFeatured(homepageData?.featuredProducts);
  const bestSellingProducts: BestSellingItem[] = mapBestSelling(homepageData?.bestSellingProducts);
  const vipProducts: VipItem[] = mapVip(homepageData?.vipProducts);
  // Extract sell-your-products banner data if present
  const sellBanner = (homepageData as { sellProductBanners?: unknown[] })?.sellProductBanners?.[0];
  const sellTr = sellBanner && Array.isArray((sellBanner as { translations?: unknown[] })?.translations)
    ? (sellBanner as { translations?: unknown[] }).translations?.find((t: unknown) => (t as { locale?: string })?.locale === locale) || (sellBanner as { translations?: unknown[] }).translations?.[0]
    : undefined;
  const sellTitle: string | undefined = (sellTr as { title?: string })?.title || (sellBanner as { title?: string })?.title;
  const sellDesc: string | undefined = (sellTr as { desc?: string })?.desc || (sellBanner as { desc?: string })?.desc;
  const sellHref: string | undefined = (sellBanner as { slug?: string })?.slug;
  
  return (
    <div>
      <div className="w-full md:hidden">
        <SearchContainer />
      </div>

      <Categories />

      <div className="mt-[50px]">
        <Hero title={bannerTitle} desc={bannerDesc} imageUrl={bannerImageUrl} href={bannerHref} />
      </div>
      <div className="mt-[50px] px-5 lg:px-11">
        <ProductsList products={featuredProducts} title="Featured products" />
      </div>
      <div className="mt-[54px]">
        <SellYourProducts title={sellTitle} desc={sellDesc} href={sellHref} />
      </div>
      <div className="mt-[30px] lg:mt-[54px] px-5 lg:px-11">
        <VIPListing products={vipProducts} />
      </div>
      <div className="mt-[100px] px-5 lg:px-11">
        <BestSellings products={bestSellingProducts} />
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
