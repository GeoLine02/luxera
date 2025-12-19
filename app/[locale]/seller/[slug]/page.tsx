import AllProducts from "./components/AllProducts";
import SellerHero from "./components/sellerHero/SellerHero";
import { fetchShopById } from "./services/seller";

interface SellerPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const SellerPage = async ({ params }: SellerPageProps) => {
  const resolvedParams = await params;
  const splitedParams = resolvedParams.slug.split("-");
  const shopId = splitedParams[splitedParams.length - 1];
  console.log("shopId", shopId);
  const shopByIdData = await fetchShopById(Number(shopId));

  return (
    <div className="px-4 container">
      <SellerHero shopName={shopByIdData.data.shop_name} />

      <section className="space-y-2 mt-9">
        <h1 className="text-xl font-bold">All Products</h1>

        <AllProducts
          shopId={Number(shopId)}
          initialProducts={shopByIdData.data.products}
        />
      </section>
    </div>
  );
};

export default SellerPage;
