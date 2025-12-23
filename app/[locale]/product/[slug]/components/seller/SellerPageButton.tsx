"use client";

import Button from "@/app/ui/Button";
import Link from "next/link";

interface SellerPageButtonProps {
  shopName: string;
  shopId: number;
}

const SellerPageButton = ({ shopId, shopName }: SellerPageButtonProps) => {
  const slug = encodeURIComponent(`${shopName}-${shopId}`);

  return (
    <div>
      <Link href={`/seller/${slug}`}>
        <Button
          rounded="xl"
          title="View Shop"
          type="button"
          bgcolor="white"
          className="p-2 px-4 font-medium border border-light-gray w-fit"
        />
      </Link>
    </div>
  );
};

export default SellerPageButton;
