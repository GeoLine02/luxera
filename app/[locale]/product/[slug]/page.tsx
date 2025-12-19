import ProductPreview from "./components/ProductPreview";
import ProductStats from "./components/ProductsStats/ProductStats";
import MobileProductPreview from "./components/MobileProductPreview";
import Seller from "./components/seller/Seller";
import { fetchProductById } from "./services/products";
import { ProductDetailsType } from "@/app/types/product";
import AddReview from "./components/productReviews/addReview/AddReview";
import AllReviews from "./components/productReviews/allReviews/AllReviews";

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
  console.log("product Data: ", productByIdData);
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
      <div className="mt-8 container space-y-4 px-4 md:px-0">
        <AddReview />
        <AllReviews />
      </div>
      <div>{/* <SuggestedProducts suggestedProducts={productsData} /> */}</div>
    </div>
  );
};

export default ProductDetails;
