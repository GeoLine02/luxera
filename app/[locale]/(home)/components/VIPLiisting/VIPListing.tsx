import ProductCard from "@/app/shared/ProductCard";
import ProductImage from "@/public/ProductImage.png";
const VIPListing = () => {
  return (
    <div className="space-y-3">
      <h1 className="text-[40px] font-bold">VIP Listing</h1>
      <div className="flex items-center gap-[52px]">
        <ProductCard
          title="PANDORA Moments Ring"
          id={1}
          image={ProductImage}
          price={120}
        />
        <ProductCard
          title="PANDORA Moments Ring"
          id={1}
          image={ProductImage}
          price={120}
        />
        <ProductCard
          title="PANDORA Moments Ring"
          id={1}
          image={ProductImage}
          price={120}
        />
        <ProductCard
          title="PANDORA Moments Ring"
          id={1}
          image={ProductImage}
          price={120}
        />
      </div>
    </div>
  );
};

export default VIPListing;
