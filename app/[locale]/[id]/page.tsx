// import { productsData } from "@/data/products";
import ProductPreview from "./components/ProductPreview";
import ProductStats from "./components/ProductsStats/ProductStats";
// import SuggestedProducts from "./components/SuggestedProducts";
import MobileProductPreview from "./components/MobileProductPreview";
import Seller from "./components/seller/Seller";
import { fetchProductById } from "./services/products";
import { ProductDetailsType } from "@/app/types/product";
import AddReview from "./components/productReviews/addReview/AddReview";
import AllReviews from "./components/productReviews/allReviews/AllReviews";

interface ProductDetailsProps {
  params: Promise<{ id: string }>;
}

const ProductDetails = async ({ params }: ProductDetailsProps) => {
  // TODO: Fetch productById data here

  const { id } = await params;
  const productId = Number(id);

  const productByIdData: ProductDetailsType = await fetchProductById(productId);

  console.log("productByIdData", productByIdData);

  return (
    <div className="mt-6">
      <div className="flex flex-col md:flex-row lg:justify-evenly">
        <ProductPreview productImages={productByIdData.images} />
        <MobileProductPreview productImages={productByIdData.images} />
        <ProductStats
          description={"productByIdData"}
          productPrice={productByIdData.product_price}
          productTitle={productByIdData.product_name}
          productVariants={productByIdData.variants}
        />
      </div>
      <div className="px-4 md:px-0 container">
        <Seller
          seller={productByIdData.owner}
          shopId={productByIdData.shop_id}
        />
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
