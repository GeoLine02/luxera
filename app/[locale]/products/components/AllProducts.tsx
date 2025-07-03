import ProductCard from "@/app/shared/ProductCard";
import { ProductType } from "@/app/types/product";
import Button from "@/app/ui/Button";
import { productsData } from "@/data/products";

const AllProducts = () => {
  return (
    <div>
      <h1 className="text-xl md:text-3xl lg:text-[40px] font-bold mb-5 lg:mb-14">
        All Products
      </h1>

      <div className="grid gap-2 md:gap-6 grid-cols-[repeat(auto-fit,minmax(120px,120px))] xs:grid-cols-[repeat(auto-fit,minmax(220px,220px))] justify-center items-center">
        {productsData.map((product: ProductType) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            price={product.price}
            title={product.title}
          />
        ))}
      </div>

      <div className="flex justify-center mt-20 mb-12">
        <Button
          rounded="full"
          title="Load more 100+"
          type="button"
          bgColor="transparent"
          className="py-2 px-8 border border-black max-w-[322px] hover-transition hover:bg-black hover:text-white"
          titleColor="black"
        />
      </div>
    </div>
  );
};

export default AllProducts;
