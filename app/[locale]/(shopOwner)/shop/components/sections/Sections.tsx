"use client";

import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";
import MainSection from "./mainSection/MainSection";
import NewProductSection from "./newProductSection/NewProductSection";

const Sections = () => {
  const { activeSection } = useSelector((state: RootState) => state.shopSLice);
  console.log(activeSection);
  return (
    <div className="p-4 bg-ice-blue w-full h-full">
      {activeSection === "main" && <MainSection />}
      {activeSection === "addProduct" && <NewProductSection />}
    </div>
  );
};

export default Sections;
