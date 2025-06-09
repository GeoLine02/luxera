"use client";

import { ProductTabsType } from "@/app/types/product";
import { useState } from "react";
import ProductReviewTab from "./productReview/ProductReviewTab";
import ProductTabsHeader from "./ProductTabsHeader";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState<ProductTabsType>("description");

  return (
    <div className="mt-[49px]">
      <ProductTabsHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <ProductReviewTab />
    </div>
  );
};

export default ProductTabs;
