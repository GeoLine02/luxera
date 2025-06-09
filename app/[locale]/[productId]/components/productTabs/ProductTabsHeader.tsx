"use client";

import { ProductTabsType } from "@/app/types/product";
import { useState } from "react";

const tabsData = [
  {
    key: "description",
    title: "description",
  },
  {
    key: "reviews",
    title: "reviews",
  },
  {
    key: "hotDeal",
    title: "hot deal",
  },
];

interface ProductTabsHeaderProps {
  activeTab: ProductTabsType;
  setActiveTab: React.Dispatch<React.SetStateAction<ProductTabsType>>;
}

const ProductTabsHeader = ({
  activeTab,
  setActiveTab,
}: ProductTabsHeaderProps) => {
  const [tabs] = useState(tabsData);

  const handleSetActiveTab = (tab: ProductTabsType) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex items-center gap-14">
      {tabs.map((tab) => (
        <div
          onClick={() => handleSetActiveTab(tab.key as ProductTabsType)}
          className="flex flex-col items-center cursor-pointer"
          key={tab.key}
        >
          <h1 className="font-semibold">{tab.title}</h1>
          {activeTab === tab.key && (
            <div className="h-[2px] w-[66px] bg-medium-gray"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductTabsHeader;
