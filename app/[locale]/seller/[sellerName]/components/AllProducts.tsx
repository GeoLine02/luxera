import ProductCard from "@/app/shared/ProductCard";
import ProductImage from "@/public/ProductImage.png";
const AllProducts = () => {
  return (
    <div className="grid grid-cols-2 gap-6 items-center xs:grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
      <ProductCard
        id={1}
        price={120}
        title="Product title"
        image={ProductImage}
      />
      <ProductCard
        id={1}
        price={120}
        title="Product title"
        image={ProductImage}
      />
      <ProductCard
        id={1}
        price={120}
        title="Product title"
        image={ProductImage}
      />
      <ProductCard
        id={1}
        price={120}
        title="Product title"
        image={ProductImage}
      />
      <ProductCard
        id={1}
        price={120}
        title="Product title"
        image={ProductImage}
      />
      <ProductCard
        id={1}
        price={120}
        title="Product title"
        image={ProductImage}
      />
    </div>
  );
};

export default AllProducts;
