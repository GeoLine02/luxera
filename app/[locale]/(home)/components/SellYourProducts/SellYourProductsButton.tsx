"use client";

import Button from "@/app/ui/Button";
import { useRouter } from "next/navigation";

type SellYourProductsButtonProps = {
  href?: string;
};

const SellYourProductsButton = ({ href }: SellYourProductsButtonProps) => {
  const router = useRouter();

  return (
    <Button
      type="button"
      onClick={() => {
        if (!href) return;
        if (/^https?:\/\//i.test(href)) {
          window.location.href = href;
        } else {
          router.push(href);
        }
      }}
      rounded="full"
      title="Get Started"
      bgColor="transparent"
      titleColor="mediumBrown"
      className="py-2 px-6 flex items-center justify-center !w-fit border-2 border-medium-brown"
    />
  );
};

export default SellYourProductsButton;
