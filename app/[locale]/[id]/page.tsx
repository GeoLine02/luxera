// import { productsData } from "@/data/products";
import ProductPreview from "./components/ProductPreview";
import ProductStats from "./components/ProductsStats/ProductStats";
import SuggestedProducts from "./components/SuggestedProducts";
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
  // const productData = {
  //   proeductTitle: "Personalised Birthday card",
  //   productPrice: 15,
  //   productVariants: [
  //     {
  //       variant: "Standard (A5)",
  //     },
  //     {
  //       variant: "Large (A4)",
  //     },
  //     {
  //       variant: "Beer & glass Gift Set",
  //     },
  //   ],
  //   images: [
  //     {
  //       source:
  //         "https://www.google.com/url?sa=i&url=https%3A%2F%2Fzu.postermywall.com%2Findex.php%2Fart%2Ftemplate%2F215b737d725b153a0563f9fa6dd174a6%2Fballon-background-happy-birthday-card-design-template&psig=AOvVaw2KnpcbKr7U6q7It5aoYYlp&ust=1751708522932000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPiq__b0oo4DFQAAAAAdAAAAABAE ",
  //       id: 1,
  //     },
  //     {
  //       source:
  //         "https://www.google.com/url?sa=i&url=https%3A%2F%2Fzu.postermywall.com%2Findex.php%2Fart%2Ftemplate%2F215b737d725b153a0563f9fa6dd174a6%2Fballon-background-happy-birthday-card-design-template&psig=AOvVaw2KnpcbKr7U6q7It5aoYYlp&ust=1751708522932000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPiq__b0oo4DFQAAAAAdAAAAABAE ",
  //       id: 2,
  //     },
  //     {
  //       source:
  //         "https://www.google.com/url?sa=i&url=https%3A%2F%2Fzu.postermywall.com%2Findex.php%2Fart%2Ftemplate%2F215b737d725b153a0563f9fa6dd174a6%2Fballon-background-happy-birthday-card-design-template&psig=AOvVaw2KnpcbKr7U6q7It5aoYYlp&ust=1751708522932000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPiq__b0oo4DFQAAAAAdAAAAABAE ",
  //       id: 3,
  //     },
  //     {
  //       source:
  //         "https://www.google.com/url?sa=i&url=https%3A%2F%2Fzu.postermywall.com%2Findex.php%2Fart%2Ftemplate%2F215b737d725b153a0563f9fa6dd174a6%2Fballon-background-happy-birthday-card-design-template&psig=AOvVaw2KnpcbKr7U6q7It5aoYYlp&ust=1751708522932000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPiq__b0oo4DFQAAAAAdAAAAABAE ",
  //       id: 4,
  //     },
  //   ],
  //   productDescription:
  //     "A fun, cheeky birthday card perfect for wine lovers. Comes in multiple sizes and gift options.",
  // };

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
