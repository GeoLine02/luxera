"use client";

import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";
import MainSection from "./mainSection/MainSection";
import NewProductSection from "./newProductSection/NewProductSection";
import MyProductsSection from "./myProductsSection/MyProductsSection";
import FinancesSection from "./financesSection/FinancesSection";

const Sections = () => {
  const { activeSection } = useSelector((state: RootState) => state.shopSLice);
  console.log(activeSection);
  return (
    <div className="p-4 bg-ice-blue w-full h-[calc(100vh-80px)] md:h-screen">
      {activeSection === "main" && <MainSection />}
      {activeSection === "addProduct" && <NewProductSection />}
      {activeSection === "myProducts" && <MyProductsSection />}
      {activeSection === "finances" && <FinancesSection />}
    </div>
  );
};

export default Sections;
