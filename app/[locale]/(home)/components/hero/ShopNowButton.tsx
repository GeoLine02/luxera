"use client";

import Button from "@/app/ui/Button";
import { useRouter } from "next/navigation";

type ShopNowButtonProps = {
  href?: string;
};

const ShopNowButton = ({ href }: ShopNowButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (!href) return;
    try {
      if (/^https?:\/\//i.test(href)) {
        // External or absolute URL
        window.location.href = href;
      } else {
        // Internal route
        router.push(href);
      }
    } catch (e) {
      console.error("Failed to navigate to", href, e);
    }
  };

  return (
    <Button
      className="py-3 !w-fit px-12"
      bgColor="dirtyPink"
      rounded="full"
      title="Shop now"
      titleColor="white"
      type="button"
      onClick={handleClick}
    />
  );
};

export default ShopNowButton;
