import ProductInfoPanel from "./components/productInfoPanel/ProductInfoPanel";
import ProductImage1 from "../../../public/InnerProductImage.png";
import ProductPreviewWrapper from "./components/productPreview/ProductPreviewWrapper";
import ProductTabs from "./components/productTabs/ProductTabs";
import SuggestedProducts from "./components/suggestedProducts/SuggestedProducts";

interface ProductDetailsProps {
  params: string;
}

const ProductDetails = ({ params }: ProductDetailsProps) => {
  // TODO:  fetch product data here.

  const data = {
    id: 1,
    productName: "mock name",
    productPrice: 120,
    images: [ProductImage1, ProductImage1],
  };

  return (
    <div className="container mx-auto px-11">
      <section className="flex justify-between">
        <ProductPreviewWrapper productImages={data.images} />
        <ProductInfoPanel
          productName={data.productName}
          productPrice={data.productPrice}
        />
      </section>
      <section>
        <ProductTabs />
      </section>
      <section className="mt-[171px]">
        <SuggestedProducts />
      </section>
    </div>
  );
};

export default ProductDetails;
