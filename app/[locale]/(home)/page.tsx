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

// In newer Next.js versions, route params are async and must be awaited
export default async function Home(props: {
  params: Promise<{ locale: string }> | { locale: string };
}) {
  // Support both sync and async params to be compatible across versions
  const resolvedParams =
    typeof (props as any).params?.then === "function"
      ? await (props as { params: Promise<{ locale: string }> }).params
      : (props as { params: { locale: string } }).params;
  const locale = resolvedParams?.locale || "en";
  // Fetch homepage data from Laravel
  let homepageData: any = null;
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
    const pages: any[] = homepageData;
    const homepage = pages.find((p) => p?.type_id === 1) || pages[0];
    const banner = homepage?.banners?.[0];
    if (banner) {
      const bannerTranslation = Array.isArray(banner?.translations)
        ? banner.translations.find((t: any) => t.locale === locale) || banner.translations[0]
        : undefined;
      bannerTitle = bannerTranslation?.title || banner?.title;
      bannerDesc = bannerTranslation?.desc || banner?.desc;
      const bannerImageName = Array.isArray(banner?.images) ? banner.images[0]?.image_name : undefined;
      bannerImageUrl = imageUrlFromBanner(bannerImageName);
      bannerHref = banner?.slug as string | undefined;
    }
  } else if (homepageData && typeof homepageData === "object") {
    const bannerObj = (homepageData as any).banner || (homepageData as any).banners?.[0];
    if (bannerObj) {
      const tr = Array.isArray(bannerObj?.translations)
        ? bannerObj.translations.find((t: any) => t.locale === locale) || bannerObj.translations[0]
        : undefined;
      bannerTitle = tr?.title || bannerObj?.title;
      bannerDesc = tr?.desc || bannerObj?.desc;
      const imgName = Array.isArray(bannerObj?.images) ? bannerObj.images[0]?.image_name : undefined;
      bannerImageUrl = imageUrlFromBanner(imgName);
      bannerHref = bannerObj?.slug as string | undefined;
    }
    // New backend shape: mainBanners and sellProductBanners
    const mainBanner = (homepageData as any).mainBanners?.[0];
    if (mainBanner) {
      const tr = Array.isArray(mainBanner?.translations)
        ? mainBanner.translations.find((t: any) => t.locale === locale) || mainBanner.translations[0]
        : undefined;
      bannerTitle = tr?.title || mainBanner?.title || bannerTitle;
      bannerDesc = tr?.desc || mainBanner?.desc || bannerDesc;
      const imgName = Array.isArray(mainBanner?.images) ? mainBanner.images[0]?.image_name : undefined;
      bannerImageUrl = imageUrlFromBanner(imgName) || bannerImageUrl;
      bannerHref = (mainBanner?.slug as string | undefined) || bannerHref;
    }
  }

  // Map products from API to UI shapes
  const mapFeatured = (arr: any[] | undefined): FeaturedItem[] =>
    Array.isArray(arr)
      ? arr.map((p) => ({
          id: Number(p.id),
          image: imageUrlFromStorage(p?.images?.[0]?.image_name) || undefined,
          price: p.price,
        }))
      : [];

  const mapBestSelling = (arr: any[] | undefined): BestSellingItem[] =>
    Array.isArray(arr)
      ? arr.map((p) => ({
          id: Number(p.id),
          image: imageUrlFromStorage(p?.images?.[0]?.image_name) || undefined,
          price: p.price,
          title: (p.translations?.[0]?.title || p.title || "").toString(),
        }))
      : [];

  const mapVip = (arr: any[] | undefined): VipItem[] =>
    Array.isArray(arr)
      ? arr.map((p) => ({
          id: Number(p.id),
          image: imageUrlFromStorage(p?.images?.[0]?.image_name) || undefined,
          price: p.price,
          title: (p.translations?.[0]?.title || p.title || "").toString(),
        }))
      : [];

  const featuredProducts: FeaturedItem[] = mapFeatured(homepageData?.featuredProducts);
  const bestSellingProducts: BestSellingItem[] = mapBestSelling(homepageData?.bestSellingProducts);
  const vipProducts: VipItem[] = mapVip(homepageData?.vipProducts);
  // Extract sell-your-products banner data if present
  const sellBanner = (homepageData as any)?.sellProductBanners?.[0];
  const sellTr = Array.isArray(sellBanner?.translations)
    ? sellBanner.translations.find((t: any) => t.locale === locale) || sellBanner.translations[0]
    : undefined;
  const sellTitle: string | undefined = sellTr?.title || sellBanner?.title;
  const sellDesc: string | undefined = sellTr?.desc || sellBanner?.desc;
  const sellHref: string | undefined = sellBanner?.slug as string | undefined;
  
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
