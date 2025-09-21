import ProductCard from "@/app/shared/ProductCard";

export type AllProductItem = {
  id: number;
  image?: string;
  price: number | string;
  title: string;
  href?: string;
};

const AllProducts = ({ products }: { products: AllProductItem[] }) => {
  return (
    <div>
      <h1 className="text-xl md:text-3xl lg:text-[40px] font-bold mb-5 lg:mb-14">
        All Products
      </h1>

      <div className="grid grid-cols-2 gap-6 items-center xs:grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
        {products.map((product: AllProductItem) => (
          <div className="max-w-[calc(50%-10x)]" key={product.id}>
            <ProductCard
              id={product.id}
              image={product.image}
              price={product.price}
              title={product.title}
              href={product.href}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
