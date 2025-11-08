"use client";

import Button from "@/app/ui/Button";
import Link from "next/link";

const SellerPageButton = () => {
  return (
    <div>
      <Link href={`seller/`}>
        <Button
          rounded="xl"
          title="View Shop"
          type="button"
          bgColor="white"
          className="p-2 px-4 font-medium border border-light-gray w-fit"
        />
      </Link>
    </div>
  );
};

export default SellerPageButton;
