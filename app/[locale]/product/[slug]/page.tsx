import ProductPreview from "./components/ProductPreview";
import ProductStats from "./components/ProductsStats/ProductStats";
import MobileProductPreview from "./components/MobileProductPreview";
import Seller from "./components/seller/Seller";
import { fetchProductById } from "./services/products";
import { ProductDetailsType } from "@/app/types/product";

interface ProductDetailsProps {
  params: Promise<{
    slug: string;
  }>;
}

const ProductDetails = async ({ params }: ProductDetailsProps) => {
  const { slug } = await params;

  const productId = slug.split("-")[1];

  const id = Number(productId);

  const productByIdData: ProductDetailsType = await fetchProductById(id);
  return (
    <div className="mt-6">
      <div className="flex flex-col md:flex-row justify-between container">
        <ProductPreview productVariants={productByIdData.variants} />
        <MobileProductPreview productVariants={productByIdData.variants} />
        <ProductStats
          productId={id}
          productDescription={productByIdData.product_description}
          productVariants={productByIdData.variants}
        />
      </div>
      <div className="px-4 md:px-0 container">
        <Seller shop={productByIdData.shop} />
      </div>
      <div>{/* <SuggestedProducts suggestedProducts={productsData} /> */}</div>
    </div>
  );
};

export default ProductDetails;
