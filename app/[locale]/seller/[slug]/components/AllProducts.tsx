"use client";

import ProductCard from "@/app/shared/ProductCard";
import { ProductWithPrimaryVariant } from "@/app/types/product";
import { useState } from "react";
import { ferchSellerProducts } from "../services/seller";
import InfiniteScroll from "react-infinite-scroll-component";
import { ClipLoader } from "react-spinners";

interface AllProductsProps {
  shopId: number;
  initialProducts: ProductWithPrimaryVariant[];
}

const AllProducts = ({ shopId, initialProducts }: AllProductsProps) => {
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [products, setProducts] = useState(initialProducts);

  const fetchMore = async () => {
    if (loading) return; // prevent duplicate calls
    setLoading(true);

    const nextPage = page + 1;
    const res = await ferchSellerProducts(shopId, page);

    if (!res.data.length) {
      setHasMore(false);
    } else {
      setProducts((prev) => [...prev, ...res.data]);
      setPage(nextPage);
    }

    setLoading(false);
  };

  return (
    <div className="grid grid-cols-2 gap-2.5 xs:gap-3 sm:gap-4 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-5 xl:grid-cols-5 xl:gap-6 2xl:grid-cols-6">
      <InfiniteScroll
        dataLength={products.length}
        hasMore={hasMore}
        next={fetchMore}
        loader={loading && <ClipLoader size={25} />}
        scrollThreshold={0.8}
      >
        {products.map((product) => (
          <ProductCard
            id={product.id}
            priamryImage={product.primaryVariant.image}
            price={product.primaryVariant.variant_price}
            title={product.primaryVariant.variant_name}
            key={product.id}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default AllProducts;
