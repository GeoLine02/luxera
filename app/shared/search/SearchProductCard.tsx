"use client";

import { ProductWithPrimaryVariant } from "@/app/types/product";
import Image from "next/image";
import Link from "next/link";

interface SearchProductCardProps {
  product: ProductWithPrimaryVariant;
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchProductCard = ({
  product,
  setIsSearchOpen,
}: SearchProductCardProps) => {
  const { id, primaryVariant } = product;
  console.log(product);
  return (
    <Link
      onClick={() => setIsSearchOpen(false)}
      className="flex gap-4 bg-white border border-light-gray rounded-lg p-2 hover:border-black hover-transition"
      href={`/product/${primaryVariant.variant_name}-${id}`}
    >
      <Image
        width={70}
        height={70}
        src={primaryVariant.imageUrl}
        className="max-w-[60px] aspect-square rounded-lg"
        alt={"image of " + primaryVariant.variant_name}
      />
      <div>
        <div>
          <h1 className="text-lg font-medium">{primaryVariant.variant_name}</h1>

          <h2 className=" font-medium">{primaryVariant.variant_price} GEL</h2>
        </div>
      </div>
    </Link>
  );
};

export default SearchProductCard;
