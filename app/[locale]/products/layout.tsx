import ProductFilterDesktop from "./components/productFilter/ProductFilterDesktop";

interface ProductsPageLayoutProps {
  children: React.ReactNode;
}

const ProductsPageLayout = async ({ children }: ProductsPageLayoutProps) => {
  return (
    <div className="md:flex md:px-11">
      <aside className="border-2 border-light-gray rounded-xl mt-5 py-4 hidden md:block max-w-[300px]">
        <ProductFilterDesktop />
      </aside>
      <main className="w-full">{children}</main>
    </div>
  );
};

export default ProductsPageLayout;
