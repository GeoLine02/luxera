"use client";

import Button from "@/app/ui/Button";
import { useRouter } from "next/navigation";

const SellYourProductsButton = () => {
  const router = useRouter();

  return (
    <Button
      type="button"
      onClick={() => router.push("/")}
      rounded="full"
      title="Get Started"
      bgColor="transparent"
      titleColor="mediumBrown"
      className="py-2 px-6 flex items-center justify-center !w-fit border-2 border-medium-brown"
    />
  );
};

export default SellYourProductsButton;
