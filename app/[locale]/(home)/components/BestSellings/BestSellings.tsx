import ProductCard from "@/app/shared/ProductCard";
import ProductImage from "@/public/ProductImage.png";
const BestSellings = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-[40px] font-bold">Best Selling Occasions</h1>
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

export default BestSellings;
