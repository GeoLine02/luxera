"use client";

import ProductCard from "@/app/shared/ProductCard";
import { ProductWithPrimaryVariant } from "@/app/types/product";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchAllProducts } from "../services/allProducts";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

const AllProducts = ({
  initialProducts,
  initialHasMore,
  subcategoryParam,
  pageParam,
  priceFromParam,
  priceToParam,
  searchParam,
  priceDirectionParam,
}: {
  initialProducts: ProductWithPrimaryVariant[];
  initialHasMore: boolean;
  subcategoryParam: string | undefined;
  pageParam: number;
  priceFromParam: string;
  priceToParam: string;
  searchParam: string;
  priceDirectionParam: string;
}) => {
  const [page, setPage] = useState<number>(pageParam);
  const [products, setProducts] =
    useState<ProductWithPrimaryVariant[]>(initialProducts);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(initialHasMore);
  const fetchMore = async () => {
    if (loading) return; // prevent duplicate calls
    setLoading(true);

    const nextPage = page + 1;
    const res = await fetchAllProducts(
      nextPage,
      subcategoryParam,
      priceFromParam,
      priceToParam,
      searchParam,
      priceDirectionParam
    );

    if (!res.data.length) {
      setHasMore(res.hasMore);
    } else {
      setProducts((prev) => [...prev, ...res.data]);
      setPage(Number(res.page));
    }

    setLoading(false);
  };

  return (
    <div className="w-full">
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[40px] font-bold mb-4 sm:mb-6 md:mb-8 lg:mb-12 xl:mb-14">
        All Products
      </h1>
      <InfiniteScroll
        dataLength={products.length}
        hasMore={hasMore}
        next={fetchMore}
        loader={loading && <ClipLoader size={25} />}
        scrollThreshold={0.8}
      >
        <div className="grid grid-cols-2 gap-2.5 xs:gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              priamryImage={product.primaryVariant.image}
              price={product.primaryVariant.variant_price}
              title={product.primaryVariant.variant_name}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default AllProducts;
