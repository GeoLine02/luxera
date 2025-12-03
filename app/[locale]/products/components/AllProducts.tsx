import ProductCard from "@/app/shared/ProductCard";
import { ProductType } from "@/app/types/product";

const AllProducts = ({ products }: { products: ProductType[] }) => {
  return (
    <div>
      <h1 className="text-xl md:text-3xl lg:text-[40px] font-bold mb-5 lg:mb-14">
        All Products
      </h1>

      <div className="grid grid-cols-2 gap-6 items-center xs:grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
        {products.map((product: ProductType) => (
          <div className="max-w-[calc(50%-10x)]" key={product.id}>
            <ProductCard
              id={product.id}
              images={
                product.variants[0].images as { id: number; image: string }[]
              }
              price={product.product_price}
              title={product.variants[0].variant_name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
