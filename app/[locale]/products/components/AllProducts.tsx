import ProductCard from "@/app/shared/ProductCard";
import { ProductType } from "@/app/types/product";
import Button from "@/app/ui/Button";
import { productsData } from "@/data/products";

const AllProducts = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <h1 className="text-3xl lg:text-[40px] font-bold mt-16 mb-8 lg:mb-14">
        All Products
      </h1>

      <div className="grid gap-4 lg:gap-10 grid-cols-[repeat(2,minmax(152px,152px))] md:grid-cols-[repeat(auto-fit,minmax(260px,260px))] lg:grid-cols-[repeat(auto-fit,minmax(310px,310px))] md:justify-center">
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
